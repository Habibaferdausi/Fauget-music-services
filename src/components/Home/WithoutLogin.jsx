import React from 'react'

export default function WithoutLogin() {
  return (
    <div className='margin-common  pb-10'>
        <div className="relative lg:mt-1 mt-7 w-full h-full">
        <div className="absolute inset-0 object-cover ">
            <img src='./gredient.png'  className='w-[1087px] h-[346px]'></img>
        </div>
        
        <img
            src='./banner.png'
            className='w-[1087px] h-[346px]'
        />

        <div className='absolute text-white top-0 left-0 pt-4 ps-9'>
            <h1 className='lg:text-[18px] text-[12px] font-semibold text-white mt-5'>Top play music station</h1>
            <h1 className='lg:text-[35px] text-[20px]  lg:py-4 py-2'>The Dark Side of Music: Unveiling Its Negative Effects</h1>
            <h1 className='lg:text-[18px] text-[12px] font-semibold lg:leading-[22px] leading-4 '>Music, often regarded as a universal language, possesses a profound impact on individuals <br/>and societies alike. While it has long been celebrated for its ability to evoke emotions, foster  <br/> connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse  <br/>effects that are often overlooked</h1>
       <button className='custom-button lg:mt-8 mt-4  lg:text-[18px] text-[10px] font-semibold'> For You?</button>
        </div>
       
       
    </div>
    </div>
  )
}
