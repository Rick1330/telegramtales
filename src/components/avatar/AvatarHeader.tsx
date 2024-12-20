import { ChevronLeft, Shell, Droplets, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvatarHeader = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-6 rounded-b-[2rem] shadow-lg">
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          className="hover:bg-white/20 text-white rounded-full transition-colors"
          onClick={() => history.back()}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-3xl font-bold">Customize Your Avatar</h1>
      </div>

      <div className="flex justify-around gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 glass-effect p-3 rounded-xl mb-2">
            <Shell className="w-6 h-6" />
            <div>
              <span className="font-bold text-lg">12,500</span>
              <span className="text-xs block text-white/80">Pearl Coins</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 glass-effect p-3 rounded-xl mb-2">
            <Droplets className="w-6 h-6" />
            <div>
              <span className="font-bold text-lg">25</span>
              <span className="text-xs block text-white/80">Ocean Gems</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 glass-effect p-3 rounded-xl mb-2">
            <Trophy className="w-6 h-6" />
            <div>
              <span className="font-bold text-lg">Level 5</span>
              <span className="text-xs block text-white/80">Sea Master</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarHeader;