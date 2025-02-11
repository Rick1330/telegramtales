
import { useState, useEffect } from "react";
import { Trophy, Gift, HandCoins, Zap, Users, Building2, Flame, Battery } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Games = () => {
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(492);
  const [multiplier, setMultiplier] = useState(1);
  const [idleIncome, setIdleIncome] = useState(0);
  const [lastClaimTime, setLastClaimTime] = useState(Date.now());
  const maxEnergy = 500;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const timeDiff = now - lastClaimTime;
      const newIdleIncome = Math.floor((timeDiff / 1000) * (idleIncome / 3600));
      if (newIdleIncome > 0) {
        toast("Idle income ready to claim! 🎉");
      }
    }, 60000);

    return () => clearInterval(timer);
  }, [lastClaimTime, idleIncome]);

  const handleTap = () => {
    if (energy > 0) {
      const points = 1 * multiplier;
      setScore(prev => prev + points);
      setEnergy(prev => Math.max(0, prev - 1));
      
      const element = document.createElement("div");
      element.className = "absolute text-blue-400 font-bold text-lg animate-fade-out";
      element.style.left = `${Math.random() * 80 + 10}%`;
      element.style.top = `${Math.random() * 80 + 10}%`;
      element.textContent = `+${points}`;
      document.getElementById("game-container")?.appendChild(element);
      setTimeout(() => element.remove(), 1000);
    }
  };

  const claimIdleIncome = () => {
    const now = Date.now();
    const timeDiff = now - lastClaimTime;
    const income = Math.floor((timeDiff / 1000) * (idleIncome / 3600));
    if (income > 0) {
      setScore(prev => prev + income);
      setLastClaimTime(now);
      toast.success(`Claimed ${income} Wave Points! 🌊`);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Section */}
      <div className="bg-[#2563EB] text-white p-4 pb-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Dolphins</h1>
        </div>

        {/* Resources Bar */}
        <div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-xl p-2.5">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/a039950a-ce56-492f-95c1-a328ec688694.png" 
              alt="Wave Points"
              className="w-5 h-5"
            />
            <span className="font-semibold text-sm">{score.toLocaleString()} Waves</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="font-semibold text-sm">{multiplier}x</span>
          </div>
          <Button 
            variant="ghost" 
            className="bg-white/20 hover:bg-white/30 text-sm"
            onClick={claimIdleIncome}
          >
            <Gift className="w-4 h-4 text-purple-300 mr-2" />
            Claim Rewards
          </Button>
        </div>

        {/* Daily Boosters */}
        <div className="mt-4">
          <h2 className="text-sm font-semibold mb-2">Your daily boosters:</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-indigo-900/50 border-0 p-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="text-sm font-medium">Tapping Guru</div>
                  <div className="text-xs text-gray-300">3/3</div>
                </div>
              </div>
            </Card>
            <Card className="bg-indigo-900/50 border-0 p-3">
              <div className="flex items-center gap-2">
                <Battery className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="text-sm font-medium">Full Tank</div>
                  <div className="text-xs text-gray-300">3/3</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Game Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-12" id="game-container">
        <Card className="p-5 bg-white shadow-xl rounded-xl">
          {/* Top Section with Tap Button */}
          <div className="flex-1 flex flex-col items-center justify-center mb-8">
            <div 
              className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform mb-8"
              onClick={handleTap}
            >
              <img 
                src="/lovable-uploads/422fa017-0f2a-4fa9-9dc4-0138911f07d4.png" 
                alt="Tap Area"
                className="w-48 h-48 object-contain"
              />
              <div className="absolute -top-2 -right-2 text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">
                +{1 * multiplier}
              </div>
            </div>

            {/* Energy Bar */}
            <div className="w-full max-w-md">
              <div className="bg-gray-100 rounded-full h-3 mb-1">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(energy / maxEnergy) * 100}%` }}
                />
              </div>
              <div className="text-gray-500 text-xs">
                Energy: {energy}/{maxEnergy}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4 mt-8">
            {/* Social Features */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button variant="ghost" className="bg-gray-50 hover:bg-gray-100">
                <Users className="w-4 h-4 mr-2" />
                Pod Members
              </Button>
              <Button variant="ghost" className="bg-gray-50 hover:bg-gray-100">
                <Building2 className="w-4 h-4 mr-2" />
                Ocean Clans
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <Card className="p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-2">
                  <HandCoins className="w-4 h-4 text-yellow-500" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Income / hour</div>
                    <div className="text-lg font-semibold text-gray-700">{idleIncome}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-500" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Income / tap</div>
                    <div className="text-lg font-semibold text-gray-700">{1 * multiplier}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;
