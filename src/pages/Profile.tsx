import { Settings, Crown, Sparkles, Trophy, Palette, Gem, Shell, Users, Link, Share2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const { toast } = useToast();
  
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
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Avatar Level",
      value: "28",
      subtext: "Expert",
      icon: Palette,
      gradient: "from-amber-500 to-orange-400"
    },
    {
      title: "Total Points",
      value: "74,250",
      subtext: "+2,500 today",
      icon: Shell,
      gradient: "from-emerald-500 to-teal-400"
    }
  ];

  const achievements = [
    { title: "Speed Champion", description: "Won 5 races in a row", date: "2 days ago" },
    { title: "NFT Master", description: "Collected 10 rare items", date: "1 week ago" },
    { title: "Avatar Expert", description: "Unlocked all basic customizations", date: "2 weeks ago" }
  ];

  const referralInfo = {
    code: "ALEX123",
    totalReferred: 15,
    activeReferrals: 8,
    rewards: 2500,
    recentReferrals: [
      { name: "Emma Watson", date: "2 days ago", status: "active" },
      { name: "John Smith", date: "1 week ago", status: "active" },
      { name: "Sarah Parker", date: "2 weeks ago", status: "inactive" }
    ]
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralInfo.code);
    toast({
      title: "Referral Code Copied!",
      description: "Share this code with your friends to earn rewards.",
      duration: 3000,
    });
  };

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

      <div className="px-4 -mt-8 space-y-6">
        {/* Stats Grid */}
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

        {/* Referral Section */}
        <Card className="p-6 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              <h2 className="text-lg font-semibold">Referral Program</h2>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              {referralInfo.totalReferred} Referrals
            </Badge>
          </div>

          <div className="bg-blue-50 p-4 rounded-xl mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-blue-700 font-medium">Your Referral Code</p>
              <Button variant="ghost" size="sm" onClick={copyReferralCode} className="text-blue-600">
                <Link className="w-4 h-4 mr-1" />
                Copy Code
              </Button>
            </div>
            <p className="text-xl font-bold text-blue-800">{referralInfo.code}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Recent Referrals</h3>
            {referralInfo.recentReferrals.map((referral, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    {referral.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{referral.name}</p>
                    <p className="text-xs text-gray-500">{referral.date}</p>
                  </div>
                </div>
                <Badge variant={referral.status === 'active' ? 'default' : 'secondary'}>
                  {referral.status}
                </Badge>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500">
            <Share2 className="w-4 h-4 mr-2" />
            Share Referral Link
          </Button>
        </Card>

        {/* Recent Achievements */}
        <Card className="p-6 border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Recent Achievements</h2>
          </div>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <span className="text-xs text-gray-500">{achievement.date}</span>
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