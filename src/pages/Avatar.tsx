import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft, Star, Diamond, Coins, Trophy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  
  const tabs = ["Background", "Furr", "Eyes", "Nose", "Mouth", "Clothes"];
  
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
  ];

  const getRarityColor = (rarity: CustomizationOption["rarity"]) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-500";
      case "epic":
        return "text-purple-500";
      case "rare":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="pb-24">
      {/* Header Section */}
      <div className="gradient-bg text-white p-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => history.back()}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Customize Your Cat</h1>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-around mb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg mb-1">
              <Coins className="w-5 h-5" />
              <span className="font-semibold">12,500</span>
            </div>
            <span className="text-xs text-white/80">Coins</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg mb-1">
              <Diamond className="w-5 h-5" />
              <span className="font-semibold">25</span>
            </div>
            <span className="text-xs text-white/80">Diamonds</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg mb-1">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Level 5</span>
            </div>
            <span className="text-xs text-white/80">Rank</span>
          </div>
        </div>
      </div>

      {/* Avatar Preview */}
      <div className="p-4 bg-gray-50">
        <div className="flex gap-8 mb-4">
          <Card className="w-32 h-32 flex items-center justify-center bg-white shadow-md">
            <img src="/placeholder.svg" alt="Avatar preview" className="w-24 h-24" />
          </Card>
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">Rarity Score: 85</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
              <Trophy className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Rank #1,234</span>
            </div>
          </div>
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold h-12">
          Upgrade Cat
        </Button>
      </div>

      {/* Tabs */}
      <div className="px-4 py-2">
        <Tabs defaultValue={selectedTab} className="w-full" onValueChange={setSelectedTab}>
          <TabsList className="w-full flex overflow-x-auto gap-2 bg-transparent h-auto p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`flex-1 px-4 py-2 rounded-lg ${
                  selectedTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Grid of Options */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {options.map((option) => (
          <Card key={option.name} className="overflow-hidden border-0 shadow-md">
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-semibold block">{option.name}</span>
                  <span className={`text-xs ${getRarityColor(option.rarity)}`}>
                    {option.rarity?.charAt(0).toUpperCase() + option.rarity?.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                  <span className="font-medium">{option.price}</span>
                  {option.currency === "diamonds" ? (
                    <Diamond className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Coins className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
              </div>
              <div className="aspect-square bg-gray-50 rounded-lg mb-2 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {option.owned !== undefined && (
                <div className="text-center text-sm text-blue-600 mb-2 bg-blue-50 rounded-full py-1">
                  {option.owned}/{option.total}
                </div>
              )}
              <Button
                className={`w-full ${
                  option.isSoldOut
                    ? "bg-gray-200 hover:bg-gray-200 cursor-not-allowed text-gray-500"
                    : "bg-black hover:bg-gray-800"
                }`}
                disabled={option.isSoldOut}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {option.isSoldOut ? "Sold out" : "Buy item"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Avatar;