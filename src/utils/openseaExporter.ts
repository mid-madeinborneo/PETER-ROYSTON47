import JSZip from 'jszip';
import { BACKGROUND_LAYERS } from '../data/puaKumbuData';
import { NFTCollectible, OpenSeaStandardMetadata } from '../types/nft';

export function generateOpenSeaMetadata(nft: NFTCollectible): OpenSeaStandardMetadata {
  return {
    name: nft.name,
    description: `${nft.subtitle}\n\nCultural Lore:\n${nft.culturalMeaning}\n\nStory:\n${nft.story}\n\nAncestral Sarawak Iban Pua Kumbu blockchain collectible. Edition: ${nft.editionTier} (1/1). Rarity Rank: #${nft.rarityRank} of 50.`,
    image: `ipfs://QmSarawakPuaKumbuHeritage/${nft.tokenId}.png`,
    external_url: `https://sarawak-puakumbu.art/token/${nft.tokenId}`,
    attributes: [
      { trait_type: 'Motif Archetype', value: nft.motifArchetype },
      { trait_type: 'Specific Motif', value: nft.motifSpecificName },
      { trait_type: 'Background Layer', value: nft.backgroundLayerName },
      { trait_type: 'Background Theme', value: nft.backgroundTheme },
      { trait_type: 'Weave Density', value: nft.weaveDensity },
      { trait_type: 'Natural Dye', value: nft.naturalDye },
      { trait_type: 'Border Trim', value: nft.borderTrim },
      { trait_type: 'Spiritual Blessing', value: nft.spiritualBlessing },
      { trait_type: 'Edition Tier', value: nft.editionTier },
      { trait_type: 'Rarity Rank', value: nft.rarityRank, display_type: 'number' },
      { trait_type: 'Rarity Score', value: nft.rarityScore, display_type: 'number' },
      { trait_type: 'Token ID Number', value: nft.id, display_type: 'number' }
    ],
    compiler: 'Sarawak Pua Kumbu Heritage Metadata Engine v2.0'
  };
}

export function generateCollectionContractMetadata() {
  return {
    name: 'Sarawak Pua Kumbu Collection',
    description: 'Ancestral Iban woven textile digital collectibles preserving Sarawak sacred cultural heritage onto the blockchain forever. Features 50 unique master variations with 20 mixed symbol background layers.',
    image: 'ipfs://QmSarawakPuaKumbuHeritage/collection_avatar.png',
    banner_image: 'ipfs://QmSarawakPuaKumbuHeritage/collection_banner.png',
    external_link: 'https://sarawak-puakumbu.art',
    seller_fee_basis_points: 750, // 7.5% creator royalty
    fee_recipient: '0x88418F13bB4E7d0c3C0aC2F6E726E80Da42a9841'
  };
}

export function generateRarityCSV(items: NFTCollectible[]): string {
  const headers = [
    'Token ID',
    'Name',
    'Subtitle',
    'Edition Tier',
    'Rarity Rank',
    'Rarity Score',
    'Floor Price (ETH)',
    'Motif Archetype',
    'Specific Motif',
    'Background Layer (1-20)',
    'Weave Density',
    'Natural Dye',
    'Border Trim',
    'Spiritual Blessing',
    'Owner Address',
    'Cultural Meaning'
  ];

  const escapeCSV = (str: string | number) => {
    const text = String(str).replace(/"/g, '""');
    return `"${text}"`;
  };

  const rows = items.map(item => [
    escapeCSV(item.tokenId),
    escapeCSV(item.name),
    escapeCSV(item.subtitle),
    escapeCSV(item.editionTier),
    escapeCSV(item.rarityRank),
    escapeCSV(item.rarityScore),
    escapeCSV(item.priceEth),
    escapeCSV(item.motifArchetype),
    escapeCSV(item.motifSpecificName),
    escapeCSV(item.backgroundLayerName),
    escapeCSV(item.weaveDensity),
    escapeCSV(item.naturalDye),
    escapeCSV(item.borderTrim),
    escapeCSV(item.spiritualBlessing),
    escapeCSV(item.ownerAddress),
    escapeCSV(item.culturalMeaning)
  ].join(','));

  return [headers.join(','), ...rows].join('\n');
}

export const SOLIDITY_CONTRACT_CODE = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title SarawakPuaKumbuNFT
 * @dev ERC-721 Smart Contract for Sarawak Pua Kumbu Digital Heritage Collection.
 * Features 50 unique 1/1 pieces, 20 mixed symbol backgrounds, and EIP-2981 royalties.
 */
contract SarawakPuaKumbuNFT is ERC721Enumerable, Ownable, ERC2981 {
    using Strings for uint256;

    uint256 public constant MAX_SUPPLY = 50;
    string public baseTokenURI;
    string public contractURI;

    // Mapping for token specific price in wei for direct contract purchases
    mapping(uint256 => uint256) public tokenPrices;
    mapping(uint256 => bool) public isForSale;

    event NFTListed(uint256 indexed tokenId, uint256 price);
    event NFTPurchased(uint256 indexed tokenId, address indexed buyer, uint256 price);

    constructor(
        string memory _initBaseURI,
        string memory _initContractURI,
        address _royaltyReceiver,
        uint96 _royaltyFeeNumerator // 750 = 7.5%
    ) ERC721("Sarawak Pua Kumbu Collection", "PUAKUMBU") Ownable(msg.sender) {
        baseTokenURI = _initBaseURI;
        contractURI = _initContractURI;
        _setDefaultRoyalty(_royaltyReceiver, _royaltyFeeNumerator);
    }

    function mint(address to, uint256 tokenId) external onlyOwner {
        require(tokenId >= 1 && tokenId <= MAX_SUPPLY, "Invalid tokenId range");
        _safeMint(to, tokenId);
    }

    function batchMint(address to, uint256[] calldata tokenIds) external onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(tokenIds[i] >= 1 && tokenIds[i] <= MAX_SUPPLY, "Invalid tokenId range");
            _safeMint(to, tokenIds[i]);
        }
    }

    function buyToken(uint256 tokenId) external payable {
        require(isForSale[tokenId], "Token is not for sale");
        require(msg.value >= tokenPrices[tokenId], "Insufficient funds sent");

        address currentOwner = ownerOf(tokenId);
        require(currentOwner != msg.sender, "You already own this token");

        isForSale[tokenId] = false;
        _transfer(currentOwner, msg.sender, tokenId);

        // Disburse payment to seller
        (bool success, ) = payable(currentOwner).call{value: msg.value}("");
        require(success, "Transfer to seller failed");

        emit NFTPurchased(tokenId, msg.sender, msg.value);
    }

    function listToken(uint256 tokenId, uint256 priceWei) external {
        require(ownerOf(tokenId) == msg.sender, "Must be owner to list");
        require(priceWei > 0, "Price must be greater than zero");
        tokenPrices[tokenId] = priceWei;
        isForSale[tokenId] = true;
        emit NFTListed(tokenId, priceWei);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireOwned(tokenId);
        return string(abi.encodePacked(baseTokenURI, tokenId.toString(), ".json"));
    }

    function setBaseURI(string memory _newBaseURI) external onlyOwner {
        baseTokenURI = _newBaseURI;
    }

    function setRoyaltyInfo(address receiver, uint96 feeNumerator) external onlyOwner {
        _setDefaultRoyalty(receiver, feeNumerator);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721Enumerable, ERC2981) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
`;

export const CONTRACT_ABI = [
  { "inputs": [], "name": "MAX_SUPPLY", "outputs": [{ "type": "uint256" }], "stateMutability": "view", "type": "function" },
  { "inputs": [{ "type": "uint256" }], "name": "tokenURI", "outputs": [{ "type": "string" }], "stateMutability": "view", "type": "function" },
  { "inputs": [{ "type": "uint256" }], "name": "buyToken", "outputs": [], "stateMutability": "payable", "type": "function" },
  { "inputs": [{ "type": "uint256" }, { "type": "uint256" }], "name": "listToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [{ "type": "address" }, { "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
  { "inputs": [{ "type": "uint256" }, { "type": "uint256" }], "name": "royaltyInfo", "outputs": [{ "type": "address" }, { "type": "uint256" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "contractURI", "outputs": [{ "type": "string" }], "stateMutability": "view", "type": "function" }
];

export const OPENSEA_DEPLOYMENT_GUIDE = `# Sarawak Pua Kumbu NFT - Complete OpenSea Deployment Guide

This package contains everything required to deploy the 50 Sarawak Pua Kumbu NFTs to OpenSea, Ethereum, Polygon, or Arbitrum.

## Directory Structure
- \`/metadata/\`: Contains 1.json to 50.json (OpenSea Standard compliant)
- \`/metadata/collection.json\`: OpenSea Contract-level metadata (royalties, storefront details)
- \`/rarity/Sarawak_Pua_Kumbu_Rarity_Sheet.csv\`: Full rarity spreadsheet with statistical scores
- \`/smart-contract/SarawakPuaKumbuNFT.sol\`: Verified Solidity smart contract (ERC-721 + EIP-2981 7.5% royalties)
- \`/smart-contract/contract_abi.json\`: Ready-to-use JSON ABI for Web3 frontends

## Step 1: Upload Assets & Metadata to IPFS
1. Pin the high-resolution artwork folder to IPFS via Pinata or NFT.Storage.
2. Note your CID (e.g., \`QmArtHash...\`).
3. If necessary, update the "image" field in \`1.json\` through \`50.json\` to reference your custom CID.
4. Upload the \`/metadata\` folder to IPFS to obtain your Metadata CID (e.g., \`QmMetadataHash...\`).

## Step 2: Deploy the Smart Contract
1. Open [Remix Ethereum IDE](https://remix.ethereum.org).
2. Paste \`SarawakPuaKumbuNFT.sol\`.
3. In Constructor arguments, provide:
   - \`_initBaseURI\`: \`ipfs://QmMetadataHash/\`
   - \`_initContractURI\`: \`ipfs://QmMetadataHash/collection.json\`
   - \`_royaltyReceiver\`: Your payout wallet address (e.g., \`0x88418F...9841\`)
   - \`_royaltyFeeNumerator\`: \`750\` (which equals 7.5%)
4. Deploy to Polygon (low gas fees) or Ethereum Mainnet.

## Step 3: Mint the 50 Items
- Call \`batchMint(yourWalletAddress, [1, 2, ..., 50])\`.

## Step 4: OpenSea Verification & Storefront
1. Navigate to \`https://opensea.io/get-listed\` and enter your deployed contract address.
2. OpenSea automatically reads \`collection.json\` and the 50 metadata JSON files.
3. Import the included \`Sarawak_Pua_Kumbu_Rarity_Sheet.csv\` for collector verification.
4. Set items to Fixed Price or Dutch Auction.
`;

export async function downloadCollectionZip(items: NFTCollectible[]): Promise<Blob> {
  const zip = new JSZip();

  // 1. Metadata folder (1.json to 50.json)
  const metadataFolder = zip.folder('metadata');
  if (metadataFolder) {
    items.forEach(item => {
      const metadata = generateOpenSeaMetadata(item);
      metadataFolder.file(`${item.id}.json`, JSON.stringify(metadata, null, 2));
    });
    // Add contract-level collection.json
    metadataFolder.file('collection.json', JSON.stringify(generateCollectionContractMetadata(), null, 2));
  }

  // 2. Rarity Spreadsheet CSV
  const rarityFolder = zip.folder('rarity');
  if (rarityFolder) {
    const csvContent = generateRarityCSV(items);
    rarityFolder.file('Sarawak_Pua_Kumbu_Rarity_Sheet.csv', csvContent);
  }

  // 3. Smart Contract & ABI
  const contractFolder = zip.folder('smart-contract');
  if (contractFolder) {
    contractFolder.file('SarawakPuaKumbuNFT.sol', SOLIDITY_CONTRACT_CODE);
    contractFolder.file('contract_abi.json', JSON.stringify(CONTRACT_ABI, null, 2));
  }

  // 4. Documentation & OpenSea deployment instructions
  const docsFolder = zip.folder('docs');
  if (docsFolder) {
    docsFolder.file('OPENSEA_DEPLOYMENT_GUIDE.md', OPENSEA_DEPLOYMENT_GUIDE);
    docsFolder.file('BACKGROUND_LAYERS_REFERENCE.json', JSON.stringify(BACKGROUND_LAYERS, null, 2));
  }

  return await zip.generateAsync({ type: 'blob' });
}

export function downloadBlobAsFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadTextAsFile(content: string, filename: string, mimeType: string = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  downloadBlobAsFile(blob, filename);
}
