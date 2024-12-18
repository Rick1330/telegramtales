import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 flex items-center gap-4 text-white shadow-lg">
      <Link to="/games" className="hover:scale-105 transition-transform">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <h1 className="text-xl font-bold">Water Sort</h1>
    </div>
  );
};

export default GameHeader;