import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface TrashItem {
  id: number;
  type: 'plastic' | 'paper' | 'metal' | 'organic';
  x: number;
  y: number;
  collected: boolean;
}

const EcoWarrior = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [trashItems, setTrashItems] = useState<TrashItem[]>([]);
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (!gameOver && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver]);

  const initializeGame = () => {
    const items: TrashItem[] = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        type: ['plastic', 'paper', 'metal', 'organic'][Math.floor(Math.random() * 4)] as TrashItem['type'],
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
        collected: false
      });
    }
    setTrashItems(items);
    setPlayerPosition({ x: 5, y: 5 });
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
  };

  const handleMove = (dx: number, dy: number) => {
    if (gameOver) return;

    const newX = Math.max(0, Math.min(9, playerPosition.x + dx));
    const newY = Math.max(0, Math.min(9, playerPosition.y + dy));
    
    setPlayerPosition({ x: newX, y: newY });

    // Collect trash at new position
    const updatedTrash = trashItems.map(item => {
      if (!item.collected && item.x === newX && item.y === newY) {
        setScore(score + 10);
        toast.success(`+10 points! ${item.type} recycled!`);
        return { ...item, collected: true };
      }
      return item;
    });

    setTrashItems(updatedTrash);

    // Check if all trash is collected
    if (updatedTrash.every(item => item.collected)) {
      toast.success("All trash collected! Great job!");
      endGame();
    }
  };

  const endGame = () => {
    setGameOver(true);
    toast.success(`Game Over! Final Score: ${score}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="gradient-bg p-4 flex items-center gap-4 text-white">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Eco-Warrior Challenge</h1>
      </div>

      <div className="p-6 max-w-lg mx-auto">
        <Card className="p-6 mb-4">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Score: {score}</span>
              <span className="font-medium">Time: {timeLeft}s</span>
            </div>
            <Progress value={(timeLeft / 60) * 100} />
          </div>

          <div className="grid grid-cols-10 gap-1 mb-4">
            {Array(100).fill(null).map((_, index) => {
              const x = Math.floor(index / 10);
              const y = index % 10;
              const isPlayer = x === playerPosition.x && y === playerPosition.y;
              const trash = trashItems.find(t => t.x === x && t.y === y && !t.collected);
              
              return (
                <div
                  key={index}
                  className={`aspect-square rounded ${
                    isPlayer
                      ? "bg-blue-500"
                      : trash
                      ? trash.type === 'plastic'
                        ? "bg-red-300"
                        : trash.type === 'paper'
                        ? "bg-yellow-300"
                        : trash.type === 'metal'
                        ? "bg-gray-300"
                        : "bg-green-300"
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

        {gameOver && (
          <Card className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
            <p className="text-xl mb-6">Final Score: {score}</p>
            <Button onClick={initializeGame} className="w-full">
              Play Again
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EcoWarrior;