import { Fish, Trophy, Users, Sparkles, Gift, Target } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-4xl font-bold">21,258</h2>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <p className="text-xl opacity-90">DOLPHINS</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatsCard 
            title="Daily Rewards" 
            value="+707" 
            icon={Gift}
            description="Complete daily tasks"
          />
          <StatsCard 
            title="Progress" 
            value="Level 5" 
            icon={Target}
            description="Sea Master"
          />
          <StatsCard 
            title="Community" 
            value="+51" 
            icon={Users}
            description="Active members"
          />
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ 
  title, 
  value, 
  icon: Icon,
  description 
}: { 
  title: string; 
  value: string; 
  icon: any;
  description: string;
}) => {
  return (
    <div className="glass-effect rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-xs text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;