import { DollarSign, Users, Gift, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="pb-20">
      <div className="gradient-bg text-white p-8 rounded-b-[2rem] mb-6">
        <h1 className="text-4xl font-bold mb-2">21,258</h1>
        <p className="text-xl mb-8">DOLPHINS</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+707</p>
            <p className="text-sm">Rewards</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+20.5k</p>
            <p className="text-sm">Tasks</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-2xl font-bold">+51</p>
            <p className="text-sm">Invites</p>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4">
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl">🐬</span>
            <div>
              <p className="font-semibold">OG Pass</p>
              <p className="text-sm text-gray-500">Access exclusive streams</p>
            </div>
          </div>
          <Button variant="link" className="text-primary">
            Learn More
          </Button>
        </Card>

        <div>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xl">🐬</span>
            <h2 className="text-xl font-bold">Rewards</h2>
          </div>

          <Card className="bg-primary text-white p-6 mb-4">
            <h3 className="text-xl font-bold mb-2">Private Group for Top Holders</h3>
            <p className="mb-4">Join the elite DOLPHINS community</p>
            <Button variant="secondary" className="w-24">Join</Button>
          </Card>

          <Card className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold">Telegram Business Card</p>
                <p className="text-sm text-gray-500">Show off your DOLPHINS</p>
              </div>
            </div>
            <Button variant="outline" className="text-primary">
              Create
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;