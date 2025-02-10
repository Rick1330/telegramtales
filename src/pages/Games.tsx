
import { useState } from "react";
import { ArrowLeft, Wallet, Trophy, Gamepad2, Zap, Gift, HandCoins } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Games = () => {
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(492);
  const maxEnergy = 500;

  const handleTap = () => {
    if (energy > 0) {
      setScore(prev => prev + 1);
      setEnergy(prev => Math.max(0, prev - 1));
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1b26]">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-[#2c2f3d] to-[#1a1b26] text-white p-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">TapGame</h1>
          </div>
          <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-sm">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>

        {/* Resources Bar */}
        <div className="flex justify-between items-center bg-black/20 rounded-xl p-2.5">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/a039950a-ce56-492f-95c1-a328ec688694.png" 
              alt="Coin"
              className="w-5 h-5"
            />
            <span className="font-semibold text-sm">{score.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-sm">0</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-purple-400" />
            <span className="font-semibold text-sm">0</span>
          </div>
        </div>
      </div>

      {/* Main Game Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-12">
        <Card className="p-5 text-center bg-black/40 backdrop-blur-sm border-primary/10 rounded-xl shadow-xl">
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#0EA5E9]/10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a039950a-ce56-492f-95c1-a328ec688694.png" 
                alt="Coin"
                className="w-20 h-20 object-contain animate-bounce"
              />
              <div className="absolute top-0 right-0 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                +1
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <Card className="p-3 bg-black/20 border-primary/5">
                <div className="flex items-center gap-2">
                  <HandCoins className="w-4 h-4 text-yellow-500" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Income / hour</div>
                    <div className="text-lg font-semibold text-white">0</div>
                  </div>
                </div>
              </Card>
              <Card className="p-3 bg-black/20 border-primary/5">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Income / tap</div>
                    <div className="text-lg font-semibold text-white">1</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Energy Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(energy / maxEnergy) * 100}%` }}
              />
            </div>
            <div className="text-gray-400 text-xs">
              Energy: {energy}/{maxEnergy}
            </div>

            {/* Tap Button */}
            <Button
              onClick={handleTap}
              disabled={energy <= 0}
              className="w-full bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] text-white hover:opacity-90 transition-opacity text-lg py-6 rounded-xl"
            >
              <Gamepad2 className="w-5 h-5 mr-2" />
              Tap to Earn
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;
