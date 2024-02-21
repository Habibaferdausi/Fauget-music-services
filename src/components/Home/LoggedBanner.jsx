import Image from 'next/image'
import React from 'react'
import Man from "../../../public/image2.png"

export default function LoggedBanner() {
  return (
    <div className="">
    <div className='  banner'>
        <div className='flex justify-between'>
            <div className='ps-9 pt-5'>
               <div className='flex text-white gap-2 pt-2 items-center justify-start'>
                <img src="./star.png" alt="" className='me-3' />
                <p className='pt-3'>No Ads & Unlock All Paid Songs</p>
               </div>
               <h1 className=' text-[65px] custom-font -mt-5 text-white py-2'>Premium Membership</h1>
               
            <p className=' text-[18px] mb-2 text-start leading-[21.78px] text-white -mt-4'>It is a long established fact that a is that it has a more-or-less normal distribution of<br/> letters, as opposed to using 'Content here, content here', making it look like readable <br/> English.</p>
            <div className='flex mt-11 gap-4 justify-start'>
                <button className='button bg-black'>Update Now</button>
                <button className='button bg-[#19636e] ms-3'>Learn Now</button>
            </div>
            </div>
            <div className=' ps-3 pt-3 flex justify-end'>
                <img src="./image2.png" className='mt-[25px] me-5'/>
            </div>
        </div>
    </div>
</div>
  )
}
