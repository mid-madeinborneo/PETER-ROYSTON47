import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  Tag, 
  ArrowUpDown, 
  CheckCircle2, 
  Layers,
  ChevronDown,
  X
} from 'lucide-react';
import { BACKGROUND_LAYERS } from '../data/puaKumbuData';
import { EditionTier, MotifArchetype, NFTCollectible, UserWallet } from '../types/nft';
import { NFTArtwork } from './NFTArtwork';

interface MarketplaceProps {
  items: NFTCollectible[];
  wallet: UserWallet;
  onSelectItem: (item: NFTCollectible) => void;
  onQuickBuy: (item: NFTCollectible) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({
  items,
  wallet,
  onSelectItem,
  onQuickBuy
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMotif, setSelectedMotif] = useState<MotifArchetype | 'All'>('All');
  const [selectedBgId, setSelectedBgId] = useState<number | 'All'>('All');
  const [selectedTier, setSelectedTier] = useState<EditionTier | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'listed' | 'owned'>('All');
  const [sortBy, setSortBy] = useState<'rarity-asc' | 'rarity-desc' | 'price-asc' | 'price-desc' | 'token-id'>('rarity-asc');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const motifOptions: (MotifArchetype | 'All')[] = [
    'All',
    'Animal Inspired',
    'Figure Motif',
    'Geometric Harmony',
    'Plant Inspired',
    'Repeating Bands'
  ];

  const tierOptions: (EditionTier | 'All')[] = [
    'All',
    '1/1 Genesis Sovereign',
    'Mythic Ancestral',
    'Sacred Elder',
    'Longhouse Guardian',
    'Traditional Heritage'
  ];

  // Filtering & Sorting logic
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesToken = item.tokenId.includes(q) || item.id.toString() === q;
        const matchesMotif = item.motifSpecificName.toLowerCase().includes(q) || item.motifArchetype.toLowerCase().includes(q);
        const matchesBg = item.backgroundLayerName.toLowerCase().includes(q);
        const matchesBlessing = item.spiritualBlessing.toLowerCase().includes(q);
        if (!matchesName && !matchesToken && !matchesMotif && !matchesBg && !matchesBlessing) {
          return false;
        }
      }

      // Motif
      if (selectedMotif !== 'All' && item.motifArchetype !== selectedMotif) {
        return false;
      }

      // Background Layer
      if (selectedBgId !== 'All' && item.backgroundLayerId !== selectedBgId) {
        return false;
      }

      // Tier
      if (selectedTier !== 'All' && item.editionTier !== selectedTier) {
        return false;
      }

      // Status
      if (selectedStatus === 'listed' && !item.isListed) {
        return false;
      }
      if (selectedStatus === 'owned') {
        const isUserOwner = item.ownerAddress.toLowerCase() === wallet.address.toLowerCase() || wallet.ownedTokenIds.includes(item.id);
        if (!isUserOwner) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rarity-asc') return a.rarityRank - b.rarityRank; // #1 is most rare
      if (sortBy === 'rarity-desc') return b.rarityRank - a.rarityRank;
      if (sortBy === 'price-asc') return a.priceEth - b.priceEth;
      if (sortBy === 'price-desc') return b.priceEth - a.priceEth;
      if (sortBy === 'token-id') return a.id - b.id;
      return 0;
    });
  }, [items, searchQuery, selectedMotif, selectedBgId, selectedTier, selectedStatus, sortBy, wallet]);

  const activeFilterCount = (selectedMotif !== 'All' ? 1 : 0) +
    (selectedBgId !== 'All' ? 1 : 0) +
    (selectedTier !== 'All' ? 1 : 0) +
    (selectedStatus !== 'All' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedMotif('All');
    setSelectedBgId('All');
    setSelectedTier('All');
    setSelectedStatus('All');
    setSortBy('rarity-asc');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Search & Filter Header Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between pb-6 border-b border-[#1f2638]">
        
        {/* Left: Search input */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID (e.g. 01), motif, hornbill, background, or dye..."
            className="w-full bg-[#131724] border border-[#272f44] rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#d4af37] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Right Controls: Sort & Filter Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Status Segmented Control (Interactive Button Control Allowed by Constitution) */}
          <div className="flex items-center gap-1 p-1 bg-[#131724] border border-[#272f44] rounded-lg">
            <button
              onClick={() => setSelectedStatus('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedStatus === 'All' ? 'bg-[#272f44] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              All (50)
            </button>
            <button
              onClick={() => setSelectedStatus('listed')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedStatus === 'listed' ? 'bg-[#272f44] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Listed
            </button>
            <button
              onClick={() => setSelectedStatus('owned')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedStatus === 'owned' ? 'bg-[#272f44] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Owned By You
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#131724] border border-[#272f44] text-slate-200 text-xs rounded-lg px-3 py-2.5 pr-8 focus:outline-none focus:border-[#d4af37] cursor-pointer appearance-none font-medium"
            >
              <option value="rarity-asc">Rarity: Most Rare (Rank #1 → #50)</option>
              <option value="rarity-desc">Rarity: Least Rare (Rank #50 → #1)</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="token-id">Token ID: 01 → 50</option>
            </select>
            <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
          </div>

          {/* Reset Filters if any active */}
          {activeFilterCount > 0 && (
            <button
              onClick={resetFilters}
              className="text-xs text-rose-400 hover:text-rose-300 underline font-medium px-2 py-1 cursor-pointer"
            >
              Reset Filters ({activeFilterCount})
            </button>
          )}

        </div>

      </div>

      {/* Trait & Archetype Filter Bar (Segmented Interactive Buttons) */}
      <div className="py-4 space-y-3">
        {/* Motif Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-1">
            Motif:
          </span>
          {motifOptions.map(motif => (
            <button
              key={motif}
              onClick={() => setSelectedMotif(motif)}
              className={`px-3 py-1.5 rounded-lg border transition-all text-xs font-medium cursor-pointer ${
                selectedMotif === motif
                  ? 'bg-[#d4af37]/15 border-[#d4af37] text-[#d4af37] font-semibold'
                  : 'bg-[#131724] border-[#22283a] text-slate-300 hover:border-slate-500 hover:text-white'
              }`}
            >
              {motif}
            </button>
          ))}
        </div>

        {/* 20 Background Layers Quick Selector */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
            Background Layer:
          </span>
          <select
            value={selectedBgId}
            onChange={(e) => setSelectedBgId(e.target.value === 'All' ? 'All' : Number(e.target.value))}
            className="bg-[#131724] border border-[#272f44] text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
          >
            <option value="All">All 20 Background Variations</option>
            {BACKGROUND_LAYERS.map(bg => (
              <option key={bg.id} value={bg.id}>
                #{bg.id.toString().padStart(2, '0')} - {bg.name} ({bg.theme})
              </option>
            ))}
          </select>

          {/* Tier Selector */}
          <span className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] ml-4 mr-1">
            Edition Tier:
          </span>
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value as any)}
            className="bg-[#131724] border border-[#272f44] text-slate-200 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
          >
            {tierOptions.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count & Status Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 pb-6">
        <div>
          Showing <span className="font-semibold text-white">{filteredItems.length}</span> of 50 Sarawak Pua Kumbu collectibles
          {selectedMotif !== 'All' && <span> in <strong className="text-[#d4af37]">{selectedMotif}</strong></span>}
        </div>
        <div className="hidden sm:block text-[11px]">
          Smart contract verified ERC-721 · 7.5% EIP-2981 royalty
        </div>
      </div>

      {/* Grid of 50 Collectibles */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-[#272f44] bg-[#0f121d] my-8">
          <p className="text-base text-slate-300 font-medium">No collectibles match your selected filters</p>
          <p className="text-xs text-slate-500 mt-1">Try resetting the motif or background layer filter to view all 50 items.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => {
            const isUserOwner = item.ownerAddress.toLowerCase() === wallet.address.toLowerCase() || wallet.ownedTokenIds.includes(item.id);
            const isTopFive = item.rarityRank <= 5;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative flex flex-col rounded-2xl bg-[#121623] border border-[#22293c] hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/10 cursor-pointer overflow-hidden p-3.5"
              >
                {/* Visual Artwork Frame */}
                <div className="relative w-full rounded-xl overflow-hidden mb-3.5">
                  <NFTArtwork
                    nft={item}
                    showCardFrame={true}
                    interactiveHover={true}
                  />

                  {/* Top-right Rarity Rank Ribbon */}
                  <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-[#d4af37]/40 text-[10px] font-mono font-bold text-[#d4af37]">
                    RANK #{item.rarityRank}
                  </div>

                  {/* Top-left Tier Badge */}
                  {isTopFive && (
                    <div className="absolute top-2.5 left-2.5 bg-[#d4af37] text-black px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      1/1 Sovereign
                    </div>
                  )}
                </div>

                {/* Card Information */}
                <div className="flex-1 flex flex-col justify-between space-y-2.5">
                  
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="font-mono text-[#d4af37] font-semibold">#{item.tokenId}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{item.motifArchetype}</span>
                    <span aria-hidden="true">·</span>
                    <span>Score: {item.rarityScore}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#d4af37] transition-colors line-clamp-1">
                      {item.name.replace(/^Pua Kumbu #\d+:\s*/, '')}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Background Layer Lore Tag (Clean text, no pill) */}
                  <div className="text-[10px] text-slate-400 truncate">
                    <span className="text-slate-500">Layer {item.backgroundLayerId}/20:</span> {item.backgroundLayerName}
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-2.5 border-t border-[#1d2334] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400">Price</div>
                      <div className="text-base font-bold font-serif text-white flex items-center gap-1">
                        <span className="text-[#d4af37]">Ξ</span> {item.priceEth} ETH
                      </div>
                      <div className="text-[10px] text-slate-400">
                        ~${(item.priceEth * 3480).toLocaleString()} USD
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {isUserOwner ? (
                        <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 px-2.5 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Owned
                        </span>
                      ) : (
                        <button
                          onClick={() => onQuickBuy(item)}
                          disabled={!item.isListed}
                          className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black hover:opacity-90 shadow-md shadow-[#d4af37]/20 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
