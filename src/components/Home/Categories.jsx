"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.lyrics.ovh/suggest/e');
        const jsonData = await response.json();
        setData(jsonData.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container margin-common mt-7 width mx-auto">
      <div className='flex justify-between mb-7 items-center'>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>For You</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>Popular</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>Trend</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>Pop</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>Edm</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>Rock</button>
          <button className='common-btn font-semibold lg:text-[18px] text-[8px]'>More</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.map(song => (
       < div key={song.id} className="relative" >
         <img src={song.album.cover} alt={song.title} className="img-card" />
         <img src="./play.svg" className="absolute inset-0  pb-4  m-auto" />
         <h2 className="text-[18px] text-center mt-1">{song.title}</h2>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
