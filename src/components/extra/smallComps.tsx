

 import { GiDuration } from "react-icons/gi";
 import { SiLevelsdotfyi } from "react-icons/si";



function Duration() {
  return (
    <div className="flex flex-row gap-1 p-2 bg-white  items-center text-black">
      <GiDuration size={25}  />
    </div>
  );
}

function Level() {
  return (
    <div className="flex flex-row gap-1 p-2 bg-white  items-center text-black">
      <SiLevelsdotfyi size={25}  />
    </div>
  );
}


export { Duration , Level} 