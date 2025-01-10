import { Brain, Compass, Coins, Fish, Shield, Waves } from "lucide-react";
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
  bgGradient: string;
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
      route: "/games/daily-quiz",
      bgGradient: "from-blue-500 to-cyan-400"
    },
    {
      id: "ocean-explorer",
      title: "Ocean Explorer",
      description: "Navigate through the ocean depths to find hidden treasures!",
      icon: Compass,
      reward: "+3000 DOLPHINS",
      available: true,
      route: "/games/ocean-explorer",
      bgGradient: "from-emerald-500 to-teal-400"
    },
    {
      id: "water-sort",
      title: "Water Sort Puzzle",
      description: "Sort the colored water in the tubes!",
      icon: Waves,
      reward: "+2500 DOLPHINS",
      available: true,
      route: "/games/water-sort",
      bgGradient: "from-purple-500 to-indigo-400"
    },
    {
      id: "marine-quiz",
      title: "Marine Biology Quiz",
      description: "Challenge yourself with marine biology questions!",
      icon: Fish,
      reward: "+1800 DOLPHINS",
      available: true,
      route: "/games/marine-quiz",
      bgGradient: "from-pink-500 to-rose-400"
    },
    {
      id: "eco-warrior",
      title: "Eco-Warrior Challenge",
      description: "Clean the ocean and protect marine life!",
      icon: Shield,
      reward: "+4000 DOLPHINS",
      available: true,
      route: "/games/eco-warrior",
      bgGradient: "from-amber-500 to-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 text-white p-8 rounded-b-[2.5rem] shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">Ocean Games</h1>
        <p className="text-center text-blue-100 max-w-md mx-auto">
          Dive into our collection of ocean-themed games and earn rewards while learning about marine life!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="grid gap-6">
          {games.map((game) => (
            <Card
              key={game.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${game.bgGradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="p-6 flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.bgGradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <game.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-gray-600">{game.description}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <Coins className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{game.reward}</span>
                      {!game.available && (
                        <span className="text-xs text-gray-500 ml-2">(Available in 12h)</span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="default"
                    className={`bg-gradient-to-r ${game.bgGradient} text-white hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl`}
                    onClick={() => navigate(game.route)}
                    disabled={!game.available}
                  >
                    Play Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;