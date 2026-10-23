import React from 'react';
import { Download, FileSpreadsheet, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { CollectionStats } from '../types/nft';

interface HeroBannerProps {
  stats: CollectionStats;
  onOpenExportModal: () => void;
  onOpenRarityTab: () => void;
  onExploreClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  stats,
  onOpenExportModal,
  onOpenRarityTab,
  onExploreClick
}) => {
  return (
    <div className="relative border-b border-[#22283b] bg-gradient-to-b from-[#10131e] via-[#0b0c10] to-[#0b0c10] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#a8201a]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Main Banner Media Embed & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative & Blockchain Specs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Cultural Pre-header with traditional Iban lozenge emblems */}
            <div className="flex items-center gap-3">
              <span className="text-[#d4af37] text-lg">◈</span>
              <span className="text-xs tracking-[0.25em] uppercase font-semibold text-[#d4af37]">
                BORNEO INDIGENOUS HERITAGE ARCHIVE
              </span>
              <span className="text-[#d4af37] text-lg">◈</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              SARAWAK NFT <br />
              <span className="gold-gradient-text">PUA KUMBU</span> COLLECTION
            </h1>

            <p className="text-sm tracking-[0.2em] uppercase font-medium text-slate-400">
              TRADITION · CULTURE · DIGITAL FOREVER
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Transforming the sacred Iban warp ikat textile tradition of Sarawak into 50 verified blockchain digital collectibles. 
              Featuring 20 mixed symbol background layers, algorithmic rarity scoring, peer-to-peer smart contract trading, 
              and turnkey export packages formatted for your OpenSea storefront.
            </p>

            {/* Metric Strip (Clean Unboxed Zero-Pill Typography) */}
            <div className="pt-2 border-t border-[#1f2638] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Collection Size</div>
                <div className="text-xl font-bold font-serif text-white mt-0.5">50 Items</div>
                <div className="text-[11px] text-emerald-400">100% Unique 1/1s</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Background Layers</div>
                <div className="text-xl font-bold font-serif text-[#d4af37] mt-0.5">20 Variations</div>
                <div className="text-[11px] text-slate-400">Sacred Dyes & Weaves</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Floor Price</div>
                <div className="text-xl font-bold font-serif text-white mt-0.5">0.45 ETH</div>
                <div className="text-[11px] text-slate-400">~$1,570 USD</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Creator Royalty</div>
                <div className="text-xl font-bold font-serif text-[#d4af37] mt-0.5">7.5%</div>
                <div className="text-[11px] text-slate-400">EIP-2981 Standard</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenExportModal}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f3d982] to-[#b8860b] text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-[#d4af37]/25 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-black" />
                Download OpenSea Store Package (.zip)
              </button>

              <button
                onClick={onOpenRarityTab}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-[#3b4460] bg-[#141724] text-slate-200 hover:border-[#d4af37] hover:text-[#d4af37] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#d4af37]" />
                Verify Rarity Sheet (.csv)
              </button>

              <button
                onClick={onExploreClick}
                className="px-4 py-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Browse All 50 Collectibles ↓
              </button>
            </div>

            {/* Smart Contract Quick Proof */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Contract:</span>
              <span className="text-slate-300 underline cursor-pointer truncate max-w-xs">
                {stats.contractAddress}
              </span>
              <span className="text-emerald-400">● Verified</span>
            </div>

          </div>

          {/* Right Column: User's Original Reference Banner Embedded */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-2xl shadow-black/80 group">
              <img
                src="/assets/aistudio/Sarawak_Pua_Kumbu_NFT_Collection_98418f13.png"
                alt="Sarawak Pua Kumbu NFT Collection Master Reference"
                className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="font-serif text-[#d4af37] font-semibold">
                  5 Core Archetypes: 01 Geometric · 02 Plant · 03 Hornbill · 04 Figure · 05 Bands
                </span>
                <span className="font-mono text-emerald-400">Original Master</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
