import { Trophy, Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const Top = () => {
  const topUsers = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: i < 7 ? [
      "durov💎",
      "attaches✍️",
      "lastify_la",
      "battlesjam✨",
      "clayton",
      "TV_bonus⭐",
      "roxman💎"
    ][i] : `User_${i + 1}`,
    points: Math.floor(1000000 / (i + 1)).toLocaleString(),
    rank: i + 1,
    verified: Math.random() > 0.7,
    avatar: `/placeholder.svg` // Using placeholder for demo
  }));

  return (
    <div className="min-h-screen bg-[#111111] text-white pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-8 rounded-b-[2.5rem] shadow-lg mb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Trophy className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold">Top Holders</h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            <Star className="w-6 h-6 mb-2 text-yellow-500 opacity-80" />
            <p className="text-2xl font-bold">1.2M</p>
            <p className="text-sm text-gray-400">Total Points</p>
          </div>
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            <Trophy className="w-6 h-6 mb-2 text-blue-400 opacity-80" />
            <p className="text-2xl font-bold">{topUsers.length}</p>
            <p className="text-sm text-gray-400">Participants</p>
          </div>
          <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5">
            <Star className="w-6 h-6 mb-2 text-purple-400 opacity-80" />
            <p className="text-2xl font-bold">24.5K</p>
            <p className="text-sm text-gray-400">Average</p>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="px-4 space-y-3">
        {topUsers.map((user) => (
          <Card 
            key={user.id} 
            className="bg-[#1a1a1a] hover:bg-[#222222] transition-all duration-300 border-white/5"
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="w-12 h-12 border-2 border-blue-500/20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-blue-500/10 text-blue-400">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#333] flex items-center justify-center text-sm font-bold">
                    {user.rank}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white flex items-center gap-1">
                    {user.name}
                    {user.verified && (
                      <span className="text-blue-400 text-sm">✓</span>
                    )}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {user.points}
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-500">
                #{user.rank}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Top;