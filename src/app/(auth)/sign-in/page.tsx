import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 flex mx-auto w-[420px] shadow-xl h-auto justify-center items-center">
        <div className="flex w-full flex-col gap-5 justify-center items-center">
          <Image src="/loading.png" alt="logo" width={100} height={100} />
          <h1 className="mt-2 text-3xl font-bold uppercases">Login</h1>
          <div className="flex gap-2 flex-col w-full mt-5">
            <Label htmlFor="email">Your email address</Label>
            <Input type="email" className="w-full" id="email" />
            <Label htmlFor="password">Your password </Label>
            <Input type="password" id="password" className="w-full" />
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
