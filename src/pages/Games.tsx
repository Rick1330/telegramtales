
import { useState, useEffect } from "react";
import { ArrowLeft, Wallet, Trophy, Gamepad2, Zap, Gift, HandCoins, Users, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Games = () => {
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(492);
  const [multiplier, setMultiplier] = useState(1);
  const [idleIncome, setIdleIncome] = useState(0);
  const [lastClaimTime, setLastClaimTime] = useState(Date.now());
  const maxEnergy = 500;

  // Calculate idle income
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const timeDiff = now - lastClaimTime;
      const newIdleIncome = Math.floor((timeDiff / 1000) * (idleIncome / 3600));
      if (newIdleIncome > 0) {
        toast("Idle income ready to claim! 🎉");
      }
    }, 60000); // Check every minute

    return () => clearInterval(timer);
  }, [lastClaimTime, idleIncome]);

  const handleTap = () => {
    if (energy > 0) {
      const points = 1 * multiplier;
      setScore(prev => prev + points);
      setEnergy(prev => Math.max(0, prev - 1));
      
      // Show floating score animation
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
    <div className="min-h-screen bg-gradient-to-b from-[#2E86C1] to-[#1B4F72]">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-[#2E86C1]/50 to-transparent text-white p-4 pb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Ocean Adventure</h1>
          </div>
          <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-sm">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
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
      </div>

      {/* Main Game Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-12" id="game-container">
        <Card className="p-5 text-center bg-white/10 backdrop-blur-md border-white/20 rounded-xl shadow-xl">
          <div className="flex flex-col items-center gap-5">
            <div 
              className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              onClick={handleTap}
            >
              <img 
                src="/lovable-uploads/a039950a-ce56-492f-95c1-a328ec688694.png" 
                alt="Dolphin"
                className="w-24 h-24 object-contain animate-bounce"
              />
              <div className="absolute -top-2 -right-2 text-xs bg-green-400 text-white px-2 py-0.5 rounded-full">
                +{1 * multiplier}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <Card className="p-3 bg-white/10 backdrop-blur-md border-white/20">
                <div className="flex items-center gap-2">
                  <HandCoins className="w-4 h-4 text-yellow-300" />
                  <div className="text-left">
                    <div className="text-xs text-gray-200">Income / hour</div>
                    <div className="text-lg font-semibold text-white">{idleIncome}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-3 bg-white/10 backdrop-blur-md border-white/20">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-green-400" />
                  <div className="text-left">
                    <div className="text-xs text-gray-200">Income / tap</div>
                    <div className="text-lg font-semibold text-white">{1 * multiplier}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Energy Bar */}
            <div className="w-full">
              <div className="bg-white/10 rounded-full h-3 mb-1">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(energy / maxEnergy) * 100}%` }}
                />
              </div>
              <div className="text-gray-200 text-xs">
                Energy: {energy}/{maxEnergy}
              </div>
            </div>

            {/* Social Features */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20">
                <Users className="w-4 h-4 mr-2" />
                Pod Members
              </Button>
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20">
                <Building2 className="w-4 h-4 mr-2" />
                Ocean Clans
              </Button>
            </div>

            {/* Tap Button */}
            <Button
              onClick={handleTap}
              disabled={energy <= 0}
              className="w-full bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:opacity-90 transition-opacity text-lg py-6 rounded-xl"
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
