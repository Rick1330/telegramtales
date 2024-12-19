import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Avatar from "./pages/Avatar";
import Top from "./pages/Top";
import NFT from "./pages/NFT";
import Profile from "./pages/Profile";

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
              <Route path="/avatar" element={<Avatar />} />
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