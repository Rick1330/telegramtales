import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { LeaderboardHeader } from "@/components/leaderboard/LeaderboardHeader";
import { UserList } from "@/components/leaderboard/UserList";

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
      <LeaderboardHeader 
        playerCount={topUsers.length}
        currentPlayer={currentPlayer}
      />
      
      <UserList 
        users={topUsers}
        onSelectUser={setSelectedUser}
      />

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
