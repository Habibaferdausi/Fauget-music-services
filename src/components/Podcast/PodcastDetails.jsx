"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import SideNav from '@/components/Shared/SideNav';

export default function PodcastDetails() {
    const { id } = useParams();
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //for data
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
    // console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.lyrics.ovh/suggest/e`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                const foundSong = data.data.find(song => song.id === parseInt(id));
                if (foundSong) {
                    setSong(foundSong);
                } else {
                    setError('Song not found');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {};
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='max-w-[1440px] mx-auto'>
            <SideNav>

            <div className='margin-common relative'>
    <div className="relative  w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
        
        <img
            src={song.artist.picture_xl}
            className='lg:w-[1087px] mt-8 lg:mt-1 lg:h-[346px] w-auto h-[350px]'
        />

        <div className='absolute top-0 left-0 pt-4 ps-9'>
            <h1 className='text-[18px] font-semibold text-white'>{song.title}</h1>
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 margin text-center'>
        <audio controls>
                <source src={song.preview}  />
               
            </audio>
        </div>
       
    </div>
    <div className=''>
        < p className='mt-6 text-white lg:text-[18px] text-[12px] font-semibold leading-[10px}  lg:leading-[21px] '>Music, often regarded as a universal language, possesses a profound impact on individuals <br/>and societies alike. While it has long been celebrated for its ability to evoke emotions, foster  <br/> connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse  <br/> effects that are often overlooked</p>
    </div>
    <button className='common-btn mt-9 font-semibold lg:text-[18px] text-[12px]'>Related</button>
    <div className="grid mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {data.map(song => (
       < div key={song.id} className="relative" >
         <img src={song.album.cover} alt={song.title} className="img-card" />
         <img src="./play.svg" className="absolute inset-0 pb-4  m-auto" />
         <h2 className="text-[18px] text-center mt-1">{song.title}</h2>
       </div>
        ))}
      </div>
</div>

            
            </SideNav>
            
        </div>
    );
}

