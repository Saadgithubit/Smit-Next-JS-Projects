import Detail from "./detail"

export default async function Detailcontainer(props){
    const { id } = props.params
    const memeId  = id

   

    return <div className="flex justify-center">
        <Detail memeId={memeId}/>

    </div>
}