import { Star, Calendar, MessageSquare, List, Trophy, Sparkles } from "lucide-react";
import TaskCard from "./TaskCard";

const TaskSection = () => {
  const tasks = {
    daily: [
      {
        title: "Daily Wave Rider Task",
        reward: "+2000 DOLPHINS",
        action: "Play",
        variant: "outline",
        category: "daily"
      },
      {
        title: "Complete Daily Quiz",
        reward: "+1500 DOLPHINS",
        action: "Start",
        variant: "default",
        category: "daily"
      }
    ],
    social: [
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
      }
    ],
    other: [
      {
        title: "Watch RoOLZ & Earn Gems",
        reward: "+500 DOLPHINS",
        action: "Open",
        variant: "outline",
        category: "other"
      },
      {
        title: "Play Dolphin Maze Game",
        reward: "+2000 DOLPHINS",
        action: "Play",
        variant: "default",
        category: "other"
      }
    ]
  };

  const renderTaskSection = (
    title: string, 
    icon: any, 
    tasks: any[], 
    gradientClass: string,
    iconColorClass: string
  ) => {
    if (tasks.length === 0) return null;

    return (
      <div className={`${gradientClass} rounded-2xl p-6 shadow-lg`}>
        <div className="flex items-center gap-2 mb-6">
          <div className={`${iconColorClass} p-2 rounded-lg`}>
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="grid gap-4">
          {tasks.map((task, index) => (
            <TaskCard key={`${task.category}-${index}`} {...task} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderTaskSection(
        "Daily Tasks",
        <Calendar className="w-6 h-6" />,
        tasks.daily,
        "bg-gradient-to-br from-blue-50 to-cyan-50",
        "bg-blue-100 text-blue-500"
      )}
      {renderTaskSection(
        "Social Tasks",
        <MessageSquare className="w-6 h-6" />,
        tasks.social,
        "bg-gradient-to-br from-purple-50 to-pink-50",
        "bg-purple-100 text-purple-500"
      )}
      {renderTaskSection(
        "Other Tasks",
        <List className="w-6 h-6" />,
        tasks.other,
        "bg-gradient-to-br from-green-50 to-teal-50",
        "bg-green-100 text-green-500"
      )}
    </div>
  );
};

export default TaskSection;