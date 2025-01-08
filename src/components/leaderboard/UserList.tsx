import { Shell, Crown, Gem } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UserDetails {
  id: number;
  name: string;
  balance: string;
  pearlCoins: string;
  oceanGems: string;
  rank: number;
  verified: boolean;
  level: number;
  experience: number;
  achievements: string[];
  joinDate: string;
  gamesWon: number;
  winRate: string;
}

interface UserListProps {
  users: UserDetails[];
  onSelectUser: (user: UserDetails) => void;
}

export const UserList = ({ users, onSelectUser }: UserListProps) => {
  return (
    <div className="space-y-4 px-4">
      {users.map((user) => (
        <Card 
          key={user.id} 
          className="p-4 hover:shadow-lg transition-all duration-300 border-blue-100 cursor-pointer"
          onClick={() => onSelectUser(user)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">#{user.rank}</span>
                </div>
                {user.verified && (
                  <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ✓
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-gray-800 text-lg">{user.name}</p>
                  <Badge variant="secondary" className="text-xs">
                    Lvl {user.level}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">Rank #{user.rank}</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center justify-end gap-2">
                <Shell className="w-4 h-4 text-blue-500" />
                <p className="font-bold text-blue-600">${user.balance}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Crown className="w-4 h-4 text-amber-500" />
                <p className="text-sm text-amber-600">{user.pearlCoins}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Gem className="w-4 h-4 text-purple-500" />
                <p className="text-sm text-purple-600">{user.oceanGems}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};