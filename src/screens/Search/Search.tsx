import { SearchIcon } from "lucide-react";
import { Input } from "../../components/ui/input";

export const Search = (): JSX.Element => {
  return (
    <div className="bg-[#1e2341] min-h-screen pt-[100px] px-8">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for movies, TV shows, or series..."
            className="bg-[#31343e] border-none text-white placeholder:text-gray-400 pl-12 h-14 text-lg"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
