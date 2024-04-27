
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { LuShoppingCart } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";




export default function NavBar() {

    const location = useLocation();
    const { pathname } = location;
    return (
        <div className={`flex py-8  z-10  pl-[5em] sticky top-0 justify-stretch items-center 2xl:justify-end text-white bg-[#050505]`}>
            <div className={` w-[95%] grid grid-cols-1 md:grid-cols-10 2xl:grid-cols-10  items-center`}>
                <div className={`flex md:col-span-1 justify-start 2xl:col-span-1 text-3xl  py-4`}>
                    Cisco <span className={`flex justify-center items-center font-bold text-3xl  `}>U.</span>
                </div>
                <div className={`col-span-1 md:col-span-5 2xl:col-span-5  py-6 `}>
                    <ul className='flex flex-wrap  justify-start 2xl:justify-start items-center space-x-4 md:space-x-8 px-3 gap-2'>
                        {NavLinks.map((item) => {
                            return (
                                <li key={item.id} className={`${item.href === pathname ? 'border-b-2 border-white' : 'border-b-2 border-black'} `} >
                                    <Link to={item.href} className={`  2xl:text-2xl `}>{item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={`flex  flex-row justify-end  items-center   2xl:justify-around  row-span-4 col-span-4  2xl:col-span-3`}>
                    <div className={`row-span-2 h-14 flex rounded-full p-2 items-center relative w-[80%] bg-blue-200`}>
                        <span className={`absolute left-0 ml-4 z-10 bg-blue-200`}></span>
                        <input type="text" placeholder="Search Here" className={`h-full w-[85%] p-1 pl-10 border-none focus:outline-none relative z-0 bg-transparent`} />
                        <button className='absolute right-0 mr-4 z-10 bg-blue-200'> <IoSearch size={25} /></button>
                    </div>
                    <div className={`row-span-1 ml-4 rounded-b-full p-4 bg-blue-200`}> {"AB"} </div>
                    <button className={`row-span-1 ml-4  p-3`}> <LuShoppingCart size={35} /></button>
                </div>

            </div>
        </div>


    )
}

const NavLinks = [
    { id: 1, name: "For You", href: "/for-you" },
    { id: 2, name: "Explore", href: "/explore" },
    { id: 3, name: "Certifications", href: "/certifications" },
    { id: 4, name: "Community", href: "/community" },
    { id: 5, name: "View Plans", href: "/plans" },
]