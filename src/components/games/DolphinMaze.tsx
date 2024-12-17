import { useState, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import MazeCanvas from './maze/MazeCanvas';
import GameTimer from './maze/GameTimer';

const DolphinMaze = () => {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const ballRef = useRef({ x: 30, y: 30 });
  const [isGameOver, setIsGameOver] = useState(false);

  const handleWin = () => {
    setIsGameOver(true);
    setGameStarted(false);
    toast.success("Congratulations! You've completed the maze!");
  };

  const startGame = async () => {
    try {
      // Cast to our custom type that includes requestPermission
      const DeviceOrientationEvent = window.DeviceOrientationEvent as unknown as DeviceOrientationEventStatic;
      
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          initializeGame();
        }
      } else {
        // For non-iOS devices or when permission is not required
        initializeGame();
      }
    } catch (error) {
      toast.error("Please enable device orientation permissions to play");
    }
  };

  const initializeGame = () => {
    setGameStarted(true);
    setTimeLeft(60);
    setIsGameOver(false);
    ballRef.current = { x: 30, y: 30 };

    // Start countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameStarted(false);
          setIsGameOver(true);
          toast.error("Time's up!");
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup timer on game end
    setTimeout(() => clearInterval(timer), 60000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top section with gradient background */}
      <div className="flex-1 bg-gradient-to-b from-[#D3E4FD] to-[#90C5FF] p-4">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate('/games')} className="text-white">
            <ArrowLeft className="mr-2" />
            Back
          </Button>
          {gameStarted && <GameTimer timeLeft={timeLeft} />}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            {gameStarted ? 'Tilt to Move!' : 'Tap to start'}
          </h1>
        </div>

        <div className="flex justify-center">
          <MazeCanvas
            gameStarted={gameStarted}
            onWin={handleWin}
            ballRef={ballRef}
          />
        </div>
      </div>

      {/* Bottom black section */}
      <div className="bg-black text-white p-6 rounded-t-[2rem] -mt-6">
        <h2 className="text-3xl font-bold text-center mb-6">Ball Maze</h2>
        
        {!gameStarted && (
          <>
            <button
              onClick={startGame}
              className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white py-4 rounded-full text-xl font-bold mb-6"
              disabled={isGameOver && timeLeft === 0}
            >
              {isGameOver ? 'Play Again' : 'Start Game'}
            </button>
            <p className="text-center text-gray-300">
              Guide the ball through the maze to the star
              <br />
              by tilting your phone!
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DolphinMaze;