import { Trophy, Users, Shell, Gem, Crown, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface UserDetails {
  id: number;
  name: string;
  balance: string;
  pearlCoins: string;
  oceanGems: string;
  rank: number;
  verified: boolean;
  level: number;
  experience: number;
  achievements: string[];
  joinDate: string;
  gamesWon: number;
  winRate: string;
}

const Top = () => {
  const [selectedUser, setSelectedUser] = useState<UserDetails | null>(null);

  const topUsers: UserDetails[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Dolphin ${i + 1}`,
    balance: (100000 - (i * 750)).toLocaleString(),
    pearlCoins: (250000 - (i * 1500)).toLocaleString(),
    oceanGems: (1000 - (i * 8)).toLocaleString(),
    rank: i + 1,
    verified: Math.random() > 0.7,
    level: Math.floor(100 - (i * 0.8)),
    experience: Math.floor(10000 - (i * 85)),
    achievements: [
      "Ocean Master",
      "Pearl Collector",
      "Gem Hunter",
      "Wave Rider"
    ],
    joinDate: "March 2024",
    gamesWon: Math.floor(500 - (i * 4)),
    winRate: `${Math.floor(85 - (i * 0.5))}%`
  }));

  // Mock current player data
  const currentPlayer = {
    rank: 42,
    points: "74,250",
    pearlCoins: "180,500",
    oceanGems: "850"
  };

  const getLevelTitle = (level: number) => {
    if (level >= 90) return "Legendary Ocean Master";
    if (level >= 70) return "Elite Wave Rider";
    if (level >= 50) return "Seasoned Navigator";
    if (level >= 30) return "Skilled Swimmer";
    return "Rising Tide";
  };

  const getExperienceToNextLevel = (level: number, experience: number) => {
    const nextLevelExp = level * 1000;
    return nextLevelExp - experience;
  };

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 glass-effect rounded-xl">
              <Trophy className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold">Ocean Leaders</h1>
          </div>
          <div className="glass-effect px-3 py-1.5 rounded-xl">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">{topUsers.length} Players</span>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
              <div>
                <p className="text-lg opacity-90">Current Rank</p>
                <p className="text-3xl font-bold">#{currentPlayer.rank}</p>
              </div>
              <div>
                <p className="text-lg opacity-90">Dolphins</p>
                <p className="text-3xl font-bold">{currentPlayer.points}</p>
              </div>
              <div>
                <p className="text-lg opacity-90">Pearl Coins</p>
                <p className="text-3xl font-bold">{currentPlayer.pearlCoins}</p>
              </div>
              <div>
                <p className="text-lg opacity-90">Ocean Gems</p>
                <p className="text-3xl font-bold">{currentPlayer.oceanGems}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="space-y-4">
          {topUsers.map((user) => (
            <Card 
              key={user.id} 
              className="p-4 hover:shadow-lg transition-all duration-300 border-blue-100 cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
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
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <Badge variant="secondary" className="text-xs">
                        Lvl {user.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <div className="flex items-center justify-end gap-2">
                    <Shell className="w-4 h-4 text-blue-500" />
                    <p className="font-bold text-blue-600">${user.balance}</p>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Crown className="w-4 h-4 text-amber-500" />
                    <p className="text-sm text-amber-600">{user.pearlCoins}</p>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <Gem className="w-4 h-4 text-purple-500" />
                    <p className="text-sm text-purple-600">{user.oceanGems}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="max-w-2xl">
          {selectedUser && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-xl">
                      {selectedUser.name.charAt(0)}
                    </div>
                    {selectedUser.verified && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        ✓
                      </div>
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedUser.name}</h2>
                    <p className="text-gray-500 text-sm">Member since {selectedUser.joinDate}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Level and Experience */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Level {selectedUser.level}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {getLevelTitle(selectedUser.level)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Experience: {selectedUser.experience} / {selectedUser.level * 1000}
                  </p>
                  <p className="text-xs text-gray-500">
                    {getExperienceToNextLevel(selectedUser.level, selectedUser.experience)} XP to next level
                  </p>
                </div>

                {/* Currency Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shell className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold">Dolphins</h3>
                    </div>
                    <p className="text-xl font-bold text-blue-700">${selectedUser.balance}</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-5 h-5 text-amber-500" />
                      <h3 className="font-semibold">Pearl Coins</h3>
                    </div>
                    <p className="text-xl font-bold text-amber-700">{selectedUser.pearlCoins}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold">Ocean Gems</h3>
                    </div>
                    <p className="text-xl font-bold text-purple-700">{selectedUser.oceanGems}</p>
                  </div>
                </div>

                {/* Game Stats */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Game Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Games Won</p>
                      <p className="text-xl font-bold text-gray-800">{selectedUser.gamesWon}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Win Rate</p>
                      <p className="text-xl font-bold text-gray-800">{selectedUser.winRate}</p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="font-semibold mb-3">Achievements</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-700">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Top;