
import { Wallet, ArrowUpDown, Grid, Fish } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Wallet, label: "Wallet", path: "/" },
    { icon: ArrowUpDown, label: "Swap", path: "/top" },
    { icon: Grid, label: "Apps", path: "/games" },
    { icon: Fish, label: "Fintopio", path: "/avatar" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0A0B0E] border-t border-gray-800">
      <div className="w-full px-4 py-2">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center relative group"
            >
              <div className={`p-3 rounded-full transition-all duration-300 ${
                isActive(path)
                  ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                  : "text-gray-500 hover:text-gray-300"
              } ${isActive(path) ? "scale-110" : ""}`}>
                <Icon 
                  size={24} 
                  className={`transition-all duration-300 ${
                    isActive(path) ? "stroke-[1.5]" : "stroke-1"
                  }`}
                />
              </div>
              <span className={`text-xs mt-1 transition-all duration-300 ${
                isActive(path)
                  ? "text-gray-200"
                  : "text-gray-500 group-hover:text-gray-300"
              }`}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
