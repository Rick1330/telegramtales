import { Settings, Crown, Sparkles, Trophy, Palette, Gem, Shell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const stats = [
    { 
      title: "Current Rank",
      value: "#42",
      subtext: "Top 10%",
      icon: Trophy,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "NFT Collection",
      value: "12",
      subtext: "3 Legendary",
      icon: Gem,
      gradient: "from-blue-400 to-cyan-300"
    },
    {
      title: "Avatar Level",
      value: "28",
      subtext: "Expert",
      icon: Palette,
      gradient: "from-cyan-400 to-blue-300"
    },
    {
      title: "Total Points",
      value: "74,250",
      subtext: "+2,500 today",
      icon: Shell,
      gradient: "from-cyan-300 to-blue-400"
    }
  ];

  const achievements = [
    { title: "Speed Champion", description: "Won 5 races in a row", date: "2 days ago" },
    { title: "NFT Master", description: "Collected 10 rare items", date: "1 week ago" },
    { title: "Avatar Expert", description: "Unlocked all basic customizations", date: "2 weeks ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-6 rounded-b-[2.5rem] relative">
        <div className="flex justify-end mb-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl hover:bg-white/30 transition-all">
              🐬
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-white/20 backdrop-blur-sm px-3 py-1">
                <Crown className="w-4 h-4 mr-1 inline-block" /> Ocean Master
              </Badge>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mt-4">Alex Thompson</h1>
          <p className="text-white/80 text-sm">Member since March 2024</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 -mt-8">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-blue-100">
              <div className={`bg-gradient-to-br ${stat.gradient} p-4 text-white`}>
                <stat.icon className="w-6 h-6 mb-2" />
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-sm font-medium">{stat.title}</p>
                <p className="text-xs opacity-80">{stat.subtext}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
          Recent Achievements
        </h2>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 border-blue-100 bg-white/80 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <span className="text-xs text-gray-500">{achievement.date}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;