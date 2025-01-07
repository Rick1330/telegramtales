import { Star, Calendar, MessageSquare, List, Sparkles, Trophy, Users } from "lucide-react";
import Header from "@/components/home/Header";
import TaskSection from "@/components/home/TaskSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <Header />
      
      <div className="px-4 max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 rounded-2xl p-6 shadow-lg text-white">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Featured Challenge</h2>
          </div>
          
          <div className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ocean Guardian Challenge</h3>
                <p className="text-white/80 mb-4">Complete daily tasks to earn special rewards</p>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-medium">+5000 DOLPHINS</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        <TaskSection />
      </div>
    </div>
  );
};

export default Index;