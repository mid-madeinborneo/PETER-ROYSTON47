export type MotifArchetype = 
  | 'Geometric Harmony' 
  | 'Plant Inspired' 
  | 'Animal Inspired' 
  | 'Figure Motif' 
  | 'Repeating Bands';

export type EditionTier = 
  | '1/1 Genesis Sovereign' 
  | 'Mythic Ancestral' 
  | 'Sacred Elder' 
  | 'Longhouse Guardian' 
  | 'Traditional Heritage';

export interface NFTAttribute {
  trait_type: string;
  value: string | number;
  display_type?: 'number' | 'boost_percentage' | 'boost_number' | 'date';
  max_value?: number;
}

export interface NFTHistoryEvent {
  id: string;
  event: 'Mint' | 'List' | 'Sale' | 'Bid' | 'Transfer' | 'Cancel Listing';
  from: string;
  to?: string;
  priceEth?: number;
  txHash: string;
  timestamp: number;
}

export interface NFTCollectible {
  id: number;
  tokenId: string; // e.g. "01", "50"
  name: string;
  subtitle: string;
  motifArchetype: MotifArchetype;
  motifSpecificName: string;
  backgroundLayerId: number; // 1 to 20
  backgroundLayerName: string;
  backgroundTheme: string;
  backgroundDescription: string;
  weaveDensity: string;
  naturalDye: string;
  borderTrim: string;
  spiritualBlessing: string;
  editionTier: EditionTier;
  rarityScore: number;
  rarityRank: number; // 1 to 50
  priceEth: number;
  ownerAddress: string;
  creatorAddress: string;
  isListed: boolean;
  highestBidEth?: number;
  highestBidder?: string;
  story: string;
  culturalMeaning: string;
  attributes: NFTAttribute[];
  history: NFTHistoryEvent[];
}

export interface BackgroundLayerInfo {
  id: number;
  name: string;
  theme: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  patternType: 'ikat-mesh' | 'river-flow' | 'charcoal-grain' | 'aurora-streak' | 'sacred-cloud' | 'bark-fleece' | 'geometric-stars' | 'songket-gold';
  description: string;
  culturalLore: string;
}

export interface OpenSeaStandardMetadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
  attributes: NFTAttribute[];
  compiler: string;
}

export interface CollectionStats {
  totalItems: number;
  uniqueOwners: number;
  floorPriceEth: number;
  totalVolumeEth: number;
  highestSaleEth: number;
  royaltiesPercent: number;
  contractAddress: string;
  blockchain: string;
  standard: string;
}

export interface UserWallet {
  address: string;
  ensName?: string;
  balanceEth: number;
  network: 'Ethereum' | 'Polygon' | 'Arbitrum';
  ownedTokenIds: number[];
}
