import { ShoppingCart, Diamond, Coins, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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

interface CustomizationCardProps {
  option: CustomizationOption;
}

const CustomizationCard = ({ option }: CustomizationCardProps) => {
  const { toast } = useToast();

  const getRarityColor = (rarity: CustomizationOption["rarity"]) => {
    switch (rarity) {
      case "legendary":
        return "bg-gradient-to-r from-yellow-500 to-amber-500";
      case "epic":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "rare":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500";
    }
  };

  const getRarityBorder = (rarity: CustomizationOption["rarity"]) => {
    switch (rarity) {
      case "legendary":
        return "ring-2 ring-yellow-500/50";
      case "epic":
        return "ring-2 ring-purple-500/50";
      case "rare":
        return "ring-2 ring-blue-500/50";
      default:
        return "";
    }
  };

  const handlePurchase = () => {
    toast({
      title: "Item Purchased!",
      description: `You've successfully purchased ${option.name}`,
      duration: 3000,
    });
  };

  return (
    <Card className={`overflow-hidden border-0 shadow-lg ${getRarityBorder(option.rarity)} hover:scale-105 transition-all duration-200`}>
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{option.name}</h3>
            <span className={`text-xs px-3 py-1 rounded-full inline-block ${getRarityColor(option.rarity)} text-white`}>
              {option.rarity?.charAt(0).toUpperCase() + option.rarity?.slice(1)}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full">
            <span className="font-medium">{option.price}</span>
            {option.currency === "diamonds" ? (
              <Diamond className="w-4 h-4 text-blue-500" />
            ) : (
              <Coins className="w-4 h-4 text-yellow-500" />
            )}
          </div>
        </div>
        
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-3 overflow-hidden relative group">
          <img
            src={option.image}
            alt={option.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          {option.effect && (
            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {option.effect}
            </div>
          )}
        </div>

        {option.description && (
          <p className="text-sm text-gray-600 mb-3">{option.description}</p>
        )}

        {option.owned !== undefined && (
          <div className="text-center text-sm text-blue-600 mb-3 bg-blue-50 rounded-full py-1.5">
            {option.owned}/{option.total} Available
          </div>
        )}

        <Button
          className={`w-full ${
            option.isSoldOut
              ? "bg-gray-100 hover:bg-gray-100 text-gray-500"
              : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          }`}
          disabled={option.isSoldOut}
          onClick={handlePurchase}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {option.isSoldOut ? "Sold out" : "Buy item"}
        </Button>
      </div>
    </Card>
  );
};

export default CustomizationCard;