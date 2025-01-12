import {
  FilmIcon,
  HomeIcon,
  MenuIcon,
  PlayCircleIcon,
  SearchCheckIcon,
  Tv2Icon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

// Brand cards data
const brandCards = [
  {
    image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-14@2x.png",
    alt: "Disney",
  },
  {
    image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-16@2x.png",
    alt: "Pixar",
  },
  {
    image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-18@2x.png",
    alt: "Marvel",
  },
  {
    image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-20@2x.png",
    alt: "Star Wars",
  },
];

// Recommended content data
const recommendedContent = [
  { image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-9@2x.png" },
  { image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-10@2x.png" },
  { image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-11@2x.png" },
  { image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-12@2x.png" },
  { image: "https://c.animaapp.com/X0Dcc2OA/img/rectangle-13@2x.png" },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#1e2341] min-h-screen">
      <main className="pt-[70px]">
        {/* Hero Carousel */}
        <Carousel className="max-w-[1536px] mx-auto">
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://c.animaapp.com/X0Dcc2OA/img/rectangle-3.png"
                alt="Hero"
                className="w-full h-[424px] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Brand Categories */}
        <div className="max-w-[1536px] mx-auto grid grid-cols-4 gap-6 px-8 mt-12">
          {brandCards.map((brand, index) => (
            <Card key={index} className="bg-transparent border-none">
              <CardContent className="p-0">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="w-full h-[235px] object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommended Section */}
        <section className="max-w-[1536px] mx-auto px-8 mt-12 pb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Recommended for You
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {recommendedContent.map((content, index) => (
              <Card
                key={index}
                className="bg-transparent border-[3px] border-[#f9f9f91a] shadow-lg"
              >
                <CardContent className="p-0">
                  <img
                    src={content.image}
                    alt={`Recommended ${index + 1}`}
                    className="w-full h-[165px] object-cover rounded-lg"
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
