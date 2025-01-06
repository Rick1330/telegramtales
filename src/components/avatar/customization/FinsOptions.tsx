import { Fish, Shell, Waves, Wind, Flame, Sparkles, Zap } from "lucide-react";

export const getFinsOptions = () => [
  {
    name: "Prismatic Fins",
    price: 3,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Rainbow-colored dolphin fins",
    effect: "Color shift",
    icon: <Fish className="w-4 h-4" />
  },
  {
    name: "Pearl-Tipped Fins",
    price: 4000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Elegant fins with pearl accents",
    effect: "Pearl glow",
    icon: <Shell className="w-4 h-4" />
  },
  {
    name: "Wave Rider Fins",
    price: 2500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Streamlined fins for speed",
    icon: <Waves className="w-4 h-4" />
  },
  {
    name: "Sonic Fins",
    price: 4,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Super-speed enabling fins",
    effect: "Speed trails",
    icon: <Wind className="w-4 h-4" />
  },
  {
    name: "Flame Fins",
    price: 4500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Hot-water adapted fins",
    effect: "Fire trails",
    icon: <Flame className="w-4 h-4" />
  },
  {
    name: "Crystal Fins",
    price: 3000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Transparent crystalline fins",
    effect: "Sparkle trail",
    icon: <Sparkles className="w-4 h-4" />
  }
];