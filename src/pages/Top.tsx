import { Trophy, TrendingUp, Users, DollarSign, Waves } from "lucide-react";
import { Card } from "@/components/ui/card";

const Top = () => {
  const topUsers = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Dolphin ${i + 1}`,
    balance: (100000 - (i * 750)).toLocaleString(),
    rank: i + 1,
    verified: Math.random() > 0.7
  }));

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <Trophy className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold">Ocean Leaders</h1>
          </div>
          <TrendingUp className="w-6 h-6" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
            <DollarSign className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">$1.2M</p>
            <p className="text-sm opacity-80">Total Value</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
            <Users className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">2.5k</p>
            <p className="text-sm opacity-80">Players</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
            <Trophy className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">500</p>
            <p className="text-sm opacity-80">Winners</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="space-y-4">
          {topUsers.map((user) => (
            <Card key={user.id} className="p-4 hover:shadow-lg transition-all duration-300 border-blue-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">#{user.rank}</span>
                    </div>
                    {user.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse">
                        ✓
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-blue-600">${user.balance}</p>
                  <p className="text-sm text-gray-500">DOLPHINS</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;