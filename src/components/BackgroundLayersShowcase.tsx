import React, { useState } from 'react';
import { Layers, Sparkles, Compass, Eye, Filter } from 'lucide-react';
import { BACKGROUND_LAYERS } from '../data/puaKumbuData';
import { NFTCollectible } from '../types/nft';
import { NFTArtwork } from './NFTArtwork';

interface BackgroundLayersShowcaseProps {
  items: NFTCollectible[];
  onSelectNFT: (item: NFTCollectible) => void;
  onFilterByBackground: (bgId: number) => void;
}

export const BackgroundLayersShowcase: React.FC<BackgroundLayersShowcaseProps> = ({
  items,
  onSelectNFT,
  onFilterByBackground
}) => {
  const [selectedBgId, setSelectedBgId] = useState<number>(1);

  const currentBg = BACKGROUND_LAYERS.find(b => b.id === selectedBgId) || BACKGROUND_LAYERS[0];
  const matchingNFTs = items.filter(i => i.backgroundLayerId === selectedBgId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="pb-6 border-b border-[#22283a]">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
          <Layers className="w-4 h-4" />
          <span>Sacred Dyes & Atmospheric Layers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
          20 Mix Symbol Background Layers
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
          Each collectible is layered with one of twenty distinct Sarawakian cultural environments, natural dye vats, 
          and atmospheric weaves that enhance depth and visual authenticity.
        </p>
      </div>

      {/* Featured Background Spotlight */}
      <div className="rounded-2xl border border-[#2b334a] bg-[#121624] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
          
          {/* Left: Background Swatch & Palette Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#d4af37] px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/30">
                LAYER #{currentBg.id.toString().padStart(2, '0')} OF 20
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase">
                Pattern: {currentBg.patternType}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {currentBg.name}
              </h3>
              <div className="text-sm text-[#d4af37] font-medium mt-0.5">
                {currentBg.theme}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {currentBg.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0c0f18] border border-[#22283b] space-y-1.5">
              <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                Iban Cultural Lore & Significance:
              </div>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                "{currentBg.culturalLore}"
              </p>
            </div>

            {/* Color Palette Indicators */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400">Palette:</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: currentBg.primaryColor }} />
                  <span>Primary</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: currentBg.secondaryColor }} />
                  <span>Secondary</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: currentBg.accentColor }} />
                  <span>Accent</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onFilterByBackground(currentBg.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer"
              >
                <Filter className="w-3.5 h-3.5" />
                View All {matchingNFTs.length} Collectibles with This Background
              </button>
            </div>
          </div>

          {/* Right: Samples of NFTs using this background */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Collectibles Rendered with Layer #{currentBg.id}:
            </div>
            <div className="grid grid-cols-2 gap-4">
              {matchingNFTs.slice(0, 2).map(nft => (
                <div
                  key={nft.id}
                  onClick={() => onSelectNFT(nft)}
                  className="group cursor-pointer rounded-xl bg-[#0d101a] border border-[#232a3e] hover:border-[#d4af37] p-2 transition-all hover:scale-[1.02]"
                >
                  <NFTArtwork nft={nft} showCardFrame={false} />
                  <div className="pt-2 text-center">
                    <div className="text-xs font-serif font-bold text-white group-hover:text-[#d4af37] truncate">
                      #{nft.tokenId} {nft.motifArchetype}
                    </div>
                    <div className="text-[10px] text-[#d4af37] font-mono">
                      {nft.priceEth} ETH · Rank #{nft.rarityRank}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Grid of all 20 Background Variations */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-lg text-white">
          Browse All 20 Background Layers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BACKGROUND_LAYERS.map(bg => {
            const count = items.filter(i => i.backgroundLayerId === bg.id).length;
            const isSelected = bg.id === selectedBgId;

            return (
              <div
                key={bg.id}
                onClick={() => setSelectedBgId(bg.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1a2034] border-[#d4af37] shadow-lg shadow-[#d4af37]/15'
                    : 'bg-[#121623] border-[#22283a] hover:border-slate-500 hover:bg-[#161a29]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#d4af37]">
                      #{bg.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {count} Items
                    </span>
                  </div>

                  {/* Gradient preview strip */}
                  <div
                    className="w-full h-8 rounded-lg mb-2.5 border border-white/10"
                    style={{
                      background: `linear-gradient(90deg, ${bg.primaryColor} 0%, ${bg.secondaryColor} 50%, ${bg.accentColor} 100%)`
                    }}
                  />

                  <h4 className="font-serif font-bold text-sm text-white line-clamp-1">
                    {bg.name}
                  </h4>
                  <div className="text-[11px] text-[#d4af37] font-medium">
                    {bg.theme}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 font-light">
                    {bg.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#1e2538] flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 capitalize">{bg.patternType.replace('-', ' ')}</span>
                  <span className="text-[#d4af37] font-medium">Select Layer →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
