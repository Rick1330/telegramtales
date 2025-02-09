
import { useState } from "react";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Games = () => {
  const [score, setScore] = useState(0);

  const handleTap = () => {
    setScore(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1b26] to-[#1f2937]">
      <div className="bg-gradient-to-b from-[#2563EB] to-[#0EA5E9] text-white p-6 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="h-6 w-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold">Tap Game</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="p-6 text-center bg-black/40 backdrop-blur-sm border-primary/10 rounded-xl shadow-xl">
          <div className="flex flex-col items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#0EA5E9]/10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a039950a-ce56-492f-95c1-a328ec688694.png" 
                alt="Coin"
                className="w-20 h-20 object-contain animate-bounce"
              />
            </div>
            <div className="text-6xl font-bold bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-transparent bg-clip-text">
              {score.toLocaleString()}
            </div>
            <div className="flex gap-4 items-center justify-center w-full">
              <Card className="p-4 bg-black/20 border-primary/5">
                <div className="text-sm text-gray-400">Income / hour</div>
                <div className="text-xl font-semibold text-white">0</div>
              </Card>
              <Card className="p-4 bg-black/20 border-primary/5">
                <div className="text-sm text-gray-400">Income / tap</div>
                <div className="text-xl font-semibold text-white">1</div>
              </Card>
            </div>
            <Button
              onClick={handleTap}
              className="w-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white hover:opacity-90 transition-opacity text-xl py-8 rounded-xl"
            >
              <Gamepad2 className="w-6 h-6 mr-2" />
              Tap to Score
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;
