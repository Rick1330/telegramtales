import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const DolphinMaze = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const ballRef = useRef({ x: 30, y: 550 });
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up the maze walls
    const drawMaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0088CC');
      gradient.addColorStop(1, '#0099FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw maze walls (simplified for example)
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 4;
      ctx.beginPath();
      // Outer walls
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
      // Add some internal walls
      ctx.moveTo(10, 100);
      ctx.lineTo(200, 100);
      ctx.moveTo(100, 100);
      ctx.lineTo(100, 300);
      ctx.stroke();

      // Draw ball
      ctx.beginPath();
      ctx.fillStyle = '#FFD700';
      ctx.arc(ballRef.current.x, ballRef.current.y, 10, 0, Math.PI * 2);
      ctx.fill();

      // Draw star (goal)
      ctx.fillStyle = '#FFD700';
      const starX = canvas.width - 50;
      const starY = 50;
      drawStar(ctx, starX, starY, 5, 15, 7);

      // Check if ball reached the star
      const distance = Math.sqrt(
        Math.pow(ballRef.current.x - starX, 2) + 
        Math.pow(ballRef.current.y - starY, 2)
      );
      
      if (distance < 20) {
        setIsGameOver(true);
        setGameStarted(false);
        toast.success("Congratulations! You've completed the maze!");
      }
    };

    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = Math.PI / 2 * 3;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);

      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += step;
        ctx.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += step;
      }
      
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    // Handle device orientation
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!gameStarted) return;

      const beta = event.beta; // X-axis rotation
      const gamma = event.gamma; // Y-axis rotation

      if (beta === null || gamma === null) return;

      // Update ball position based on device tilt
      ballRef.current.x += gamma * 0.5;
      ballRef.current.y += beta * 0.5;

      // Keep ball within canvas bounds
      ballRef.current.x = Math.max(10, Math.min(canvas.width - 10, ballRef.current.x));
      ballRef.current.y = Math.max(10, Math.min(canvas.height - 10, ballRef.current.y));

      drawMaze();
    };

    if (gameStarted) {
      window.addEventListener('deviceorientation', handleOrientation);
      
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

      return () => {
        window.removeEventListener('deviceorientation', handleOrientation);
        clearInterval(timer);
      };
    }

    // Initial draw
    drawMaze();
  }, [gameStarted]);

  const startGame = async () => {
    try {
      // Cast to our custom type that includes requestPermission
      const DeviceOrientationEvent = window.DeviceOrientationEvent as unknown as DeviceOrientationEventStatic;
      
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          setGameStarted(true);
          setTimeLeft(60);
          setIsGameOver(false);
          ballRef.current = { x: 30, y: 550 };
        }
      } else {
        // For non-iOS devices or when permission is not required
        setGameStarted(true);
        setTimeLeft(60);
        setIsGameOver(false);
        ballRef.current = { x: 30, y: 550 };
      }
    } catch (error) {
      toast.error("Please enable device orientation permissions to play");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary p-4">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={() => navigate('/games')} className="text-white">
          <ArrowLeft className="mr-2" />
          Back
        </Button>
        {gameStarted && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-full">
            {timeLeft}s
          </div>
        )}
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          {gameStarted ? 'Tilt to Move!' : 'Tap to Start'}
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={350}
          height={600}
          className="bg-white rounded-lg shadow-lg mb-6"
        />

        {!gameStarted && (
          <div className="text-center">
            <Button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl rounded-full shadow-lg"
              disabled={isGameOver && timeLeft === 0}
            >
              {isGameOver ? 'Play Again' : 'Start Game'}
            </Button>
            <p className="text-white mt-4">
              Guide the ball through the maze to the star by tilting your phone!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DolphinMaze;