import Image from 'next/image'
import React from 'react'
import Man from "../../../public/image2.png"

export default function LoggedBanner() {
  return (
    <div className="">
    <div className='  banner'>
        <div className='flex justify-between'>
            <div className='ms-4 mt-3'>
               <div className='flex justify-start'>
                <img src="./star.png" alt="" className='me-3' />
                <h1>No Ads & Unlock All Paid Songs</h1>
               </div>
               <h1 className='pt-2 text-[65px] '>Premium Membership</h1>
               
            <p className='mt-2 text-[18px] text-start'>It is a long established fact that a is that it has a more-or-less normal distribution of<br/> letters, as opposed to using 'Content here, content here', making it look like readable <br/> English.</p>
            <div className='flex mt-3 justify-start'>
                <button className='button bg-black'>Update Now</button>
                <button className='button bg-[#19636e] ms-3'>Learn Now</button>
            </div>
            </div>
            <div className=' ps-3 pt-3 flex justify-end'>
                <img src="./image2.png" className='mt-7 me-5'/>
            </div>
        </div>
    </div>
</div>
  )
}
