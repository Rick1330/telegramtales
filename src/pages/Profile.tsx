import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Star, Wallet, Bell, Shield, LogOut } from "lucide-react";

const Profile = () => {
  const profileData = {
    username: "JustinN",
    avatar: "/placeholder.svg",
    balance: "5.2K",
    verified: true,
    joinDate: "March 2024"
  };

  const menuItems = [
    {
      icon: Wallet,
      label: "Wallet",
      value: profileData.balance,
      action: "Manage"
    },
    {
      icon: Bell,
      label: "Notifications",
      value: "On",
      action: "Settings"
    },
    {
      icon: Shield,
      label: "Security",
      value: "Enabled",
      action: "View"
    }
  ];

  return (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <Avatar className="w-20 h-20 border-4 border-white">
              <AvatarImage src={profileData.avatar} />
              <AvatarFallback>{profileData.username[0]}</AvatarFallback>
            </Avatar>
            {profileData.verified && (
              <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1">
                <Star className="w-4 h-4" />
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold mb-1">{profileData.username}</h2>
          <p className="text-sm opacity-80">Member since {profileData.joinDate}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        {menuItems.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.value}</div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                {item.action}
              </Button>
            </div>
          </Card>
        ))}

        {/* Settings Button */}
        <Button variant="outline" className="w-full gap-2">
          <Settings className="w-4 h-4" />
          Settings
        </Button>

        {/* Logout Button */}
        <Button variant="destructive" className="w-full gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;