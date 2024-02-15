import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col justify-between items-center p-24">
        
          <div className="w-2/3 text-center p-3 h-48 bg-transparent">
            <h1 className="text-4xl">Welcome To Memes Website</h1>
          <Link href="/dashboard" className="border-2 p-3 my-5 inline-block border-black rounded hover:bg-black hover:text-white">Go To Dashboard</Link>
          </div>
      
    </main>
  );
}
