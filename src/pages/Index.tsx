
import { Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TonConnectButton } from '@tonconnect/ui-react';
import Header from "@/components/home/Header";
import TaskSection from "@/components/home/TaskSection";
import { useEffect, useCallback } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useTonConnectUI } from '@tonconnect/ui-react';

const Index = () => {
  const [tonConnectUI] = useTonConnectUI();
  const { toast } = useToast();

  const checkConnection = useCallback(async () => {
    try {
      const wallets = await tonConnectUI.getWallets();
      if (wallets && wallets.length > 0) {
        toast({
          title: "Connected to TON wallet",
          description: "You have successfully connected your wallet.",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast({
        title: "Connection Error",
        description: "There was an error connecting to your wallet. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    }
  }, [tonConnectUI, toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      checkConnection();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [checkConnection]);

  return (
    <div className="pb-20 bg-[#0A0B0E] min-h-screen">
      <Header />
      
      <div className="px-4 space-y-6">
        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Featured Task
              </h2>
            </div>
            <div className="z-10">
              <TonConnectButton />
            </div>
          </div>

          <Card className="p-6 bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg mb-2 text-gray-100">Ocean Guardian Challenge</p>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <p className="text-blue-400 font-medium">+5000 DOLPHINS</p>
                </div>
              </div>
              <Button 
                variant="default" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 transition-opacity text-white"
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
