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
    <div className='h-35 w-152 flex bg-zinc-600 items-center px-4 rounded-2xl'>
    <div >
        <img src={image} className='h-30 w-35 rounded-2xl' />
    </div>
    <div className='pl-4 flex justify-between w-full'>
        <div className='flex flex-col gap-1'>
        <h1 className='font-bold text-2xl'>{name}</h1>
        <h4>{singer}</h4>
        </div>
        <div className='flex  gap-3.5'>
        <RiPlayListAddFill className='text-3xl'/>
        <CiHeart className='text-3xl font-bold'/>
        </div>
    </div>
    </div>
  )
}

export default Card
