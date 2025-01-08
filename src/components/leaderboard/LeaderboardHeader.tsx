import { Trophy, Users } from "lucide-react";

interface CurrentPlayerStats {
  rank: number;
  points: string;
  pearlCoins: string;
  oceanGems: string;
}

interface LeaderboardHeaderProps {
  playerCount: number;
  currentPlayer: CurrentPlayerStats;
}

export const LeaderboardHeader = ({ playerCount, currentPlayer }: LeaderboardHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-8 rounded-b-[2.5rem] mb-8 shadow-lg">
      {/* Title Section */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 glass-effect rounded-xl">
            <Trophy className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold">Ocean Leaders</h1>
        </div>
        <div className="glass-effect px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{playerCount} Players</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="glass-effect rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <p className="text-lg opacity-80">Current Rank</p>
            <p className="text-4xl font-bold">#{currentPlayer.rank}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg opacity-80">Dolphins</p>
            <p className="text-4xl font-bold">{currentPlayer.points}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg opacity-80">Pearl Coins</p>
            <p className="text-4xl font-bold">{currentPlayer.pearlCoins}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg opacity-80">Ocean Gems</p>
            <p className="text-4xl font-bold">{currentPlayer.oceanGems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};