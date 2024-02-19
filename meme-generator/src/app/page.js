import Image from "next/image";
import Link from "next/link";
import Navbar from "@/Component/navbar/page";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      <div className="w-full md:w-10/12 lg:w-2/3 m-auto text-center p-6 bg-gradient-to-r from-gray-400 to-gray-700 h-96 text-white">
        <h1 className="text-4xl">Welcome To Memes Website</h1>
        <Link href="/dashboard" className="border-2 p-3 my-5 inline-block border-white rounded hover:bg-blue-400 hover:text-white">Go To Dashboard</Link>
      </div>

    </main>
  );
}
