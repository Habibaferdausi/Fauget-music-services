"use client";
import { AuthContext } from '@/app/api/auth/AuthProvider'
import React, { useContext } from 'react'
import SideNav from '../Shared/SideNav'
import Setting from './Setting'

export default function SettingLayout() {
  const {user} = useContext(AuthContext)
    
  return (
    <div className='max-w-[1440px] mx-auto'>
      
      <div>
    
        {user?(
    <Setting/>
        ):
        (
            <h1 className='text-lg text-white margin-common mt-11'> Please login to see Setting</h1>
        )}
       
      
      </div>
    </div>
  )
}
