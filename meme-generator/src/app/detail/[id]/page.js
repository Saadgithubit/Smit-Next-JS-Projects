import Navbar from "@/Component/navbar/page";
import Detail from "./detail"

export default async function Detailcontainer(props){
    const { id } = props.params
    const memeId  = id

    const res = await fetch(`https://api.imgflip.com/get_memes`);
    const result = await res.json();
    const meme = result.data.memes.find(meme => meme.id === memeId);
    console.log(meme);

    return <div className="">
        <Navbar/>
        <Detail meme={meme}/>

    </div>
}