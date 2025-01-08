import { Shell, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { getCurrentRates } from "@/utils/conversion-rates";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

interface ConversionSectionProps {
  dolphins: number;
  onConvertToPearls: (amount: number, rate: number) => void;
  onConvertToGems: (amount: number, rate: number) => void;
}

export const ConversionSection = ({ dolphins, onConvertToPearls, onConvertToGems }: ConversionSectionProps) => {
  const { toast } = useToast();
  const [conversionAmount, setConversionAmount] = useState("");
  const [rates, setRates] = useState(getCurrentRates());

  // Update rates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRates(getCurrentRates());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleConvertToPearls = () => {
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

    onConvertToPearls(amount, rates.dolphinToPearl);
    setConversionAmount("");
    toast({
      title: "Conversion successful",
      description: `Converted ${amount} dolphins to ${amount * rates.dolphinToPearl} pearl coins`,
    });
  };

  const handleConvertToGems = () => {
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

    if (amount < rates.dolphinToGem) {
      toast({
        title: "Insufficient amount",
        description: `You need at least ${rates.dolphinToGem} dolphins to get 1 ocean gem`,
        variant: "destructive",
      });
      return;
    }

    onConvertToGems(amount, rates.dolphinToGem);
    setConversionAmount("");
    toast({
      title: "Conversion successful",
      description: `Converted ${amount} dolphins to ${Math.floor(amount / rates.dolphinToGem)} ocean gems`,
    });
  };

  return (
    <Card className="bg-background/95 backdrop-blur-xl border-none shadow-lg p-6 space-y-4">
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
        <Button onClick={handleConvertToPearls} className="flex-1 gap-2" variant="outline">
          <Shell className="w-4 h-4" />
          To Pearl Coins
        </Button>
        <Button onClick={handleConvertToGems} className="flex-1 gap-2" variant="outline">
          <Droplets className="w-4 h-4" />
          To Ocean Gems
        </Button>
      </div>
      <div className="text-sm text-muted-foreground">
        <p>Current conversion rates:</p>
        <p>• 1 Dolphin = {rates.dolphinToPearl} Pearl Coins</p>
        <p>• {rates.dolphinToGem} Dolphins = 1 Ocean Gem</p>
        <p className="mt-2 text-xs italic">Rates update every 30 seconds</p>
      </div>
    </Card>
  );
};