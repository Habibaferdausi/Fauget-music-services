
import SettingLayout from '@/components/Settings/SettingLayout'
import SideNav from '@/components/Shared/SideNav'
import React from 'react'

export default function page() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <SideNav>
    <SettingLayout/>
        </SideNav>
        
    </div>
  )
}
