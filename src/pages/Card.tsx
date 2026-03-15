import { RiPlayListAddFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

interface CardsProps{
  name: string;
  singer: string;
  image:string;
  songIndex:number;
}
const Card: React.FC<CardsProps> = ({ name, singer, image }) => {

  return (
    <div className='h-40 w-152 max-w-xl flex bg-zinc-700 items-center px-3 rounded-xl hover:bg-zinc-600 transition-all cursor-pointer'>
    <div >
        <img src={image} className='h-20 w-25 py-1 rounded-xl object-cover' />
    </div>
    <div className='pl-4 flex justify-between w-full'>
        <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-2xl'>{name}</h1>
        <h4>{singer}</h4>
        </div>
        <div className='flex  gap-3.5 justify-center items-center'>
        <RiPlayListAddFill className='text-3xl cursor-pointer'/>
        <CiHeart className='text-3xl font-bold cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}

export default Card
