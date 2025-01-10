import { useNavigate } from "react-router-dom";
import { Brain, Compass, Waves, Fish, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Game {
  id: string;
  title: string;
  icon: any;
  reward: string;
  available: boolean;
  route: string;
  bgColor: string;
  iconBgColor: string;
}

const Games = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const games: Game[] = [
    {
      id: "daily-quiz",
      title: "Daily Ocean Quiz",
      icon: Brain,
      reward: "+1500 DOLPHINS",
      available: true,
      route: "/games/daily-quiz",
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-500"
    },
    {
      id: "ocean-explorer",
      title: "Ocean Explorer",
      icon: Compass,
      reward: "+3000 DOLPHINS",
      available: true,
      route: "/games/ocean-explorer",
      bgColor: "bg-emerald-50",
      iconBgColor: "bg-emerald-500"
    },
    {
      id: "water-sort",
      title: "Water Sort Puzzle",
      icon: Waves,
      reward: "+2500 DOLPHINS",
      available: true,
      route: "/games/water-sort",
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-500"
    },
    {
      id: "marine-quiz",
      title: "Marine Biology Quiz",
      icon: Fish,
      reward: "+1800 DOLPHINS",
      available: true,
      route: "/games/marine-quiz",
      bgColor: "bg-pink-50",
      iconBgColor: "bg-pink-500"
    },
    {
      id: "eco-warrior",
      title: "Eco-Warrior Challenge",
      icon: Shield,
      reward: "+4000 DOLPHINS",
      available: true,
      route: "/games/eco-warrior",
      bgColor: "bg-amber-50",
      iconBgColor: "bg-amber-500"
    }
  ];

  const handleGameClick = (route: string) => {
    try {
      console.log("Navigating to:", route);
      // Remove the leading slash for relative routing
      const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
      navigate(cleanRoute);
    } catch (error) {
      console.error("Navigation error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Unable to load the game. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-cyan-400">
      <div className="px-4 py-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Ocean Games</h1>
        <p className="text-blue-50">
          Dive into our collection of ocean-themed games!
        </p>
      </div>

      <div className="px-4 pb-20 space-y-4">
        {games.map((game) => (
          <div
            key={game.id}
            className={`${game.bgColor} rounded-2xl p-4 shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`${game.iconBgColor} p-3 rounded-2xl`}>
                  <game.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {game.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium text-blue-600">
                      {game.reward}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleGameClick(game.route)}
                className={`${game.iconBgColor} text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity`}
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;