import { Home, Trophy, Wallet, User, Fish } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Trophy, label: "Leaderboard", path: "/top" },
    { icon: Wallet, label: "Wallet", path: "/wallet" },
    { icon: Fish, label: "Avatar", path: "/avatar", badge: "5" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path, badge }) => (
          <Link
            key={path}
            to={path}
            className="flex flex-col items-center relative"
          >
            <div className={`p-2 rounded-lg ${
              isActive(path) ? "text-primary" : "text-gray-500"
            }`}>
              <Icon size={24} />
              {badge && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </div>
            <span className={`text-xs ${
              isActive(path) ? "text-primary" : "text-gray-500"
            }`}>
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;