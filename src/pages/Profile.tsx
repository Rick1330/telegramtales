import { Crown, Shell, Sparkles, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TonConnectButton } from '@tonconnect/ui-react';

const Profile = () => {
  // Using the same stats as shown in the home page for consistency
  const userStats = {
    dolphins: "21,258",
    rank: "#42",
    pearlCoins: "12,500",
    oceanGems: "850",
    gamesWon: 28,
    achievements: 12
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header Section - Matching the gradient style from other pages */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl mb-3">
            🐬
          </div>
          <h1 className="text-2xl font-bold">Alex Thompson</h1>
          <p className="text-white/80 text-sm">Ocean Explorer since March 2024</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <StatsCard title="Dolphins" value={userStats.dolphins} icon={Shell} />
          <StatsCard title="Rank" value={userStats.rank} icon={Trophy} />
          <StatsCard title="Games Won" value={userStats.gamesWon.toString()} icon={Users} />
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Wallet Section */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Shell className="w-5 h-5 text-blue-500" />
              TON Wallet
            </h2>
          </div>
          <TonConnectButton />
        </Card>

        {/* Achievements Section */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-blue-500" />
            Recent Achievements
          </h2>
          <div className="space-y-3">
            {[
              { title: "Ocean Master", description: "Complete all daily tasks", date: "2 days ago" },
              { title: "Pearl Hunter", description: "Collect 10,000 pearls", date: "1 week ago" },
              { title: "Top Player", description: "Reach top 100 ranking", date: "2 weeks ago" }
            ].map((achievement, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-blue-900">{achievement.title}</h3>
                    <p className="text-sm text-blue-600">{achievement.description}</p>
                  </div>
                  <span className="text-xs text-blue-500">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats Overview */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            Stats Overview
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatItem title="Pearl Coins" value={userStats.pearlCoins} />
            <StatItem title="Ocean Gems" value={userStats.oceanGems} />
            <StatItem title="Total Games" value="156" />
            <StatItem title="Win Rate" value="82%" />
          </div>
        </Card>
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
      <div className="flex items-center gap-2 mb-1">
        <p className="text-2xl font-bold">{value}</p>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-sm opacity-90">{title}</p>
    </div>
  );
};

const StatItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-xl">
      <p className="text-sm text-blue-600 mb-1">{title}</p>
      <p className="text-xl font-bold text-blue-900">{value}</p>
    </div>
  );
};

export default Profile;