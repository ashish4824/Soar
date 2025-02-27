import { Cross, Menu, SearchIcon } from 'lucide-react'
import React from 'react'
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';
import user from '../../assets/user.png'
import { Link } from 'react-router-dom';
export default function Header({sidebar,open}) {
  return (
    <>
    <div className='flex items-center h-16 justify-between w-full bg-gray-100 px-3'>
        <button className='md:hidden block' onClick={()=>sidebar(!open)}> {open?<Cross/> :  < Menu/>}</button>
        <h5 className='text-lg font-semibold'>Overview</h5>
        <div className='flex items-center xl:gap-x-8 gap-x-2'>
            <div className='md:block hidden  items-center relative border-[1px] border-light-200 rounded-md' >
            <SearchIcon className='absolute left-1 top-1.5 bottom-0 ' size={20}/>
            <input type="text" className='h-8 pl-8 focus-within:border-[#3b82f6] outline-none bg-gray-50 rounded-2xl' />
        </div>
        <Link to="/settings" className='md:block hidden'>
            <Settings />
        </Link>
        <div className='md:block hidden'>
        <Bell/>
        </div>
        <div>
            <img className='size-10 rounded-full' src={user} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}
