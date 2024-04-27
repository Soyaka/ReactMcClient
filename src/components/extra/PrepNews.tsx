import React from 'react'

export default function PrepNews() {
    return (
        <div className='flex flex-col p-6  bg-[#259add] max-w-[22rem] max-h-[16rem] min-h-[16rem] pr-8 rounded-br-[2.7em] '>
            <h2 className='font-medium text-2xl mr-6 pb-2 '>Prep for the 200-301 CCNA v1.1 exam</h2>
            <p className='p-3 text-sm m-2 font-medium'>Access free study tutorials and more to help prep for the Aug 20 release of the CCNA v1.1 exam.</p>
            <button className=' m-1 p-2 rounded-full border  border-white text-white max-w-[11rem] hover:bg-white hover:text-black'>Read Blog</button>

        </div>
    )
}
