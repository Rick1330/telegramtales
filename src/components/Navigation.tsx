
import { Home, Trophy, Gamepad2, User, Fish } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Trophy, label: "Leaderboard", path: "/top" },
    { icon: Gamepad2, label: "Games", path: "/games" },
    { icon: Fish, label: "Avatar", path: "/avatar", badge: "5" },
    { icon: User, label: "Friends", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 py-1">
      <div className="w-full px-3">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto relative">
          {navItems.map(({ icon: Icon, label, path, badge }) => (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center relative group py-1"
            >
              <div 
                className={`
                  p-1.5 rounded-xl transition-all duration-200 relative
                  ${isActive(path) 
                    ? "bg-primary text-white shadow-lg translate-y-[-4px]" 
                    : "text-gray-500 hover:text-primary hover:bg-blue-50"
                  }
                `}
              >
                <Icon size={18} className="transition-transform group-hover:scale-110" />
                {badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </div>
              <span 
                className={`text-[10px] mt-0.5 font-medium transition-colors
                  ${isActive(path) 
                    ? "text-primary" 
                    : "text-gray-500 group-hover:text-primary"
                  }
                `}
              >
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
