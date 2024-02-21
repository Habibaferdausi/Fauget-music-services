"use client";
import { AuthContext } from '@/app/api/auth/AuthProvider'
import Podcast from '@/components/Podcast/Podcast'
import SideNav from '@/components/Shared/SideNav'
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

export default function PodcastLayout() {
    const {user}= useContext(AuthContext);
   
  
    
    
  return (
    <div className='max-w-[1440px] mx-auto'>
      
      <div>
      <SideNav>
        {user?(
    <Podcast/>
        ):
        (
            <h1 className='text-lg text-white margin-common mt-11'> Please login to see Podcast</h1>
        )}
       
      </SideNav>
      </div>
    </div>
  )
}
