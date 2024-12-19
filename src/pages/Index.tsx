import { DollarSign, Users, Gift, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);

  return (
    <div className="pb-20">
      {/* Header Section with Gradient */}
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <h1 className="text-5xl font-bold mb-2 tracking-tight">21,258</h1>
        <p className="text-2xl mb-8 opacity-90">DOLPHINS</p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-2xl font-bold">+707</p>
            <p className="text-sm opacity-80">Rewards</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-2xl font-bold">+20.5k</p>
            <p className="text-sm opacity-80">Tasks</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-2xl font-bold">+51</p>
            <p className="text-sm opacity-80">Invites</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 space-y-4">
        {/* OG Pass Card */}
        <Card className="p-4 flex items-center justify-between bg-white/80 backdrop-blur">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🐬</span>
            <div>
              <p className="font-semibold text-lg">Access exclusive streams with</p>
              <p className="font-bold text-xl">OG Pass</p>
            </div>
          </div>
          <Button variant="link" className="text-primary text-lg">
            Learn More
          </Button>
        </Card>

        {/* Rewards Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">🐬</span>
            <h2 className="text-2xl font-bold">Rewards</h2>
          </div>

          {/* Private Group Card */}
          <Card className="bg-primary text-white p-6 mb-4 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">Private Group for Top Holders</h3>
            <p className="mb-4 opacity-90">Join the elite DOLPHINS community</p>
            <Button variant="secondary" size="lg" className="w-24 rounded-xl">
              Join
            </Button>
          </Card>

          {/* Telegram Business Card */}
          <Card className="p-4 flex items-center justify-between bg-white/80 backdrop-blur rounded-xl">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-lg">Telegram Business Card</p>
                <p className="text-sm text-gray-500">Show off your DOLPHINS</p>
              </div>
            </div>
            <Button variant="outline" className="text-primary rounded-xl">
              Create
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;