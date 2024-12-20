import { Cat, Sparkles, Trophy, Users } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-b-[2.5rem] mb-6 shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-white/20 rounded-xl">
          <Cat className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold">DOLPHINS</h1>
      </div>

      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="text-4xl font-bold">21,258</h2>
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <p className="text-xl opacity-90">DOLPHINS</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Rewards" value="+707" icon={Trophy} />
        <StatsCard title="Tasks" value="+22k" icon={Cat} />
        <StatsCard title="Invites" value="+51" icon={Users} />
      </div>
    </div>
  );
};

const StatsCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
      <div className="flex items-center gap-2 mb-1">
        <p className="text-2xl font-bold">{value}</p>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-sm opacity-90">{title}</p>
    </div>
  );
};

export default Header;