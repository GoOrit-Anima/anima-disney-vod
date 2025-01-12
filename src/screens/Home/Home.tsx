import {
  ClapperboardIcon,
  HomeIcon,
  PlayCircleIcon,
  SearchIcon,
  SparklesIcon,
  TvIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

// Navigation menu items data
const navItems = [
  { icon: HomeIcon, label: "HOME", path: "/" },
  { icon: SearchIcon, label: "SEARCH", path: "/search" },
  { icon: PlayCircleIcon, label: "DETAILS", path: "/details" },
  { icon: SparklesIcon, label: "ORIGINALS", path: "/originals" },
  { icon: ClapperboardIcon, label: "MOVIES", path: "/movies" },
  { icon: TvIcon, label: "SERIES", path: "/series" },
];

// Recommended content data
const recommendedContent = [
  { id: 1, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-14@2x.png" },
  { id: 2, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-15@2x.png" },
  { id: 3, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-16@2x.png" },
  { id: 4, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-17@2x.png" },
  { id: 5, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-18@2x.png" },
  { id: 6, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-19@2x.png" },
  { id: 7, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-20@2x.png" },
  { id: 8, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-21@2x.png" },
];

// Featured content data for carousel
const featuredContent = [
  { id: 1, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-9@2x.png" },
  { id: 2, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-10@2x.png" },
  { id: 3, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-11@2x.png" },
  { id: 4, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-12@2x.png" },
  { id: 5, image: "https://c.animaapp.com/ABQ9r6Al/img/rectangle-13@2x.png" },
];

export const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1e2341] min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-[#090b13] h-[70px] flex items-center px-8 fixed w-full top-0 z-50">
        <img
          src="https://c.animaapp.com/ABQ9r6Al/img/logo-1.svg"
          alt="Disney+ Logo"
          className="w-[99px] h-[42px] mr-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                onClick={() => navigate(item.path)}
              >
                <item.icon className="w-5 h-5 text-white" />
                <span className="font-bold text-white text-sm tracking-[1.42px]">
                  {item.label}
                </span>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto">
          <Button
            variant="outline"
            className="bg-[#0063e5] hover:bg-[#0483ee] text-white border-none"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Button>
        </div>
      </header>

      <main className="px-8 py-6 mt-[70px]">
        {/* Main Carousel */}
        <Carousel className="mb-12">
          <CarouselContent>
            {featuredContent.map((item) => (
              <CarouselItem key={item.id}>
                <Card className="border-none">
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt="Featured Content"
                      className="w-full h-[364px] object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Recommended Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">
            Recommended for You
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {recommendedContent.map((item) => (
              <Card key={item.id} className="bg-transparent border-none">
                <CardContent className="p-0">
                  <img
                    src={item.image}
                    alt="Recommended Content"
                    className="w-full h-[235px] object-cover rounded-lg hover:scale-105 transition-transform duration-200 border-[3px] border-[#f9f9f91a] shadow-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
