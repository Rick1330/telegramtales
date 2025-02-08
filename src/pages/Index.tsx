
import { Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import Header from "@/components/home/Header";
import TaskSection from "@/components/home/TaskSection";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { connected } = useTonConnectUI();
  const { toast } = useToast();

  useEffect(() => {
    if (connected) {
      toast({
        title: "Connected to TON wallet",
        description: "You have successfully connected your wallet.",
      });
    }
  }, [connected]);

  return (
    <div className="pb-20 bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="px-4 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Featured Task
              </h2>
            </div>
            <div className="z-10">
              <TonConnectButton />
            </div>
          </div>

          <Card className="p-6 border-2 border-blue-100 hover:border-blue-200 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg mb-2">Ocean Guardian Challenge</p>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <p className="text-blue-600 font-medium">+5000 DOLPHINS</p>
                </div>
              </div>
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-opacity"
              >
                Accept
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
