import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Sparkles } from "lucide-react";

interface TaskCardProps {
  title: string;
  reward: string;
  action: string;
  variant?: "default" | "outline";
  category?: "featured" | "daily" | "social" | "other";
}

const TaskCard = ({ 
  title, 
  reward, 
  action, 
  variant = "outline", 
  category 
}: TaskCardProps) => {
  const getBgColor = () => {
    switch (category) {
      case 'daily':
        return 'hover:bg-blue-50/50';
      case 'social':
        return 'hover:bg-purple-50/50';
      case 'other':
        return 'hover:bg-green-50/50';
      default:
        return 'hover:bg-gray-50/50';
    }
  };

  const getGradient = () => {
    switch (category) {
      case 'daily':
        return 'from-blue-500 to-cyan-500';
      case 'social':
        return 'from-purple-500 to-pink-500';
      case 'other':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <Card className={`p-4 transition-all glass-effect border-0 ${getBgColor()}`}>
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-800 mb-2">{title}</p>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <p className="text-blue-600 font-medium">{reward}</p>
          </div>
        </div>
        <Button 
          variant={variant}
          className={variant === "default" ? 
            `bg-gradient-to-r ${getGradient()} hover:opacity-90 transition-opacity text-white` : 
            "hover:bg-white/60"
          }
        >
          {action}
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;