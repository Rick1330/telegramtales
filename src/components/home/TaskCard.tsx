import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TaskCardProps {
  title: string;
  reward: string;
  action: string;
  variant?: "default" | "outline";
  isHighlighted?: boolean;
}

const TaskCard = ({ title, reward, action, variant = "outline", isHighlighted = false }: TaskCardProps) => {
  return (
    <Card className={`p-4 ${isHighlighted ? 'bg-gradient-to-r from-blue-50 to-blue-100' : ''}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-red-500 font-medium">{reward}</p>
        </div>
        <Button variant={variant} className="min-w-[80px]">
          {action}
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;