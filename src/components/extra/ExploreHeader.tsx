import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ExploreHeader() {
    const location = useLocation();
    const { pathname } = location;
    
    return (
        <div className='flex flex-col p-6 pt-8 2xl:px-14 gap-4 text-black/80'>
            <div className='flex flex-col gap-10 p-2'>
                <h1 className='2xl:text-5xl text-4xl font-extrabold'>Explore</h1>
                <h3 className='text-3xl font-light'>Micro L. has a variety of content to meet your learning needs.</h3>
            </div>
            <div>
                <ul className='flex flex-row relative gap-8 2xl:gap-14 2xl:justify-start 2xl:left-[12em] w-full px-4 py-12 text-black dark:text-white justify-center items-center'>
                    {ContentTypes.map((item) => (
                        <li key={item.Tag}>
                            <Link to={item.href} className={`text-2xl font-light ${pathname === item.href ? 'border-b-2 border-black' : 'border-b-2 border-white'}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const ContentTypes = [
    {
        Tag: "All",
        name: "All",
        href: "/explore"
    },
    {
        Tag: "Learning Paths",
        name: "Learning Paths",
        href: "/explore/learning-paths"
    },
    {
        Tag: "Courses",
        name: "Courses",
        href: "/explore/courses"
    },
    {
        Tag: "Tutorials",
        name: "Tutorials",
        href: "/explore/tutorials"
    },
    {
        Tag: "Videos",
        name: "Videos",
        href: "/explore/videos"
    },
    {
        Tag: "Podcasts",
        name: "Podcasts",
        href: "/explore/podcasts"
    }
];
