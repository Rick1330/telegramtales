import { Trophy, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const Top = () => {
  const topUsers = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`,
    balance: (100000 - (i * 750)).toLocaleString(),
    rank: i + 1,
    verified: Math.random() > 0.7
  }));

  return (
    <div className="pb-20">
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Top 100 Players</h1>
          <TrendingUp className="w-6 h-6" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white/20 rounded-xl p-4">
            <DollarSign className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">$1.2M</p>
            <p className="text-sm opacity-80">Total Value</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <Users className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">2.5k</p>
            <p className="text-sm opacity-80">Players</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <Trophy className="w-6 h-6 mb-2" />
            <p className="text-2xl font-bold">500</p>
            <p className="text-sm opacity-80">Winners</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="space-y-4">
          {topUsers.map((user) => (
            <Card key={user.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl">#{user.rank}</span>
                    </div>
                    {user.verified && (
                      <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">${user.balance}</p>
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