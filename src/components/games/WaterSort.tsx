import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface Tube {
  colors: string[];
  selected: boolean;
  animating?: boolean;
}

const COLORS = [
  '#FEC6A1', // Soft Orange
  '#E5DEFF', // Soft Purple
  '#FFDEE2', // Soft Pink
  '#D3E4FD', // Soft Blue
  '#F2FCE2', // Soft Green
  '#FEF7CD', // Soft Yellow
];

const GAME_DURATION = 180; // 3 minutes in seconds

const WaterSort = () => {
  const [tubes, setTubes] = useState<Tube[]>([]);
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    initializeTubes();
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          toast({
            title: "Time's up!",
            description: "Try again to beat your score!",
            variant: "destructive",
          });
          initializeTubes();
          return GAME_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const initializeTubes = () => {
    const initialTubes: Tube[] = Array(8).fill(null).map((_, index) => ({
      colors: index < 5 ? shuffle([...COLORS, ...COLORS, ...COLORS].slice(0, 4)) : [],
      selected: false,
      animating: false
    }));
    setTubes(initialTubes);
    setMoves(0);
    setTimeLeft(GAME_DURATION);
  };

  const shuffle = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleTubeClick = (index: number) => {
    if (selectedTube === null) {
      if (tubes[index].colors.length === 0) return;
      setSelectedTube(index);
      const newTubes = [...tubes];
      newTubes[index].selected = true;
      setTubes(newTubes);
    } else {
      if (selectedTube === index) {
        const newTubes = [...tubes];
        newTubes[index].selected = false;
        setTubes(newTubes);
        setSelectedTube(null);
      } else {
        pourWater(selectedTube, index);
      }
    }
  };

  const pourWater = async (from: number, to: number) => {
    const newTubes = [...tubes];
    const fromTube = newTubes[from];
    const toTube = newTubes[to];

    if (toTube.colors.length >= 4 || fromTube.colors.length === 0) {
      fromTube.selected = false;
      setTubes(newTubes);
      setSelectedTube(null);
      return;
    }

    const colorToPour = fromTube.colors[fromTube.colors.length - 1];
    if (toTube.colors.length === 0 || toTube.colors[toTube.colors.length - 1] === colorToPour) {
      // Start pour animation
      fromTube.animating = true;
      toTube.animating = true;
      setTubes([...newTubes]);

      // Simulate pouring animation
      await new Promise(resolve => setTimeout(resolve, 300));

      toTube.colors.push(colorToPour);
      fromTube.colors.pop();
      setMoves(moves + 1);

      // End animation
      fromTube.animating = false;
      toTube.animating = false;
    }

    fromTube.selected = false;
    setTubes([...newTubes]);
    setSelectedTube(null);
  };

  const drawTubes = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    tubes.forEach((tube, index) => {
      const x = (index % 4) * 100 + 50;
      const y = Math.floor(index / 4) * 200 + 100;

      // Draw tube with gradient and shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 4;

      // Draw tube body with rounded corners
      ctx.beginPath();
      const tubeWidth = 40;
      const tubeHeight = 120;
      const cornerRadius = 5;

      // Top rounded corners
      ctx.moveTo(x - tubeWidth/2 + cornerRadius, y);
      ctx.lineTo(x + tubeWidth/2 - cornerRadius, y);
      ctx.quadraticCurveTo(x + tubeWidth/2, y, x + tubeWidth/2, y + cornerRadius);

      // Right side
      ctx.lineTo(x + tubeWidth/2, y + tubeHeight - cornerRadius);

      // Bottom right corner
      ctx.quadraticCurveTo(x + tubeWidth/2, y + tubeHeight, x + tubeWidth/2 - cornerRadius, y + tubeHeight);

      // Bottom
      ctx.lineTo(x - tubeWidth/2 + cornerRadius, y + tubeHeight);

      // Bottom left corner
      ctx.quadraticCurveTo(x - tubeWidth/2, y + tubeHeight, x - tubeWidth/2, y + tubeHeight - cornerRadius);

      // Left side
      ctx.lineTo(x - tubeWidth/2, y + cornerRadius);

      // Top left corner
      ctx.quadraticCurveTo(x - tubeWidth/2, y, x - tubeWidth/2 + cornerRadius, y);

      // Create gradient for glass effect
      const glassGradient = ctx.createLinearGradient(x - tubeWidth/2, y, x + tubeWidth/2, y);
      glassGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      glassGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      glassGradient.addColorStop(1, 'rgba(255, 255, 255, 0.8)');

      ctx.strokeStyle = tube.selected ? '#0088CC' : '#666';
      ctx.lineWidth = 2;
      ctx.fillStyle = glassGradient;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Draw liquid segments with animation
      tube.colors.forEach((color, colorIndex) => {
        const segmentHeight = 30;
        let segmentY = y + tubeHeight - (colorIndex + 1) * segmentHeight;

        if (tube.animating) {
          segmentY += Math.sin(Date.now() / 200) * 2; // Subtle wave animation
        }

        // Create gradient for liquid
        const liquidGradient = ctx.createLinearGradient(x - tubeWidth/2, segmentY, x + tubeWidth/2, segmentY + segmentHeight);
        liquidGradient.addColorStop(0, color);
        liquidGradient.addColorStop(1, adjustColor(color, -20)); // Slightly darker at bottom

        ctx.fillStyle = liquidGradient;
        ctx.beginPath();
        ctx.moveTo(x - tubeWidth/2 + 2, segmentY);
        ctx.lineTo(x - tubeWidth/2 + 2, segmentY + segmentHeight);
        ctx.lineTo(x + tubeWidth/2 - 2, segmentY + segmentHeight);
        ctx.lineTo(x + tubeWidth/2 - 2, segmentY);
        ctx.fill();
      });
    });
  };

  const adjustColor = (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, Math.min(255, parseInt(hex.substring(0, 2), 16) + amount));
    const g = Math.max(0, Math.min(255, parseInt(hex.substring(2, 4), 16) + amount));
    const b = Math.max(0, Math.min(255, parseInt(hex.substring(4, 6), 16) + amount));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  useEffect(() => {
    const animate = () => {
      drawTubes();
      requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, [tubes]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="gradient-bg p-4 flex items-center gap-4 text-white">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Water Sort</h1>
      </div>

      <div className="p-4 flex flex-col items-center">
        <div className="mb-4 flex items-center justify-between w-full max-w-xs">
          <div className="text-lg font-semibold">
            Moves: {moves}
          </div>
          <div className="text-lg font-semibold text-primary">
            {formatTime(timeLeft)}
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={400}
          height={500}
          className="mb-4 transition-transform hover:scale-[1.02]"
          onClick={(e) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const tubeIndex = Math.floor(x / 100) + Math.floor(y / 200) * 4;
            if (tubeIndex < tubes.length) {
              handleTubeClick(tubeIndex);
            }
          }}
        />
      </div>
    </div>
  );
};

export default WaterSort;