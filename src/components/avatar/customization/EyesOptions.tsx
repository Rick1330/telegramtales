import { Sun, Moon, Star, Eye, Zap, Heart, Sparkles } from "lucide-react";

export const getEyesOptions = () => [
  {
    name: "Sonar Vision",
    price: 2,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Echo-location enhanced eyes",
    effect: "Pulse effect",
    icon: <Sun className="w-4 h-4" />
  },
  {
    name: "Deep Sea Eyes",
    price: 3500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Eyes adapted to dark waters",
    effect: "Night glow",
    icon: <Moon className="w-4 h-4" />
  },
  {
    name: "Starlight Eyes",
    price: 2000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Twinkling eye effect",
    icon: <Star className="w-4 h-4" />
  },
  {
    name: "Bioluminescent Eyes",
    price: 3,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Naturally glowing eyes",
    effect: "Color shift",
    icon: <Eye className="w-4 h-4" />
  },
  {
    name: "Electric Eyes",
    price: 4000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Lightning-charged eyes",
    effect: "Electric sparks",
    icon: <Zap className="w-4 h-4" />
  },
  {
    name: "Heart Eyes",
    price: 2500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Adorable heart-shaped eyes",
    effect: "Love sparkles",
    icon: <Heart className="w-4 h-4" />
  }
];