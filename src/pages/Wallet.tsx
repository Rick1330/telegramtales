import { Search, Wallet as WalletIcon, X, ChevronRight, Shield, Scan } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Wallet = () => {
  const wallets = [
    { id: 1, name: "Wallet On Telegram", popular: false, icon: WalletIcon },
    { id: 2, name: "Tonkeeper", popular: true, icon: Shield },
    { id: 3, name: "MyTonWallet", popular: false, icon: WalletIcon },
    { id: 4, name: "Tonhub", popular: false, icon: Scan },
  ];

  const otherWallets = [
    { id: 5, name: "Bitget Wallet" },
    { id: 6, name: "OKX Mini" },
    { id: 7, name: "Binance Wallet" },
    { id: 8, name: "Fintopio" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary/80 p-6 rounded-b-[2rem]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Connect Wallet</h1>
            <Button variant="ghost" size="icon" className="text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <Input 
              placeholder="Search wallets..." 
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          </div>
        </div>
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
                className="w-full justify-between h-auto py-3 hover:bg-primary/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <wallet.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{wallet.name}</p>
                    {wallet.popular && (
                      <Badge variant="secondary" className="mt-1">Popular</Badge>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
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
              className="p-4 hover:bg-primary/5 transition-colors cursor-pointer border-primary/10"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <WalletIcon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-center">{wallet.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* TON Connect Section */}
      <div className="px-4 mt-6">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-none p-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">TON Connect</h3>
              <p className="text-sm text-muted-foreground">Secure wallet connection</p>
            </div>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
