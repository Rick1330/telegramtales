import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface TaskCardProps {
  title: string;
  reward: string;
  action: string;
  variant?: "default" | "outline";
  isHighlighted?: boolean;
}

const TaskCard = ({ title, reward, action, variant = "outline", isHighlighted = false }: TaskCardProps) => {
  return (
    <Card className={`p-4 hover:shadow-md transition-all ${
      isHighlighted ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200' : ''
    }`}>
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