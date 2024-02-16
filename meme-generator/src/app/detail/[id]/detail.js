'use client'
import { useState } from "react"
import Link from "next/link"

export default function Detail(props) {
    const { meme } = props
    const id = meme.id
    const [text1, settext1] = useState()
    const [text2, settext2] = useState()
    const [showInput , setshowInput] = useState(false)
    const [imageUrl, setimageUrl] = useState()

    async function generate() {
        const res = await fetch(`https://api.imgflip.com/caption_image?
        template_id=${id}&username=SaadAhmed5&password=Saad1234&text0=${text1}&text1=${text2}`)
        const data = await res.json()
        console.log(data.data);
        setimageUrl(data.data.url)
    }

    return <div className="w-screen p-3 flex flex-wrap justify-center border-2">
        <div className="w-96 border-2 text-center text-xl p-2 my-3">
            <h3>{meme.name}</h3>
            <img src={meme.url} className="w-full h-72 p-2"/>
            <button onClick={() => setshowInput(true)} className="border-2 w-full p-3 bg-blue-400 text-white my-2">Add Text</button>
        </div>
        {showInput && <div className="w-96 border-2 p-3 my-3 flex flex-col space-y-3">
        <input type="text" className="h-12 pl-2" onChange={(e) => settext1(e.target.value)} placeholder="Enter First Text" />
        <input type="text" className="h-12 pl-2" onChange={(e) => settext2(e.target.value)} placeholder="Enter Second Text" />
        <button className="bg-red-300 p-3 text-white text-xl" onClick={generate}>Generate Meme</button>
        </div>}
        {imageUrl &&
          <div className="w-96 h-96 p-3 border-2 my-3">
            <img className="w-full h-80 p-2" src={imageUrl}/>
            <a className='text-blue-500 text-xl cursor-pointer hover:border-b-2 border-blue-500' href={imageUrl}>{imageUrl}</a>
        </div>
        }
    </div>
}