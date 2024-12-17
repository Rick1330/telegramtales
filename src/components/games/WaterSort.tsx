import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Tube {
  colors: string[];
  selected: boolean;
}

const COLORS = [
  '#FEC6A1', // Soft Orange
  '#E5DEFF', // Soft Purple
  '#FFDEE2', // Soft Pink
  '#D3E4FD', // Soft Blue
  '#F2FCE2', // Soft Green
  '#FEF7CD', // Soft Yellow
];

const WaterSort = () => {
  const [tubes, setTubes] = useState<Tube[]>([]);
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const initializeTubes = () => {
    // Create 8 tubes (5 with colors, 3 empty)
    const initialTubes: Tube[] = Array(8).fill(null).map((_, index) => ({
      colors: index < 5 ? shuffle([...COLORS, ...COLORS, ...COLORS].slice(0, 4)) : [],
      selected: false
    }));
    setTubes(initialTubes);
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

  const pourWater = (from: number, to: number) => {
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
      toTube.colors.push(colorToPour);
      fromTube.colors.pop();
      setMoves(moves + 1);
    }

    fromTube.selected = false;
    setTubes(newTubes);
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

      // Draw tube
      ctx.beginPath();
      ctx.moveTo(x - 20, y);
      ctx.lineTo(x - 20, y + 100);
      ctx.lineTo(x - 30, y + 110);
      ctx.lineTo(x + 30, y + 110);
      ctx.lineTo(x + 20, y + 100);
      ctx.lineTo(x + 20, y);
      ctx.strokeStyle = tube.selected ? '#0088CC' : '#666';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw liquid segments
      tube.colors.forEach((color, colorIndex) => {
        const segmentHeight = 25;
        const segmentY = y + 100 - (colorIndex + 1) * segmentHeight;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x - 19, segmentY);
        ctx.lineTo(x - 19, segmentY + segmentHeight);
        ctx.lineTo(x + 19, segmentY + segmentHeight);
        ctx.lineTo(x + 19, segmentY);
        ctx.fill();
      });
    });
  };

  useEffect(() => {
    initializeTubes();
  }, []);

  useEffect(() => {
    drawTubes();
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
        <div className="mb-4 text-center">
          <p className="text-lg font-semibold">Moves: {moves}</p>
        </div>

        <canvas
          ref={canvasRef}
          width={400}
          height={500}
          className="mb-4"
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

        <Button 
          onClick={initializeTubes}
          className="w-full max-w-xs"
        >
          Restart Game
        </Button>
      </div>
    </div>
  );
};

export default WaterSort;