import { Diamond, Shield, WalletIcon, Coins, Smartphone, Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { CurrencyDisplay } from "@/components/wallet/CurrencyDisplay";

const Wallet = () => {
  const [dolphins, setDolphins] = useState(1000);
  const [pearlCoins, setPearlCoins] = useState(12500);
  const [oceanGems, setOceanGems] = useState(25);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-6 rounded-b-[2rem] shadow-lg">
        <h1 className="text-3xl font-bold">Connect Wallet</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="-mt-6">
          <CurrencyDisplay
            dolphins={dolphins}
            pearlCoins={pearlCoins}
            oceanGems={oceanGems}
          />
        </div>

        <div>
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

        <div>
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
    </div>
  );
};

export default Wallet;