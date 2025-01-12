import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const Login = () => {
  return (
    <div className="bg-[#1e2341] min-h-screen flex items-center justify-center">
      <Card className="w-[400px] bg-[#090b13] border-[#f9f9f91a]">
        <CardHeader>
          <img
            src="https://c.animaapp.com/X0Dcc2OA/img/logo-1.svg"
            alt="Disney+ Logo"
            className="w-[150px] mx-auto mb-6"
          />
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="bg-[#31343e] border-none text-white"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-[#31343e] border-none text-white"
          />
          <Button className="w-full bg-[#0063e5] hover:bg-[#0483ee] text-white">
            LOGIN
          </Button>
          <p className="text-[#cacaca] text-sm text-center">
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
