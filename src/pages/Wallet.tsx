import { Search, Wallet as WalletIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Wallet = () => {
  const wallets = [
    { id: 1, name: "Wallet On Telegram", popular: false },
    { id: 2, name: "Tonkeeper", popular: true },
    { id: 3, name: "MyTonWallet", popular: false },
    { id: 4, name: "Tonhub", popular: false },
    { id: 5, name: "Bitget Wallet", popular: false },
    { id: 6, name: "OKX Mini", popular: false },
    { id: 7, name: "Binance Wallet", popular: false },
    { id: 8, name: "Fintopio", popular: false },
    { id: 9, name: "OKX Wallet", popular: false },
    { id: 10, name: "HOT", popular: false },
    { id: 11, name: "Bybit Wallet", popular: false },
    { id: 12, name: "DeWallet", popular: false },
    { id: 13, name: "SafePal", popular: false },
    { id: 14, name: "GateWallet", popular: false },
    { id: 15, name: "BitgetWeb3", popular: false },
    { id: 16, name: "Tobi", popular: false },
  ];

  return (
    <div className="pb-20">
      <div className="bg-black text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐪</span>
          <h1 className="text-xl font-bold">Camels</h1>
        </div>
        <Button variant="secondary" className="rounded-lg">
          Connect Wallet
        </Button>
      </div>

      <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 min-h-screen">
        <div className="bg-black/90 rounded-3xl mx-4 mt-8 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Wallets</h2>
            <X className="text-white w-6 h-6" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {wallets.map((wallet) => (
              <Card 
                key={wallet.id} 
                className="bg-transparent border-none p-2 flex flex-col items-center hover:bg-white/5 rounded-xl transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-2 flex items-center justify-center">
                  <WalletIcon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-xs text-center">{wallet.name}</p>
                {wallet.popular && (
                  <span className="text-gray-400 text-xs">Popular</span>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 bg-blue-500/20 p-4 rounded-xl">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <WalletIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">TON Connect</h3>
            </div>
            <Button variant="ghost" className="text-gray-400">
              ?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;