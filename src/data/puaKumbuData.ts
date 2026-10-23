import { BackgroundLayerInfo, CollectionStats, NFTCollectible, UserWallet } from '../types/nft';

export const BACKGROUND_LAYERS: BackgroundLayerInfo[] = [
  {
    id: 1,
    name: 'Sacred Indigo Tarum Vat',
    theme: 'Midnight Tarum',
    primaryColor: '#0a192f',
    secondaryColor: '#172a45',
    accentColor: '#64ffda',
    patternType: 'ikat-mesh',
    description: 'Fermented indigo leaves steeped under the waning moon producing sacred deep midnight blues.',
    culturalLore: 'In Iban cosmology, Tarum dye represents the realm of spirits and night voyages across the sacred sky.'
  },
  {
    id: 2,
    name: 'Sepang Bark Ochre Weft',
    theme: 'Terrakota Sepang',
    primaryColor: '#3d1a0b',
    secondaryColor: '#6e2b10',
    accentColor: '#d97706',
    patternType: 'bark-fleece',
    description: 'Boiled shavings of the Sepang tree producing warm earthy terracotta and golden ochre undertones.',
    culturalLore: 'The warmth of Sepang is worn by master weavers as a shield against malevolent omens during rituals.'
  },
  {
    id: 3,
    name: 'Ancient Rajang River Mist',
    theme: 'Rajang Emerald',
    primaryColor: '#06201a',
    secondaryColor: '#0f3d32',
    accentColor: '#10b981',
    patternType: 'river-flow',
    description: 'Deep rainforest emerald layered with morning vapor rolling off Sarawak’s mighty Rajang River.',
    culturalLore: 'The river is the ancestral highway of longhouses, connecting the coastal deltas to the interior spirit highlands.'
  },
  {
    id: 4,
    name: 'Hornbill Golden Dawn',
    theme: 'Kenyalang Dawn',
    primaryColor: '#2b1d03',
    secondaryColor: '#5c3d04',
    accentColor: '#f59e0b',
    patternType: 'aurora-streak',
    description: 'Luminous gold and amber gradients inspired by the beak and crown of the sacred Rhinoceros Hornbill.',
    culturalLore: 'The Kenyalang is the emissary of Sengalang Burong, god of war and harvest, carrying prayers to the heavens.'
  },
  {
    id: 5,
    name: 'Belian Ironwood Ember',
    theme: 'Belian Charcoal',
    primaryColor: '#181514',
    secondaryColor: '#2e2522',
    accentColor: '#ef4444',
    patternType: 'charcoal-grain',
    description: 'Impenetrable Borneo Ironwood char with subtle crimson embers glowing beneath the warp.',
    culturalLore: 'Belian wood is so resilient it withstands centuries without decaying, symbolizing unyielding ancestral fortitude.'
  },
  {
    id: 6,
    name: 'Crimson Engkudu Mordant',
    theme: 'Ceremonial Engkudu',
    primaryColor: '#2b090e',
    secondaryColor: '#5e101b',
    accentColor: '#dc2626',
    patternType: 'ikat-mesh',
    description: 'Roots of the Morinda citrifolia tree boiled with ash mordant to yield deep royal burgundy red.',
    culturalLore: 'Only master women weavers who received dream visions (Ngar) were permitted to brew the dangerous Engkudu vat.'
  },
  {
    id: 7,
    name: 'Batang Ai Deep Azure',
    theme: 'Highland Azure',
    primaryColor: '#081726',
    secondaryColor: '#12304d',
    accentColor: '#38bdf8',
    patternType: 'river-flow',
    description: 'Crystalline twilight reflections over the pristine highland reservoir of Batang Ai.',
    culturalLore: 'Sacred crocodile spirit territories where ancestral pacts for safety and bountiful fish were forged.'
  },
  {
    id: 8,
    name: 'Sacred Tuak Luminescence',
    theme: 'Tuak Gold Haze',
    primaryColor: '#26200d',
    secondaryColor: '#4d411b',
    accentColor: '#eab308',
    patternType: 'aurora-streak',
    description: 'Silken champagne shimmer reminiscent of newly fermented ceremonial glutinous rice wine.',
    culturalLore: 'Tuak flows during Gawai Dayak festivals to welcome returning longhouse warriors and divine guests.'
  },
  {
    id: 9,
    name: 'Rainforest Canopy Obsidian',
    theme: 'Jungle Obsidian',
    primaryColor: '#0b160f',
    secondaryColor: '#183121',
    accentColor: '#84cc16',
    patternType: 'sacred-cloud',
    description: 'Dense primeval Borneo jungle canopy where sunbeams rarely pierce the dense hardwood crowns.',
    culturalLore: 'The forest ceiling holds medicinal herbs, bird omens, and the sacred orchids of the spirit mountain.'
  },
  {
    id: 10,
    name: 'Batang Skrang Sunburst',
    theme: 'Skrang Sandstone',
    primaryColor: '#241a0e',
    secondaryColor: '#4f3b1f',
    accentColor: '#f97316',
    patternType: 'bark-fleece',
    description: 'Golden riverbed sandstone irradiated by mid-day equatorial sunlight along the Skrang rapids.',
    culturalLore: 'The historic heartland where Iban longhouses established their most legendary woven textile lineages.'
  },
  {
    id: 11,
    name: 'Santubong Sunset Coral',
    theme: 'Santubong Coral',
    primaryColor: '#2a0e14',
    secondaryColor: '#541c29',
    accentColor: '#fb7185',
    patternType: 'aurora-streak',
    description: 'Dusky coral and fiery violet waves breaking beneath the legendary silhouette of Mount Santubong.',
    culturalLore: 'Princess Santubong was transformed into the mountain peak after weaving celestial garments for mortal kings.'
  },
  {
    id: 12,
    name: 'Mount Santubong Cloud Peak',
    theme: 'Misty Peak Slate',
    primaryColor: '#161922',
    secondaryColor: '#292f3d',
    accentColor: '#94a3b8',
    patternType: 'sacred-cloud',
    description: 'Veils of silver mountain cloud enveloping primordial rainforest crags and monolithic boulders.',
    culturalLore: 'High cloud peaks are where weavers seek dreams (Mimpi) before beginning sacred ceremonial blankets.'
  },
  {
    id: 13,
    name: 'Kenyalang Royal Obsidian',
    theme: 'Royal Obsidian Gold',
    primaryColor: '#0e0e12',
    secondaryColor: '#1f1e24',
    accentColor: '#d4af37',
    patternType: 'songket-gold',
    description: 'Pure obsidian pitch velvet interwoven with glistening 24k gold leaf and metallic filigree.',
    culturalLore: 'Reserved strictly for the highest aristocracy (Raja Berani) and sacred master weavers of the longhouse.'
  },
  {
    id: 14,
    name: 'Sebangki Bark Tawny Tan',
    theme: 'Sebangki Tawny',
    primaryColor: '#231810',
    secondaryColor: '#473121',
    accentColor: '#b45309',
    patternType: 'bark-fleece',
    description: 'Traditional wild barkcloth tanned with crushed river nutshells and Sebangki tree liquor.',
    culturalLore: 'Before cotton was cultivated, ancient ancestors beat tough tree bark into pliable ceremonial garments.'
  },
  {
    id: 15,
    name: 'Ancient Longhouse Timber',
    theme: 'Smoked Bamboo Wood',
    primaryColor: '#191411',
    secondaryColor: '#362820',
    accentColor: '#a16207',
    patternType: 'charcoal-grain',
    description: 'Decades of aromatic wood smoke patina curing the bamboo floor slats and ironwood roof shingles.',
    culturalLore: 'The longhouse gallery (Ruai) is where communal weavers sit in line, chanting ancient weaving epics.'
  },
  {
    id: 16,
    name: 'Niah Cave Karst Shadow',
    theme: 'Karst Crystalline',
    primaryColor: '#121418',
    secondaryColor: '#21262d',
    accentColor: '#38bdf8',
    patternType: 'charcoal-grain',
    description: 'Shadowed limestone cavern depths illuminated by crystalline calcite veins and swiftlet flights.',
    culturalLore: '40,000 years of human ritual memory resides in Niah, where red hematite cave paintings guard ancient tombs.'
  },
  {
    id: 17,
    name: 'Celestial Bintang Iban',
    theme: 'Cosmic Constellation',
    primaryColor: '#0a0d1a',
    secondaryColor: '#151b36',
    accentColor: '#818cf8',
    patternType: 'geometric-stars',
    description: 'Deep navy night firmament charted with the Pleiades (Bintang Tujuh) and Orion (Bintang Belantik).',
    culturalLore: 'Iban elders read the stars to determine the exact lunar night to commence agricultural clearing and weaving.'
  },
  {
    id: 18,
    name: 'Turmeric Kunyit Solar Radiance',
    theme: 'Ceremonial Kunyit',
    primaryColor: '#281c03',
    secondaryColor: '#573d06',
    accentColor: '#facc15',
    patternType: 'aurora-streak',
    description: 'Vibrant sun-yellow ground created by freshly pressed highland turmeric roots and lime water.',
    culturalLore: 'Yellow is the color of nobility, consecrated offerings, and the divine feathers of guardian birds.'
  },
  {
    id: 19,
    name: 'Sacred Loom Warp Tangle',
    theme: 'Raw Cotton Warp',
    primaryColor: '#171412',
    secondaryColor: '#302924',
    accentColor: '#d6d3d1',
    patternType: 'ikat-mesh',
    description: 'Intricately stretched wild rainforest cotton threads on the traditional back-strap loom (Tumpoh).',
    culturalLore: 'The tension of the backstrap loom is maintained by the weaver’s own body, connecting her pulse to the cloth.'
  },
  {
    id: 20,
    name: 'Golden Songket Brocade Haze',
    theme: 'Songket Brocade Gold',
    primaryColor: '#241a05',
    secondaryColor: '#4f380a',
    accentColor: '#eab308',
    patternType: 'songket-gold',
    description: 'Lustrous supplementary metallic weft shimmering across rich traditional deep madder red foundations.',
    culturalLore: 'The pinnacle of Royal Sarawak textile art, reflecting light like molten brass gongs in the feast hall.'
  }
];

// Helper definitions for generating the 50 unique NFT variations
interface RawNFTDraft {
  id: number;
  name: string;
  subtitle: string;
  motifArchetype: 'Geometric Harmony' | 'Plant Inspired' | 'Animal Inspired' | 'Figure Motif' | 'Repeating Bands';
  motifSpecificName: string;
  backgroundLayerId: number;
  weaveDensity: string;
  naturalDye: string;
  borderTrim: string;
  spiritualBlessing: string;
  editionTier: '1/1 Genesis Sovereign' | 'Mythic Ancestral' | 'Sacred Elder' | 'Longhouse Guardian' | 'Traditional Heritage';
  priceEth: number;
  culturalMeaning: string;
  story: string;
}

const RAW_ITEMS: RawNFTDraft[] = [
  {
    id: 1,
    name: 'Kenyalang Supreme Sovereign',
    subtitle: 'Omen of Sengalang Burong',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 13, // Kenyalang Royal Obsidian
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: '1/1 Genesis Sovereign',
    priceEth: 3.85,
    culturalMeaning: 'The Rhinoceros Hornbill is the sacred omen king in Sarawak, mediating between earth and the sky deity Sengalang Burong.',
    story: 'Woven over sixteen moon cycles by a master weaver who received the sacred dream vision of the golden bird soaring over Mount Santubong.'
  },
  {
    id: 2,
    name: 'Engkaramba Spirit of the Longhouse',
    subtitle: 'Guardian of the Sacred Hearth',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 1, // Sacred Indigo Tarum Vat
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: '1/1 Genesis Sovereign',
    priceEth: 3.50,
    culturalMeaning: 'Humanoid spirit figures (Engkaramba) act as supernatural sentinels, warding off malevolent jungle entities and protecting children.',
    story: 'Preserves the spiritual pulse of ancestral lineage, featuring raised hand talismans passed down through ten generations of longhouse chieftains.'
  },
  {
    id: 3,
    name: 'Diamond of the Cosmos Matrix',
    subtitle: 'Sacred Harmony of the Weft',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 20, // Golden Songket Brocade Haze
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: '1/1 Genesis Sovereign',
    priceEth: 3.20,
    culturalMeaning: 'Interlocking lozenges reflect the balance between human order and primeval nature, symbolizing the unbreakable longhouse community.',
    story: 'Every diamond apex connects to an ancestral star node, creating an impenetrable geometric tapestry of sacred balance.'
  },
  {
    id: 4,
    name: 'Celestial Fern of Eternal Rebirth',
    subtitle: 'Flora of the Rainforest Canopy',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Paku Iban (Sacred Unfurling Fern)',
    backgroundLayerId: 3, // Ancient Rajang River Mist
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: '1/1 Genesis Sovereign',
    priceEth: 3.10,
    culturalMeaning: 'The young Paku fern shoot uncurls perpetually toward the light, embodying regeneration, medicinal nourishment, and humility.',
    story: 'Bathed in river emerald vapors, this piece mirrors the eternal morning green of the virgin interior Borneo headwaters.'
  },
  {
    id: 5,
    name: 'The River of Endless Generations',
    subtitle: 'Repeating Rhythm of Time',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 6, // Crimson Engkudu Mordant
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: '1/1 Genesis Sovereign',
    priceEth: 2.95,
    culturalMeaning: 'Continuous rhythmic bands signify the unending current of river life and the cycles of planting, harvest, and celebration.',
    story: 'The master weaver knotted fifty distinct band motifs, each representing a cycle of stars guiding her clan along the Batang Rajang.'
  },
  {
    id: 6,
    name: 'Hornbill Ascendant at Rajang Peak',
    subtitle: 'Skyward Flight of the Messenger',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 4, // Hornbill Golden Dawn
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.40,
    culturalMeaning: 'The upward curve of the Hornbill casque directs prayers straight to the heavenly longhouse of the celestial ancestors.',
    story: 'Captured at the precise second dawn breaks across the hornbill roost in the tall Tapang trees of central Sarawak.'
  },
  {
    id: 7,
    name: 'Ancestral Sentinel of Batang Ai',
    subtitle: 'Watcher of the Misty Rapids',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 7, // Batang Ai Deep Azure
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.25,
    culturalMeaning: 'Placed at the threshold of the longhouse bilek, Engkaramba figures ensure that only beneficial dreams enter while inhabitants sleep.',
    story: 'Colored with wild mountain tarum fermented in hollow bamboo containers buried beneath the damp earth.'
  },
  {
    id: 8,
    name: 'Lozenge of the Ironwood Shield',
    subtitle: 'Impenetrable Tribal Geometry',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Selampit Belian (Interlocking Ironwood)',
    backgroundLayerId: 5, // Belian Ironwood Ember
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.15,
    culturalMeaning: 'The diamond weave mirrors the layered scales of the ironwood bark, repelling spearheads and malevolent whispers alike.',
    story: 'Woven with dense spun thread treated with iron-rich bog mud to achieve an impenetrable obsidian depth.'
  },
  {
    id: 9,
    name: 'Tendril of the Mountain Vine',
    subtitle: 'Flora of the Spirit Summit',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Buah Remba (Ancestral Creeping Vine)',
    backgroundLayerId: 18, // Turmeric Kunyit Solar Radiance
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.05,
    culturalMeaning: 'Vines symbolize the ties that bind families, climbing relentlessly toward heaven without losing touch with the forest floor.',
    story: 'Glows with the rich yellow of ceremonial kunyit, worn during royal welcoming rites for visiting elders.'
  },
  {
    id: 10,
    name: 'Continuous Rhythm of the Longhouse',
    subtitle: 'Bands of Communal Harmony',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 2, // Sepang Bark Ochre Weft
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Mythic Ancestral',
    priceEth: 1.95,
    culturalMeaning: 'Repeating bands echo the communal walkway of the longhouse ruai where life is shared without barriers.',
    story: 'Infused with Sepang bark extracts harvested from the old growth hillsides bordering the Kalimantan divide.'
  },
  {
    id: 11,
    name: 'Kenyalang of the Starry Canopy',
    subtitle: 'Constellation Bird of Omen',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 17, // Celestial Bintang Iban
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.35,
    culturalMeaning: 'Depicts the sacred constellation of the Hornbill, whose arrival signals the start of the ceremonial year.',
    story: 'Deep indigo warp threads studded with miniature gold brocade stars charting the southern celestial path.'
  },
  {
    id: 12,
    name: 'Engkaramba of the Smoked Timbers',
    subtitle: 'Guardian of the Fireplace',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 15, // Ancient Longhouse Timber
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Mythic Ancestral',
    priceEth: 2.10,
    culturalMeaning: 'Smoked timbers hold the laughter and stories of hundreds of ancestors; this motif guards that collective memory.',
    story: 'Dyed using soot scraped from the longhouse smoking racks where wild boar and salted river fish are cured.'
  },
  {
    id: 13,
    name: 'Loom Matrix of the Sacred Knot',
    subtitle: 'The Binding of Worlds',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 19, // Sacred Loom Warp Tangle
    weaveDensity: 'Wild Raw Jungle Cotton',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Mythic Ancestral',
    priceEth: 1.85,
    culturalMeaning: 'Honors the sacred loom tension beam, which must remain perfectly taut to preserve the harmony of the spirit universe.',
    story: 'Woven from hand-picked wild jungle cotton spun on primitive wooden spindles along the Skrang River.'
  },
  {
    id: 14,
    name: 'Fern of the Sunlit Rapids',
    subtitle: 'Living Leaf of Batang Skrang',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Paku Iban (Sacred Unfurling Fern)',
    backgroundLayerId: 10, // Batang Skrang Sunburst
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Mythic Ancestral',
    priceEth: 1.90,
    culturalMeaning: 'River ferns withstand monsoon currents by flexing with the floodwaters, demonstrating the power of adaptability.',
    story: 'Reflects the warm amber warmth of river rocks basking under late afternoon sunrays after a torrential downpour.'
  },
  {
    id: 15,
    name: 'Bands of the Ancient Cavern',
    subtitle: 'Strata of Niah Limestone',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 16, // Niah Cave Karst Shadow
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Mythic Ancestral',
    priceEth: 1.80,
    culturalMeaning: 'Layers of cave sediment tell forty millennia of human existence; these woven bands replicate the ancient stone strata.',
    story: 'Inspired by the hematite ship-of-the-dead drawings adorning the cliff walls of the Great Cave of Niah.'
  },
  {
    id: 16,
    name: 'Hornbill of the Tuak Revelry',
    subtitle: 'Harbinger of Gawai Abundance',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 8, // Sacred Tuak Luminescence
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Sacred Elder',
    priceEth: 1.65,
    culturalMeaning: 'Carried aloft on wooden carved poles during the Gawai Kenyalang feast to invite bountiful rice yields.',
    story: 'Shimmers with pale honey gold tones that evoke earthen jars overflowing with newly pressed tuak.'
  },
  {
    id: 17,
    name: 'Engkaramba of the Obsidian Throne',
    subtitle: 'Night Guardian of the Chief',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 13, // Kenyalang Royal Obsidian
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Sacred Elder',
    priceEth: 1.75,
    culturalMeaning: 'Woven for the personal chambers of the village chief (Tuai Rumah) to intercept malevolent dreams before midnight.',
    story: 'Created with dense double ikat tying that prevents dye bleed, resulting in diamond-sharp ancestral silhouettes.'
  },
  {
    id: 18,
    name: 'The Sacred Dragon Serpent',
    subtitle: 'Mythic Sovereign of Deep Waters',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Nabau Naga (Sacred Water Dragon)',
    backgroundLayerId: 1, // Sacred Indigo Tarum Vat
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Courage in Battle & River Mastery',
    editionTier: 'Sacred Elder',
    priceEth: 1.70,
    culturalMeaning: 'Nabau is the colossal horned water dragon dwelling beneath river rapids, testing the bravery of warriors.',
    story: 'Deep swirling indigo currents form the sinuous coils of Nabau as it slumbers beneath the river foam.'
  },
  {
    id: 19,
    name: 'Lozenge of the Sunset Cloud',
    subtitle: 'Dusk Over Mount Santubong',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 11, // Santubong Sunset Coral
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Sacred Elder',
    priceEth: 1.55,
    culturalMeaning: 'Sunset brings the meeting of day and night spirits; the diamond seal maintains harmony during this sacred transition.',
    story: 'Woven with coral red pigments extracted from wild coastal roots gathered at low tide near the South China Sea.'
  },
  {
    id: 20,
    name: 'Fern of the Mist Shrouded Peak',
    subtitle: 'Highland Flora of the Spirit Realm',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Paku Iban (Sacred Unfurling Fern)',
    backgroundLayerId: 12, // Mount Santubong Cloud Peak
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Sacred Elder',
    priceEth: 1.50,
    culturalMeaning: 'Mountain ferns are believed to drink cloud water directly from the heavens, imparting clarity of vision.',
    story: 'Subtle slate grey and mist-silver backdrop creates an ethereal contrast with vibrant ochre fronds.'
  },
  {
    id: 21,
    name: 'Bands of the Sacred Crimson Vat',
    subtitle: 'The Blood of Morinda Roots',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 6, // Crimson Engkudu Mordant
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Sacred Elder',
    priceEth: 1.60,
    culturalMeaning: 'Engkudu red is the most revered color in Iban culture, embodying vital lifeblood, valor, and fire.',
    story: 'Boiled with wood ash and wild ginger leaves over four consecutive days until the crimson turns luminous.'
  },
  {
    id: 22,
    name: 'Kenyalang of the Primeval Canopy',
    subtitle: 'Monarch of the Ironwood Heights',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 9, // Rainforest Canopy Obsidian
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Sacred Elder',
    priceEth: 1.45,
    culturalMeaning: 'When the hornbill calls with its deep whooshing wingbeats, all jungle birds fall silent in deference.',
    story: 'Rich rainforest green background accented with warm golden-yellow breast feathers in precision weave.'
  },
  {
    id: 23,
    name: 'Engkaramba of the Tawny Bark',
    subtitle: 'Forest Shaman Guardian',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 14, // Sebangki Bark Tawny Tan
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Sacred Elder',
    priceEth: 1.40,
    culturalMeaning: 'Reminds modern dwellers of ancient times when ancestors clothed themselves in softened tree bark.',
    story: 'Features rustic earthy textures that evoke the smell of damp rainforest soil and moss-covered river boulders.'
  },
  {
    id: 24,
    name: 'Lozenge of the Dawn Sun',
    subtitle: 'Radiant Awakening of the Clan',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 4, // Hornbill Golden Dawn
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Sacred Elder',
    priceEth: 1.50,
    culturalMeaning: 'Represents the moment the first ray of sunlight hits the longhouse rooftop, dispersing spirits of darkness.',
    story: 'Woven with fine silk and gold thread accents that catch ambient light like water droplets on a spiderweb.'
  },
  {
    id: 25,
    name: 'Creeping Vine of the Longhouse Post',
    subtitle: 'The Pillar of Tribal Strength',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Buah Remba (Ancestral Creeping Vine)',
    backgroundLayerId: 15, // Ancient Longhouse Timber
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Sacred Elder',
    priceEth: 1.35,
    culturalMeaning: 'Vines entwined around timber pillars represent how community support reinforces the physical longhouse.',
    story: 'Rich warm wood tones create a grounding foundation for crimson floral scrolls and twisting tendrils.'
  },
  {
    id: 26,
    name: 'Bands of the River Current',
    subtitle: 'Flow of the Batang Ai',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 7, // Batang Ai Deep Azure
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Sacred Elder',
    priceEth: 1.30,
    culturalMeaning: 'Rivers give life, carry canoes, and wash away sorrows; these repeating bands honor the waterways.',
    story: 'Created with wave-pattern resist binding, leaving undyed white highlights reminiscent of river rapids.'
  },
  {
    id: 27,
    name: 'Brahminy Kite of the Sky',
    subtitle: 'Lang Ngindang Soaring Over Hills',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Lang Ngindang (Brahminy Kite Sky Sovereign)',
    backgroundLayerId: 3, // Ancient Rajang River Mist
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Sacred Elder',
    priceEth: 1.40,
    culturalMeaning: 'Lang Singalang Burong manifests on earth as the Brahminy Kite, guiding hunters and warning of obstacles.',
    story: 'Feathered chevron motifs ripple across emerald mist backgrounds in a dynamic tribute to raptor wings.'
  },
  {
    id: 28,
    name: 'Engkaramba of the Riverbank',
    subtitle: 'Sentinel of the Canoe Landing',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 2, // Sepang Bark Ochre Weft
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Sacred Elder',
    priceEth: 1.25,
    culturalMeaning: 'Placed near the river landing (Pangkalan) to ensure canoes return laden with fish and goods.',
    story: 'Rendered in warm terracotta and burnt orange tones, evoking sunset over red clay riverbanks.'
  },
  {
    id: 29,
    name: 'Lozenge of the Star Constellation',
    subtitle: 'Pleiades Pattern of the Planting Season',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 17, // Celestial Bintang Iban
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Sacred Elder',
    priceEth: 1.55,
    culturalMeaning: 'The seven stars of the Pleiades mark the moment to sow hill padi rice; this cloth guarantees a full crop.',
    story: 'Shimmering metallic gold threads form intricate diamonds against a velvet starry navy field.'
  },
  {
    id: 30,
    name: 'Fern of the Indigo Pool',
    subtitle: 'Night Botanical of the Deep Stream',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Paku Iban (Sacred Unfurling Fern)',
    backgroundLayerId: 1, // Sacred Indigo Tarum Vat
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Sacred Elder',
    priceEth: 1.20,
    culturalMeaning: 'Water ferns growing in deep forest pools are believed to possess cooling spiritual properties.',
    story: 'Deep blue tones provide a mysterious canvas for finely etched botanical fronds woven with surgical precision.'
  },
  {
    id: 31,
    name: 'Bands of the Ironwood Hearth',
    subtitle: 'Endless Protection of the Hearthstone',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 5, // Belian Ironwood Ember
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.95,
    culturalMeaning: 'The longhouse hearth must never be allowed to go cold; these bands embody perpetual warmth.',
    story: 'Features charcoal black and ember red stripes woven with dense resilient highland cotton.'
  },
  {
    id: 32,
    name: 'Hornbill of the Golden Harvest',
    subtitle: 'Winged Blessing of Full Granaries',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 18, // Turmeric Kunyit Solar Radiance
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Longhouse Guardian',
    priceEth: 1.10,
    culturalMeaning: 'Associated with golden rice grains stored high in longhouse lofts after a triumphant harvest.',
    story: 'Warm saffron yellow ground illuminates stylized hornbill heads interlocked in sacred rhythm.'
  },
  {
    id: 33,
    name: 'Engkaramba of the Stone Cavern',
    subtitle: 'Guardian of the Mountain Secrets',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 16, // Niah Cave Karst Shadow
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.90,
    culturalMeaning: 'Protects against unseen subterranean forces and honors burial grounds of early ancestors.',
    story: 'Charcoal and slate shades with stark bone-white figure contours standing in vigilant posture.'
  },
  {
    id: 34,
    name: 'Lozenge of the Golden Brocade',
    subtitle: 'Royal Weaver Masterpiece',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 20, // Golden Songket Brocade Haze
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Longhouse Guardian',
    priceEth: 1.15,
    culturalMeaning: 'Demonstrates mastery of both Ikat dyeing and supplementary metallic gold brocade techniques.',
    story: 'Glints with golden light when turned in the hand, replicating royal ceremonial attire.'
  },
  {
    id: 35,
    name: 'Sprouting Paku of the Morning Dew',
    subtitle: 'Life Awakening on the Riverbank',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Paku Iban (Sacred Unfurling Fern)',
    backgroundLayerId: 8, // Sacred Tuak Luminescence
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.85,
    culturalMeaning: 'The dew on fern fronds is collected by medicine women as an elixir of youthful vitality.',
    story: 'Delicate cream and pale gold textures frame curling fern nodes that stretch rhythmically upwards.'
  },
  {
    id: 36,
    name: 'Bands of the River Sandbank',
    subtitle: 'Ripples of the Skrang Shallows',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 10, // Batang Skrang Sunburst
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.80,
    culturalMeaning: 'Mirrors water rippling across smooth river pebbles where children swim and elders bathe.',
    story: 'Warm amber ochre stripes with alternating lozenge micro-insets that create movement across the textile.'
  },
  {
    id: 37,
    name: 'Kenyalang of the Ancient Loom',
    subtitle: 'Sacred Hornbill in Raw Cotton',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 19, // Sacred Loom Warp Tangle
    weaveDensity: 'Wild Raw Jungle Cotton',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.95,
    culturalMeaning: 'Honors the sacred patience required to hand-weave every single hornbill feather motif.',
    story: 'Organic raw cotton texture with irregular slubs and knots that celebrate natural handcrafted authenticity.'
  },
  {
    id: 38,
    name: 'Engkaramba of the Coral Sunset',
    subtitle: 'Spirit Sentinel of Coastal Waters',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 11, // Santubong Sunset Coral
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.90,
    culturalMeaning: 'Guides offshore fishermen through storm swells back to the safe shelter of the river estuary.',
    story: 'Vibrant coral pink and deep crimson create a dramatic silhouette of the protective guardian figure.'
  },
  {
    id: 39,
    name: 'Lozenge of the Smoked Bamboo',
    subtitle: 'Geometric Pattern of the Verandah',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Selampit Belian (Interlocking Ironwood)',
    backgroundLayerId: 15, // Ancient Longhouse Timber
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.75,
    culturalMeaning: 'Reflects the split-bamboo weaving pattern used for drying mats on the open longhouse tanju.',
    story: 'Rich smoky earth tones with clean geometric diamonds that convey rustic architectural warmth.'
  },
  {
    id: 40,
    name: 'Sacred Vine of the Mist Waterfall',
    subtitle: 'Botanical Grace of the Rapids',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Buah Remba (Ancestral Creeping Vine)',
    backgroundLayerId: 12, // Mount Santubong Cloud Peak
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.85,
    culturalMeaning: 'Vines clinging to slippery waterfall rocks represent steadfast determination in the face of adversity.',
    story: 'Silver mist grey backdrop highlights indigo vines curling like water drops suspended in air.'
  },
  {
    id: 41,
    name: 'Bands of the Highland Azure Lake',
    subtitle: 'Waves of the Mountain Reservoir',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 7, // Batang Ai Deep Azure
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.75,
    culturalMeaning: 'The lake is a mirror reflecting the clouds; its bands echo the sky’s harmony on the mountain water.',
    story: 'Interlocking zigzag lines dyed in rich gradations of azure blue, sky turquoise, and navy indigo.'
  },
  {
    id: 42,
    name: 'Kenyalang of the Tawny Hills',
    subtitle: 'Bird of the Inland Valleys',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 14, // Sebangki Bark Tawny Tan
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Longhouse Guardian',
    priceEth: 0.70,
    culturalMeaning: 'Depicts hornbill pairs nesting in high hollows of forest trees, symbolizing lifelong loyalty.',
    story: 'Tawny barkcloth brown tones with warm ochre highlights and deep charcoal outlining.'
  },
  {
    id: 43,
    name: 'Engkaramba of the Golden Dawn',
    subtitle: 'Morning Sentinel of the Path',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 4, // Hornbill Golden Dawn
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.65,
    culturalMeaning: 'Greets hunters as they leave the longhouse at first dawn, blessing their path through the jungle.',
    story: 'Bright morning gold and burnt orange contrast against black silhouette figures with raised guardian hands.'
  },
  {
    id: 44,
    name: 'Lozenge of the Deep River Mist',
    subtitle: 'Emerald Harmony of Batang Rajang',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 3, // Ancient Rajang River Mist
    weaveDensity: 'Loose Back-strap Weave',
    naturalDye: 'Sebangki Bark Ochre',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.60,
    culturalMeaning: 'The diamond shapes channel the peaceful energy of mist-shrouded river valleys into the home.',
    story: 'Emerald green undertones meet warm copper lines in an intimate celebration of Sarawak river life.'
  },
  {
    id: 45,
    name: 'Botanical Tendril of the Sacred Vat',
    subtitle: 'The Vine in Crimson Engkudu',
    motifArchetype: 'Plant Inspired',
    motifSpecificName: 'Buah Remba (Ancestral Creeping Vine)',
    backgroundLayerId: 6, // Crimson Engkudu Mordant
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Sacred Imperial Ochre Binding',
    spiritualBlessing: 'Unending Vitality & Gentle Harmony',
    editionTier: 'Traditional Heritage',
    priceEth: 0.55,
    culturalMeaning: 'Red vines symbolize the lifeblood connecting human bodies to the vegetable roots of the earth.',
    story: 'Classic deep burgundy red foundation with sharp ochre and white highlights woven into climbing floral arabesques.'
  },
  {
    id: 46,
    name: 'Bands of the Ironwood Charcoal',
    subtitle: 'Resilient Stripes of the Longhouse Core',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 5, // Belian Ironwood Ember
    weaveDensity: 'Wild Raw Jungle Cotton',
    naturalDye: 'Smoked Charcoal & Iron Mordant',
    borderTrim: 'Carved Brass Gong Edge',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.50,
    culturalMeaning: 'Dark bands anchor the textile, grounding the soul in times of trial and uncertainty.',
    story: 'Sturdy wild cotton yarn spun to endure centuries of ceremonial use across successive generations.'
  },
  {
    id: 47,
    name: 'Kenyalang of the Coral Sky',
    subtitle: 'Evening Flight Over Santubong',
    motifArchetype: 'Animal Inspired',
    motifSpecificName: 'Burung Kenyalang (Sacred Hornbill)',
    backgroundLayerId: 11, // Santubong Sunset Coral
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Sovereign Freedom & Divine Strength',
    editionTier: 'Traditional Heritage',
    priceEth: 0.60,
    culturalMeaning: 'Hornbills returning to their roost at sunset remind all people of the peace found in returning home.',
    story: 'Soft twilight coral and rose tones that illuminate the proud curved beak and wings of the sacred bird.'
  },
  {
    id: 48,
    name: 'Engkaramba of the Midnight Star',
    subtitle: 'Sentinel of the Pleiades',
    motifArchetype: 'Figure Motif',
    motifSpecificName: 'Engkaramba Antu Berambun (Spirit Guardian)',
    backgroundLayerId: 17, // Celestial Bintang Iban
    weaveDensity: 'Royal Double Ikat',
    naturalDye: 'Fermented Tarum Indigo',
    borderTrim: 'Longhouse Elder Tuai Seal',
    spiritualBlessing: 'Spiritual Protection & Hearth Continuity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.55,
    culturalMeaning: 'Human ancestors look down from the night sky as watchful stars, blessing the sleep of mortals.',
    story: 'Deep indigo field dotted with star nodes framing the bold standing figure of the ancestral spirit.'
  },
  {
    id: 49,
    name: 'Lozenge of the Golden Wine Haze',
    subtitle: 'Ceremonial Diamond of Gawai Dayak',
    motifArchetype: 'Geometric Harmony',
    motifSpecificName: 'Buah Bungai Kerubong (Sacred Diamond Web)',
    backgroundLayerId: 8, // Sacred Tuak Luminescence
    weaveDensity: 'Master Weaver Tight Spun',
    naturalDye: 'Turmeric Kunyit Infusion',
    borderTrim: 'Woven Jungle Cane Binding',
    spiritualBlessing: 'Universal Balance & Tribal Unity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.45,
    culturalMeaning: 'Woven for festive banquets where differences are set aside and brotherhood is renewed.',
    story: 'Champagne gold and honey ochre create an inviting glow that enhances any ceremonial display.'
  },
  {
    id: 50,
    name: 'Genesis Bands of the Royal Loom',
    subtitle: 'Alpha & Omega of Pua Kumbu',
    motifArchetype: 'Repeating Bands',
    motifSpecificName: 'Belun Langit (Celestial Horizon Bands)',
    backgroundLayerId: 13, // Kenyalang Royal Obsidian
    weaveDensity: 'Gold Thread Songket Infusion',
    naturalDye: 'Pure Natural Engkudu Root',
    borderTrim: 'Radiant 24K Gold Leaf Trim',
    spiritualBlessing: 'Generational Continuity & Prosperity',
    editionTier: 'Traditional Heritage',
    priceEth: 0.70,
    culturalMeaning: 'The final piece of the 50-item collection, completing the cycle and ensuring the craft lives into eternity.',
    story: 'Combines royal obsidian black with gold thread borders and continuous sacred red bands to seal the collection.'
  }
];

// Calculate statistical trait rarity scores for all 50 items
function computeRarityAndAttributes(raws: RawNFTDraft[]): NFTCollectible[] {
  const total = raws.length; // 50

  // Count frequencies of each trait value
  const traitCounts: Record<string, Record<string, number>> = {};
  const trackTrait = (category: string, value: string) => {
    if (!traitCounts[category]) traitCounts[category] = {};
    traitCounts[category][value] = (traitCounts[category][value] || 0) + 1;
  };

  raws.forEach(item => {
    const bg = BACKGROUND_LAYERS.find(b => b.id === item.backgroundLayerId);
    trackTrait('Motif Archetype', item.motifArchetype);
    trackTrait('Specific Motif', item.motifSpecificName);
    trackTrait('Background Layer', bg ? bg.name : `Background #${item.backgroundLayerId}`);
    trackTrait('Weave Density', item.weaveDensity);
    trackTrait('Natural Dye', item.naturalDye);
    trackTrim('Border Trim', item.borderTrim);
    trackTrait('Spiritual Blessing', item.spiritualBlessing);
    trackTrait('Edition Tier', item.editionTier);
  });

  function trackTrim(category: string, value: string) {
    trackTrait(category, value);
  }

  // Calculate raw rarity score for each item: sum of (1 / (count / total))
  const withScores = raws.map(item => {
    const bg = BACKGROUND_LAYERS.find(b => b.id === item.backgroundLayerId)!;
    const bgName = bg.name;

    const attributes = [
      { trait_type: 'Motif Archetype', value: item.motifArchetype },
      { trait_type: 'Specific Motif', value: item.motifSpecificName },
      { trait_type: 'Background Layer', value: bgName },
      { trait_type: 'Weave Density', value: item.weaveDensity },
      { trait_type: 'Natural Dye', value: item.naturalDye },
      { trait_type: 'Border Trim', value: item.borderTrim },
      { trait_type: 'Spiritual Blessing', value: item.spiritualBlessing },
      { trait_type: 'Edition Tier', value: item.editionTier },
      { trait_type: 'Token ID Number', value: item.id, display_type: 'number' as const }
    ];

    let rarityScore = 0;
    attributes.forEach(attr => {
      if (attr.trait_type !== 'Token ID Number') {
        const count = traitCounts[attr.trait_type]?.[attr.value as string] || 1;
        const frequency = count / total;
        rarityScore += (1 / frequency);
      }
    });

    // Special bonus for 1/1 Genesis Sovereigns
    if (item.editionTier === '1/1 Genesis Sovereign') {
      rarityScore += 50;
    } else if (item.editionTier === 'Mythic Ancestral') {
      rarityScore += 20;
    }

    return {
      item,
      bg,
      attributes,
      rarityScore: Math.round(rarityScore * 10) / 10
    };
  });

  // Sort descending by rarityScore to assign rank 1..50
  const sorted = [...withScores].sort((a, b) => b.rarityScore - a.rarityScore);
  const rankMap = new Map<number, number>();
  sorted.forEach((entry, idx) => {
    rankMap.set(entry.item.id, idx + 1);
  });

  // Build final NFTCollectible objects
  return raws.map(item => {
    const bg = BACKGROUND_LAYERS.find(b => b.id === item.backgroundLayerId)!;
    const computed = withScores.find(w => w.item.id === item.id)!;
    const rank = rankMap.get(item.id) || 1;
    const tokenId = item.id.toString().padStart(2, '0');

    // Default simulated owners and listing state
    const isSpecial = item.id <= 5;
    const ownerAddress = isSpecial 
      ? '0x71C...4e8B (Master Vault)' 
      : `0x${(item.id * 1847192).toString(16).padEnd(6, 'a')}...${(item.id * 8329).toString(16).slice(0, 4)}`;

    return {
      id: item.id,
      tokenId,
      name: `Pua Kumbu #${tokenId}: ${item.name}`,
      subtitle: item.subtitle,
      motifArchetype: item.motifArchetype,
      motifSpecificName: item.motifSpecificName,
      backgroundLayerId: item.backgroundLayerId,
      backgroundLayerName: bg.name,
      backgroundTheme: bg.theme,
      backgroundDescription: bg.description,
      weaveDensity: item.weaveDensity,
      naturalDye: item.naturalDye,
      borderTrim: item.borderTrim,
      spiritualBlessing: item.spiritualBlessing,
      editionTier: item.editionTier,
      rarityScore: computed.rarityScore,
      rarityRank: rank,
      priceEth: item.priceEth,
      ownerAddress,
      creatorAddress: '0x88418F...9841 (Sarawak Iban Weavers Guild)',
      isListed: true,
      highestBidEth: item.priceEth > 1.5 ? Math.round((item.priceEth * 0.85) * 100) / 100 : undefined,
      highestBidder: item.priceEth > 1.5 ? '0x992B...C021' : undefined,
      story: item.story,
      culturalMeaning: item.culturalMeaning,
      attributes: computed.attributes,
      history: [
        {
          id: `tx-mint-${item.id}`,
          event: 'Mint',
          from: '0x0000000000000000000000000000000000000000',
          to: '0x88418F...9841',
          priceEth: item.priceEth,
          txHash: `0x${(item.id * 99482189).toString(16).padEnd(40, 'f').slice(0, 42)}`,
          timestamp: Date.now() - (item.id * 3600000 * 8)
        },
        {
          id: `tx-list-${item.id}`,
          event: 'List',
          from: ownerAddress,
          priceEth: item.priceEth,
          txHash: `0x${(item.id * 44821931).toString(16).padEnd(40, 'a').slice(0, 42)}`,
          timestamp: Date.now() - (item.id * 3600000 * 3)
        }
      ]
    };
  });
}

export const INITIAL_COLLECTIBLES: NFTCollectible[] = computeRarityAndAttributes(RAW_ITEMS);

export const DEFAULT_COLLECTION_STATS: CollectionStats = {
  totalItems: 50,
  uniqueOwners: 34,
  floorPriceEth: 0.45,
  totalVolumeEth: 84.6,
  highestSaleEth: 3.85,
  royaltiesPercent: 7.5,
  contractAddress: '0x98418f13bB4E7d0c3C0aC2F6E726E80Da42a9841',
  blockchain: 'Ethereum / Polygon / Arbitrum',
  standard: 'ERC-721 (OpenZeppelin Enumerable + EIP-2981)'
};

export const INITIAL_USER_WALLET: UserWallet = {
  address: '0x3E8f29dD174e92a8BC48B25779E18a93B12aC940',
  ensName: 'dayak-collector.eth',
  balanceEth: 12.85,
  network: 'Ethereum',
  ownedTokenIds: [14, 28, 49]
};
