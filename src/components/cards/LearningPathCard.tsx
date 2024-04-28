import React from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { LuBookmarkPlus } from "react-icons/lu";
import { TbVersionsFilled } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";


export default function LearningPathCard() {
  return (
    <div className='flex flex-col gap-4  rounded-lg p-4 min-w-[25rem] max-h-72 cursor-pointer text-black bg-gray-100 hover:bg-gray-200'>
    <div className='flex justify-between'>
        <h1 className='text-sm font-light'>LEARNING PATH</h1>
        <div> 
        <LuBookmarkPlus size={24}/>
        </div>
    </div>
    <div className='p-4 bg-sky-400 max-w-10'>

    </div>
    <div>
        <h2 className='text-sm '>Network Administration | <span className='text-sky-400'>NETDAM</span></h2>
    </div>
    <div>
        <p className='text-xs font-light'>The Network Administrator (NETADM) learning path prepares you as a network administrator in a small-to-medium-sized network.</p>
    </div>
    <div className='flex flex-row gap-4 justify-between'>
          <div className='flex flex-row p-1 gap-8'>
            <span className='p-1 bg-white'> <MdAccessTimeFilled size={22}/></span>
            <span className='p-1 bg-white'> <SiLevelsdotfyi size={22}/></span>
            <span className='p-1 bg-white'> <TbVersionsFilled size={22}/></span>
            <span className='p-1 bg-white'> <SlChemistry size={22}/></span>

          </div>
          <div>
              <button className='bg-sky-600 text-white p-2 rounded-full text-xs dark:bg-indigo-400'>Subscribe now</button>
          </div>
    </div>
</div>
  )
}
