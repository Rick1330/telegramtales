import { Cat } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#FF5F1F] to-[#FF8C00] text-white p-6 rounded-b-[2rem] mb-6">
      <div className="flex items-center gap-2 mb-6">
        <Cat className="w-6 h-6" />
        <h1 className="text-2xl font-bold">DOLPHINS</h1>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">21,258</h2>
        <p className="text-xl opacity-90">DOLPHINS</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatsCard title="Rewards" value="+707" />
        <StatsCard title="Tasks" value="+22k" />
        <StatsCard title="Invites" value="+51" />
      </div>
    </div>
  );
};

const StatsCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold">{value}</p>
        <Cat className="w-4 h-4" />
      </div>
      <p className="text-sm opacity-90">{title}</p>
    </div>
  );
};

export default Header;