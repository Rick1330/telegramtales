import { WalletIcon, Shell, Droplets } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CurrencyDisplayProps {
  dolphins: number;
  pearlCoins: number;
  oceanGems: number;
}

export const CurrencyDisplay = ({ dolphins, pearlCoins, oceanGems }: CurrencyDisplayProps) => {
  return (
    <Card className="bg-background/95 backdrop-blur-xl border-none shadow-lg p-6">
      <div className="grid grid-cols-3 gap-4">
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
    </Card>
  );
};