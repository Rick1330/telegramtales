import { Gift, Sparkles, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TaskCard from "./TaskCard";
import { useState } from "react";

interface Task {
  title: string;
  reward: string;
  action: string;
  variant: "default" | "outline";
  isHighlighted?: boolean;
  category: "daily" | "social" | "other";
}

const TaskSection = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const tasks: Task[] = [
    // Daily Tasks
    {
      title: "Daily Wave Rider Task",
      reward: "+2000 DOLPHINS",
      action: "Play",
      variant: "outline",
      category: "daily"
    },
    {
      title: "Complete avatar task",
      reward: "+6000 DOLPHINS",
      action: "Start",
      variant: "outline",
      category: "daily"
    },
    {
      title: "Complete Daily Quiz",
      reward: "+1500 DOLPHINS",
      action: "Start",
      variant: "default",
      category: "daily"
    },
    {
      title: "Ocean Explorer Challenge",
      reward: "+3000 DOLPHINS",
      action: "Explore",
      variant: "outline",
      category: "daily"
    },
    {
      title: "Daily Treasure Hunt",
      reward: "+2500 DOLPHINS",
      action: "Hunt",
      variant: "outline",
      category: "daily"
    },
    {
      title: "Marine Biology Quiz",
      reward: "+1800 DOLPHINS",
      action: "Start",
      variant: "outline",
      category: "daily"
    },
    {
      title: "Eco-Warrior Challenge",
      reward: "+4000 DOLPHINS",
      action: "Accept",
      variant: "default",
      category: "daily"
    },

    // Social Tasks
    {
      title: "Follow Activity on X 🚀",
      reward: "+1000 DOLPHINS",
      action: "Open",
      variant: "outline",
      category: "social"
    },
    {
      title: "Join Activity News Channel 🚀",
      reward: "+1000 DOLPHINS",
      action: "Join",
      variant: "default",
      category: "social"
    },
    {
      title: "Share Your Progress",
      reward: "+800 DOLPHINS",
      action: "Share",
      variant: "outline",
      category: "social"
    },
    {
      title: "Invite Friends Bonus",
      reward: "+2500 DOLPHINS",
      action: "Invite",
      variant: "default",
      category: "social"
    },
    {
      title: "Join Discord Community",
      reward: "+1500 DOLPHINS",
      action: "Join",
      variant: "outline",
      category: "social"
    },
    {
      title: "Share Daily Achievement",
      reward: "+1200 DOLPHINS",
      action: "Share",
      variant: "outline",
      category: "social"
    },

    // Other Tasks
    {
      title: "Watch RoOLZ & Earn Gems",
      reward: "+500 DOLPHINS",
      action: "Open",
      variant: "outline",
      category: "other"
    },
    {
      title: "Complete Tutorial",
      reward: "+3000 DOLPHINS",
      action: "Start",
      variant: "default",
      category: "other"
    },
    {
      title: "Customize Your Avatar",
      reward: "+1500 DOLPHINS",
      action: "Customize",
      variant: "outline",
      category: "other"
    },
    {
      title: "First Purchase Bonus",
      reward: "+5000 DOLPHINS",
      action: "Shop",
      variant: "default",
      category: "other"
    },
    {
      title: "Complete Achievement Set",
      reward: "+2500 DOLPHINS",
      action: "View",
      variant: "outline",
      category: "other"
    },
    {
      title: "Special Weekend Challenge",
      reward: "+4000 DOLPHINS",
      action: "Accept",
      variant: "default",
      category: "other"
    }
  ];

  const visibleTasks = showAllTasks ? tasks : tasks.slice(0, 12);

  const renderTaskSection = (title: string, icon: any, category: Task["category"], bgColor: string) => {
    const categoryTasks = visibleTasks.filter(task => task.category === category);
    if (categoryTasks.length === 0) return null;

    return (
      <div className={`${bgColor} rounded-2xl p-6 space-y-4`}>
        <div className="flex items-center space-x-2 mb-4">
          {icon}
          <h2 className="text-xl font-bold text-gray-800">
            {title}
          </h2>
        </div>
        <div className="space-y-3">
          {categoryTasks.map((task, index) => (
            <TaskCard key={`${category}-${index}`} {...task} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderTaskSection(
        "Daily Tasks",
        <Gift className="w-6 h-6 text-blue-500" />,
        "daily",
        "bg-blue-50"
      )}
      {renderTaskSection(
        "Social Media Tasks",
        <Share2 className="w-6 h-6 text-purple-500" />,
        "social",
        "bg-purple-50"
      )}
      {renderTaskSection(
        "Other Tasks",
        <Sparkles className="w-6 h-6 text-green-500" />,
        "other",
        "bg-green-50"
      )}

      <Button
        variant="ghost"
        className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 flex items-center gap-2"
        onClick={() => setShowAllTasks(!showAllTasks)}
      >
        {showAllTasks ? "Show less tasks" : "Show more tasks"}
        <span className={`transition-transform ${showAllTasks ? "rotate-180" : ""}`}>↓</span>
      </Button>
    </div>
  );
};

export default TaskSection;
