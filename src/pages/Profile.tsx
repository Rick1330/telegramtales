
import { MoreVertical, Search, UserPlus, MessageCircle, Heart, Shield, Star, Users, Medal, Crown, Target, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Profile = () => {
  const friends = [
    { id: 1, name: "Emma Wilson", avatar: "🐬", dolphins: 28, level: 12, online: true, achievements: 15 },
    { id: 2, name: "James Chen", avatar: "🐋", dolphins: 35, level: 15, online: false, achievements: 23 },
    { id: 3, name: "Sofia Garcia", avatar: "🐠", dolphins: 42, level: 18, online: true, achievements: 31 },
    { id: 4, name: "Lucas Kim", avatar: "🦈", dolphins: 38, level: 14, online: true, achievements: 19 },
    { id: 5, name: "Ava Patel", avatar: "🐟", dolphins: 45, level: 20, online: false, achievements: 27 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-6 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Friends</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search friends..." 
            className="pl-10 bg-white/10 border-none text-white placeholder:text-white/60 w-full"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center p-3 bg-white/10 rounded-lg">
            <Users className="h-6 w-6 mx-auto mb-1" />
            <div className="text-lg font-bold">{friends.length}</div>
            <div className="text-xs opacity-80">Friends</div>
          </div>
          <div className="text-center p-3 bg-white/10 rounded-lg">
            <Medal className="h-6 w-6 mx-auto mb-1" />
            <div className="text-lg font-bold">24</div>
            <div className="text-xs opacity-80">Achievements</div>
          </div>
          <div className="text-center p-3 bg-white/10 rounded-lg">
            <Crown className="h-6 w-6 mx-auto mb-1" />
            <div className="text-lg font-bold">15</div>
            <div className="text-xs opacity-80">Level</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Online Friends Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Online Friends
          </h3>
          <div className="space-y-4">
            {friends.filter(friend => friend.online).map((friend) => (
              <Card key={friend.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-gradient-to-br from-blue-100 to-cyan-100">
                        <AvatarFallback>{friend.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <p className="font-medium">{friend.name}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                          +{friend.dolphins} Dolphins
                        </Badge>
                        <Badge variant="secondary" className="bg-purple-50 text-purple-700">
                          Lvl {friend.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Gift className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Offline Friends Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            Offline Friends
          </h3>
          <div className="space-y-4">
            {friends.filter(friend => !friend.online).map((friend) => (
              <Card key={friend.id} className="p-4 opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-gray-100 to-gray-200">
                      <AvatarFallback>{friend.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{friend.name}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          +{friend.dolphins} Dolphins
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          Lvl {friend.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Showcase */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-500" />
            Achievement Showcase
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50">
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <h4 className="font-semibold">Top Collector</h4>
              <p className="text-sm text-gray-600">Collected 100+ dolphins</p>
            </Card>
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
              <Shield className="w-8 h-8 text-purple-500 mb-2" />
              <h4 className="font-semibold">Guardian</h4>
              <p className="text-sm text-gray-600">Protected 50+ friends</p>
            </Card>
          </div>
        </div>

        {/* Add Friend Button */}
        <Button className="w-full gap-2" size="lg">
          <UserPlus className="w-5 h-5" />
          Add New Friend
        </Button>
      </div>
    </div>
  );
};

export default Profile;
