import { Brain, Compass, Fish, Shield, Waves } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Game {
  id: string;
  title: string;
  description: string;
  icon: any;
  reward: string;
  available: boolean;
  route: string;
}

const Games = () => {
  const navigate = useNavigate();

  const games: Game[] = [
    {
      id: "daily-quiz",
      title: "Daily Ocean Quiz",
      description: "Test your ocean knowledge with our daily quiz challenge!",
      icon: Brain,
      reward: "+1500 DOLPHINS",
      available: true,
      route: "/games/daily-quiz"
    },
    {
      id: "ocean-explorer",
      title: "Ocean Explorer",
      description: "Navigate through the ocean depths to find hidden treasures!",
      icon: Compass,
      reward: "+3000 DOLPHINS",
      available: true,
      route: "/games/ocean-explorer"
    },
    {
      id: "water-sort",
      title: "Water Sort Puzzle",
      description: "Sort the colored water in the tubes!",
      icon: Waves,
      reward: "+2500 DOLPHINS",
      available: true,
      route: "/games/water-sort"
    },
    {
      id: "marine-quiz",
      title: "Marine Biology Quiz",
      description: "Challenge yourself with marine biology questions!",
      icon: Fish,
      reward: "+1800 DOLPHINS",
      available: true,
      route: "/games/marine-quiz"
    },
    {
      id: "eco-warrior",
      title: "Eco-Warrior Challenge",
      description: "Clean the ocean and protect marine life!",
      icon: Shield,
      reward: "+4000 DOLPHINS",
      available: true,
      route: "/games/eco-warrior"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-6 rounded-b-[2rem] shadow-lg">
        <h1 className="text-3xl font-bold">Ocean Games</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="grid gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              className="p-4 hover:shadow-lg transition-all duration-200 bg-white/80 backdrop-blur-sm border-primary/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center">
                  <game.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{game.title}</h3>
                  <p className="text-sm text-gray-500">{game.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium text-primary">{game.reward}</span>
                    {!game.available && (
                      <span className="text-xs text-gray-500">(Available in 12h)</span>
                    )}
                  </div>
                </div>
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                  onClick={() => navigate(game.route)}
                  disabled={!game.available}
                >
                  Play Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
