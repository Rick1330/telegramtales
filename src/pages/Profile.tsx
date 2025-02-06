import { UserPlus, Users, MessageCircle, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const friends = [
    { id: 1, name: "Emma Wilson", status: "Online", avatar: "🐬", level: 28 },
    { id: 2, name: "James Chen", status: "Playing Quiz", avatar: "🐋", level: 35 },
    { id: 3, name: "Sofia Garcia", status: "Online", avatar: "🐠", level: 42 },
  ];

  const friendRequests = [
    { id: 4, name: "Lucas Kim", avatar: "🐡", level: 19 },
    { id: 5, name: "Mia Patel", avatar: "🦈", level: 23 },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Friends</h1>
            <p className="text-blue-100">Connect with fellow ocean explorers</p>
          </div>
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Friend
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-xl font-bold">24</span>
            </div>
            <p className="text-sm opacity-90">Friends</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xl font-bold">5</span>
            </div>
            <p className="text-sm opacity-90">Messages</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="text-xl font-bold">128</span>
            </div>
            <p className="text-sm opacity-90">Interactions</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Friend Requests Section */}
        {friendRequests.length > 0 && (
          <Card className="p-6 border-2 border-blue-100">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-blue-500" />
              Friend Requests
            </h2>
            <div className="space-y-4">
              {friendRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 bg-blue-100">
                      <AvatarFallback>{request.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{request.name}</p>
                      <Badge variant="secondary" className="mt-1">
                        Level {request.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">Accept</Button>
                    <Button size="sm" variant="outline">Decline</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Friends List Section */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-blue-500" />
            Online Friends
          </h2>
          <div className="space-y-4">
            {friends.map((friend) => (
              <div key={friend.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12 bg-blue-100">
                      <AvatarFallback>{friend.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="font-medium">{friend.name}</p>
                    <p className="text-sm text-blue-600">{friend.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Lvl {friend.level}</Badge>
                  <Button size="icon" variant="ghost">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
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