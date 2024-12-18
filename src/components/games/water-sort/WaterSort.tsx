import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { COLORS, GAME_SETTINGS } from './constants';
import { shuffle } from './utils';
import Timer from './Timer';
import GameCanvas from './GameCanvas';

interface Tube {
  colors: string[];
  selected: boolean;
  animating?: boolean;
}

const WaterSort = () => {
  const [tubes, setTubes] = useState<Tube[]>([]);
  const [selectedTube, setSelectedTube] = useState<number | null>(null);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_SETTINGS.GAME_DURATION);
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
          return GAME_SETTINGS.GAME_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const initializeTubes = () => {
    const initialTubes: Tube[] = Array(8).fill(null).map((_, index) => ({
      colors: index < 6 ? shuffle([...COLORS, ...COLORS, ...COLORS, ...COLORS].slice(0, 4)) : [],
      selected: false,
      animating: false
    }));
    setTubes(initialTubes);
    setMoves(0);
    setTimeLeft(GAME_SETTINGS.GAME_DURATION);
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
      fromTube.animating = true;
      toTube.animating = true;
      setTubes([...newTubes]);

      await new Promise(resolve => setTimeout(resolve, 300));

      toTube.colors.push(colorToPour);
      fromTube.colors.pop();
      setMoves(moves + 1);

      fromTube.animating = false;
      toTube.animating = false;
    }

    fromTube.selected = false;
    setTubes([...newTubes]);
    setSelectedTube(null);
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] pb-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 flex items-center gap-4 text-white">
        <Link to="/games">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-bold">Water Sort</h1>
      </div>

      <div className="p-4 flex flex-col items-center">
        <GameCanvas tubes={tubes} onTubeClick={handleTubeClick} />
        <Timer timeLeft={timeLeft} moves={moves} />
      </div>
    </div>
  );
};

export default WaterSort;