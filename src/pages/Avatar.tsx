import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface CustomizationOption {
  name: string;
  price: number;
  currency: "coins" | "diamonds";
  image: string;
  isSoldOut?: boolean;
  owned?: number;
  total?: number;
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
    },
    {
      name: "SailorMoon",
      price: 0.5,
      currency: "diamonds",
      image: "/placeholder.svg",
    },
    {
      name: "SevenEleven",
      price: 5000,
      currency: "coins",
      image: "/placeholder.svg",
      owned: 0,
      total: 711,
      isSoldOut: true,
    },
    {
      name: "Subway",
      price: 5000,
      currency: "coins",
      image: "/placeholder.svg",
      owned: 0,
      total: 1991,
    },
  ];

  return (
    <div className="pb-24">
      {/* Preview Section */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center gap-2 mb-4">
          <button className="text-2xl" onClick={() => history.back()}>←</button>
          <h1 className="text-2xl font-bold">Cats</h1>
        </div>
      </div>

      {/* Avatar Preview */}
      <div className="p-4 bg-gray-100">
        <div className="flex gap-8 mb-4">
          <Card className="w-32 h-32 flex items-center justify-center bg-gray-200">
            <img src="/placeholder.svg" alt="Avatar preview" className="w-24 h-24" />
          </Card>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <img src="/placeholder.svg" alt="stat" className="w-6 h-6" />
              <span>0</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/placeholder.svg" alt="stat" className="w-6 h-6" />
              <span>0</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/placeholder.svg" alt="stat" className="w-6 h-6" />
              <span>0</span>
            </div>
          </div>
        </div>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Upgrade Cat
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b overflow-x-auto">
        <div className="flex whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 ${
                selectedTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Options */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {options.map((option) => (
          <Card key={option.name} className="overflow-hidden">
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{option.name}</span>
                <div className="flex items-center gap-1">
                  <span>{option.price}</span>
                  <img
                    src="/placeholder.svg"
                    alt={option.currency}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-2">
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {option.owned !== undefined && (
                <div className="text-center text-sm text-blue-600 mb-2">
                  {option.owned}/{option.total}
                </div>
              )}
              <Button
                className={`w-full ${
                  option.isSoldOut
                    ? "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
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