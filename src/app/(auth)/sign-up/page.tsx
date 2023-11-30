import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 flex mx-auto w-[420px] shadow-xl h-auto justify-center items-center">
        <div className="flex w-full flex-col gap-5 justify-center items-center">
          <Image src="/loading.png" alt="logo" width={100} height={100} />
          <h1 className="mt-2 text-3xl font-bold uppercases">Create Account</h1>
          <div className="flex gap-2 flex-col w-full mt-5">
            <Label htmlFor="name">Your name</Label>
            <Input type="text" className="w-full" id="name" />
            <Label htmlFor="email">Your email address</Label>
            <Input type="email" className="w-full" id="email" />
            <Label htmlFor="password">Your password </Label>
            <Input type="password" id="password" className="w-full" />
            <Button>Sign Up</Button>
            <Link href="/sign-in" className="text-center hover:underline">
              Already have account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
