import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Top from "./pages/Top";
import NFT from "./pages/NFT";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<Games />} />
          <Route path="/top" element={<Top />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;