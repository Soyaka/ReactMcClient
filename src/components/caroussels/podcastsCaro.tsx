import React, { Suspense, lazy } from 'react';
import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { v4 as uuidv4 } from 'uuid';



const CourseCard = lazy(() => import('@/components/cards/CourseCard'));

const CourseCaroussel: React.FC = ( props : any) => {
  

  return (
    <>
      <h1 className='text-3xl font-light text-black dark:text-gray-100'>Courses</h1>
      <Carousel opts={{
          align: "start",
          loop: true,
        }} className="w-full flex flex-col ">

        <CarouselContent className="-ml-1 w-full gap-4 p-3 mr-4">
          {courses?.map((course: any, index: number) =>
            <Suspense key={index} fallback={<SkeletonCard />}>
            <CourseCard {...course}/>
            </Suspense>
          )}
        </CarouselContent>

      </Carousel>
    </>
  );
};

export default CourseCaroussel;


type CourseProps = {
  id?: string;
  title: string;
  category: string;
  duration: string;
  date: string;
  progress: number;
  isFree: boolean;
  isBookmarked: boolean;
  skillLevel: string;
};


const courses: CourseProps[] = [
  {
    id: uuidv4(),
    title: "Web Development Fundamentals",
    category: "Web Development",
    duration: "4 weeks",
    date: "May 2024",
    progress: 25,
    isFree: true,
    isBookmarked: false,
    skillLevel: "Beginner",
  },
  {
    id: uuidv4(),
    title: "Advanced JavaScript Techniques",
    category: "Web Development",
    duration: "6 weeks",
    date: "June 2024",
    progress: 50,
    isFree: false,
    isBookmarked: true,
    skillLevel: "Intermediate",
  },
  {
    id: uuidv4(),
    title: "Python for Data Science",
    category: "Data Science",
    duration: "8 weeks",
    date: "July 2024",
    progress: 75,
    isFree: false,
    isBookmarked: false,
    skillLevel: "Intermediate",
  },
  {
    id: uuidv4(),
    title: "Introduction to Machine Learning",
    category: "Data Science",
    duration: "10 weeks",
    date: "August 2024",
    progress: 100,
    isFree: true,
    isBookmarked: true,
    skillLevel: "Advanced",
  },
  {
    id: uuidv4(),
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    duration: "6 weeks",
    date: "September 2024",
    progress: 40,
    isFree: false,
    isBookmarked: true,
    skillLevel: "Intermediate",
  },
  {
    id: uuidv4(),
    title: "Java Programming Basics",
    category: "Software Development",
    duration: "5 weeks",
    date: "October 2024",
    progress: 20,
    isFree: true,
    isBookmarked: false,
    skillLevel: "Beginner",
  },
  {
    id: uuidv4(),
    title: "Introduction to Artificial Intelligence",
    category: "Artificial Intelligence",
    duration: "8 weeks",
    date: "November 2024",
    progress: 60,
    isFree: false,
    isBookmarked: true,
    skillLevel: "Intermediate",
  },
  {
    id: uuidv4(),
    title: "Database Management Essentials",
    category: "Database Management",
    duration: "4 weeks",
    date: "December 2024",
    progress: 80,
    isFree: true,
    isBookmarked: true,
    skillLevel: "Intermediate",
  },
  {
    id: uuidv4(),
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    duration: "6 weeks",
    date: "January 2025",
    progress: 30,
    isFree: false,
    isBookmarked: false,
    skillLevel: "Beginner",
  },
  {
    id: uuidv4(),
    title: "Cloud Computing Basics",
    category: "Cloud Computing",
    duration: "5 weeks",
    date: "February 2025",
    progress: 70,
    isFree: true,
    isBookmarked: false,
    skillLevel: "Intermediate",
  },
];
