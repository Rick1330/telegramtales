import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface TaskCardProps {
  title: string;
  reward: string;
  action: string;
  variant?: "default" | "outline";
  isHighlighted?: boolean;
  category?: "featured" | "daily" | "social" | "other";
}

const TaskCard = ({ 
  title, 
  reward, 
  action, 
  variant = "outline", 
  isHighlighted = false,
  category 
}: TaskCardProps) => {
  const getBgColor = () => {
    if (isHighlighted) return 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200';
    switch (category) {
      case 'featured':
        return 'hover:bg-amber-50';
      case 'daily':
        return 'hover:bg-blue-50';
      case 'social':
        return 'hover:bg-purple-50';
      case 'other':
        return 'hover:bg-green-50';
      default:
        return 'hover:bg-gray-50';
    }
  };

  return (
    <Card className={`p-4 transition-all ${getBgColor()}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-800 mb-2">{title}</p>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <p className="text-blue-600 font-medium">{reward}</p>
          </div>
        </div>
        <Button 
          variant={variant}
          className={variant === "default" ? 
            "bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-opacity" : 
            "hover:bg-blue-50"
          }
        >
          {action}
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;