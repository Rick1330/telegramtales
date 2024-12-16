import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Trophy } from "lucide-react";
import { useState } from "react";

const Top = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const topUsers = [
    {
      id: 1,
      username: "JustinN",
      balance: "24.0M",
      avatar: "/placeholder.svg",
      rank: "#1",
      verified: true
    },
    {
      id: 2,
      username: "spasecex",
      balance: "11.5M",
      avatar: "/placeholder.svg",
      rank: "#2",
      verified: true
    },
    {
      id: 3,
      username: "toanngu",
      balance: "6.6M",
      avatar: "/placeholder.svg",
      rank: "#3",
      verified: true
    },
    {
      id: 4,
      username: "cryptoBull",
      balance: "4.2M",
      avatar: "/placeholder.svg",
      rank: "#4"
    },
    {
      id: 5,
      username: "satoshiLite",
      balance: "3.3M",
      avatar: "/placeholder.svg",
      rank: "#5",
      verified: true
    }
  ];

  const filteredUsers = topUsers.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-20">
      {/* Stats Section */}
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="text-sm opacity-80">Your Balance</div>
            <div className="font-bold">5.2K</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-lg">#</span>
            </div>
            <div className="text-sm opacity-80">Your Rank</div>
            <div className="font-bold">#13.9M</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="text-sm opacity-80">Reward</div>
            <div className="font-bold">0</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search users"
            className="pl-10 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Users List */}
      <div className="px-4 space-y-3">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.username[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {user.id}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{user.username}</span>
                  {user.verified && (
                    <span className="text-primary">✓</span>
                  )}
                </div>
                <div className="text-primary font-medium">
                  ⭐ {user.balance}
                </div>
              </div>
            </div>
            <div className="text-gray-500 font-medium">
              {user.rank}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Top;