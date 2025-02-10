import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";

const NavBar = () => {

  return (
    <nav className='flex items-center justify-between p-4 '>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <IoIosSearch />
        <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
      </div>
      <div className='flex items-center gap-6 justify-end w-full'> 
        <div className='bg-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer'>
          <LuMessageCircleMore className='w-7 h-7'/>
        </div>
        <div className='bg-white rounded-full w-11 h-11 flex items-center justify-center cursor-pointer relative'>
          <IoNotificationsOutline className='w-7 h-7'/>
          <div className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col pt-2'>
          <span className='text-base leading-3 font-medium'>Alexander Petrov</span>
          <span className='text-sm text-gray-500 text-right'>Teacher</span>
        </div>
        <PiUserCircleLight className='w-10 h-10 rounded-full'/>
      </div>
    </nav>
  )
}

export default NavBar;
