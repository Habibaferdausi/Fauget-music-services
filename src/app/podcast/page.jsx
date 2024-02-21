import Podcast from '@/components/Podcast/Podcast'
import SideNav from '@/components/Shared/SideNav'
import React from 'react'

export default function page() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <SideNav>
        <Podcast/>
      </SideNav>
    </div>
  )
}
