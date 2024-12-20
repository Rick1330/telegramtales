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
}

const Avatar = () => {
  const [selectedTab, setSelectedTab] = useState("Background");
  
  const tabs = ["Background", "Furr", "Eyes", "Nose", "Mouth", "Clothes", "Accessories"];
  
  const options: CustomizationOption[] = [
    {
      name: "ReversCity",
      price: 3000,
      currency: "coins",
      image: "/placeholder.svg",
      rarity: "rare",
    },
    {
      name: "SailorMoon",
      price: 0.5,
      currency: "diamonds",
      image: "/placeholder.svg",
      rarity: "legendary",
    },
    {
      name: "SevenEleven",
      price: 5000,
      currency: "coins",
      image: "/placeholder.svg",
      owned: 0,
      total: 711,
      isSoldOut: true,
      rarity: "epic",
    },
    {
      name: "Subway",
      price: 5000,
      currency: "coins",
      image: "/placeholder.svg",
      owned: 0,
      total: 1991,
      rarity: "common",
    },
    {
      name: "CyberPunk",
      price: 1.5,
      currency: "diamonds",
      image: "/placeholder.svg",
      rarity: "legendary",
    },
    {
      name: "NeonDreams",
      price: 8000,
      currency: "coins",
      image: "/placeholder.svg",
      rarity: "epic",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AvatarHeader />
      
      <div className="max-w-4xl mx-auto">
        <div className="px-4 -mt-6">
          <AvatarPreview />
        </div>

        {/* Tabs */}
        <div className="px-4 py-6">
          <Tabs defaultValue={selectedTab} className="w-full" onValueChange={setSelectedTab}>
            <TabsList className="w-full flex overflow-x-auto gap-2 bg-transparent h-auto p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`flex-1 px-4 py-2.5 rounded-xl whitespace-nowrap ${
                    selectedTab === tab
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Grid of Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {options.map((option) => (
            <CustomizationCard key={option.name} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar;