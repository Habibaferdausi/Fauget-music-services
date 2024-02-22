import Podcast from '@/components/Podcast/Podcast'
import PodcastLayout from '@/components/Podcast/PodcastLayout'
import SideNav from '@/components/Shared/SideNav'
import React from 'react'
import getAllPosts from '../api/getAllPosts'

export default async function page() {
 
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div>
<PodcastLayout/>
      </div>
     
    </div>
  )
}
