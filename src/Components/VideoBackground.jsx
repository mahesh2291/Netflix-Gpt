
import { useSelector } from "react-redux";
import useVideoHook from "../hooks/useVideoHook";


const VideoBackground=({movieId})=>{
     
const trailer=useSelector((store)=>store.movie.trailer)
   const key=trailer.key
  
      useVideoHook(movieId)

    return (
      <div className="w-screen">
        <iframe className="w-screen aspect-video"  src={"https://www.youtube.com/embed/rUSdnuOLebE?si="+key} title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay:true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen >
        </iframe>
        </div>
    )
}

export default VideoBackground