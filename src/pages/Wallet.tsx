import { Wallet as WalletIcon, ChevronRight, Shield, Scan, Smartphone, Coins, Landmark } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Wallet = () => {
  const wallets = [
    { id: 1, name: "Wallet On Telegram", popular: true, icon: WalletIcon },
    { id: 2, name: "Tonkeeper", popular: true, icon: Shield },
    { id: 3, name: "MyTonWallet", popular: true, icon: WalletIcon },
    { id: 4, name: "Tonhub", popular: false, icon: Scan },
    { id: 5, name: "OpenMask", popular: false, icon: Shield },
    { id: 6, name: "TON Chrome Wallet", popular: false, icon: WalletIcon },
  ];

  const otherWallets = [
    { id: 7, name: "Bitget Wallet", icon: Coins },
    { id: 8, name: "OKX Mini", icon: Smartphone },
    { id: 9, name: "Binance Wallet", icon: Landmark },
    { id: 10, name: "Fintopio", icon: WalletIcon },
    { id: 11, name: "TonFlow", icon: Shield },
    { id: 12, name: "Metamask", icon: WalletIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-6 rounded-b-[2rem] shadow-lg">
        <h1 className="text-3xl font-bold">Connect Wallet</h1>
      </div>

      {/* Popular Wallets */}
      <div className="px-4 -mt-6">
        <Card className="bg-background/95 backdrop-blur-xl border-none shadow-lg p-6">
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
        </Card>
      </div>

      {/* Other Wallets */}
      <div className="px-4 mt-6">
        <h2 className="text-lg font-semibold mb-4 px-2">Other Wallets</h2>
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

      {/* TON Connect Section */}
      <div className="px-4 mt-6">
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-none p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">TON Connect</h3>
              <p className="text-sm text-muted-foreground">Secure wallet connection</p>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-blue-500/10">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;