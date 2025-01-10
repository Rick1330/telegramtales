import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

interface Treasure {
  id: number;
  x: number;
  y: number;
  found: boolean;
  type: 'gold' | 'silver' | 'bronze';
  points: number;
}

const OceanExplorer = () => {
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [playerVelocity, setPlayerVelocity] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      setPlayerPosition(prev => ({
        x: Math.max(0, Math.min(9, prev.x + playerVelocity.x)),
        y: Math.max(0, Math.min(9, prev.y + playerVelocity.y))
      }));
    };

    const gameLoop = setInterval(updatePosition, 16); // ~60fps

    return () => clearInterval(gameLoop);
  }, [playerVelocity]);

  const initializeGame = () => {
    const treasureTypes = ['gold', 'silver', 'bronze'] as const;
    const points = { gold: 300, silver: 200, bronze: 100 };
    
    const newTreasures = Array(8).fill(null).map((_, index) => {
      const type = treasureTypes[Math.floor(Math.random() * treasureTypes.length)];
      return {
        id: index,
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
        found: false,
        type,
        points: points[type]
      };
    });

    setTreasures(newTreasures);
    setPlayerPosition({ x: 0, y: 0 });
    setPlayerVelocity({ x: 0, y: 0 });
    setMoves(0);
    setScore(0);
    setGameOver(false);
  };

  const handleMove = (dx: number, dy: number) => {
    if (gameOver) return;

    const acceleration = 0.5;
    setPlayerVelocity(prev => ({
      x: dx * acceleration,
      y: dy * acceleration
    }));

    setMoves(moves + 1);

    // Check for treasures with improved collision detection
    const updatedTreasures = treasures.map(treasure => {
      if (!treasure.found) {
        const distance = Math.sqrt(
          Math.pow(playerPosition.x - treasure.x, 2) + 
          Math.pow(playerPosition.y - treasure.y, 2)
        );
        
        if (distance < 1.5) {
          toast.success(`Found ${treasure.type} treasure! +${treasure.points} points!`);
          setScore(prev => prev + treasure.points);
          return { ...treasure, found: true };
        }
      }
      return treasure;
    });

    setTreasures(updatedTreasures);

    // Check if all treasures are found
    if (updatedTreasures.every(t => t.found)) {
      setGameOver(true);
      toast.success(`Congratulations! Final Score: ${score + updatedTreasures.find(t => !t.found)?.points || 0}`);
    }
  };

  const getTreasureColor = (type: Treasure['type']) => {
    switch (type) {
      case 'gold': return 'bg-yellow-400';
      case 'silver': return 'bg-gray-300';
      case 'bronze': return 'bg-amber-600';
      default: return 'bg-blue-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400">
      <div className="gradient-bg p-4 flex items-center gap-4 text-white backdrop-blur-lg">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Ocean Explorer</h1>
      </div>

      <div className="p-6 max-w-lg mx-auto">
        <Card className="p-6 mb-4 bg-white/10 backdrop-blur-md border-white/20">
          <div className="grid grid-cols-10 gap-1 mb-4">
            {Array(100).fill(null).map((_, index) => {
              const x = Math.floor(index / 10);
              const y = index % 10;
              const isPlayer = Math.floor(playerPosition.x) === x && Math.floor(playerPosition.y) === y;
              const treasure = treasures.find(t => t.x === x && t.y === y);
              
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-lg transition-all duration-200 ${
                    isPlayer
                      ? "bg-blue-500 shadow-lg scale-110 z-10"
                      : treasure?.found
                      ? `${getTreasureColor(treasure.type)} opacity-50`
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-[200px] mx-auto">
            <div />
            <Button 
              onClick={() => handleMove(-1, 0)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              ↑
            </Button>
            <div />
            <Button 
              onClick={() => handleMove(0, -1)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              ←
            </Button>
            <Button 
              onClick={() => initializeGame()}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              ↺
            </Button>
            <Button 
              onClick={() => handleMove(0, 1)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              →
            </Button>
            <div />
            <Button 
              onClick={() => handleMove(1, 0)}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              ↓
            </Button>
            <div />
          </div>
        </Card>

        <Card className="p-4 text-center bg-white/10 backdrop-blur-md border-white/20">
          <div className="grid grid-cols-2 gap-4 text-white">
            <div>
              <p className="text-sm opacity-75">Score</p>
              <p className="text-2xl font-bold">{score}</p>
            </div>
            <div>
              <p className="text-sm opacity-75">Moves</p>
              <p className="text-2xl font-bold">{moves}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OceanExplorer;