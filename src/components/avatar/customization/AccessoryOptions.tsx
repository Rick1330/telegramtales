import { Shell, Crown, Sparkles } from "lucide-react";

export const getAccessoryOptions = () => [
  {
    name: "Royal Shell Crown",
    price: 4,
    currency: "diamonds",
    image: "/placeholder.svg",
    rarity: "legendary",
    description: "Ancient underwater crown",
    effect: "Royal aura",
    icon: <Crown className="w-4 h-4" />
  },
  {
    name: "Pearl Necklace",
    price: 3500,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "epic",
    description: "String of luminous pearls",
    effect: "Pearl shine",
    icon: <Shell className="w-4 h-4" />
  },
  {
    name: "Bubble Crown",
    price: 2000,
    currency: "coins",
    image: "/placeholder.svg",
    rarity: "rare",
    description: "Crown made of eternal bubbles",
    icon: <Sparkles className="w-4 h-4" />
  }
];