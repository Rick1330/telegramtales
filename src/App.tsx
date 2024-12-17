import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Top from "./pages/Top";
import NFT from "./pages/NFT";
import Profile from "./pages/Profile";
import DolphinMaze from "./components/games/DolphinMaze";
import WaterSort from "./components/games/WaterSort";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="max-w-md mx-auto min-h-screen bg-background">
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/games" element={<Games />} />
              <Route path="/games/maze" element={<DolphinMaze />} />
              <Route path="/games/water-sort" element={<WaterSort />} />
              <Route path="/top" element={<Top />} />
              <Route path="/nft" element={<NFT />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Navigation />
          </Router>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;