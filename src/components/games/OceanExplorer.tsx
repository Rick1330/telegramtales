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
}

const OceanExplorer = () => {
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const newTreasures = Array(5).fill(null).map((_, index) => ({
      id: index,
      x: Math.floor(Math.random() * 10),
      y: Math.floor(Math.random() * 10),
      found: false
    }));
    setTreasures(newTreasures);
    setPlayerPosition({ x: 0, y: 0 });
    setMoves(0);
    setGameOver(false);
  };

  const handleMove = (dx: number, dy: number) => {
    if (gameOver) return;

    const newX = Math.max(0, Math.min(9, playerPosition.x + dx));
    const newY = Math.max(0, Math.min(9, playerPosition.y + dy));
    
    setPlayerPosition({ x: newX, y: newY });
    setMoves(moves + 1);

    // Check for treasures
    const updatedTreasures = treasures.map(treasure => {
      if (!treasure.found && treasure.x === newX && treasure.y === newY) {
        toast.success("You found a treasure!");
        return { ...treasure, found: true };
      }
      return treasure;
    });

    setTreasures(updatedTreasures);

    // Check if all treasures are found
    if (updatedTreasures.every(t => t.found)) {
      setGameOver(true);
      toast.success(`Congratulations! You found all treasures in ${moves} moves!`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="gradient-bg p-4 flex items-center gap-4 text-white">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Ocean Explorer</h1>
      </div>

      <div className="p-6 max-w-lg mx-auto">
        <Card className="p-6 mb-4">
          <div className="grid grid-cols-10 gap-1 mb-4">
            {Array(100).fill(null).map((_, index) => {
              const x = Math.floor(index / 10);
              const y = index % 10;
              const isPlayer = x === playerPosition.x && y === playerPosition.y;
              const treasure = treasures.find(t => t.x === x && t.y === y);
              
              return (
                <div
                  key={index}
                  className={`aspect-square rounded ${
                    isPlayer
                      ? "bg-blue-500"
                      : treasure?.found
                      ? "bg-yellow-300"
                      : "bg-blue-100"
                  }`}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
            <div />
            <Button onClick={() => handleMove(-1, 0)}>↑</Button>
            <div />
            <Button onClick={() => handleMove(0, -1)}>←</Button>
            <Button onClick={() => initializeGame()}>↺</Button>
            <Button onClick={() => handleMove(0, 1)}>→</Button>
            <div />
            <Button onClick={() => handleMove(1, 0)}>↓</Button>
            <div />
          </div>
        </Card>

        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            Treasures Found: {treasures.filter(t => t.found).length} / {treasures.length}
          </p>
          <p className="text-gray-600">Moves: {moves}</p>
        </div>
      </div>
    </div>
  );
};

export default OceanExplorer;