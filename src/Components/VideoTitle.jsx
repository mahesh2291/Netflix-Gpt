const VideoTitle=({movieDetails:{original_title,overview}})=>{
    
    return (
        <div className="pt-[10%] px-6 md:px-24 md:pt-[15%]  w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl mt-5 md:text-6xl md:mt-0 font-bold">{original_title}</h1>
            <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
            <div className="mt-10 md:mt-0">
         <button className="border-2 hover:bg-opacity- rounded-lg ml-2 p-2 bg-white text-black">Play</button>
         <button className="border-2 rounded-lg p-2 ml-2 bg-white text-black">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle