import { Search, Grid, TrendingUp, Rocket, Waves } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NFT = () => {
  const nfts = [
    { id: 1, name: "Cosmic Dolphin #1", price: "2,500", rarity: "Legendary", likes: 245 },
    { id: 2, name: "Ocean Master #12", price: "1,800", rarity: "Epic", likes: 189 },
    { id: 3, name: "Wave Rider #33", price: "1,200", rarity: "Rare", likes: 156 },
    { id: 4, name: "Deep Blue #7", price: "950", rarity: "Uncommon", likes: 134 },
    { id: 5, name: "Sea Spirit #21", price: "750", rarity: "Common", likes: 98 },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      Legendary: "bg-amber-500",
      Epic: "bg-purple-500",
      Rare: "bg-blue-500",
      Uncommon: "bg-green-500",
      Common: "bg-gray-500"
    };
    return colors[rarity as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <Waves className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold">Ocean Collection</h1>
          </div>
          <Grid className="w-6 h-6" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
            <TrendingUp className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">1.2k</p>
            <p className="text-sm opacity-80">Total NFTs</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
            <Rocket className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">85</p>
            <p className="text-sm opacity-80">New Today</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            placeholder="Search NFTs..." 
            className="pl-10 bg-white/80 backdrop-blur-sm border-blue-100 focus:border-blue-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {nfts.map((nft) => (
            <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-blue-100">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <span className="text-4xl animate-pulse">🐬</span>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-gray-800">{nft.name}</h3>
                  <Badge variant="secondary" className={`${getRarityColor(nft.rarity)} text-white`}>
                    {nft.rarity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-blue-600 font-bold">${nft.price}</p>
                  <p className="text-sm text-gray-500">❤️ {nft.likes}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFT;