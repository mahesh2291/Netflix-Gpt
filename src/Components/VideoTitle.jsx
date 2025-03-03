const VideoTitle=({movieDetails:{original_title,overview}})=>{
    
    return (
        <div className="pt-[15%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{original_title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
         <button className="border-2 hover:bg-opacity- rounded-lg ml-2 p-2 bg-white text-black">Play</button>
         <button className="border-2 rounded-lg p-2 ml-2 bg-white text-black">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle