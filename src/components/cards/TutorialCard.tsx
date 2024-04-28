
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import { BiSolidBookmarkAltMinus } from "react-icons/bi";

import React from 'react'

export default function TutorialCard() {
  const [bookmarked, setBookmarked] = React.useState(false);

  const handleClick = () => {
    setBookmarked(!bookmarked);
  }
  return (
    <div className='flex flex-col gap-4  rounded-lg p-4 min-w-[25rem] max-h-72 cursor-pointer text-black bg-gray-100 hover:bg-gray-200'>
      <div className='flex justify-between'>
        <h1 className='text-sm font-light'>TUTORIAL</h1>
        <div onClick={handleClick}  className="text-gray-600" >
          {bookmarked ? <BiSolidBookmarkAltMinus size={25} className="text-blue-500" /> : <BiSolidBookmarkAltPlus size={25} />}
        </div>
      </div>
      <div className="flex max-w-[40%] justify-between items-center">
          <div className="flex">
          <div />
          <h3 className="text-sm ">{"John Carlos"}</h3>
        </div>
      </div>

    </div>
    )
}
