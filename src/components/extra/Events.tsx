'use client';


import SpotlightSvgfrom from '@/assets/spotlight.svg'; // Check if this is a valid React component
import SpotLight from '@/assets/spotlightSvg.svg'; // Check if this is a valid React component
import SpotlightImg from "@/assets/SpotlightImg.png";


export default function EventsCard() {
    return (
        <div className='flex flex-row  text-white rounded-lt-16 bg-[#1A1B1E] bg-opacity-85 px-4 max-h-[16rem]'>
            <div>
                <h2>Events</h2>
                <h1>Cisco U.</h1>
                <SpotlightSvgfrom />
                <p className='p-1 text-sm'>Connect. Secure. Observe.</p>
                <p className='text-xs'>April 24, 2024 | 8:30 a.m. PT</p>
                <button className='mt-8 p-2 border-2 rounded-full'>Register for free</button>
            </div>
            <div className='flex flex-col h-[70%] w-[40%]'>
                <SpotLight />
                <div className='ml-10'>
                    <img src={SpotlightImg} alt="Spotlight" className='w-[7rem] h-[7rem]' width={100} height={100} />
                </div>
            </div>
        </div>
    );
}
