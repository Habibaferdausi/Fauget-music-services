"use client";
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Link from 'next/link';
import Logo from "@/../public/music.svg"
import { AuthContext } from '@/app/api/auth/AuthProvider';
import { usePathname } from 'next/navigation';
import { Home, Logout, More, MoreHoriz, MusicNote, QueueMusic, Settings } from '@mui/icons-material';

export default function MobileNav() {
  const [navbar, setNavbar] = useState(false);
  

  const pathName = usePathname();
  const {user,logOut}=useContext(AuthContext);
  


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
        <div className="navbar fixed mb-10 w-full bg-black">
  <div className="flex-none">
 
  </div>
  <div className="flex-1">
  <div className='flex justify-center '>
                <Image src={Logo} height={18} width={12} className='me-1'/>
      <h1 className='text-[13px] custom-font my-3'>
      Fauget</h1>
      </div>
  </div>
  <div className="flex-none">
  <div className="drawer  drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button text-white btn "><MoreHoriz/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        
      <div className='flex justify-between items-center mt-5'>
                
                <h1 className='text-[15px] px-4  text-white  font-semibold'>
                Menu
                    </h1>
                    <div className='w-[40px] h-[1px] bg-white  border-custom'></div>
                    </div>
      </li>
      {/* Sidebar content here */}
      <li> <Link href="/" className={pathName === "/" ? "text-[#069D95] flex justify-start items-center mt-3" : "text-white flex justify-start items-center mt-3"}>
  <Home/>
  <h1 className='text-[15px] ps-5 font-semibold '>Home</h1>
</Link>

</li>
<li>
<Link href="/podcast"  className={pathName === "/podcast" ? "text-[#069D95] flex justify-start items-center pt-1" : "text-white flex justify-start items-center pt-1"}>
        <MusicNote/>
          <h1 className='text-[15px] ps-5 font-semibold '>Podcast</h1>

        </Link>
</li>
      <li>
      <Link href="/setting"  className={pathName === "/setting"? "text-[#069D95] flex justify-start items-center pt-1" : "text-white flex justify-start items-center pt-1"}>
          <Settings/>
          <h1 className='text-[15px] ps-5 font-semibold '>Setting</h1>

        </Link>
      </li>
      <li>
      {user ? (
        <button onClick={handleLogOut} className='flex text-white justify-start items-center pt-1'>
          <Logout />
          <h1 className='text-[15px] ps-5 font-semibold'>Logout</h1>
        </button>
      ) : null}
        </li>

<li>
<div className='flex justify-between items-center mt-8 '>
                
                <h1 className='text-[15px] text-white  px-4 w-full font-semibold'>
                My Playlist
                    </h1>
                    <div className='w-[20px] h-[1px] bg-white  border-custom'></div>
                    </div>
</li>
<li>
<div className='flex justify-start text-white items-center mt-2' >
          <QueueMusic/>
          <h1 className='text-[15px] ps-5 font-semibold '>Playlist  #A</h1>

        </div>
        </li>
      <li>
      <div className='flex justify-start text-white items-center mt-1' >
          <QueueMusic/>
          <h1 className='text-[15px] ps-5 font-semibold '>Playlist  #B</h1>

        </div>
      </li>
      <li>
      <div className='flex justify-start text-white items-center mt-1' >
          <QueueMusic/>
          <h1 className='text-[15px] ps-5 font-semibold '>Playlist  #C</h1>

        </div>
      </li>

      <li>
      <div className='flex justify-start text-white items-center mt-1' >
          <QueueMusic/>
          <h1 className='text-[15px] ps-5 font-semibold '>Add New +</h1>

        </div>
      </li>


    </ul>
  </div>
</div>
  </div>
</div>
    </div>
  )
}
