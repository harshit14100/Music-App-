import { useState } from "react"
import { songsData } from "../Assets/Songs"

const Home = () => {
  const songs = songsData
  const [song, setsong] = useState(songs[0])
  return (
    <div className='h-screen w-full bg-zinc-800 text-white flex'>
      <div className='w-[50%] h-full bg-zinc-800 flex pt-30 justify-start items-center flex-col gap-22'>
        <h1 className='text-white font-bold text-2xl'>Now Playing</h1>
        <div className="h-82 w-82 border-0 ">
          <img src={song.image} className="rounded-2xl"/>
          <div className="flex flex-col pt-8 items-center">
            <h1 className="text-3xl font-bold">{song.name}</h1>
            <h4 className="">{song.singer}</h4>
          </div>
        </div>
      </div>
      <div className='w-[50%] h-full bg-zinc-700 flex pt-25 justify-center'>
        <h1 className='text-white font-bold text-2xl'>Playable Area</h1>
      </div>
    </div>
  )
}

export default Home
