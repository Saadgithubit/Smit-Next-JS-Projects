'use client'
import { useState } from "react"

export default function Detail(props) {
    console.log(props.memeId);
    const id = props.memeId
    const [text1, settext1] = useState()
    const [text2, settext2] = useState()
    const [imageUrl, setimageUrl] = useState()

    async function generate() {
        const res = await fetch(`https://api.imgflip.com/caption_image?
        template_id=${id}&username=SaadAhmed5&password=Saad1234&text0=${text1}&text1=${text2}`)
        const data = await res.json()
        console.log(data);
        setimageUrl(data.data.url)
    }

    return <div className="w-full flex flex-col align-middle justify-center">
        <div className="border-2 w-1/2 p-3 my-3 flex flex-col space-y-3">
        <input type="text" className="h-12 pl-2" onChange={(e) => settext1(e.target.value)} placeholder="Enter First Text" />
        <input type="text" className="h-12 pl-2" onChange={(e) => settext2(e.target.value)} placeholder="Enter Second Text" />
        <button className="bg-red-300 p-3 text-white text-xl" onClick={generate}>Generate Meme</button>
        </div>
        {imageUrl &&
          <div className="w-1/2">
            <img className="w-full" src={imageUrl}/>
        </div>
        }
    </div>
}