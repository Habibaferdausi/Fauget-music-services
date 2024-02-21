"use client";
import { AuthContext } from '@/app/api/auth/AuthProvider';
import React, { useContext } from 'react'

export default function Setting() {
  const {user}= useContext(AuthContext);
  return (
    <div className='margin-common'>
      <h1 className='font-semibold pt-9 text-[22px]'>
       User Profile
      </h1>
      <p className='font-semibold pt-9 ps-1 text-[22px]'>Name :  <span className='ms-3'>{user?.displayName}</span></p>
      <p className='font-semibold pt-3 ps-1 text-[22px]' >Email : <span className='ms-3'>{user?.email}</span> </p>
    </div>
  )
}
