import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1e2341] min-h-screen flex items-center justify-center">
      <Card className="w-[400px] bg-[#090b13] border-none">
        <CardHeader>
          <img
            src="https://c.animaapp.com/ABQ9r6Al/img/logo-1.svg"
            alt="Disney+ Logo"
            className="w-[150px] mx-auto mb-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#31343e] border-none text-white placeholder:text-gray-400"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-[#31343e] border-none text-white placeholder:text-gray-400"
          />
          <Button className="w-full bg-[#0063e5] hover:bg-[#0483ee] text-white">
            LOGIN
          </Button>
          <p className="text-gray-400 text-center text-sm">
            New to Disney+?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
