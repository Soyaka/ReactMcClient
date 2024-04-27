
import React from 'react'

export default function BookmarksToggles() {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleOpen1 = () => {
        setOpen(!open);
    }
    const handleOpen2 = () => {
        setOpen2(!open2);
    }

  return (
    <div className='flex flex-col gap-3 p-4 '>
          <h2 className='text-lg font-bold  text-black'>My Learning</h2>
          <div className='flex flex-row gap-3 justify-start'>
            <button onClick={handleOpen1} className={`p-3 w-[10rem]  rounded-full ml-2 ${open ? 'bg-sky-700 text-white border  border-sky-600' : 'bg-white text-black border border-black'}`}> In progress</button>
            <button onClick={handleOpen2} className={`p-3 w-[10rem]  rounded-full ml-2 ${open2 ? 'bg-sky-700 text-white border border-sky-600' : 'bg-white text-black border border-black'}`}> My learning</button>
          </div>
      </div>
  )
}
