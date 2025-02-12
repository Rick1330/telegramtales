import { useState, useEffect } from "react";
import { 
  Trophy, Gift, HandCoins, Zap, Users, Building2, Flame, Battery,
  Waves, Target, Award, Crown, Swords, Rocket, GaugeCircle, Gamepad2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTonConnectUI } from '@tonconnect/ui-react';

const Games = () => {
  const [tonConnectUI] = useTonConnectUI();
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(492);
  const [multiplier, setMultiplier] = useState(1);
  const [idleIncome, setIdleIncome] = useState(0);
  const [lastClaimTime, setLastClaimTime] = useState(Date.now());
  const maxEnergy = 500;

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        const wallets = await tonConnectUI.getWallets();
        if (!wallets.length) {
          console.log("No wallets connected");
        }
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    };

    checkWalletConnection();

    const timer = setInterval(() => {
      const now = Date.now();
      const timeDiff = now - lastClaimTime;
      const newIdleIncome = Math.floor((timeDiff / 1000) * (idleIncome / 3600));
      if (newIdleIncome > 0) {
        toast("Idle income ready to claim! 🎉");
      }
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [lastClaimTime, idleIncome, tonConnectUI]);

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

  const claimIdleIncome = async () => {
    try {
      const now = Date.now();
      const timeDiff = now - lastClaimTime;
      const income = Math.floor((timeDiff / 1000) * (idleIncome / 3600));
      if (income > 0) {
        setScore(prev => prev + income);
        setLastClaimTime(now);
        toast.success(`Claimed ${income} Wave Points! 🌊`);
      }
    } catch (error) {
      console.error("Error claiming income:", error);
      toast.error("Failed to claim rewards. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-20">
      <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-6 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Waves className="w-6 h-6" />
            Dolphins
          </h1>
        </div>

        <div className="flex justify-between items-center glass-effect backdrop-blur-md rounded-xl p-3 mb-6">
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

        <div className="grid grid-cols-2 gap-4">
          <Card className="glass-effect border-0 p-4">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-orange-400" />
              <div>
                <div className="text-sm font-medium">Tapping Guru</div>
                <div className="text-xs text-white/80">3/3</div>
              </div>
            </div>
          </Card>
          <Card className="glass-effect border-0 p-4">
            <div className="flex items-center gap-3">
              <Battery className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="text-sm font-medium">Full Tank</div>
                <div className="text-xs text-white/80">3/3</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8" id="game-container">
        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0 mb-8">
          <div className="flex-1 flex flex-col items-center justify-center mb-8">
            <div 
              className="relative w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform mb-8 shadow-lg group"
              onClick={handleTap}
            >
              <svg 
                viewBox="0 0 512 512" 
                className="w-48 h-48 text-blue-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
              >
                <path d="M455.2,367.1c-8.7-3.8-18.2-5.7-27.7-5.7c-14.8,0-29.3,4.4-41.5,12.7c-16.8,11.5-27.9,29.1-31.1,49.1 c-1.6,9.9-1.1,19.9,1.5,29.5c-32.1,13.5-66.5,20.4-102,20.4c-44.1,0-86.8-10.5-125.3-30.6c-37.4-19.5-70.3-47.5-95.1-80.9 c-3.2-4.3-9.3-5.1-13.6-1.9c-4.3,3.2-5.1,9.3-1.9,13.6c26.5,35.8,61.6,65.7,101.5,86.4c41.3,21.5,87,32.5,134.4,32.5 c38.1,0,75.1-7.3,109.7-21.8c9.3,11.1,21.6,19.4,35.4,23.8c6.9,2.2,14,3.3,21.2,3.3c8.8,0,17.5-1.6,25.8-4.8 c19.5-7.4,35-22.5,42.9-41.8C497.3,411.5,484.2,379.8,455.2,367.1z"/>
                <path d="M247.5,290.8c26.7,0,48.5-21.8,48.5-48.5s-21.8-48.5-48.5-48.5s-48.5,21.8-48.5,48.5S220.8,290.8,247.5,290.8z"/>
              </svg>
              <div className="absolute -top-2 -right-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                +{1 * multiplier}
              </div>
            </div>

            <div className="w-full max-w-md">
              <div className="bg-gray-100/50 backdrop-blur-sm rounded-full h-4 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${(energy / maxEnergy) * 100}%` }}
                />
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Energy: {energy}/{maxEnergy}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-white hover:bg-gray-50 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <HandCoins className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Income / hour</div>
                  <div className="text-xl font-semibold text-gray-700">{idleIncome}</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-white hover:bg-gray-50 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Income / tap</div>
                  <div className="text-xl font-semibold text-gray-700">{1 * multiplier}</div>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold">Master Tapper</h3>
              <p className="text-sm text-gray-500">1,000 taps</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Crown className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold">Wave King</h3>
              <p className="text-sm text-gray-500">100k points</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <Rocket className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold">Speed Demon</h3>
              <p className="text-sm text-gray-500">10 taps/sec</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Swords className="w-6 h-6 text-red-500" />
            Battle Pass
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Level 5</span>
                <span className="text-sm text-blue-500">500/1000 XP</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 rounded-full h-2" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="w-full">
                <GaugeCircle className="w-4 h-4 mr-2" />
                Boost
              </Button>
              <Button variant="outline" className="w-full">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Tasks
              </Button>
              <Button variant="outline" className="w-full">
                <Gift className="w-4 h-4 mr-2" />
                Rewards
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-green-500" />
            Social Hub
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="ghost" className="bg-white hover:bg-gray-50 shadow-sm h-12">
              <Users className="w-5 h-5 mr-2 text-blue-500" />
              Pod Members
            </Button>
            <Button variant="ghost" className="bg-white hover:bg-gray-50 shadow-sm h-12">
              <Building2 className="w-5 h-5 mr-2 text-blue-500" />
              Ocean Clans
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Games;
