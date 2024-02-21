"use client"
import { AuthContext } from '@/app/api/auth/AuthProvider'
import React, { useContext } from 'react'
import LoggedBanner from './LoggedBanner'
import WithoutLogin from './WithoutLogin'

export default function BannerLayout() {
    const {user}= useContext(AuthContext)
  return (
    <div>
        {user?(
<LoggedBanner/>
        ):(
<WithoutLogin/>
        )}
    </div>
  )
}
