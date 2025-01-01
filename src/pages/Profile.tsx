import { Settings, LogOut, Edit, Mail, Gift, Clock, Heart, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const userStats = [
    { icon: Gift, label: "Rewards", value: "12,500" },
    { icon: Heart, label: "Favorites", value: "48" },
    { icon: Clock, label: "History", value: "156" },
  ];

  const recentActivities = [
    { id: 1, action: "Purchased NFT", item: "Cosmic Dolphin #1", time: "2h ago", amount: "-2,500" },
    { id: 2, action: "Completed Task", item: "Daily Login", time: "5h ago", amount: "+100" },
    { id: 3, action: "Won Contest", item: "Weekly Challenge", time: "1d ago", amount: "+1,000" },
    { id: 4, action: "Referred Friend", item: "Sarah W.", time: "2d ago", amount: "+500" },
  ];

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex justify-end mb-4 space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl hover:bg-white/30 transition-all">
              🐬
            </div>
            <Button variant="secondary" size="icon" className="absolute bottom-0 right-0 rounded-full bg-white/80 hover:bg-white">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          
          <h1 className="text-2xl font-bold mb-1">Alex Thompson</h1>
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="w-4 h-4" />
            <span className="text-sm opacity-80">alex.t@example.com</span>
          </div>
          
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            Level 42 Ocean Master
          </Badge>
        </div>
      </div>

      <div className="px-4 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {userStats.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="p-4 text-center hover:shadow-lg transition-all duration-300 border-blue-100">
              <Icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="font-bold text-gray-800">{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-800">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <Card key={activity.id} className="p-4 hover:shadow-lg transition-all duration-300 border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.item}</p>
                  </div>
                  <p className={`font-bold ${
                    activity.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                  }`}>
                    {activity.amount}
                  </p>
                </div>
                <p className="text-xs text-gray-400">{activity.time}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;