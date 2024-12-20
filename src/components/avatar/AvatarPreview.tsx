import { Star, Trophy, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AvatarPreview = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-inner">
      <div className="flex gap-8 mb-6">
        <Card className="w-40 h-40 flex items-center justify-center bg-white shadow-lg border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
          <img src="/placeholder.svg" alt="Avatar preview" className="w-32 h-32 relative z-10" />
        </Card>
        <div className="flex flex-col justify-center gap-3 flex-1">
          <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
            <Star className="w-5 h-5 text-yellow-500" />
            <div>
              <span className="font-medium block">Rarity Score: 85</span>
              <span className="text-sm text-gray-500">Top 10% of all NFTs</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm">
            <Trophy className="w-5 h-5 text-blue-500" />
            <div>
              <span className="font-medium block">Rank #1,234</span>
              <span className="text-sm text-gray-500">Rising Star Collection</span>
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold h-12 rounded-xl shadow-lg">
        <Sparkles className="w-5 h-5 mr-2" />
        Upgrade NFT
      </Button>
    </div>
  );
};

export default AvatarPreview;