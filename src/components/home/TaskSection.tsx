import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import TaskCard from "./TaskCard";
import { useState } from "react";

interface Task {
  title: string;
  reward: string;
  action: string;
  variant: "default" | "outline";
  isHighlighted?: boolean;
}

const TaskSection = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const tasks: Task[] = [
    {
      title: "Watch our last update!",
      reward: "+2000 DOLPHINS",
      action: "Meeoow!",
      variant: "default",
      isHighlighted: true
    },
    {
      title: "Complete avatar task",
      reward: "+6000 DOLPHINS",
      action: "Start",
      variant: "outline"
    },
    {
      title: "Watch RoOLZ & Earn Gems",
      reward: "+500 DOLPHINS",
      action: "Open",
      variant: "outline"
    },
    {
      title: "Follow Activity on X 🚀",
      reward: "+1000 DOLPHINS",
      action: "Open",
      variant: "outline"
    },
    {
      title: "Join Activity News Channel 🚀",
      reward: "+1000 DOLPHINS",
      action: "Join",
      variant: "default"
    },
    {
      title: "Add 🐬 to nickname",
      reward: "+3000 DOLPHINS",
      action: "Check",
      variant: "outline"
    },
    {
      title: "Join DOLPHINS Instagram",
      reward: "+500 DOLPHINS",
      action: "Open",
      variant: "outline"
    },
    {
      title: "Share DOLPHINS on Twitter",
      reward: "+2000 DOLPHINS",
      action: "Share",
      variant: "default"
    },
    {
      title: "Complete Daily Quiz",
      reward: "+1500 DOLPHINS",
      action: "Start",
      variant: "default"
    },
    {
      title: "Invite 3 Friends",
      reward: "+5000 DOLPHINS",
      action: "Invite",
      variant: "outline"
    },
    {
      title: "Play Dolphin Maze Game",
      reward: "+2000 DOLPHINS",
      action: "Play",
      variant: "default"
    },
    {
      title: "Complete Water Sort Challenge",
      reward: "+2500 DOLPHINS",
      action: "Play",
      variant: "default"
    },
    {
      title: "Subscribe to Newsletter",
      reward: "+1000 DOLPHINS",
      action: "Subscribe",
      variant: "outline"
    },
    {
      title: "Join Discord Community",
      reward: "+2000 DOLPHINS",
      action: "Join",
      variant: "default"
    },
    {
      title: "Complete Profile",
      reward: "+1500 DOLPHINS",
      action: "Complete",
      variant: "outline"
    }
  ];

  const visibleTasks = showAllTasks ? tasks : tasks.slice(0, 4);

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Gift className="w-6 h-6" />
        <h2 className="text-xl font-bold">Tasks</h2>
      </div>

      <div className="space-y-3">
        {visibleTasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}

        <Button
          variant="ghost"
          className="w-full text-primary flex items-center gap-2"
          onClick={() => setShowAllTasks(!showAllTasks)}
        >
          {showAllTasks ? "Show less tasks" : "Show more tasks"}
          <span className={`transition-transform ${showAllTasks ? "rotate-180" : ""}`}>↓</span>
        </Button>
      </div>
    </div>
  );
};

export default TaskSection;
