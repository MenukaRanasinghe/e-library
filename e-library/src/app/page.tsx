import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import {Button} from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className='bg-slate-100 h-screen flex items-center justify-center p-10'>
      <div className='grid w-full h-full grid-cols-1 bg-white md:grid-cols-2'>
        <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8'>
          <div className='my-4 text-center'>
            <h1 className="text-3xl justify-center font-semibold">Login</h1>
            <p className='mt-2 text-xs text-slate-400'>
              {''}
              Sign In with your Credentials.</p>
          </div>
          <form>
            <Button className="flex items-center w-full gap-4 px-12 mb-4 bg-transparent rounded-full" variant="outline">
            <FcGoogle />
            Sign In with google
            </Button>
            <Label htmlFor="email">Email*</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" 
            type="email" id="email" placeholder="Email" />

            <Label htmlFor="email">Password*</Label>
            <Input className="mt-2 mb-4 bg-transparent rounded-full" 
            type="password" id="password" placeholder="Password" />
            <Button type="submit" className="w-full t-6 rounded-full bg-blue-800 hover:bg-blue-900">Login</Button>
          </form>
        </div>
        <div className="relative hidden md:block">
          <Image
            className="object-cover"
            layout="fill"
            src="/bg.jpg"
            alt="bg img"
          />
        </div>
      </div>
    </main>
  );
}