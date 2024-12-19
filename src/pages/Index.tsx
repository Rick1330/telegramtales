import { DollarSign, Users, Gift, Trophy, Rocket, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const tasks = [
    {
      title: "Follow DOLPHINS channel",
      reward: "+1000 DOLPHINS",
      action: "Join",
      variant: "default" as const
    },
    {
      title: "Follow DOLPHINS TON on X 🧀",
      reward: "+1000 DOLPHINS",
      action: "Open",
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
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <h1 className="text-4xl font-bold mb-2">21,258</h1>
        <p className="text-xl mb-8">DOLPHINS</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+707</p>
            <p className="text-sm">Rewards</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+20.5k</p>
            <p className="text-sm">Tasks</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+51</p>
            <p className="text-sm">Invites</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🐬</span>
            <div>
              <p className="font-semibold">OG Pass</p>
              <p className="text-sm text-gray-500">Access exclusive streams</p>
            </div>
          </div>
          <Button variant="link" className="text-primary">
            Learn More
          </Button>
        </Card>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl">🐬</span>
            <h2 className="text-xl font-bold">Rewards</h2>
          </div>

          <Card className="bg-primary text-white p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">Private Group for Top Holders</h3>
            <p className="mb-4">Join the elite DOLPHINS community</p>
            <Button variant="secondary" className="w-24">Join</Button>
          </Card>

          <Card className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Telegram Business Card</p>
                <p className="text-sm text-gray-500">Show off your DOLPHINS</p>
              </div>
            </div>
            <Button variant="outline" className="text-primary">
              Create
            </Button>
          </Card>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl">🎯</span>
            <h2 className="text-xl font-bold">Tasks</h2>
          </div>

          {visibleTasks.map((task, index) => (
            <Card key={index} className="p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold">{task.title}</p>
                <p className="text-red-500 font-medium">{task.reward}</p>
              </div>
              <Button variant={task.variant} className="min-w-[80px]">
                {task.action}
              </Button>
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
  );
};

export default Index;