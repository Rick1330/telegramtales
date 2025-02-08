
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
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white p-4 rounded-b-xl mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 glass-effect rounded-lg">
            <Trophy className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold">Ocean Leaders</h1>
        </div>
        <div className="glass-effect px-3 py-1 rounded-lg">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span className="text-sm">{playerCount} Players</span>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-4">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm opacity-80">Rank</p>
            <p className="text-lg font-bold">#{currentPlayer.rank}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Dolphins</p>
            <p className="text-lg font-bold">{currentPlayer.points}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Pearls</p>
            <p className="text-lg font-bold">{currentPlayer.pearlCoins}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Gems</p>
            <p className="text-lg font-bold">{currentPlayer.oceanGems}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
