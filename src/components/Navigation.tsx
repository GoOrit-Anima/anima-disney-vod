import {
  FilmIcon,
  HomeIcon,
  MenuIcon,
  PlayCircleIcon,
  SearchCheckIcon,
  Tv2Icon,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navItems = [
  { icon: <HomeIcon className="w-5 h-5" />, label: "HOME", path: "/" },
  {
    icon: <SearchCheckIcon className="w-5 h-5" />,
    label: "SEARCH",
    path: "/search",
  },
  {
    icon: <MenuIcon className="w-5 h-5" />,
    label: "DETAILS",
    path: "/details",
  },
  {
    icon: <PlayCircleIcon className="w-5 h-5" />,
    label: "ORIGINALS",
    path: "/originals",
  },
  {
    icon: <FilmIcon className="w-5 h-5" />,
    label: "MOVIES",
    path: "/movies",
  },
  {
    icon: <Tv2Icon className="w-5 h-5" />,
    label: "SERIES",
    path: "/series",
  },
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) return null;

  return (
    <header className="bg-[#090b13] h-[70px] fixed w-full z-50">
      <div className="max-w-[1536px] mx-auto flex items-center h-full px-8">
        <Link to="/">
          <img
            src="https://c.animaapp.com/X0Dcc2OA/img/logo-1.svg"
            alt="Disney+ Logo"
            className="w-[99px] h-[42px] mr-12"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 text-white hover:text-gray-300 transition-colors ${
                    location.pathname === item.path ? "text-blue-400" : ""
                  }`}
                >
                  {item.icon}
                  <span className="font-bold text-xs tracking-[1.42px]">
                    {item.label}
                  </span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="outline"
          className="ml-auto bg-[#0000004c] text-white hover:bg-[#0000006c]"
          onClick={() => navigate("/login")}
        >
          LOGIN
        </Button>
      </div>
    </header>
  );
};
