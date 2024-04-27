import React from 'react'


export default function Recommandation() {
    return (
        <div className='flex flex-col p-4 rounded-tl-[2.7em] text-black rounded-lt-16 bg-[#92CE48] max-w-[22rem] max-h-[16rem]  '>
            <h2 className='font-light p-1'>RECOMMENDATIONS</h2>
            <h1 className={`w-[50%] py-2  text-xl `}>Cisco U. evolves
                as you do</h1>
            <p className='p-2 text-sm m-2 '>Revisit your interests to see certifications and training that meet your current goals.</p>
            <button className=' m-1 p-2 rounded-full bg-blue-500 text-white max-w-[11rem] hover:bg-blue-600'>Update interests</button>
        </div>
    )
}
