import { Settings, LogOut, Edit, Gift, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const userStats = [
    { icon: Gift, label: "Rewards", value: "12.5K" },
    { icon: Heart, label: "Favorites", value: "48" },
  ];

  const recentActivities = [
    { id: 1, action: "Purchased NFT", item: "Cosmic Dolphin #1", amount: "-2,500" },
    { id: 2, action: "Won Contest", item: "Weekly Challenge", amount: "+1,000" },
  ];

  return (
    <div className="pb-16">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-6 rounded-b-[2rem] relative">
        <div className="flex justify-end mb-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl hover:bg-white/30 transition-all">
              🐬
            </div>
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute bottom-0 right-0 rounded-full bg-white/80 hover:bg-white w-6 h-6"
            >
              <Edit className="w-3 h-3" />
            </Button>
          </div>
          
          <h1 className="text-xl font-bold mb-1">Alex Thompson</h1>
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
            Ocean Master
          </Badge>
        </div>
      </div>

      <div className="px-4 space-y-4 mt-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-3">
          {userStats.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="p-3 text-center hover:shadow-md transition-all duration-300 border-blue-100">
              <Icon className="w-5 h-5 mx-auto mb-1 text-blue-500" />
              <p className="font-bold text-gray-800">{value}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </Card>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="text-base font-semibold mb-3 text-gray-800">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <Card key={activity.id} className="p-3 hover:shadow-md transition-all duration-300 border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.item}</p>
                  </div>
                  <p className={`font-semibold text-sm ${
                    activity.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                  }`}>
                    {activity.amount}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;