import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { Marketplace } from './components/Marketplace';
import { RaritySpreadsheet } from './components/RaritySpreadsheet';
import { BackgroundLayersShowcase } from './components/BackgroundLayersShowcase';
import { SmartContractViewer } from './components/SmartContractViewer';
import { NFTDetailModal } from './components/NFTDetailModal';
import { TradeActionModal } from './components/TradeActionModal';
import { ExportModal } from './components/ExportModal';
import { DEFAULT_COLLECTION_STATS } from './data/puaKumbuData';
import { NFTCollectible, UserWallet } from './types/nft';
import { SmartContractSimulator } from './utils/smartContractSimulator';
import { CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const simulator = SmartContractSimulator.getInstance();
  const [items, setItems] = useState<NFTCollectible[]>(simulator.getItems());
  const [wallet, setWallet] = useState<UserWallet>(simulator.getWallet());
  
  const [activeTab, setActiveTab] = useState<'marketplace' | 'rarity' | 'backgrounds' | 'contract' | 'export'>('marketplace');
  const [selectedNFT, setSelectedNFT] = useState<NFTCollectible | null>(null);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  
  // Trade Modal State
  const [tradeModalOpen, setTradeModalOpen] = useState(false);
  const [tradeAction, setTradeAction] = useState<'buy' | 'bid' | 'list' | 'transfer'>('buy');
  const [tradeTargetNFT, setTradeTargetNFT] = useState<NFTCollectible | null>(null);

  // Notification Toast
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = simulator.subscribe(() => {
      const updatedItems = [...simulator.getItems()];
      setItems(updatedItems);
      setWallet({ ...simulator.getWallet() });
      if (selectedNFT) {
        const refreshed = updatedItems.find(i => i.id === selectedNFT.id);
        if (refreshed) setSelectedNFT(refreshed);
      }
    });
    return unsubscribe;
  }, [selectedNFT]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4500);
  };

  const handleQuickBuy = (item: NFTCollectible) => {
    setTradeTargetNFT(item);
    setTradeAction('buy');
    setTradeModalOpen(true);
  };

  const handleOpenTradeAction = (item: NFTCollectible, action: 'bid' | 'list' | 'transfer') => {
    setTradeTargetNFT(item);
    setTradeAction(action);
    setTradeModalOpen(true);
  };

  const handleFilterByBackground = (bgId: number) => {
    setActiveTab('marketplace');
    // Scroll smoothly to marketplace
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e2ec] flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#141b2d] border border-[#d4af37] text-white shadow-2xl text-xs font-medium animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        wallet={wallet}
        onOpenExportModal={() => setExportModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'marketplace' && (
          <>
            <HeroBanner
              stats={DEFAULT_COLLECTION_STATS}
              onOpenExportModal={() => setExportModalOpen(true)}
              onOpenRarityTab={() => setActiveTab('rarity')}
              onExploreClick={() => {
                window.scrollTo({ top: 600, behavior: 'smooth' });
              }}
            />
            <Marketplace
              items={items}
              wallet={wallet}
              onSelectItem={(item) => setSelectedNFT(item)}
              onQuickBuy={handleQuickBuy}
            />
          </>
        )}

        {activeTab === 'rarity' && (
          <RaritySpreadsheet
            items={items}
            onSelectItem={(item) => setSelectedNFT(item)}
          />
        )}

        {activeTab === 'backgrounds' && (
          <BackgroundLayersShowcase
            items={items}
            onSelectNFT={(item) => setSelectedNFT(item)}
            onFilterByBackground={handleFilterByBackground}
          />
        )}

        {activeTab === 'contract' && (
          <SmartContractViewer />
        )}
      </main>

      {/* Modals */}
      <NFTDetailModal
        nft={selectedNFT}
        wallet={wallet}
        onClose={() => setSelectedNFT(null)}
        onBuyNow={handleQuickBuy}
        onOpenTradeAction={handleOpenTradeAction}
      />

      <TradeActionModal
        nft={tradeTargetNFT}
        action={tradeAction}
        wallet={wallet}
        isOpen={tradeModalOpen}
        onClose={() => {
          setTradeModalOpen(false);
          setTradeTargetNFT(null);
        }}
        onSuccess={showNotification}
      />

      <ExportModal
        items={items}
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-[#1e2336] bg-[#090a0f] py-10 mt-16 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#a8201a] p-[1px]">
                <div className="w-full h-full bg-[#0d0f17] rounded-lg flex items-center justify-center">
                  <span className="text-[#d4af37] font-serif font-black text-sm">PK</span>
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-white text-sm">
                  SARAWAK PUA KUMBU NFT COLLECTION
                </span>
                <p className="text-[11px] text-slate-500">
                  Tradition · Culture · Digital Forever · 50 Unique Digital Heritage Collectibles
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-[11px]">
              <button onClick={() => setActiveTab('marketplace')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
                Marketplace (50)
              </button>
              <button onClick={() => setActiveTab('rarity')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
                Rarity Spreadsheet (.CSV)
              </button>
              <button onClick={() => setActiveTab('backgrounds')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
                20 Background Layers
              </button>
              <button onClick={() => setActiveTab('contract')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
                ERC-721 Contract
              </button>
              <button onClick={() => setExportModalOpen(true)} className="text-[#d4af37] hover:underline cursor-pointer">
                OpenSea Export (.ZIP)
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#191d2c] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <div>
              Smart Contract: <code className="text-slate-400 font-mono">0x98418f13bB4E7d0c3C0aC2F6E726E80Da42a9841</code> · EIP-2981 7.5% Royalty Enforced
            </div>
            <div className="flex items-center gap-1">
              <span>Preserving Sarawak Iban Cultural Heritage on the Blockchain</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
