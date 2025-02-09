
import { UserPlus, ArrowLeft, MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Profile = () => {
  const friends = [
    { id: 1, name: "Emma Wilson", avatar: "🐬", dolphins: 28 },
    { id: 2, name: "James Chen", avatar: "🐋", dolphins: 35 },
    { id: 3, name: "Sofia Garcia", avatar: "🐠", dolphins: 42 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/games">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold">Dolphins</h1>
          </div>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Invite Section */}
      <div className="px-4 py-12 text-center space-y-6">
        <div className="max-w-[280px] mx-auto">
          <img 
            src="/lovable-uploads/1150b2b5-059e-4b61-b173-638d1e6877eb.png" 
            alt="Invite friends illustration" 
            className="w-32 h-32 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold mb-2">Invite friends</h2>
          <p className="text-gray-600 mb-6">and get more DOLPHINS</p>
          <Button className="w-full bg-blue-500 hover:bg-blue-600" size="lg">
            <UserPlus className="w-5 h-5 mr-2" />
            Invite friends
          </Button>
        </div>
      </div>

      {/* Friends Count */}
      <div className="px-4 py-6 border-t border-gray-100">
        <h3 className="text-lg font-semibold mb-4">{friends.length} friends</h3>
        
        {/* Friends List */}
        <div className="space-y-4">
          {friends.map((friend) => (
            <Card key={friend.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-blue-100">
                  <AvatarFallback>{friend.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{friend.name}</p>
                  <Badge variant="secondary" className="mt-1">
                    +{friend.dolphins} Dolphins
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
