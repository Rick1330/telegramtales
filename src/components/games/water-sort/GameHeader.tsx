
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameHeader = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-cyan-500 text-white p-6 rounded-b-[2rem] flex items-center gap-4 shadow-lg">
      <Link to="/games" className="hover:scale-105 transition-transform">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <h1 className="text-2xl font-bold">Water Sort</h1>
    </div>
  );
};

export default GameHeader;
