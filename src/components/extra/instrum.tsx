import React from 'react'

export default function Instrum() {
    return (
        <div className='flex flex-col  items-center justify-center text-sky-500 font-bold '>
            <div className='flex flex-raw gap-3 '>
            <Insum />
            <Insum />
            </div>
            <strong className=' tracking-widest  ' >
                MICRO
            </strong>
        </div>
        
    )
}


function Insum() {
    return (
        <div className='flex flex-raw justify-start items-end gap-[0.2em] '>
            <span className=' bg-sky-500/80 px-[0.1em] py-[0.2em] rounded-full '></span>
            <span className='bg-sky-500/80 px-[0.1em]  py-[0.4em] rounded-full'></span>
            <span className=' bg-sky-500/80 px-[0.1em] translate-y-1  py-[0.6em] rounded-full'></span>
            <span className='bg-sky-500/80 px-[0.1em]  py-[0.4em] rounded-full'></span>
            <span className=' bg-sky-500/80 px-[0.1em] py-[0.2em] rounded-full'></span>
        </div>
    )


}