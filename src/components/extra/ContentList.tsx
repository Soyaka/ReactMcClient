
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ContentList() {
    const Location = useLocation();
    const { pathname } = Location;
  return (
    <div>
        <ul className='flex flex-row relative  gap-8 2xl:gap-14 2xl:justify-start 2xl:left-[12em]  w-full px-4 py-12 text-black dark:text-white justify-center items-center'>
        {ContentLinks.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={item.href} className={`text-2xl font-light ${pathname === item.href ? 'border-b-2 border-black' : 'border-b-2 border-white'}`}>{item.name}</Link>
                </li>
            );
        })}
        </ul>
    </div>
  )
}

const ContentLinks = [
    {
        id: 1,
        name: 'All',
        href: '/explore'
    },
    {
        id: 2,
        name: 'Learning Paths',
        href: '/explore/learning-paths'
    },
    {
        id: 3,
        name: 'Courses',
        href: '/explore/courses'
    },{
        id: 6,
        name: 'Tutorials',
        href: '/explore/tutorials'
    },{
        id: 7,
        name: 'Videos',
        href: '/explore/videos'
    },{
        id: 8,
        name: 'Podcasts',
        href: '/explore/podcasts'
    }
]