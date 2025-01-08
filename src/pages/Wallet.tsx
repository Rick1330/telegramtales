import { Diamond, Shield, Wallet as WalletIcon, Coins, Smartphone, Landmark, Shell, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Wallet = () => {
  const [dolphins, setDolphins] = useState(1000);
  const [pearlCoins, setPearlCoins] = useState(12500);
  const [oceanGems, setOceanGems] = useState(25);
  const [conversionAmount, setConversionAmount] = useState("");
  const { toast } = useToast();

  const wallets = [
    { id: 1, name: "MyTonWallet", popular: true, icon: Diamond },
    { id: 2, name: "Tonkeeper", popular: true, icon: Shield },
    { id: 3, name: "Tonhub", popular: true, icon: Diamond },
  ];

  const otherWallets = [
    { id: 4, name: "Binance Wallet", icon: Diamond },
    { id: 5, name: "Bitget Wallet", icon: Coins },
    { id: 6, name: "Fintopio", icon: WalletIcon },
    { id: 7, name: "OKX", icon: Smartphone },
    { id: 8, name: "Phantom", icon: Shield },
    { id: 9, name: "MetaMask", icon: WalletIcon },
    { id: 10, name: "Bybit", icon: Landmark },
    { id: 11, name: "Blockchain", icon: Diamond },
  ];

  const convertToPearlCoins = () => {
    const amount = Number(conversionAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number of dolphins to convert",
        variant: "destructive",
      });
      return;
    }
    if (amount > dolphins) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough dolphins to convert",
        variant: "destructive",
      });
      return;
    }

    // Conversion rate: 1 dolphin = 10 pearl coins
    const convertedAmount = amount * 10;
    setDolphins(prev => prev - amount);
    setPearlCoins(prev => prev + convertedAmount);
    setConversionAmount("");
    
    toast({
      title: "Conversion successful",
      description: `Converted ${amount} dolphins to ${convertedAmount} pearl coins`,
    });
  };

  const convertToOceanGems = () => {
    const amount = Number(conversionAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number of dolphins to convert",
        variant: "destructive",
      });
      return;
    }
    if (amount > dolphins) {
      toast({
        title: "Insufficient balance",
        description: "You don't have enough dolphins to convert",
        variant: "destructive",
      });
      return;
    }

    // Conversion rate: 100 dolphins = 1 ocean gem
    const convertedAmount = Math.floor(amount / 100);
    if (convertedAmount < 1) {
      toast({
        title: "Insufficient amount",
        description: "You need at least 100 dolphins to get 1 ocean gem",
        variant: "destructive",
      });
      return;
    }

    setDolphins(prev => prev - (convertedAmount * 100));
    setOceanGems(prev => prev + convertedAmount);
    setConversionAmount("");
    
    toast({
      title: "Conversion successful",
      description: `Converted ${convertedAmount * 100} dolphins to ${convertedAmount} ocean gems`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-6 rounded-b-[2rem] shadow-lg">
        <h1 className="text-3xl font-bold">Connect Wallet</h1>
      </div>

      {/* Currency Display */}
      <div className="px-4 -mt-6">
        <Card className="bg-background/95 backdrop-blur-xl border-none shadow-lg p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <WalletIcon className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Dolphins</p>
                <p className="font-semibold">{dolphins}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Shell className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Pearl Coins</p>
                <p className="font-semibold">{pearlCoins}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Ocean Gems</p>
                <p className="font-semibold">{oceanGems}</p>
              </div>
            </div>
          </div>

          {/* Conversion Section */}
          <div className="space-y-4 mb-6">
            <h2 className="text-lg font-semibold">Convert Dolphins</h2>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Enter amount of dolphins"
                value={conversionAmount}
                onChange={(e) => setConversionAmount(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={convertToPearlCoins}
                className="flex-1 gap-2"
                variant="outline"
              >
                <Shell className="w-4 h-4" />
                To Pearl Coins
              </Button>
              <Button
                onClick={convertToOceanGems}
                className="flex-1 gap-2"
                variant="outline"
              >
                <Droplets className="w-4 h-4" />
                To Ocean Gems
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Conversion rates:</p>
              <p>• 1 Dolphin = 10 Pearl Coins</p>
              <p>• 100 Dolphins = 1 Ocean Gem</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Popular Wallets */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">Popular Wallets</h2>
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="ghost"
              className="w-full justify-between h-auto py-3 hover:bg-primary/5 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/20 transition-colors">
                  <wallet.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{wallet.name}</p>
                  {wallet.popular && (
                    <Badge variant="secondary" className="mt-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-primary">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
          ))}
        </div>
      </div>

      {/* Other Wallets */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-4">Other Wallets</h2>
        <div className="grid grid-cols-2 gap-4">
          {otherWallets.map((wallet) => (
            <Card 
              key={wallet.id}
              className="p-4 hover:bg-primary/5 transition-all duration-200 border-primary/10 hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center">
                  <wallet.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-center">{wallet.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
