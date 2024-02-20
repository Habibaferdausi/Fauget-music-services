import Podcast from '@/components/Podcast/Podcast'
import SideNav from '@/components/Shared/SideNav'
import React from 'react'

export default function page() {
  return (
    <div>
      <SideNav>
        <Podcast/>
      </SideNav>
    </div>
  )
}
