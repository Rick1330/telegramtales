import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TonConnectProviderWrapper } from "./config/ton-connect";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Avatar from "./pages/Avatar";
import Top from "./pages/Top";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import DailyQuiz from "./components/games/DailyQuiz";
import OceanExplorer from "./components/games/OceanExplorer";
import WaterSort from "./components/games/WaterSort";
import MarineQuiz from "./components/games/MarineQuiz";
import EcoWarrior from "./components/games/EcoWarrior";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TonConnectProviderWrapper>
          <div className="min-h-screen w-full bg-background flex flex-col">
            <Toaster />
            <Sonner />
            <Router>
              <div className="flex-1 overflow-y-auto pb-20">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/avatar" element={<Avatar />} />
                  <Route path="/top" element={<Top />} />
                  <Route path="/games" element={<Games />} />
                  <Route path="/games/daily-quiz" element={<DailyQuiz />} />
                  <Route path="/games/ocean-explorer" element={<OceanExplorer />} />
                  <Route path="/games/water-sort" element={<WaterSort />} />
                  <Route path="/games/marine-quiz" element={<MarineQuiz />} />
                  <Route path="/games/eco-warrior" element={<EcoWarrior />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
              <Navigation />
            </Router>
          </div>
        </TonConnectProviderWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;