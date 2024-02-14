import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
        
          <div className="border-2 w-2/3 border-gray-400 text-center p-3 h-48">
            <h1>Welcome To Memes Website</h1>
          <Link href="/dashboard" className="border-2 p-3 my-3 inline-block border-black rounded hover:bg-black hover:text-white">Go To Dashboard</Link>
          </div>
      
    </main>
  );
}
