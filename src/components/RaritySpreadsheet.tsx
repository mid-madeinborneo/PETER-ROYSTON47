import React, { useState, useMemo } from 'react';
import { 
  FileSpreadsheet, 
  Download, 
  Search, 
  ArrowUpDown, 
  ChevronRight, 
  Layers, 
  Sparkles,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { BACKGROUND_LAYERS } from '../data/puaKumbuData';
import { NFTCollectible } from '../types/nft';
import { generateRarityCSV, downloadTextAsFile } from '../utils/openseaExporter';
import { NFTArtwork } from './NFTArtwork';

interface RaritySpreadsheetProps {
  items: NFTCollectible[];
  onSelectItem: (item: NFTCollectible) => void;
}

export const RaritySpreadsheet: React.FC<RaritySpreadsheetProps> = ({
  items,
  onSelectItem
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'rarityRank' | 'rarityScore' | 'id' | 'priceEth'>('rarityRank');
  const [sortAsc, setSortAsc] = useState(true);
  const [activeTab, setActiveTab] = useState<'table' | 'trait-distribution'>('table');

  // Handle CSV Download
  const handleDownloadCSV = () => {
    const csv = generateRarityCSV(items);
    downloadTextAsFile(csv, 'Sarawak_Pua_Kumbu_Rarity_Sheet.csv', 'text/csv');
  };

  // Trait Analytics
  const traitStats = useMemo(() => {
    const motifCounts: Record<string, number> = {};
    const bgCounts: Record<string, number> = {};
    const tierCounts: Record<string, number> = {};
    const dyeCounts: Record<string, number> = {};

    items.forEach(item => {
      motifCounts[item.motifArchetype] = (motifCounts[item.motifArchetype] || 0) + 1;
      bgCounts[item.backgroundLayerName] = (bgCounts[item.backgroundLayerName] || 0) + 1;
      tierCounts[item.editionTier] = (tierCounts[item.editionTier] || 0) + 1;
      dyeCounts[item.naturalDye] = (dyeCounts[item.naturalDye] || 0) + 1;
    });

    return { motifCounts, bgCounts, tierCounts, dyeCounts };
  }, [items]);

  // Filter and sort items
  const sortedItems = useMemo(() => {
    return items.filter(item => {
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.tokenId.includes(q) ||
        item.motifArchetype.toLowerCase().includes(q) ||
        item.backgroundLayerName.toLowerCase().includes(q) ||
        item.spiritualBlessing.toLowerCase().includes(q) ||
        item.editionTier.toLowerCase().includes(q)
      );
    }).sort((a, b) => {
      let comparison = 0;
      if (sortField === 'rarityRank') comparison = a.rarityRank - b.rarityRank;
      else if (sortField === 'rarityScore') comparison = a.rarityScore - b.rarityScore;
      else if (sortField === 'id') comparison = a.id - b.id;
      else if (sortField === 'priceEth') comparison = a.priceEth - b.priceEth;
      return sortAsc ? comparison : -comparison;
    });
  }, [items, searchTerm, sortField, sortAsc]);

  const toggleSort = (field: 'rarityRank' | 'rarityScore' | 'id' | 'priceEth') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(field === 'rarityRank' || field === 'id');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header and Export Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#22283a]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Official Collector Verification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Collection Rarity Spreadsheet
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verified statistical rarity scores and trait distribution matrix for all 50 Sarawak Pua Kumbu digital collectibles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-md shadow-[#d4af37]/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download .CSV Spreadsheet
          </button>
        </div>
      </div>

      {/* Tabs: Table View vs Trait Distribution */}
      <div className="flex items-center gap-2 border-b border-[#22283a] pb-3">
        <button
          onClick={() => setActiveTab('table')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'table' ? 'bg-[#1e2436] text-[#d4af37] border border-[#d4af37]/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          Full 50-Item Master Spreadsheet
        </button>
        <button
          onClick={() => setActiveTab('trait-distribution')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'trait-distribution' ? 'bg-[#1e2436] text-[#d4af37] border border-[#d4af37]/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Trait Statistical Distribution
        </button>
      </div>

      {activeTab === 'table' ? (
        <div className="space-y-4">
          
          {/* Table Search & Metric Info */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search spreadsheet by motif, background, rank..."
                className="w-full bg-[#131724] border border-[#272f44] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#d4af37]"
              />
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-4">
              <span>Showing {sortedItems.length} of 50 records</span>
              <span className="hidden sm:inline">· Algorithm: OpenSea / Rarity.tools 1/Freq Sum</span>
            </div>
          </div>

          {/* Interactive Responsive Table */}
          <div className="overflow-x-auto rounded-xl border border-[#22283a] bg-[#10131e] shadow-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#22283a] bg-[#161a29] text-slate-400 font-semibold tracking-wider text-[11px] uppercase">
                  <th 
                    onClick={() => toggleSort('rarityRank')}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Rank</span>
                      <ArrowUpDown className="w-3 h-3 text-[#d4af37]" />
                    </div>
                  </th>
                  <th 
                    onClick={() => toggleSort('id')}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Token</span>
                      <ArrowUpDown className="w-3 h-3 text-[#d4af37]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">Visual Preview</th>
                  <th className="py-3 px-3">Collectible Name</th>
                  <th 
                    onClick={() => toggleSort('rarityScore')}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Score</span>
                      <ArrowUpDown className="w-3 h-3 text-[#d4af37]" />
                    </div>
                  </th>
                  <th 
                    onClick={() => toggleSort('priceEth')}
                    className="py-3 px-3 cursor-pointer hover:text-white"
                  >
                    <div className="flex items-center gap-1">
                      <span>Price</span>
                      <ArrowUpDown className="w-3 h-3 text-[#d4af37]" />
                    </div>
                  </th>
                  <th className="py-3 px-3">Motif Archetype</th>
                  <th className="py-3 px-3">Background Layer (1-20)</th>
                  <th className="py-3 px-3">Weave & Natural Dye</th>
                  <th className="py-3 px-3">Spiritual Blessing</th>
                  <th className="py-3 px-3 text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2336]">
                {sortedItems.map(item => (
                  <tr
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    className="hover:bg-[#161b2c] transition-colors cursor-pointer group"
                  >
                    {/* Rank */}
                    <td className="py-3 px-3 font-mono font-bold">
                      <span className={`${
                        item.rarityRank <= 5 
                          ? 'text-[#d4af37] text-sm' 
                          : item.rarityRank <= 15 
                          ? 'text-amber-300' 
                          : 'text-slate-400'
                      }`}>
                        #{item.rarityRank}
                      </span>
                    </td>

                    {/* Token ID */}
                    <td className="py-3 px-3 font-mono text-slate-300">
                      #{item.tokenId}
                    </td>

                    {/* Visual Preview */}
                    <td className="py-2 px-3">
                      <div className="w-9 h-14 rounded overflow-hidden border border-[#2b334a] shadow-sm">
                        <NFTArtwork nft={item} showCardFrame={false} />
                      </div>
                    </td>

                    {/* Collectible Name & Edition Tier */}
                    <td className="py-3 px-3">
                      <div className="font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                        {item.name.replace(/^Pua Kumbu #\d+:\s*/, '')}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.editionTier}
                      </div>
                    </td>

                    {/* Rarity Score */}
                    <td className="py-3 px-3 font-mono font-semibold text-white">
                      {item.rarityScore}
                    </td>

                    {/* Price */}
                    <td className="py-3 px-3 font-mono text-[#d4af37] font-bold">
                      {item.priceEth} ETH
                    </td>

                    {/* Motif Archetype */}
                    <td className="py-3 px-3 text-slate-300">
                      <div>{item.motifArchetype}</div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[140px]">
                        {item.motifSpecificName}
                      </div>
                    </td>

                    {/* Background Layer */}
                    <td className="py-3 px-3 text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] text-[#d4af37]">#{item.backgroundLayerId}</span>
                        <span className="truncate max-w-[150px]">{item.backgroundLayerName}</span>
                      </div>
                      <div className="text-[10px] text-slate-400">{item.backgroundTheme}</div>
                    </td>

                    {/* Weave & Dye */}
                    <td className="py-3 px-3 text-slate-300 text-[11px]">
                      <div>{item.weaveDensity}</div>
                      <div className="text-slate-400">{item.naturalDye}</div>
                    </td>

                    {/* Spiritual Blessing */}
                    <td className="py-3 px-3 text-slate-300 text-[11px] max-w-[150px] truncate">
                      {item.spiritualBlessing}
                    </td>

                    {/* Inspect link */}
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#d4af37] group-hover:underline">
                        View <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      ) : (
        /* Trait Distribution Analytics */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Motif Archetype Distribution */}
          <div className="p-5 rounded-xl border border-[#22283a] bg-[#121623] space-y-4">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider flex items-center justify-between">
              <span>Motif Archetype Distribution (50 Total)</span>
              <span className="text-xs text-[#d4af37] font-mono">5 Archetypes</span>
            </h3>
            <div className="space-y-3">
              {Object.entries(traitStats.motifCounts).map(([motif, count]) => {
                const pct = Math.round((count / 50) * 100);
                return (
                  <div key={motif} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-200">{motif}</span>
                      <span className="font-mono text-slate-400">{count} items ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1e2436] overflow-hidden">
                      <div className="h-full bg-[#d4af37] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Edition Tier Distribution */}
          <div className="p-5 rounded-xl border border-[#22283a] bg-[#121623] space-y-4">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider flex items-center justify-between">
              <span>Edition Tier Distribution</span>
              <span className="text-xs text-[#d4af37] font-mono">5 Tiers</span>
            </h3>
            <div className="space-y-3">
              {Object.entries(traitStats.tierCounts).map(([tier, count]) => {
                const pct = Math.round((count / 50) * 100);
                return (
                  <div key={tier} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-200">{tier}</span>
                      <span className="font-mono text-slate-400">{count} items ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#1e2436] overflow-hidden">
                      <div className="h-full bg-[#a8201a] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 20 Background Layers Breakdown */}
          <div className="md:col-span-2 p-5 rounded-xl border border-[#22283a] bg-[#121623] space-y-4">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider flex items-center justify-between">
              <span>20 Mix Symbol Background Layers Allocation</span>
              <span className="text-xs text-[#d4af37] font-mono">All 20 Layers Represented</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {BACKGROUND_LAYERS.map(bg => {
                const count = traitStats.bgCounts[bg.name] || 0;
                return (
                  <div key={bg.id} className="p-3 rounded-lg bg-[#181c2c] border border-[#262e45] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[#d4af37] font-bold">#{bg.id.toString().padStart(2, '0')}</span>
                      <span className="font-mono text-slate-400">{count} NFTs</span>
                    </div>
                    <div className="font-semibold text-white truncate mt-1">{bg.name}</div>
                    <div className="text-[10px] text-slate-400 truncate">{bg.theme}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
