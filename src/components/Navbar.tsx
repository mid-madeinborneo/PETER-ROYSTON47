import React, { useState } from 'react';
import { 
  Download, 
  Layers, 
  Coins, 
  FileSpreadsheet, 
  Code, 
  Wallet, 
  ChevronDown, 
  Check, 
  Plus, 
  Globe 
} from 'lucide-react';
import { UserWallet } from '../types/nft';
import { SmartContractSimulator } from '../utils/smartContractSimulator';

interface NavbarProps {
  activeTab: 'marketplace' | 'rarity' | 'backgrounds' | 'contract' | 'export';
  setActiveTab: (tab: 'marketplace' | 'rarity' | 'backgrounds' | 'contract' | 'export') => void;
  wallet: UserWallet;
  onOpenExportModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  wallet,
  onOpenExportModal
}) => {
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
  const simulator = SmartContractSimulator.getInstance();

  const networks = ['Ethereum', 'Polygon', 'Arbitrum'] as const;

  const demoWallets = [
    { address: '0x3E8f29dD174e92a8BC48B25779E18a93B12aC940', label: 'Primary Collector (dayak-collector.eth)' },
    { address: '0x88418F13bB4E7d0c3C0aC2F6E726E80Da42a9841', label: 'Sarawak Weavers Guild (Contract Owner)' },
    { address: '0x71C8F22A123f990146059288EaE2F3777A344e8B', label: 'Borneo Heritage Museum Vault' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#222634]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand & Cultural Crest */}
          <div 
            onClick={() => setActiveTab('marketplace')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#a8201a] to-[#0b0c10] p-[1.5px] shadow-lg shadow-[#d4af37]/15">
              <div className="w-full h-full bg-[#0d0f17] rounded-lg flex items-center justify-center">
                <span className="text-[#d4af37] font-serif font-black text-xl tracking-tighter">PK</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
                  SARAWAK NFT
                </span>
                <span className="text-[10px] tracking-widest text-[#d4af37] uppercase font-mono px-1.5 py-0.5 rounded border border-[#d4af37]/30 bg-[#d4af37]/5">
                  ERC-721
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide font-medium">
                Pua Kumbu Heritage Collection · 50 Editions
              </p>
            </div>
          </div>

          {/* Navigation Links (Strict Zero-Pill Typography) */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`text-sm font-medium tracking-wide transition-colors py-2 relative ${
                activeTab === 'marketplace' ? 'text-[#d4af37]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Marketplace
              {activeTab === 'marketplace' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('rarity')}
              className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors py-2 relative ${
                activeTab === 'rarity' ? 'text-[#d4af37]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              Rarity Spreadsheet
              {activeTab === 'rarity' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('backgrounds')}
              className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors py-2 relative ${
                activeTab === 'backgrounds' ? 'text-[#d4af37]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              20 Background Layers
              {activeTab === 'backgrounds' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('contract')}
              className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors py-2 relative ${
                activeTab === 'contract' ? 'text-[#d4af37]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              Smart Contract
              {activeTab === 'contract' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />
              )}
            </button>
          </nav>

          {/* Right Action Island: Network, Wallet & OpenSea Export */}
          <div className="flex items-center gap-3">
            
            {/* OpenSea Export CTA */}
            <button
              onClick={onOpenExportModal}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black hover:opacity-95 shadow-md shadow-[#d4af37]/20 transition-all cursor-pointer"
              title="Download full metadata package, CSV spreadsheet & smart contract for OpenSea"
            >
              <Download className="w-4 h-4" />
              <span className="hidden lg:inline">Download OpenSea Asset File</span>
              <span className="lg:hidden">Export</span>
            </button>

            {/* Network Selector */}
            <div className="relative">
              <button
                onClick={() => setShowNetworkDropdown(!showNetworkDropdown)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-lg border border-[#2b3144] bg-[#141724] text-slate-200 hover:border-[#d4af37]/40 transition-colors cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline font-mono">{wallet.network}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showNetworkDropdown && (
                <div className="absolute right-0 mt-2 w-36 bg-[#161a29] border border-[#2e354d] rounded-lg shadow-2xl py-1 z-50">
                  {networks.map(net => (
                    <button
                      key={net}
                      onClick={() => {
                        simulator.setNetwork(net);
                        setShowNetworkDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs flex items-center justify-between text-slate-300 hover:bg-[#20273c] hover:text-[#d4af37]"
                    >
                      <span>{net}</span>
                      {wallet.network === net && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Wallet Pill & Simulated Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#373f56] bg-[#141724] hover:border-[#d4af37] transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#92231b] to-[#d4af37] flex items-center justify-center text-[10px] font-bold text-white">
                  Ξ
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-[11px] font-mono font-medium text-slate-200">
                    {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                  </div>
                  <div className="text-[10px] text-[#d4af37] font-semibold">
                    {wallet.balanceEth} ETH
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showWalletDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-[#161a29] border border-[#2e354d] rounded-xl shadow-2xl p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-[#2e354d]">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Connected Web3 Wallet
                    </span>
                    <button
                      onClick={() => simulator.addFunds(2.0)}
                      className="flex items-center gap-1 text-[11px] text-[#d4af37] hover:underline"
                      title="Add 2.0 testnet ETH for simulated buying"
                    >
                      <Plus className="w-3 h-3" /> Faucet (+2 ETH)
                    </button>
                  </div>

                  <div className="py-3">
                    <div className="text-xs text-slate-400">Current Balance</div>
                    <div className="text-2xl font-bold font-serif text-white flex items-center gap-1.5 mt-0.5">
                      <span className="text-[#d4af37]">Ξ</span> {wallet.balanceEth} ETH
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 break-all mt-1 bg-[#0d0f17] p-2 rounded border border-[#22283a]">
                      {wallet.address}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#2e354d]">
                    <div className="text-[11px] font-medium text-slate-400 mb-2">
                      Switch Simulated Persona:
                    </div>
                    <div className="space-y-1.5">
                      {demoWallets.map(w => (
                        <button
                          key={w.address}
                          onClick={() => {
                            simulator.switchWalletAddress(w.address);
                            setShowWalletDropdown(false);
                          }}
                          className={`w-full text-left p-2 rounded-lg text-xs transition-colors flex items-center justify-between ${
                            wallet.address.toLowerCase() === w.address.toLowerCase()
                              ? 'bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30'
                              : 'bg-[#1e2336] text-slate-300 hover:bg-[#252c44]'
                          }`}
                        >
                          <div className="truncate pr-2">
                            <div className="font-medium truncate">{w.label}</div>
                            <div className="text-[10px] font-mono opacity-60">
                              {w.address.slice(0, 10)}...{w.address.slice(-6)}
                            </div>
                          </div>
                          {wallet.address.toLowerCase() === w.address.toLowerCase() && (
                            <Check className="w-4 h-4 shrink-0 text-[#d4af37]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
