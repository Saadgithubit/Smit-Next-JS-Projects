import Image from "next/image";
import Link from "next/link";

export default async function Dashboard(){

   const res = await fetch('https://api.imgflip.com/get_memes')
   const data = await res.json();
   const memes = data.data.memes
   console.log(memes);
   return<div className="flex space-x-3 flex-wrap justify-center p-4">  
        {memes.map((meme , index) => {
                const {name,url,id,captions} = meme 
            return <Link href={`/detail/${captions}`} key={index} className="border-2 p-2 w-60 h-60">
                <h2>{name}</h2>
                <img className="p-2 w-52 h-52" src={url}/>

            </Link>
        })}
    </div>
}