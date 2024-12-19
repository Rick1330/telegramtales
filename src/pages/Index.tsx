import { Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/home/Header";
import TaskSection from "@/components/home/TaskSection";

const Index = () => {
  return (
    <div className="pb-20">
      <Header />
      
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

        <TaskSection />
      </div>
    </div>
  );
};

export default Index;