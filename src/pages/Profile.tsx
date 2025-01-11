import { Crown, Sparkles, Trophy, Shell, Users, Link, Share2, Gift, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ConversionSection } from "@/components/wallet/ConversionSection";
import { TonConnectButton } from '@tonconnect/ui-react';

const Profile = () => {
  const { toast } = useToast();
  const [dolphins, setDolphins] = useState(1000);
  const [pearlCoins, setPearlCoins] = useState(12500);
  const [oceanGems, setOceanGems] = useState(25);

  const stats = [
    { 
      title: "Current Rank",
      value: "#42",
      subtext: "Top 10%",
      icon: Trophy,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Total Points",
      value: "74,250",
      subtext: "+2,500 today",
      icon: Shell,
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      title: "Games Played",
      value: "28",
      subtext: "This week",
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-400"
    },
    {
      title: "Achievements",
      value: "12",
      subtext: "3 New",
      icon: Gift,
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  const handleConvertToPearls = (amount: number, rate: number) => {
    const convertedAmount = amount * rate;
    setDolphins(prev => prev - amount);
    setPearlCoins(prev => prev + convertedAmount);
  };

  const handleConvertToGems = (amount: number, rate: number) => {
    const convertedAmount = Math.floor(amount / rate);
    setDolphins(prev => prev - (convertedAmount * rate));
    setOceanGems(prev => prev + convertedAmount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-violet-500 to-purple-400 text-white p-8 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mb-4">
              🐬
            </div>
            <h1 className="text-2xl font-bold">Alex Thompson</h1>
            <p className="text-white/80 text-sm mb-4">Ocean Explorer since March 2024</p>
            <Badge className="bg-white/20 backdrop-blur-sm">
              <Crown className="w-4 h-4 mr-1" /> Ocean Master
            </Badge>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-10 space-y-6 max-w-4xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className={`bg-gradient-to-br ${stat.gradient} p-4 text-white h-full`}>
                <stat.icon className="w-6 h-6 mb-2 opacity-80" />
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-xs opacity-80">{stat.subtext}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Wallet Section */}
        <Card className="p-6 border-purple-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Wallet className="w-6 h-6 text-purple-500" />
              <h2 className="text-lg font-semibold">TON Wallet</h2>
            </div>
          </div>
          <div className="flex justify-center">
            <TonConnectButton />
          </div>
        </Card>

        {/* Currency Conversion */}
        <Card className="p-6 border-purple-100">
          <ConversionSection
            dolphins={dolphins}
            onConvertToPearls={handleConvertToPearls}
            onConvertToGems={handleConvertToGems}
          />
        </Card>

        {/* Achievements Section */}
        <Card className="p-6 border-purple-100">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold">Recent Achievements</h2>
          </div>
          <div className="space-y-3">
            {[
              { title: "Maze Master", description: "Completed 5 mazes under 1 minute", date: "2 days ago" },
              { title: "Water Sort Pro", description: "Solved 10 puzzles", date: "1 week ago" },
              { title: "Speed Runner", description: "Top 100 in weekly ranking", date: "2 weeks ago" }
            ].map((achievement, index) => (
              <div key={index} className="p-4 bg-purple-50 rounded-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-purple-900">{achievement.title}</h3>
                    <p className="text-sm text-purple-600">{achievement.description}</p>
                  </div>
                  <span className="text-xs text-purple-500">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
