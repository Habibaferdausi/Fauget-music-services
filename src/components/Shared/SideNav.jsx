"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Music from "@/../public/music.svg"

const SideNav = ({ children }) => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#3B3B3B] w-[253px] h-full fixed overflow-y-auto">
        <div className="flex flex-col justify-between w-[210px] h-full">
            <div className='flex justify-center mt-9'>
                <Image src={Music} height={18} width={12} className='me-1'/>
      <h1 className='text-[30px] font-custom '>
      Fauget</h1>
      </div>
      <div className='flex justify-center mt-3'>
                
      <h1 className='text-[22px]  font-semibold'>
      Menu
          </h1>
          <div className='w-[70px] bg-white  border-custom'></div></div>
        
            <div>

            </div>
          <div className="mt-8">
            <Link href="/">
              <h1 className={isActive("/") ? "text-[#069D95] font-bold text-lg mx-4" : "text-white font-bold text-lg mx-4"}>Home</h1>
            </Link>
            <Link href="/music">
              <h1 className={isActive("/music") ? "text-[#069D95] font-bold text-lg mx-4" : "text-white font-bold text-lg mx-4"}>Music</h1>
            </Link>
            <Link href="/settings">
              <h1 className={isActive("/settings") ? "text-[#069D95] font-bold text-lg mx-4" : "text-white font-bold text-lg mx-4"}>Settings</h1>
            </Link>
          </div>
          <div className="mb-8">
            <Link href="/logout">
              <h1 className={isActive("/logout") ? "text-[#069D95] font-bold text-lg mx-4" : "text-white font-bold text-lg mx-4"}>Logout</h1>
            </Link>
            {/* Add similar logic for other links */}
          </div>
        </div>
      </div>

      {/* Main Content and Top Navbar */}
      <div className="flex flex-col w-full ml-1/5"> {/* Adjust the margin to accommodate the sidebar width */}
        {/* Top Navbar */}
        <div className="bg-black h-16 flex justify-between items-center px-4">
          <div>
            <img src="/company_logo.png" alt="Company Logo" className="h-8" />
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Search" className="bg-gray-300 px-2 py-1 rounded-md mr-4" />
            <img src="/user_img.png" alt="User" className="h-8 w-8 rounded-full" />
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
