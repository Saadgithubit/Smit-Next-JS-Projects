export default async function Detailcontainer(props){
    const { id } = props.params
    const memeId  = id
    console.log(props);
    console.log(memeId);

    // const res = await fetch('https://api.imgflip.com/' + memeId)
    // const data = await res.json()
    // console.log(data);
    return <div>
        <h1>Detail Page</h1>
    </div>
}