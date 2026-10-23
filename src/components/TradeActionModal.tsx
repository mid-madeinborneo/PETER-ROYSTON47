import React, { useState } from 'react';
import { 
  X, 
  ArrowRightLeft, 
  Tag, 
  Coins, 
  ShieldCheck, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { NFTCollectible, UserWallet } from '../types/nft';
import { SmartContractSimulator } from '../utils/smartContractSimulator';

interface TradeActionModalProps {
  nft: NFTCollectible | null;
  action: 'bid' | 'list' | 'transfer' | 'buy';
  wallet: UserWallet;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const TradeActionModal: React.FC<TradeActionModalProps> = ({
  nft,
  action,
  wallet,
  isOpen,
  onClose,
  onSuccess
}) => {
  const [amount, setAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen || !nft) return null;

  const simulator = SmartContractSimulator.getInstance();

  const handleExecute = async () => {
    setErrorMsg(null);
    setIsProcessing(true);

    // Simulate blockchain confirmation delay
    await new Promise(r => setTimeout(r, 900));

    try {
      if (action === 'buy') {
        const res = simulator.buyNow(nft.id);
        if (res.success) {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
          onSuccess(res.message);
          onClose();
        } else {
          setErrorMsg(res.message);
        }
      } else if (action === 'bid') {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) {
          setErrorMsg('Please enter a valid ETH bid amount');
          setIsProcessing(false);
          return;
        }
        const res = simulator.placeBid(nft.id, num);
        if (res.success) {
          onSuccess(res.message);
          onClose();
        } else {
          setErrorMsg(res.message);
        }
      } else if (action === 'list') {
        const num = parseFloat(amount);
        if (isNaN(num) || num <= 0) {
          setErrorMsg('Please enter a valid listing price in ETH');
          setIsProcessing(false);
          return;
        }
        const res = simulator.listForSale(nft.id, num);
        if (res.success) {
          onSuccess(res.message);
          onClose();
        } else {
          setErrorMsg(res.message);
        }
      } else if (action === 'transfer') {
        if (!recipient.trim()) {
          setErrorMsg('Please specify an Ethereum recipient address (0x...)');
          setIsProcessing(false);
          return;
        }
        const res = simulator.transferNFT(nft.id, recipient.trim());
        if (res.success) {
          onSuccess(res.message);
          onClose();
        } else {
          setErrorMsg(res.message);
        }
      }
    } catch (e: any) {
      setErrorMsg(e.message || 'Smart contract execution failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-md bg-[#121623] border border-[#2e374f] rounded-2xl shadow-2xl p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1b2030] text-slate-300 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div>
          <div className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider">
            Smart Contract Interaction · ERC-721
          </div>
          <h3 className="font-serif font-bold text-xl text-white mt-0.5">
            {action === 'buy' && `Instant Buy ${nft.name.replace(/^Pua Kumbu #\d+:\s*/, '')}`}
            {action === 'bid' && `Place Bid on Token #${nft.tokenId}`}
            {action === 'list' && `List Token #${nft.tokenId} for Sale`}
            {action === 'transfer' && `Transfer Token #${nft.tokenId}`}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Motif: {nft.motifArchetype} · Rank #{nft.rarityRank}
          </p>
        </div>

        {/* Input Fields according to action */}
        <div className="space-y-4">
          
          {action === 'buy' && (
            <div className="p-4 rounded-xl bg-[#0d101a] border border-[#21283c] space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Contract Price:</span>
                <span className="font-mono text-base font-bold text-white">{nft.priceEth} ETH</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Simulated Gas Fee:</span>
                <span className="font-mono text-xs text-emerald-400">~0.0018 ETH</span>
              </div>
              <div className="pt-2 border-t border-[#1d2334] flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Your Wallet Balance:</span>
                <span className={`font-mono font-bold ${wallet.balanceEth >= nft.priceEth ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {wallet.balanceEth} ETH
                </span>
              </div>
            </div>
          )}

          {(action === 'bid' || action === 'list') && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                {action === 'bid' ? 'Your Bid Amount (ETH)' : 'Listing Price (ETH)'}
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.05"
                  min="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder={action === 'bid' ? (nft.highestBidEth ? (nft.highestBidEth + 0.1).toFixed(2) : nft.priceEth.toString()) : nft.priceEth.toString()}
                  className="w-full bg-[#0d101a] border border-[#2b334a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] font-mono"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#d4af37]">
                  ETH
                </span>
              </div>
              {action === 'bid' && nft.highestBidEth && (
                <p className="text-[11px] text-slate-400 mt-1">
                  Current highest bid: {nft.highestBidEth} ETH
                </p>
              )}
            </div>
          )}

          {action === 'transfer' && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Recipient Ethereum Wallet Address
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="0x..."
                className="w-full bg-[#0d101a] border border-[#2b334a] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] font-mono"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Ownership will immediately be re-assigned on the simulated blockchain ledger.
              </p>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={handleExecute}
            disabled={isProcessing}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Broadcasting to Smart Contract...</span>
              </>
            ) : (
              <span>Confirm & Execute Transaction</span>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
