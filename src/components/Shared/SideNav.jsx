"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from "@/../public/music.svg"
import { Home, Logout, Mic, MusicNote, QueueMusic, Search, Settings } from '@mui/icons-material';

import { useContext, useState } from 'react';
import { AuthContext } from '@/app/api/auth/AuthProvider';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MobileNav from './MobileNav';

const SideNav = ({ children }) => {
  const pathName = usePathname();
  const {user,logOut}=useContext(AuthContext);
  const [scroll, setScroll] = useState(false);


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };


  return (
    <div className="flex h-screen  ">
      <div className='lg:hidden block'>
      <div
          className={`bg-white  w-full ${
            scroll ? " bg-white  fixed top-0 z-10" : ""
          }`}
        >
      {/* navbar for mobile view */}
      <MobileNav />
      </div>
      </div>
      {/* Sidebar */}
      <div className="bg-[#3B3B3B] lg:block hidden w-[253px] h-full fixed overflow-y-auto">
        <div className="flex flex-col justify-start w-[210px] h-full">
          {/* logo part */}
            <div className='flex justify-center mt-9'>
                <Image src={Logo} height={18} width={12} className='me-1'/>
      <h1 className='text-[30px] custom-font my-3'>
      Fauget</h1>
      </div>

      {/* 1st part */}

      <div className='flex justify-between items-center mt-6'>
                
      <h1 className='text-[22px] px-4  text-white  font-semibold'>
      Menu
          </h1>
          <div className='w-[70px] h-[1px] bg-white  border-custom'></div>
          </div>
          <div className='px-4 mt-3'>
          <Link href="/" className={pathName === "/" ? "text-[#069D95] flex justify-start items-center mt-5" : "text-white flex justify-start items-center mt-5"}>
  <Home/>
  <h1 className='text-[22px] ps-5 font-semibold '>Home</h1>
</Link>

        <Link href="/podcast"  className={pathName === "/podcast" ? "text-[#069D95] flex justify-start items-center pt-6" : "text-white flex justify-start items-center pt-6"}>
        <MusicNote/>
          <h1 className='text-[22px] ps-5 font-semibold '>Podcast</h1>

        </Link>
        <Link href="/setting"  className={pathName === "/setting"? "text-[#069D95] flex justify-start items-center pt-6" : "text-white flex justify-start items-center pt-6"}>
          <Settings/>
          <h1 className='text-[22px] ps-5 font-semibold '>Setting</h1>

        </Link>
        {user ? (
        <button onClick={handleLogOut} className='flex text-white justify-start items-center pt-6'>
          <Logout />
          <h1 className='text-[22px] ps-5 font-semibold'>Logout</h1>
        </button>
      ) : null}
        
        </div>

{/* 2nd part */}

        <div className='flex justify-between items-center mt-20 pt-10'>
                
      <h1 className='text-[22px] text-white  px-4 w-full font-semibold'>
      My Playlist
          </h1>
          <div className='w-[40px] h-[1px] bg-white  border-custom'></div>
          </div>
          <div className='px-4 mt-3'>
        <div className='flex justify-start text-white items-center mt-5' >
          <QueueMusic/>
          <h1 className='text-[22px] ps-5 font-semibold '>Playlist  #A</h1>

        </div>
        <div className='flex justify-start text-white  items-center mt-6' >
          <QueueMusic/>
          <h1 className='text-[22px] ps-5 font-semibold '>Playlist  #B</h1>

        </div>
        <div className='flex justify-start text-white  items-center mt-6' >
          <QueueMusic/>
          <h1 className='text-[22px] ps-5 font-semibold '>Playlist  #C</h1>

        </div>
        <div className='flex justify-start text-white  items-center mt-6' >
          <QueueMusic/>
          <h1 className='text-[22px] ps-5 font-semibold '>Add New +</h1>

        </div>
        </div>
        </div>
      </div>

      {/* Main Content and Top Navbar */}
      <div className="flex flex-col w-full ml-1/5"> 
        {/* Top Navbar */}
        <div className=" lg:flex hidden justify-between items-center pt-11 pb-3 px-8">
        
         
          <div>
            {user ?(
               <h1 className='text-white margin-common text-[30px] font-semibold'>Welcome , {user?.displayName}</h1>
            ):(
              <h1 className='text-white margin-common text-[30px] font-semibold'>Welcome to fauget music services</h1>
            )}
          
          </div>
         
<div>
  {user ? (
     <div className="flex gap-5 me-1 items-center">
          <div className="relative">
  <span className="absolute inset-y-0 left-3  flex items-center ps-4">
<Search/>
   
  </span>
  <input
    type="text"
    placeholder="Artist, Music, Album, Etc"
    className="bg-[#3B3B3B]  ps-[50px] text-[18px] search ms-2  "
  />
   <span className="absolute inset-y-0 right-5 flex items-center pr-2">
<Mic/>
   
  </span>
</div>

            <img src="https://i.ibb.co/Sv7N6ky/Screenshot-9.jpg" alt="User" className="h-8 w-8 rounded-full" />
          </div> 

  ):(

    <div className='flex gap-6 justify-between item-center'>
<SignIn/>
<SignUp/>

 </div>
  )}
</div>


 
        
         
         
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-8"> {/* Adjust the margin to accommodate the sidebar width */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
