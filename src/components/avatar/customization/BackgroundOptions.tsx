import { Waves, Droplets, Sparkles, Compass, Mountain, Cloud, Sun } from "lucide-react";

export const getBackgroundOptions = () => [
  {
    name: "Ocean Depths",
    price: 5000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Deep blue ocean background with shimmering waves",
    effect: "Wave animation",
    icon: <Waves className="w-4 h-4" />
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
  },
  {
    name: "Deep Sea Trench",
    price: 4,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Mysterious deep sea environment",
    effect: "Pressure waves",
    icon: <Compass className="w-4 h-4" />
  },
  {
    name: "Underwater Mountain",
    price: 4500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "Majestic underwater mountain range",
    effect: "Current flows",
    icon: <Mountain className="w-4 h-4" />
  },
  {
    name: "Sunlit Shallows",
    price: 3500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Crystal clear waters with dancing sunlight",
    effect: "Light rays",
    icon: <Sun className="w-4 h-4" />
  }
];