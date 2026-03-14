import { MdHome } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiPlayListFill } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div className='w-full h-16 bg-zinc-800 text-white p-2.5 text-4xl fixed bottom-0 md:top-0'>
      <ul className='flex gap-16 md:justify-center justify-around'>
        <NavLink 
          to="/"
          className={({isActive}) => isActive ? "text-red-600" : ""}>
          <MdHome />
        </NavLink>
        <NavLink to={"/search"}
        className={({isActive}) => isActive ? "text-red-600" : ""}>
          <IoIosSearch/>
        </NavLink>
        <NavLink to={"/playlist"}
        className={({isActive}) => isActive ? "text-red-600" : ""}>
          <RiPlayListFill/>
        </NavLink>
        <NavLink to={"/liked"}
        className={({isActive}) => isActive ? "text-red-600" : ""}>
          <IoHeartSharp/>
        </NavLink>
      </ul>
    </div>
  )
}

export default Nav
