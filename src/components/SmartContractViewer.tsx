import React, { useState } from 'react';
import { 
  Code, 
  Copy, 
  Check, 
  Download, 
  ShieldCheck, 
  ExternalLink, 
  FileCode2, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { 
  SOLIDITY_CONTRACT_CODE, 
  CONTRACT_ABI, 
  OPENSEA_DEPLOYMENT_GUIDE, 
  downloadTextAsFile 
} from '../utils/openseaExporter';

export const SmartContractViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'solidity' | 'abi' | 'guide'>('solidity');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#22283a]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Smart Contract Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            ERC-721 Blockchain Implementation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            Fully standard-compliant OpenZeppelin contract with EIP-2981 creator royalties (7.5%), 
            immutable provenance verification, and OpenSea storefront metadata support.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => downloadTextAsFile(SOLIDITY_CONTRACT_CODE, 'SarawakPuaKumbuNFT.sol', 'text/x-solidity')}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 shadow-md transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download .SOL
          </button>
        </div>
      </div>

      {/* Contract Parameters Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border border-[#22283b] bg-[#121623]">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Contract Standard</div>
          <div className="text-base font-serif font-bold text-white mt-1">ERC-721 Enumerable</div>
          <div className="text-[10px] text-emerald-400">OpenZeppelin v5.0</div>
        </div>

        <div className="p-4 rounded-xl border border-[#22283b] bg-[#121623]">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Royalty Standard</div>
          <div className="text-base font-serif font-bold text-[#d4af37] mt-1">EIP-2981 (7.5%)</div>
          <div className="text-[10px] text-slate-400">750 Basis Points</div>
        </div>

        <div className="p-4 rounded-xl border border-[#22283b] bg-[#121623]">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Maximum Supply</div>
          <div className="text-base font-serif font-bold text-white mt-1">50 Tokens</div>
          <div className="text-[10px] text-slate-400">Capped Forever</div>
        </div>

        <div className="p-4 rounded-xl border border-[#22283b] bg-[#121623]">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Deployment Address</div>
          <div className="text-xs font-mono font-bold text-slate-200 mt-1 truncate">
            0x98418f13...9841
          </div>
          <div className="text-[10px] text-emerald-400">Simulated Verified</div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-[#22283a] pb-3">
        <button
          onClick={() => setActiveTab('solidity')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'solidity' ? 'bg-[#1e2436] text-[#d4af37] border border-[#d4af37]/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileCode2 className="w-4 h-4" />
          SarawakPuaKumbuNFT.sol
        </button>
        <button
          onClick={() => setActiveTab('abi')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'abi' ? 'bg-[#1e2436] text-[#d4af37] border border-[#d4af37]/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code className="w-4 h-4" />
          Contract ABI (JSON)
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
            activeTab === 'guide' ? 'bg-[#1e2436] text-[#d4af37] border border-[#d4af37]/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Cpu className="w-4 h-4" />
          OpenSea Deployment Manual
        </button>
      </div>

      {/* Tab Content */}
      <div className="relative rounded-xl border border-[#22283a] bg-[#0c0e17] overflow-hidden shadow-2xl">
        
        {/* Copy Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131624] border-b border-[#22283a]">
          <span className="font-mono text-xs text-slate-400">
            {activeTab === 'solidity' && 'contracts/SarawakPuaKumbuNFT.sol'}
            {activeTab === 'abi' && 'artifacts/SarawakPuaKumbuNFT_ABI.json'}
            {activeTab === 'guide' && 'docs/OPENSEA_DEPLOYMENT_GUIDE.md'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (activeTab === 'solidity') handleCopy(SOLIDITY_CONTRACT_CODE, 'solidity');
                else if (activeTab === 'abi') handleCopy(JSON.stringify(CONTRACT_ABI, null, 2), 'abi');
                else handleCopy(OPENSEA_DEPLOYMENT_GUIDE, 'guide');
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded bg-[#1e2436] hover:bg-[#28314a] text-slate-300 text-xs font-medium cursor-pointer transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content Container */}
        <div className="p-4 overflow-x-auto max-h-[500px] text-xs font-mono leading-relaxed">
          {activeTab === 'solidity' && (
            <pre className="text-slate-300">
              <code>{SOLIDITY_CONTRACT_CODE}</code>
            </pre>
          )}

          {activeTab === 'abi' && (
            <pre className="text-emerald-300">
              <code>{JSON.stringify(CONTRACT_ABI, null, 2)}</code>
            </pre>
          )}

          {activeTab === 'guide' && (
            <pre className="text-slate-300 whitespace-pre-wrap font-sans text-xs leading-relaxed">
              {OPENSEA_DEPLOYMENT_GUIDE}
            </pre>
          )}
        </div>

      </div>

    </div>
  );
};
