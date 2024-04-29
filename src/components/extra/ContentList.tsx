import React from 'react'
import { Link } from 'react-router-dom';
export default function ContentList() {
    const [SelectedContent, setSelectedContent] = React.useState(1);
  return (
    <div>
        <ul className='flex flex-row relative  gap-8 2xl:gap-14 2xl:justify-start  w-full px-4 py-12 text-black dark:text-white justify-center items-center'>
        {ContentLinks.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={item.href} className='text-2xl font-light'>{item.name}</Link>
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
        id: 4,
        name: 'Practice Exams',
        href: '/explore/practice-exams'
    },{
        id: 5,
        name: 'Instructor-led',
        href: '/explore/instructor-led'
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
    },{
        id: 9,
        name: 'Events',
        href: '/explore/events'
    }
]