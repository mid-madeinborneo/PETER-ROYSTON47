import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  Tag, 
  ShieldCheck, 
  Clock, 
  Check, 
  Copy, 
  ArrowRightLeft, 
  Sparkles,
  Info,
  Layers,
  Code
} from 'lucide-react';
import { NFTCollectible, UserWallet } from '../types/nft';
import { generateOpenSeaMetadata, downloadTextAsFile } from '../utils/openseaExporter';
import { NFTArtwork } from './NFTArtwork';

interface NFTDetailModalProps {
  nft: NFTCollectible | null;
  wallet: UserWallet;
  onClose: () => void;
  onBuyNow: (nft: NFTCollectible) => void;
  onOpenTradeAction: (nft: NFTCollectible, action: 'bid' | 'list' | 'transfer') => void;
}

export const NFTDetailModal: React.FC<NFTDetailModalProps> = ({
  nft,
  wallet,
  onClose,
  onBuyNow,
  onOpenTradeAction
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'traits' | 'provenance' | 'raw-json'>('details');
  const [copiedTx, setCopiedTx] = useState<string | null>(null);

  if (!nft) return null;

  const isUserOwner = nft.ownerAddress.toLowerCase() === wallet.address.toLowerCase() || wallet.ownedTokenIds.includes(nft.id);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTx(id);
    setTimeout(() => setCopiedTx(null), 2000);
  };

  const handleDownloadJSON = () => {
    const meta = generateOpenSeaMetadata(nft);
    downloadTextAsFile(JSON.stringify(meta, null, 2), `${nft.tokenId}.json`, 'application/json');
  };

  const handleDownloadSVG = () => {
    // Generate and download standalone SVG file
    const svgEl = document.getElementById(`nft-art-modal-${nft.id}`);
    if (svgEl) {
      const svgData = new XMLSerializer().serializeToString(svgEl);
      downloadTextAsFile(svgData, `Pua_Kumbu_${nft.tokenId}.svg`, 'image/svg+xml');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#10131e] border border-[#2b334b] rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1b2030] text-slate-300 hover:text-white hover:bg-[#252c42] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1e2538]">
          
          {/* Left Column: Visual Artwork Display */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col items-center justify-between bg-gradient-to-b from-[#141826] to-[#0c0e17]">
            <div className="w-full max-w-xs mx-auto" id={`nft-art-modal-${nft.id}`}>
              <NFTArtwork
                nft={nft}
                showCardFrame={true}
                size="lg"
              />
            </div>

            {/* Download Asset Utilities for this Token */}
            <div className="w-full pt-6 space-y-2">
              <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider text-center">
                Download OpenSea Ready Assets
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleDownloadJSON}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#2d364f] bg-[#161a29] hover:border-[#d4af37] text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Metadata ({nft.tokenId}.json)</span>
                </button>
                <button
                  onClick={handleDownloadSVG}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#2d364f] bg-[#161a29] hover:border-[#d4af37] text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Vector ({nft.tokenId}.svg)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Traits, Provenance & Blockchain Actions */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    #{nft.tokenId}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {nft.editionTier}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>RARITY RANK #{nft.rarityRank} OF 50</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {nft.name.replace(/^Pua Kumbu #\d+:\s*/, '')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light mt-0.5">
                {nft.subtitle}
              </p>
            </div>

            {/* Price & Smart Contract Peer-to-Peer Trading Controls */}
            <div className="p-4 rounded-xl bg-[#141826] border border-[#273046] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                  Current Smart Contract Price
                </div>
                <div className="text-2xl font-serif font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <span className="text-[#d4af37]">Ξ</span> {nft.priceEth} ETH
                  <span className="text-xs font-sans text-slate-400 font-normal">
                    (~${(nft.priceEth * 3480).toLocaleString()} USD)
                  </span>
                </div>
                {nft.highestBidEth && (
                  <div className="text-[11px] text-[#d4af37] mt-0.5">
                    Highest Bid: {nft.highestBidEth} ETH by {nft.highestBidder?.slice(0, 6)}...
                  </div>
                )}
              </div>

              {/* Trade Buttons */}
              <div className="flex items-center gap-2">
                {isUserOwner ? (
                  <>
                    <button
                      onClick={() => onOpenTradeAction(nft, 'list')}
                      className="px-4 py-2.5 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer"
                    >
                      {nft.isListed ? 'Edit Listing Price' : 'List For Sale'}
                    </button>
                    <button
                      onClick={() => onOpenTradeAction(nft, 'transfer')}
                      className="px-3.5 py-2.5 rounded-lg border border-[#37415d] bg-[#1a2034] text-slate-200 text-xs font-semibold hover:border-white transition-all cursor-pointer flex items-center gap-1"
                    >
                      <ArrowRightLeft className="w-3.5 h-3.5" />
                      Transfer
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => onBuyNow(nft)}
                      disabled={!nft.isListed}
                      className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-[#d4af37]/25 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => onOpenTradeAction(nft, 'bid')}
                      className="px-4 py-2.5 rounded-lg border border-[#37415d] bg-[#1a2034] text-slate-200 text-xs font-semibold hover:border-[#d4af37] transition-all cursor-pointer"
                    >
                      Make Offer / Bid
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Ownership & Contract Identity */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0e111a] border border-[#1f2638]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Current Owner</div>
                <div className="font-mono text-slate-200 truncate mt-0.5" title={nft.ownerAddress}>
                  {nft.ownerAddress}
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e111a] border border-[#1f2638]">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Creator Royalties</div>
                <div className="font-mono text-[#d4af37] mt-0.5">
                  7.5% EIP-2981 Standard
                </div>
              </div>
            </div>

            {/* Tabs for Details, Traits, Provenance, Raw Metadata */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1f2638] pb-2 text-xs">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-1.5 font-semibold transition-colors cursor-pointer ${
                    activeTab === 'details' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Cultural Lore & Meaning
                </button>
                <button
                  onClick={() => setActiveTab('traits')}
                  className={`pb-1.5 font-semibold transition-colors cursor-pointer ${
                    activeTab === 'traits' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  OpenSea Traits ({nft.attributes.length})
                </button>
                <button
                  onClick={() => setActiveTab('provenance')}
                  className={`pb-1.5 font-semibold transition-colors cursor-pointer ${
                    activeTab === 'provenance' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  On-Chain Provenance ({nft.history.length})
                </button>
                <button
                  onClick={() => setActiveTab('raw-json')}
                  className={`pb-1.5 font-semibold transition-colors cursor-pointer ${
                    activeTab === 'raw-json' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Raw Metadata (JSON)
                </button>
              </div>

              {/* Tab: Cultural Lore */}
              {activeTab === 'details' && (
                <div className="space-y-3 text-xs leading-relaxed text-slate-300 max-h-56 overflow-y-auto pr-2">
                  <div>
                    <h4 className="font-serif font-bold text-white mb-1">
                      Traditional Iban Significance
                    </h4>
                    <p className="text-slate-300 font-light leading-relaxed">
                      {nft.culturalMeaning}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white mb-1">
                      Master Weaver Narrative
                    </h4>
                    <p className="text-slate-300 font-light leading-relaxed">
                      {nft.story}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0d101a] border border-[#20273c]">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                      Spiritual Blessing Inscribed:
                    </div>
                    <div className="text-xs text-[#d4af37] font-semibold mt-0.5">
                      {nft.spiritualBlessing}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: OpenSea Traits Matrix */}
              {activeTab === 'traits' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                  {nft.attributes.map((attr, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#141826] border border-[#273046] flex flex-col justify-between"
                    >
                      <div className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider truncate">
                        {attr.trait_type}
                      </div>
                      <div className="font-serif font-bold text-xs text-white truncate mt-1">
                        {attr.value}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        OpenSea Attribute
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: On-Chain Provenance Log */}
              {activeTab === 'provenance' && (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {nft.history.map(ev => (
                    <div
                      key={ev.id}
                      className="p-2.5 rounded-lg bg-[#121624] border border-[#21283c] flex items-center justify-between text-xs"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white uppercase text-[11px]">{ev.event}</span>
                          {ev.priceEth && (
                            <span className="font-mono text-[#d4af37]">{ev.priceEth} ETH</span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono truncate max-w-xs">
                          From: {ev.from.slice(0, 8)}... {ev.to ? `To: ${ev.to.slice(0, 8)}...` : ''}
                        </div>
                      </div>

                      <div className="text-right">
                        <button
                          onClick={() => handleCopy(ev.txHash, ev.id)}
                          className="font-mono text-[10px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          {copiedTx === ev.id ? (
                            <span className="text-emerald-400">Copied Tx!</span>
                          ) : (
                            <>
                              <span>{ev.txHash.slice(0, 8)}...</span>
                              <Copy className="w-3 h-3" />
                            </>
                          )}
                        </button>
                        <div className="text-[10px] text-slate-500">
                          {new Date(ev.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Raw JSON Metadata */}
              {activeTab === 'raw-json' && (
                <div className="relative rounded-lg bg-[#090b12] border border-[#1d2334] p-3 max-h-56 overflow-y-auto font-mono text-[11px] text-emerald-300">
                  <button
                    onClick={() => handleCopy(JSON.stringify(generateOpenSeaMetadata(nft), null, 2), 'raw-json')}
                    className="absolute top-2 right-2 px-2 py-1 rounded bg-[#1e2436] text-[10px] text-slate-300 hover:text-white cursor-pointer"
                  >
                    {copiedTx === 'raw-json' ? 'Copied!' : 'Copy JSON'}
                  </button>
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(generateOpenSeaMetadata(nft), null, 2)}
                  </pre>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
