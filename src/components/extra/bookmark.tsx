import React from 'react';
import { FaBookmark } from "react-icons/fa"; // Import an additional icon for the unbookmarked state

export default function Bookmark({ isBookmarked: isBookmarked }: { isBookmarked: boolean }) {
  const [open, setOpen] = React.useState(isBookmarked);


  const handleBookmarkClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent div

    setOpen(!open);
  };

  return (
    <div onClick={handleBookmarkClick} 
      className={`p-2 border rounded-full cursor-pointer ${open ? 'bg-sky-600 text-white border-sky-600' : 'bg-transparent border-slate-500 hover:border-dashed hover:border-sky-600 hover:text-sky-600'} `} >
      <FaBookmark size={8} />
    </div>
  );
}
