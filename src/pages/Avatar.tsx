import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AvatarHeader from "@/components/avatar/AvatarHeader";
import AvatarPreview from "@/components/avatar/AvatarPreview";
import CustomizationCard from "@/components/avatar/CustomizationCard";

interface CustomizationOption {
  name: string;
  price: number;
  currency: "coins" | "diamonds";
  image: string;
  isSoldOut?: boolean;
  owned?: number;
  total?: number;
  rarity?: "common" | "rare" | "epic" | "legendary";
  description?: string;
  effect?: string;
}

const Avatar = () => {
  const [selectedTab, setSelectedTab] = useState("Background");
  
  const tabs = ["Background", "Furr", "Eyes", "Nose", "Mouth", "Clothes", "Accessories", "Special Effects"];
  
  const getOptionsForTab = (tab: string): CustomizationOption[] => {
    switch (tab) {
      case "Background":
        return [
          {
            name: "Cosmic Nebula",
            price: 5000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "legendary",
            description: "A mesmerizing galaxy background",
            effect: "Animated star particles"
          },
          {
            name: "Northern Lights",
            price: 2,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "epic",
            description: "Aurora borealis effect",
            effect: "Color shifting waves"
          },
          {
            name: "Cyber Grid",
            price: 3000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare",
            effect: "Glowing grid lines"
          },
          {
            name: "Sunset Beach",
            price: 1500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "common"
          }
        ];
      case "Furr":
        return [
          {
            name: "Diamond Sparkle",
            price: 3,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Sparkle animation"
          },
          {
            name: "Rainbow Wave",
            price: 4000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "Color shifting"
          },
          {
            name: "Golden Shine",
            price: 2500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          },
          {
            name: "Classic Stripes",
            price: 1000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "common"
          }
        ];
      case "Eyes":
        return [
          {
            name: "Dragon Eyes",
            price: 2,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Glowing effect"
          },
          {
            name: "Crystal Gaze",
            price: 3500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "Sparkle effect"
          },
          {
            name: "Ocean Blue",
            price: 2000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          },
          {
            name: "Emerald Green",
            price: 1200,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "common"
          }
        ];
      case "Nose":
        return [
          {
            name: "Star Dust",
            price: 1,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Sparkle trail"
          },
          {
            name: "Rainbow Glow",
            price: 2500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic"
          },
          {
            name: "Silver Shine",
            price: 1500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          }
        ];
      case "Mouth":
        return [
          {
            name: "Dragon Breath",
            price: 2,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Fire breath effect"
          },
          {
            name: "Neon Smile",
            price: 3000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "Glowing effect"
          },
          {
            name: "Golden Fang",
            price: 2000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          }
        ];
      case "Clothes":
        return [
          {
            name: "Celestial Armor",
            price: 3,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Constellation effect"
          },
          {
            name: "Cyber Suit",
            price: 4500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "Neon glow"
          },
          {
            name: "Royal Robe",
            price: 3000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          }
        ];
      case "Accessories":
        return [
          {
            name: "Crown of Stars",
            price: 2,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Floating stars"
          },
          {
            name: "Tech Visor",
            price: 3500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "HUD display"
          },
          {
            name: "Magic Wand",
            price: 2500,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          }
        ];
      case "Special Effects":
        return [
          {
            name: "Aura of Power",
            price: 4,
            currency: "diamonds",
            image: "/placeholder.svg",
            rarity: "legendary",
            effect: "Energy field"
          },
          {
            name: "Rainbow Trail",
            price: 5000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "epic",
            effect: "Color trail"
          },
          {
            name: "Sparkle Cloud",
            price: 3000,
            currency: "coins",
            image: "/placeholder.svg",
            rarity: "rare"
          }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-24">
      <AvatarHeader />
      
      <div className="max-w-4xl mx-auto">
        <div className="px-4 -mt-6">
          <AvatarPreview />
        </div>

        <div className="px-4 py-6">
          <Tabs defaultValue={selectedTab} className="w-full" onValueChange={setSelectedTab}>
            <TabsList className="w-full flex overflow-x-auto gap-2 bg-transparent h-auto p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`flex-1 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    selectedTab === tab
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-102"
                  }`}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {getOptionsForTab(selectedTab).map((option) => (
            <CustomizationCard key={option.name} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar;