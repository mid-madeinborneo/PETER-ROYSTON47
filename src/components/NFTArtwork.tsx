import React, { useMemo } from 'react';
import { BACKGROUND_LAYERS } from '../data/puaKumbuData';
import { NFTCollectible } from '../types/nft';

interface NFTArtworkProps {
  nft: NFTCollectible;
  className?: string;
  showCardFrame?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactiveHover?: boolean;
}

export const NFTArtwork: React.FC<NFTArtworkProps> = ({
  nft,
  className = '',
  showCardFrame = true,
  size = 'md',
  interactiveHover = false
}) => {
  const bg = useMemo(() => {
    return BACKGROUND_LAYERS.find(b => b.id === nft.backgroundLayerId) || BACKGROUND_LAYERS[0];
  }, [nft.backgroundLayerId]);

  // Dimensions
  const aspectClass = 'aspect-[2/3]'; // Matches traditional vertical textile banner proportions

  // Unique SVG pattern IDs per token
  const patternId = `ikat-grid-${nft.id}`;
  const noiseId = `woven-noise-${nft.id}`;
  const glowGradId = `gold-glow-${nft.id}`;
  const bgGradId = `bg-grad-${nft.id}`;

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl transition-all duration-300 ${
        interactiveHover ? 'group hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#d4af37]/20' : ''
      } ${className}`}
      style={{
        boxShadow: showCardFrame 
          ? '0 0 0 1px rgba(212,175,55,0.4), 0 10px 30px -10px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.15)' 
          : 'none'
      }}
    >
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle woven textile grain filter */}
          <filter id={noiseId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>

          {/* Background gradient */}
          <linearGradient id={bgGradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={bg.secondaryColor} />
            <stop offset="50%" stopColor={bg.primaryColor} />
            <stop offset="100%" stopColor="#08080a" />
          </linearGradient>

          {/* Gold glowing border gradient */}
          <linearGradient id={glowGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae082" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#926210" />
          </linearGradient>

          {/* Warp and Weft ikat mesh pattern */}
          <pattern id={patternId} width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="4" x2="8" y2="4" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <line x1="4" y1="0" x2="4" y2="8" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
          </pattern>
        </defs>

        {/* 1. Base Layer: Solid & Texture */}
        <rect width="400" height="600" fill={`url(#${bgGradId})`} />
        <rect width="400" height="600" fill={`url(#${patternId})`} />
        <rect width="400" height="600" filter={`url(#${noiseId})`} />

        {/* 2. Specific Background Variations (from the 20 distinct layers) */}
        {bg.patternType === 'aurora-streak' && (
          <g opacity="0.35">
            <path d="M-50,0 Q200,300 450,100 L450,250 Q200,450 -50,150 Z" fill={bg.accentColor} filter="blur(20px)" />
            <path d="M-50,300 Q200,100 450,400 L450,550 Q200,250 -50,450 Z" fill={bg.secondaryColor} filter="blur(30px)" />
          </g>
        )}

        {bg.patternType === 'river-flow' && (
          <g opacity="0.28" stroke={bg.accentColor} strokeWidth="2" fill="none">
            <path d="M-50,100 C100,180 300,50 450,140" filter="blur(3px)" />
            <path d="M-50,220 C120,290 280,160 450,260" filter="blur(3px)" />
            <path d="M-50,340 C90,410 320,280 450,380" filter="blur(3px)" />
            <path d="M-50,460 C150,530 270,390 450,500" filter="blur(3px)" />
          </g>
        )}

        {bg.patternType === 'charcoal-grain' && (
          <g opacity="0.4">
            <circle cx="90" cy="140" r="1.5" fill={bg.accentColor} />
            <circle cx="310" cy="220" r="2" fill={bg.accentColor} />
            <circle cx="150" cy="390" r="1" fill="#fff" />
            <circle cx="280" cy="480" r="2.5" fill={bg.accentColor} />
            <circle cx="80" cy="510" r="1.5" fill={bg.accentColor} />
            <circle cx="210" cy="90" r="2" fill={bg.accentColor} />
          </g>
        )}

        {bg.patternType === 'geometric-stars' && (
          <g opacity="0.45" fill="#f8fafc">
            <circle cx="80" cy="80" r="2" />
            <circle cx="100" cy="110" r="1.5" />
            <circle cx="130" cy="95" r="1" />
            <circle cx="290" cy="70" r="2.5" />
            <circle cx="320" cy="130" r="1.5" />
            <circle cx="270" cy="160" r="1" />
            <circle cx="70" cy="460" r="1.5" />
            <circle cx="320" cy="490" r="2" />
            <line x1="80" y1="80" x2="100" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="100" y1="110" x2="130" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="290" y1="70" x2="320" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </g>
        )}

        {bg.patternType === 'songket-gold' && (
          <g opacity="0.25">
            <rect x="0" y="0" width="400" height="600" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="3 7" />
            <line x1="50" y1="0" x2="50" y2="600" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="350" y1="0" x2="350" y2="600" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="4 8" />
          </g>
        )}

        {/* 3. Outer Traditional Pua Kumbu Framing Stripes */}
        <g stroke="#92231b" strokeWidth="8" opacity="0.85">
          <line x1="25" y1="20" x2="25" y2="580" />
          <line x1="375" y1="20" x2="375" y2="580" />
        </g>
        <g stroke="#d4af37" strokeWidth="1.5" opacity="0.9">
          <line x1="32" y1="20" x2="32" y2="580" />
          <line x1="368" y1="20" x2="368" y2="580" />
        </g>
        <g stroke="#451108" strokeWidth="4" opacity="0.75">
          <line x1="38" y1="20" x2="38" y2="580" />
          <line x1="362" y1="20" x2="362" y2="580" />
        </g>

        {/* 4. Core Motif Renderers based on archetype & specific motif */}
        {nft.motifArchetype === 'Animal Inspired' && (
          <HornbillMotifRenderer nft={nft} bg={bg} />
        )}

        {nft.motifArchetype === 'Figure Motif' && (
          <EngkarambaMotifRenderer nft={nft} bg={bg} />
        )}

        {nft.motifArchetype === 'Geometric Harmony' && (
          <GeometricHarmonyMotifRenderer nft={nft} bg={bg} />
        )}

        {nft.motifArchetype === 'Plant Inspired' && (
          <PlantMotifRenderer nft={nft} bg={bg} />
        )}

        {nft.motifArchetype === 'Repeating Bands' && (
          <RepeatingBandsMotifRenderer nft={nft} bg={bg} />
        )}

        {/* 5. Bottom Metadata Legend & Authentic Iban Motif Stamps */}
        <rect x="25" y="480" width="350" height="95" rx="6" fill="#090a0f" fillOpacity="0.9" stroke="#d4af37" strokeWidth="1" />
        
        {/* Token Index & Title */}
        <text x="42" y="508" fill="#d4af37" fontSize="16" fontWeight="bold" fontFamily="Cinzel, serif" letterSpacing="0.05em">
          {nft.tokenId}
        </text>
        <text x="75" y="508" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="Cinzel, serif" letterSpacing="0.06em">
          {nft.motifArchetype.toUpperCase()}
        </text>

        {/* Subtitle / Lore description */}
        <text x="42" y="528" fill="#a0aec0" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif" width="260">
          {nft.subtitle}
        </text>
        <text x="42" y="542" fill="#718096" fontSize="8" fontFamily="Plus Jakarta Sans, sans-serif">
          {bg.name.toUpperCase()} · RANK #{nft.rarityRank}
        </text>
        <text x="42" y="556" fill="#e2e8f0" fontSize="8.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
          {nft.editionTier.toUpperCase()} · 1/1
        </text>

        {/* Edition Stamp 1/1 Box */}
        <rect x="325" y="534" width="35" height="24" rx="4" fill="none" stroke="#d4af37" strokeWidth="1" />
        <text x="342" y="550" fill="#d4af37" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif">
          1/1
        </text>

        {/* 6. Gold Luminous Outer Frame with Corner Diamonds */}
        {showCardFrame && (
          <g>
            <rect
              x="6"
              y="6"
              width="388"
              height="588"
              rx="12"
              fill="none"
              stroke={`url(#${glowGradId})`}
              strokeWidth="2.5"
            />
            {/* Corner diamond emblems */}
            <path d="M 12,24 L 24,12 L 12,0 L 0,12 Z" transform="translate(14, 14) scale(0.6)" fill="#d4af37" />
            <path d="M 12,24 L 24,12 L 12,0 L 0,12 Z" transform="translate(372, 14) scale(0.6)" fill="#d4af37" />
            <path d="M 12,24 L 24,12 L 12,0 L 0,12 Z" transform="translate(14, 572) scale(0.6)" fill="#d4af37" />
            <path d="M 12,24 L 24,12 L 12,0 L 0,12 Z" transform="translate(372, 572) scale(0.6)" fill="#d4af37" />
          </g>
        )}
      </svg>
    </div>
  );
};

// ==========================================
// SUB-MOTIF RENDERERS FOR AUTHENTIC IBAN ART
// ==========================================

const HornbillMotifRenderer: React.FC<{ nft: NFTCollectible; bg: any }> = ({ nft, bg }) => {
  return (
    <g transform="translate(200, 250)">
      {/* Repeating paired sacred Hornbill figures facing each other */}
      {[ -130, 20, 160 ].map((offsetY, i) => (
        <g key={i} transform={`translate(0, ${offsetY}) scale(0.92)`}>
          {/* Central Sacred Diamond Lozenge */}
          <polygon points="0,-25 22,0 0,25 -22,0" fill="#a8201a" stroke="#d4af37" strokeWidth="1.5" />
          <polygon points="0,-14 12,0 0,14 -12,0" fill="#fdf0d5" stroke="#000" strokeWidth="0.8" />
          <circle cx="0" cy="0" r="3" fill="#d4af37" />

          {/* Left Hornbill / Kenyalang */}
          <g transform="scale(-1, 1)">
            {/* Casque & Bill */}
            <path
              d="M-5,-45 C-15,-65 -35,-55 -30,-35 C-42,-25 -40,-10 -25,-12 C-32,5 -20,20 -5,25 C-12,15 -14,-5 -5,-15 Z"
              fill="#fdf0d5"
              stroke="#871c14"
              strokeWidth="2"
            />
            {/* Crimson Casque Crest */}
            <path
              d="M-22,-52 C-35,-45 -36,-32 -26,-30 C-32,-38 -28,-48 -22,-52 Z"
              fill="#c1121f"
            />
            {/* Eye */}
            <circle cx="-18" cy="-28" r="2.5" fill="#111" />
            <circle cx="-17.5" cy="-28.5" r="0.8" fill="#fff" />
            {/* Sweeping Plumage Tail */}
            <path
              d="M-12,18 C-25,32 -32,58 -22,78 C-18,62 -12,48 -5,35 Z"
              fill="#871c14"
              stroke="#d4af37"
              strokeWidth="1.2"
            />
            <path
              d="M-6,28 C-16,42 -20,62 -12,74 C-9,60 -6,48 0,38 Z"
              fill="#fdf0d5"
            />
          </g>

          {/* Right Hornbill / Kenyalang */}
          <g>
            {/* Casque & Bill */}
            <path
              d="M-5,-45 C-15,-65 -35,-55 -30,-35 C-42,-25 -40,-10 -25,-12 C-32,5 -20,20 -5,25 C-12,15 -14,-5 -5,-15 Z"
              fill="#fdf0d5"
              stroke="#871c14"
              strokeWidth="2"
            />
            {/* Crimson Casque Crest */}
            <path
              d="M-22,-52 C-35,-45 -36,-32 -26,-30 C-32,-38 -28,-48 -22,-52 Z"
              fill="#c1121f"
            />
            {/* Eye */}
            <circle cx="-18" cy="-28" r="2.5" fill="#111" />
            <circle cx="-17.5" cy="-28.5" r="0.8" fill="#fff" />
            {/* Sweeping Plumage Tail */}
            <path
              d="M-12,18 C-25,32 -32,58 -22,78 C-18,62 -12,48 -5,35 Z"
              fill="#871c14"
              stroke="#d4af37"
              strokeWidth="1.2"
            />
            <path
              d="M-6,28 C-16,42 -20,62 -12,74 C-9,60 -6,48 0,38 Z"
              fill="#fdf0d5"
            />
          </g>

          {/* Side Ikat Accents */}
          <path d="M-55,-10 L-68,0 L-55,10" fill="none" stroke="#d4af37" strokeWidth="2" />
          <path d="M55,-10 L68,0 L55,10" fill="none" stroke="#d4af37" strokeWidth="2" />
        </g>
      ))}
    </g>
  );
};

const EngkarambaMotifRenderer: React.FC<{ nft: NFTCollectible; bg: any }> = ({ nft, bg }) => {
  return (
    <g transform="translate(200, 240)">
      {/* 3 Ancestral human spirit figures stacked vertically */}
      {[ -140, 10, 150 ].map((offsetY, i) => (
        <g key={i} transform={`translate(0, ${offsetY}) scale(0.95)`}>
          {/* Head & Ancestral Mask */}
          <polygon points="0,-58 14,-42 0,-26 -14,-42" fill="#fdf0d5" stroke="#92231b" strokeWidth="1.8" />
          {/* Eyes & Mouth */}
          <circle cx="-5" cy="-44" r="1.5" fill="#871c14" />
          <circle cx="5" cy="-44" r="1.5" fill="#871c14" />
          <line x1="-3" y1="-34" x2="3" y2="-34" stroke="#871c14" strokeWidth="1.5" />

          {/* Upraised Guardian Arms with 5 Fingers */}
          <path
            d="M-10,-32 L-32,-48 L-44,-64 M-32,-48 L-48,-52 M-32,-48 L-42,-38"
            stroke="#fdf0d5"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M10,-32 L32,-48 L44,-64 M32,-48 L48,-52 M32,-48 L42,-38"
            stroke="#fdf0d5"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Torso with Sacred Heart Lozenge */}
          <polygon points="0,-25 18,-2 0,22 -18,-2" fill="#871c14" stroke="#d4af37" strokeWidth="2" />
          <polygon points="0,-16 11,-2 0,12 -11,-2" fill="#fdf0d5" />
          <circle cx="0" cy="-2" r="3" fill="#871c14" />

          {/* Sturdy Standing Legs */}
          <path
            d="M-8,20 L-22,46 L-34,60 M-22,46 L-14,62"
            stroke="#fdf0d5"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8,20 L22,46 L34,60 M22,46 L14,62"
            stroke="#fdf0d5"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Flanking Guardian Diamond Runes */}
          <polygon points="-58,-2 -48,-14 -38,-2 -48,10" fill="#a8201a" stroke="#d4af37" strokeWidth="1.2" />
          <polygon points="58,-2 48,-14 38,-2 48,10" fill="#a8201a" stroke="#d4af37" strokeWidth="1.2" />
        </g>
      ))}
    </g>
  );
};

const GeometricHarmonyMotifRenderer: React.FC<{ nft: NFTCollectible; bg: any }> = ({ nft, bg }) => {
  return (
    <g transform="translate(200, 240)">
      {/* Master Interlocking Diamond Matrices */}
      {[ -135, 15, 160 ].map((offsetY, i) => (
        <g key={i} transform={`translate(0, ${offsetY})`}>
          {/* Outer Chevron Frame with Stepped Edges */}
          <polygon points="0,-75 80,0 0,75 -80,0" fill="none" stroke="#92231b" strokeWidth="7" />
          <polygon points="0,-68 73,0 0,68 -73,0" fill="none" stroke="#d4af37" strokeWidth="2" />
          <polygon points="0,-62 67,0 0,62 -67,0" fill="#4d120a" stroke="#c1121f" strokeWidth="4" />
          
          {/* Inner Stepped Ikat Serrations */}
          <polygon points="0,-50 54,0 0,50 -54,0" fill="#a8201a" stroke="#fdf0d5" strokeWidth="2.5" />
          <polygon points="0,-36 38,0 0,36 -38,0" fill="#111" stroke="#d4af37" strokeWidth="2" />
          <polygon points="0,-22 24,0 0,22 -24,0" fill="#fdf0d5" />
          <polygon points="0,-10 11,0 0,10 -11,0" fill="#a8201a" />

          {/* Stepped Corner Teeth (Iban Sawtooth Weft) */}
          {[ -1, 1 ].map((dir, dIdx) => (
            <g key={dIdx} transform={`scale(${dir}, 1)`}>
              <line x1="12" y1="-50" x2="22" y2="-40" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="24" y1="-38" x2="34" y2="-28" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="36" y1="-26" x2="46" y2="-16" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="48" y1="-14" x2="58" y2="-4" stroke="#fdf0d5" strokeWidth="2" />

              <line x1="12" y1="50" x2="22" y2="40" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="24" y1="38" x2="34" y2="28" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="36" y1="26" x2="46" y2="16" stroke="#fdf0d5" strokeWidth="2" />
              <line x1="48" y1="14" x2="58" y2="4" stroke="#fdf0d5" strokeWidth="2" />
            </g>
          ))}

          {/* Outer Border Emblems */}
          <circle cx="-95" cy="0" r="5" fill="#d4af37" stroke="#000" strokeWidth="1" />
          <circle cx="95" cy="0" r="5" fill="#d4af37" stroke="#000" strokeWidth="1" />
        </g>
      ))}
    </g>
  );
};

const PlantMotifRenderer: React.FC<{ nft: NFTCollectible; bg: any }> = ({ nft, bg }) => {
  return (
    <g transform="translate(200, 240)">
      {/* Symmetrical scrolling vines (Buah Remba) and fern shoots (Paku) */}
      {[ -135, 10, 155 ].map((offsetY, i) => (
        <g key={i} transform={`translate(0, ${offsetY})`}>
          {/* Central Floral Node */}
          <polygon points="0,-18 18,0 0,18 -18,0" fill="#a8201a" stroke="#d4af37" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="#fdf0d5" />

          {/* Four Petal Cross */}
          <path d="M0,-18 C5,-30 -5,-30 0,-18" fill="#d4af37" />
          <path d="M0,18 C5,30 -5,30 0,18" fill="#d4af37" />
          <path d="M-18,0 C-30,5 -30,-5 -18,0" fill="#d4af37" />
          <path d="M18,0 C30,5 30,-5 18,0" fill="#d4af37" />

          {/* S-shaped curling fern vines (Paku) */}
          <g>
            <path
              d="M0,-18 C-35,-45 -45,-75 -15,-65 C10,-55 -10,-40 -5,-25"
              fill="none"
              stroke="#fdf0d5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M0,-18 C35,-45 45,-75 15,-65 C-10,-55 10,-40 5,-25"
              fill="none"
              stroke="#fdf0d5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M0,18 C-35,45 -45,75 -15,65 C10,55 -10,40 -5,25"
              fill="none"
              stroke="#fdf0d5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <path
              d="M0,18 C35,45 45,75 15,65 C-10,55 10,40 5,25"
              fill="none"
              stroke="#fdf0d5"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>

          {/* Secondary Tendrils and Leaf Buds */}
          <path d="M-28,-40 C-45,-42 -42,-28 -25,-32" fill="none" stroke="#d4af37" strokeWidth="2.5" />
          <path d="M28,-40 C45,-42 42,-28 25,-32" fill="none" stroke="#d4af37" strokeWidth="2.5" />
          <path d="M-28,40 C-45,42 -42,28 -25,32" fill="none" stroke="#d4af37" strokeWidth="2.5" />
          <path d="M28,40 C45,42 42,28 25,32" fill="none" stroke="#d4af37" strokeWidth="2.5" />
        </g>
      ))}
    </g>
  );
};

const RepeatingBandsMotifRenderer: React.FC<{ nft: NFTCollectible; bg: any }> = ({ nft, bg }) => {
  return (
    <g transform="translate(200, 240)">
      {/* 7 Horizontal Repeating Strips with varied Iban patterns */}
      {[ -160, -110, -60, -10, 40, 90, 140 ].map((offsetY, idx) => {
        const isAlternate = idx % 2 === 0;
        return (
          <g key={idx} transform={`translate(0, ${offsetY})`}>
            {/* Band Background Strip */}
            <rect x="-145" y="-18" width="290" height="36" fill={isAlternate ? '#871c14' : '#141419'} stroke="#d4af37" strokeWidth="1" />
            
            {/* Pattern Type A: Diamond Lozenge Row */}
            {idx % 3 === 0 && (
              <g>
                {[ -120, -80, -40, 0, 40, 80, 120 ].map((x, dIdx) => (
                  <polygon key={dIdx} points={`${x},-12 ${x+12},0 ${x},12 ${x-12},0`} fill="#fdf0d5" stroke="#a8201a" strokeWidth="1.5" />
                ))}
              </g>
            )}

            {/* Pattern Type B: Circular Omen Discs */}
            {idx % 3 === 1 && (
              <g>
                {[ -130, -90, -50, -10, 30, 70, 110 ].map((x, cIdx) => (
                  <g key={cIdx} transform={`translate(${x}, 0)`}>
                    <circle cx="0" cy="0" r="10" fill="#a8201a" stroke="#d4af37" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="5" fill="#fdf0d5" />
                  </g>
                ))}
              </g>
            )}

            {/* Pattern Type C: Chevron Zigzag Teeth */}
            {idx % 3 === 2 && (
              <path
                d="M-140,-10 L-120,10 L-100,-10 L-80,10 L-60,-10 L-40,10 L-20,-10 L0,10 L20,-10 L40,10 L60,-10 L80,10 L100,-10 L120,10 L140,-10"
                fill="none"
                stroke="#fdf0d5"
                strokeWidth="2.5"
              />
            )}
          </g>
        );
      })}
    </g>
  );
};
