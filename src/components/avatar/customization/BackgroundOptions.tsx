import { Wave, Droplets, Sparkles } from "lucide-react";

export const getBackgroundOptions = () => [
  {
    name: "Ocean Depths",
    price: 5000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Deep blue ocean background with shimmering waves",
    effect: "Wave animation",
    icon: <Wave className="w-4 h-4" />
  },
  {
    name: "Coral Reef",
    price: 2,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Vibrant coral reef environment",
    effect: "Bubble effects",
    icon: <Droplets className="w-4 h-4" />
  },
  {
    name: "Bioluminescent Cave",
    price: 3000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    effect: "Glowing particles",
    icon: <Sparkles className="w-4 h-4" />
  }
];