import { Cat, Trophy, Users, DollarSign, Gift, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const tasks = [
    {
      title: "Watch our last update!",
      reward: "+2000 DOLPHINS",
      action: "Meeoow!",
      variant: "default" as const,
      isHighlighted: true
    },
    {
      title: "Complete avatar task",
      reward: "+6000 DOLPHINS",
      action: "Start",
      variant: "outline" as const
    },
    {
      title: "Watch RoOLZ & Earn Gems",
      reward: "+500 DOLPHINS",
      action: "Open",
      variant: "outline" as const
    },
    {
      title: "Follow Activity on X 🚀",
      reward: "+1000 DOLPHINS",
      action: "Open",
      variant: "outline" as const
    },
    {
      title: "Join Activity News Channel 🚀",
      reward: "+1000 DOLPHINS",
      action: "Join",
      variant: "default" as const
    },
    {
      title: "Add 🐬 to nickname",
      reward: "+3000 DOLPHINS",
      action: "Check",
      variant: "outline" as const
    },
    {
      title: "Join DOLPHINS Instagram",
      reward: "+500 DOLPHINS",
      action: "Open",
      variant: "outline" as const
    },
    {
      title: "Share DOLPHINS on Twitter",
      reward: "+2000 DOLPHINS",
      action: "Share",
      variant: "default" as const
    },
    {
      title: "Complete Daily Quiz",
      reward: "+1500 DOLPHINS",
      action: "Start",
      variant: "default" as const
    },
    {
      title: "Invite 3 Friends",
      reward: "+5000 DOLPHINS",
      action: "Invite",
      variant: "outline" as const
    },
    {
      title: "Play Dolphin Maze Game",
      reward: "+2000 DOLPHINS",
      action: "Play",
      variant: "default" as const
    },
    {
      title: "Complete Water Sort Challenge",
      reward: "+2500 DOLPHINS",
      action: "Play",
      variant: "default" as const
    },
    {
      title: "Subscribe to Newsletter",
      reward: "+1000 DOLPHINS",
      action: "Subscribe",
      variant: "outline" as const
    },
    {
      title: "Join Discord Community",
      reward: "+2000 DOLPHINS",
      action: "Join",
      variant: "default" as const
    },
    {
      title: "Complete Profile",
      reward: "+1500 DOLPHINS",
      action: "Complete",
      variant: "outline" as const
    }
  ];

  const visibleTasks = showAllTasks ? tasks : tasks.slice(0, 4);

  return (
    <div className="pb-20">
      <div className="bg-gradient-to-b from-[#FF5F1F] to-[#FF8C00] text-white p-6 rounded-b-[2rem] mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Cat className="w-6 h-6" />
          <h1 className="text-2xl font-bold">DOLPHINS</h1>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-none p-4 mb-6">
          <p className="text-sm mb-2">Watch our last update!</p>
          <Button variant="default" className="bg-white text-black hover:bg-white/90 w-full">
            Meeoow!
          </Button>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-none p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Cat className="w-5 h-5" />
            <p>Access exclusive streams with OG Pass</p>
          </div>
        </Card>

        <h2 className="text-4xl font-bold mb-2">21,258</h2>
        <p className="text-xl mb-8">DOLPHINS</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">+707</p>
              <Cat className="w-4 h-4" />
            </div>
            <p className="text-sm">Rewards</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">+22k</p>
              <Cat className="w-4 h-4" />
            </div>
            <p className="text-sm">Tasks</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">+51</p>
              <Cat className="w-4 h-4" />
            </div>
            <p className="text-sm">Invites</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Cat className="w-6 h-6" />
            <h2 className="text-xl font-bold">Daily Tasks</h2>
          </div>

          <Card className="p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Make TON Great Again</p>
                <p className="text-red-500 font-medium">+2000 DOLPHINS</p>
              </div>
              <Button variant="default" className="min-w-[80px]">
                Join
              </Button>
            </div>
          </Card>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Gift className="w-6 h-6" />
            <h2 className="text-xl font-bold">Tasks</h2>
          </div>

          <div className="space-y-3">
            {visibleTasks.map((task, index) => (
              <Card 
                key={index} 
                className={`p-4 ${task.isHighlighted ? 'bg-gradient-to-r from-blue-50 to-blue-100' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{task.title}</p>
                    <p className="text-red-500 font-medium">{task.reward}</p>
                  </div>
                  <Button variant={task.variant} className="min-w-[80px]">
                    {task.action}
                  </Button>
                </div>
              </Card>
            ))}

            <Button 
              variant="ghost" 
              className="w-full text-primary flex items-center gap-2"
              onClick={() => setShowAllTasks(!showAllTasks)}
            >
              {showAllTasks ? "Show less tasks" : "Show more tasks"}
              <ChevronDown className={`transition-transform ${showAllTasks ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
