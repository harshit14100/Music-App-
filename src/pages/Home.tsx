import { useContext, useState } from "react"
import { songsData } from "../Assets/Songs"
import Card from "./Card"
import { MdSkipPrevious } from "react-icons/md";
import { BiSkipNext } from "react-icons/bi";
import { IoPlayCircle } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";
import { DataContext } from "../context/SongsContext";

const Home = () => {
  const songs = songsData
  const [song, setsong] = useState(songs[0])
  const {Audioref} = useContext(DataContext)
  console.log(Audioref);
  
  return (
    <div className='h-screen w-full bg-zinc-800 text-white flex'>
      <div className='w-[50%] h-full bg-zinc-800 flex pt-30 justify-start items-center flex-col gap-22 '>
        <h1 className='text-white font-bold text-2xl'>Now Playing</h1>
        <div className="h-82 w-82 border-0 ">
          <img src={song.image} className="rounded-2xl h-82 w-82"/>
          <div className="flex flex-col pt-8 items-center pb-7">
            <h1 className="text-3xl font-bold">{song.name}</h1>
            <h4 className="text-zinc-400">{song.singer}</h4>
          </div>
          <div className="w-full flex flex-col gap-2 pt-4">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>
        <div className="flex text-5xl justify-center pt-8">
          <button className="cursor-pointer hover:text-zinc-400 transition-all">
            <MdSkipPrevious/>
          </button>
          <button className="cursor-pointer hover:text-zinc-400 transition-all text-6xl">
            <IoPlayCircle/>
          </button>
          <button className="cursor-pointer hover:text-zinc-400 transition-all">
            <BiSkipNext/>
          </button>
        </div>
        </div>
      </div>
      <div className='w-[50%] h-full  bg-zinc-800 flex flex-col items-center pt-25 justify-center'>
        <div className="gap-6 overflow-y-auto h-full py-5 pr-4 no-scrollbar flex flex-col">
          {songsData.map((song,index)=>{
            return <Card
            key={index}
            name={song.name}
            image={song.image}
            singer={song.singer}
            songIndex={index}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
