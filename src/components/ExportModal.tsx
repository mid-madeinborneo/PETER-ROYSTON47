import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Archive, 
  FileSpreadsheet, 
  Code, 
  FileJson, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { NFTCollectible } from '../types/nft';
import { 
  downloadCollectionZip, 
  downloadBlobAsFile, 
  generateRarityCSV, 
  downloadTextAsFile, 
  generateCollectionContractMetadata,
  SOLIDITY_CONTRACT_CODE 
} from '../utils/openseaExporter';

interface ExportModalProps {
  items: NFTCollectible[];
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  items,
  isOpen,
  onClose
}) => {
  const [isZipping, setIsZipping] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadFullZip = async () => {
    try {
      setIsZipping(true);
      const zipBlob = await downloadCollectionZip(items);
      downloadBlobAsFile(zipBlob, 'Sarawak_Pua_Kumbu_OpenSea_Package.zip');
      setIsZipping(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (e) {
      console.error('Error generating ZIP', e);
      setIsZipping(false);
    }
  };

  const handleDownloadCSV = () => {
    const csv = generateRarityCSV(items);
    downloadTextAsFile(csv, 'Sarawak_Pua_Kumbu_Rarity_Sheet.csv', 'text/csv');
  };

  const handleDownloadCollectionJSON = () => {
    const meta = generateCollectionContractMetadata();
    downloadTextAsFile(JSON.stringify(meta, null, 2), 'collection.json', 'application/json');
  };

  const handleDownloadContract = () => {
    downloadTextAsFile(SOLIDITY_CONTRACT_CODE, 'SarawakPuaKumbuNFT.sol', 'text/x-solidity');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      <div 
        className="relative w-full max-w-2xl bg-[#10131e] border border-[#2b334b] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1b2030] text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <Archive className="w-4 h-4" />
            <span>OpenSea Store Integration Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Download OpenSea Asset Package
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Complete turnkey assets formatted for instant upload to IPFS, OpenSea, and Ethereum / Polygon smart contracts.
          </p>
        </div>

        {/* Primary Download Full ZIP Button */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-[#161c2d] to-[#121524] border border-[#d4af37]/40 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif font-bold text-base text-white">
                Full Collection Master Bundle (.ZIP)
              </h3>
              <p className="text-xs text-slate-300">
                Includes all 50 OpenSea JSON files, contract-level metadata, CSV rarity spreadsheet, Solidity code & deployment guide.
              </p>
            </div>
            <div className="hidden sm:block font-mono text-xs text-[#d4af37] font-bold">
              ~250 KB
            </div>
          </div>

          <button
            onClick={handleDownloadFullZip}
            disabled={isZipping}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3d982] to-[#b8860b] text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Compiling 50 Metadata Files & CSV...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Downloaded Successfully!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-black" />
                <span>Download Complete OpenSea Store ZIP File</span>
              </>
            )}
          </button>
        </div>

        {/* Individual File Downloads */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Or Download Individual Assets:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* CSV Rarity Spreadsheet */}
            <div 
              onClick={handleDownloadCSV}
              className="p-3.5 rounded-xl bg-[#131624] border border-[#23293c] hover:border-[#d4af37] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[#d4af37]">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span className="text-[10px] font-mono">.CSV</span>
                </div>
                <div className="font-semibold text-xs text-white group-hover:text-[#d4af37] mt-2">
                  Rarity Spreadsheet
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  50 rows with scores & ranks
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-[#d4af37] font-medium">
                <Download className="w-3 h-3" /> Download CSV
              </div>
            </div>

            {/* Collection JSON */}
            <div 
              onClick={handleDownloadCollectionJSON}
              className="p-3.5 rounded-xl bg-[#131624] border border-[#23293c] hover:border-[#d4af37] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-emerald-400">
                  <FileJson className="w-4 h-4" />
                  <span className="text-[10px] font-mono">.JSON</span>
                </div>
                <div className="font-semibold text-xs text-white group-hover:text-emerald-400 mt-2">
                  collection.json
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  OpenSea contract storefront
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                <Download className="w-3 h-3" /> Download JSON
              </div>
            </div>

            {/* Solidity Smart Contract */}
            <div 
              onClick={handleDownloadContract}
              className="p-3.5 rounded-xl bg-[#131624] border border-[#23293c] hover:border-[#d4af37] cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-sky-400">
                  <Code className="w-4 h-4" />
                  <span className="text-[10px] font-mono">.SOL</span>
                </div>
                <div className="font-semibold text-xs text-white group-hover:text-sky-400 mt-2">
                  Smart Contract
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  ERC-721 + 7.5% Royalties
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-[11px] text-sky-400 font-medium">
                <Download className="w-3 h-3" /> Download .sol
              </div>
            </div>
          </div>
        </div>

        {/* OpenSea Deployment Instructions Summary */}
        <div className="p-4 rounded-xl bg-[#0c0e17] border border-[#1e2436] text-xs text-slate-400 space-y-1.5">
          <div className="font-semibold text-slate-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            How to put this in your OpenSea Store:
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed text-slate-400">
            <li>Unzip the downloaded package and upload the <code className="text-slate-300">/metadata</code> folder to Pinata or NFT.Storage.</li>
            <li>Deploy the included <code className="text-slate-300">SarawakPuaKumbuNFT.sol</code> contract on Polygon (low gas) or Ethereum via Remix.</li>
            <li>Connect your wallet to OpenSea, navigate to <strong>opensea.io/get-listed</strong>, and paste your contract address.</li>
            <li>OpenSea will instantly display all 50 items with traits, descriptions, and verified 7.5% royalties!</li>
          </ol>
        </div>

      </div>

    </div>
  );
};
