import { Gamepad2, Puzzle, Diamond, MousePointer, Dice1, Gift, Flask } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  
  const games = [
    { 
      icon: Gamepad2,
      name: "Dolphin Maze",
      isNew: false,
      color: "bg-blue-500",
      route: "/games/maze"
    },
    { 
      icon: Flask,
      name: "Water Sort",
      isNew: true,
      color: "bg-cyan-500",
      route: "/games/water-sort"
    },
    { 
      icon: Puzzle,
      name: "Puzzle Dolphins",
      color: "bg-green-500"
    },
    { 
      icon: Diamond,
      name: "Hold Dolphins",
      color: "bg-purple-500"
    },
    { 
      icon: MousePointer,
      name: "Swipe Dolphins",
      color: "bg-pink-500"
    },
    { 
      icon: Dice1,
      name: "Dolphins Roulette",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="p-6 pb-24">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Gift className="w-12 h-12 text-primary" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              6
            </span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Mini-games</h1>
        <p className="text-gray-600">
          Play our branded games and earn DOLPHINS.
          <br />
          Will there be any value in the DOLPHINS?
          <br />
          Who knows.
        </p>
      </div>

      <div className="space-y-4">
        {games.map((game) => (
          <Card key={game.name} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${game.color}`}>
                  <game.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{game.name}</span>
                  {game.isNew && (
                    <Badge className="bg-blue-100 text-blue-600">NEW</Badge>
                  )}
                </div>
              </div>
              <Button 
                onClick={() => game.route && navigate(game.route)}
                disabled={!game.route}
              >
                Play
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Games;