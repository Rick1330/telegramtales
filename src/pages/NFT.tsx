import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Diamond, Wallet } from "lucide-react";
import { useState } from "react";

const NFT = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const nfts = [
    {
      id: 1,
      name: "Crypto Punk #1234",
      price: "2.5 ETH",
      owner: "JustinN",
      image: "/placeholder.svg",
      rarity: "Legendary"
    },
    {
      id: 2,
      name: "Bored Ape #5678",
      price: "1.8 ETH",
      owner: "spasecex",
      image: "/placeholder.svg",
      rarity: "Epic"
    },
    {
      id: 3,
      name: "Doodle #9012",
      price: "0.8 ETH",
      owner: "toanngu",
      image: "/placeholder.svg",
      rarity: "Rare"
    }
  ];

  const filteredNFTs = nfts.filter(nft =>
    nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* Stats Section */}
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Diamond className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="text-sm opacity-80">NFTs Owned</div>
            <div className="font-bold">3</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Wallet className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="text-sm opacity-80">Total Value</div>
            <div className="font-bold">5.1 ETH</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search NFTs"
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* NFTs Grid */}
      <div className="px-4 grid grid-cols-2 gap-4">
        {filteredNFTs.map((nft) => (
          <Card key={nft.id} className="overflow-hidden">
            <img src={nft.image} alt={nft.name} className="w-full aspect-square object-cover" />
            <div className="p-3">
              <h3 className="font-semibold text-sm truncate">{nft.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-primary text-sm font-medium">{nft.price}</span>
                <span className="text-xs text-gray-500">Owned by {nft.owner}</span>
              </div>
              <Button className="w-full mt-3 text-xs" size="sm">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NFT;