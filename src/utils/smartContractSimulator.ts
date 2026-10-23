import { INITIAL_COLLECTIBLES, INITIAL_USER_WALLET } from '../data/puaKumbuData';
import { NFTCollectible, NFTHistoryEvent, UserWallet } from '../types/nft';

const STORAGE_KEY_ITEMS = 'sarawak_pua_kumbu_items_v2';
const STORAGE_KEY_WALLET = 'sarawak_pua_kumbu_wallet_v2';

export class SmartContractSimulator {
  private static instance: SmartContractSimulator;
  private items: NFTCollectible[];
  private wallet: UserWallet;
  private listeners: (() => void)[] = [];

  private constructor() {
    this.items = this.loadItems();
    this.wallet = this.loadWallet();
  }

  public static getInstance(): SmartContractSimulator {
    if (!SmartContractSimulator.instance) {
      SmartContractSimulator.instance = new SmartContractSimulator();
    }
    return SmartContractSimulator.instance;
  }

  private loadItems(): NFTCollectible[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_ITEMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load items from localStorage', e);
    }
    return INITIAL_COLLECTIBLES;
  }

  private loadWallet(): UserWallet {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_WALLET);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load wallet from localStorage', e);
    }
    return INITIAL_USER_WALLET;
  }

  private save() {
    try {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(this.items));
      localStorage.setItem(STORAGE_KEY_WALLET, JSON.stringify(this.wallet));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
    this.notify();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l());
  }

  public getItems(): NFTCollectible[] {
    return this.items;
  }

  public getItemById(id: number): NFTCollectible | undefined {
    return this.items.find(i => i.id === id);
  }

  public getWallet(): UserWallet {
    return this.wallet;
  }

  public setNetwork(network: 'Ethereum' | 'Polygon' | 'Arbitrum') {
    this.wallet = { ...this.wallet, network };
    this.save();
  }

  public switchWalletAddress(newAddress: string, ensName?: string) {
    // Find tokens owned by this address
    const owned = this.items.filter(i => i.ownerAddress.toLowerCase() === newAddress.toLowerCase()).map(i => i.id);
    this.wallet = {
      ...this.wallet,
      address: newAddress,
      ensName,
      ownedTokenIds: owned
    };
    this.save();
  }

  public addFunds(amountEth: number) {
    this.wallet = {
      ...this.wallet,
      balanceEth: Math.round((this.wallet.balanceEth + amountEth) * 100) / 100
    };
    this.save();
  }

  public buyNow(tokenId: number): { success: boolean; message: string; txHash?: string } {
    const item = this.items.find(i => i.id === tokenId);
    if (!item) return { success: false, message: 'Collectible not found' };
    if (!item.isListed) return { success: false, message: 'Item is not currently listed for sale' };
    if (this.wallet.balanceEth < item.priceEth) {
      return { success: false, message: `Insufficient balance (${this.wallet.balanceEth} ETH). Requires ${item.priceEth} ETH` };
    }

    const txHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    const previousOwner = item.ownerAddress;

    // Deduct balance
    this.wallet.balanceEth = Math.round((this.wallet.balanceEth - item.priceEth) * 100) / 100;
    if (!this.wallet.ownedTokenIds.includes(tokenId)) {
      this.wallet.ownedTokenIds.push(tokenId);
    }

    // Update item
    item.ownerAddress = this.wallet.address;
    item.isListed = false;

    const newEvent: NFTHistoryEvent = {
      id: `tx-sale-${Date.now()}`,
      event: 'Sale',
      from: previousOwner,
      to: this.wallet.address,
      priceEth: item.priceEth,
      txHash,
      timestamp: Date.now()
    };
    item.history.unshift(newEvent);

    this.save();
    return { success: true, message: `Successfully purchased ${item.name}! Smart contract executed.`, txHash };
  }

  public listForSale(tokenId: number, priceEth: number): { success: boolean; message: string; txHash?: string } {
    const item = this.items.find(i => i.id === tokenId);
    if (!item) return { success: false, message: 'Collectible not found' };
    if (priceEth <= 0) return { success: false, message: 'Price must be greater than 0 ETH' };

    const txHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    item.isListed = true;
    item.priceEth = priceEth;

    const newEvent: NFTHistoryEvent = {
      id: `tx-list-${Date.now()}`,
      event: 'List',
      from: this.wallet.address,
      priceEth,
      txHash,
      timestamp: Date.now()
    };
    item.history.unshift(newEvent);

    this.save();
    return { success: true, message: `Successfully listed for ${priceEth} ETH on smart contract`, txHash };
  }

  public placeBid(tokenId: number, bidEth: number): { success: boolean; message: string; txHash?: string } {
    const item = this.items.find(i => i.id === tokenId);
    if (!item) return { success: false, message: 'Collectible not found' };
    if (bidEth <= 0) return { success: false, message: 'Bid must be positive' };
    if (item.highestBidEth && bidEth <= item.highestBidEth) {
      return { success: false, message: `Bid must exceed current highest bid of ${item.highestBidEth} ETH` };
    }

    const txHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    item.highestBidEth = bidEth;
    item.highestBidder = this.wallet.address;

    const newEvent: NFTHistoryEvent = {
      id: `tx-bid-${Date.now()}`,
      event: 'Bid',
      from: this.wallet.address,
      priceEth: bidEth,
      txHash,
      timestamp: Date.now()
    };
    item.history.unshift(newEvent);

    this.save();
    return { success: true, message: `Bid of ${bidEth} ETH locked in smart contract escrow`, txHash };
  }

  public transferNFT(tokenId: number, recipientAddress: string): { success: boolean; message: string; txHash?: string } {
    const item = this.items.find(i => i.id === tokenId);
    if (!item) return { success: false, message: 'Collectible not found' };
    if (!recipientAddress || !recipientAddress.startsWith('0x') || recipientAddress.length < 10) {
      return { success: false, message: 'Invalid recipient Ethereum address format' };
    }

    const txHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    const previousOwner = item.ownerAddress;
    item.ownerAddress = recipientAddress;
    item.isListed = false;

    // Remove from user wallet if owned
    this.wallet.ownedTokenIds = this.wallet.ownedTokenIds.filter(id => id !== tokenId);

    const newEvent: NFTHistoryEvent = {
      id: `tx-transfer-${Date.now()}`,
      event: 'Transfer',
      from: previousOwner,
      to: recipientAddress,
      txHash,
      timestamp: Date.now()
    };
    item.history.unshift(newEvent);

    this.save();
    return { success: true, message: `Transferred token #${item.tokenId} to ${recipientAddress}`, txHash };
  }

  public resetToFactory() {
    this.items = INITIAL_COLLECTIBLES;
    this.wallet = INITIAL_USER_WALLET;
    this.save();
  }
}
