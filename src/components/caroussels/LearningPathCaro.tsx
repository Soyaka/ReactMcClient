
import { Suspense } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";

import { lazy } from "react";



export default function LearningPathCaro( paths : any) {



  const LearningPathCard = lazy(() => 
  import('../cards/LearningPathCard'));


  return (
    <>  
    <h1 className='text-3xl font-light text-black dark:text-gray-100'>Learning Paths</h1>
    <Carousel opts={{
        align: "start",
        loop: true,
      }} className="w-full max-h-[40vh] ">
      <CarouselContent className="-ml-1 w-full gap-6  mr-4">
        {items.map((item : any, index) =>
          <Suspense key={index} fallback={<SkeletonCard />}>
            <LearningPathCard key={index}  {...item} />
          </Suspense>
        )}
      </CarouselContent>
    </Carousel>
    </>
  );
}



type PathCardProps = {
  id?: string;
  title: string;
  description: string;
  author: string;
  category: string;
  duration: string;
  date: string;
  progress: number;
  isFree: boolean;
  isBookmarked: boolean;
  skillLevel: string;
};



const items: PathCardProps[] = [
    {
        id: uuidv4(),
        title: "Building Responsive Websites with Tailwind CSS",
        description: "Learn how to create a responsive website using Tailwind CSS from scratch.",
        author: "John Doe",
        category: "LEARNING PATH",
        duration: "2 weeks",
        date: "April 2022",
        progress: 40,
        isFree: true,
        isBookmarked: false,
        skillLevel: "Beginner",
    },
    {
        id: uuidv4(),
        title: "Mastering React for Front-End Development",
        description: "Master React with practical projects and advanced concepts.",
        author: "Jane Smith",
        category: "LEARNING PATH",
        duration: "3 weeks",
        date: "May 2022",
        progress: 60,
        isFree: false,
        isBookmarked: true,
        skillLevel: "Intermediate",
    },
    {
        id: uuidv4(),

        title: "Introduction to Node.js and Backend Development",
        description: "",
        author: "Alice Johnson",
        category: "LEARNING PATH",
        duration: "4 weeks",
        date: "June 2022",
        progress: 20,
        isFree: true,
        isBookmarked: false,
        skillLevel: "Beginner",
    },
    {
        id: uuidv4(),

        title: "Advanced CSS Techniques with Flexbox and Grid",
        description: "Learn advanced CSS techniques using Flexbox and Grid layouts.",
        author: "Michael Brown",
        category: "LEARNING PATH",
        duration: "2 weeks",
        date: "July 2022",
        progress: 80,
        isFree: false,
        isBookmarked: true,
        skillLevel: "Advanced",
    },
    {
        id: uuidv4(),

        title: "Full-Stack Development with MERN Stack",
        description: "Become a full-stack developer using MongoDB, Express, React, and Node.js.",
        author: "Emily Davis",
        category: "LEARNING PATH",
        duration: "5 weeks",
        date: "August 2022",
        progress: 50,
        isFree: true,
        isBookmarked: false,
        skillLevel: "Intermediate",
    },
    {
        id: uuidv4(),

        title: "Introduction to Python Programming",
        description: "Start your programming journey with Python, a versatile and powerful language.",
        author: "Chris Wilson",
        category: "LEARNING PATH",
        duration: "3 weeks",
        date: "September 2022",
        progress: 30,
        isFree: true,
        isBookmarked: false,
        skillLevel: "Beginner",
    },
    {
        id: uuidv4(),

        title: "Data Science with Python",
        description: "Dive into data science using Python, covering data analysis, visualization, and machine learning.",
        author: "Laura Martinez",
        category: "LEARNING PATH",
        duration: "6 weeks",
        date: "October 2022",
        progress: 0,
        isFree: false,
        isBookmarked: true,
        skillLevel: "Advanced",
    },
    {
        id: uuidv4(),

        title: "DevOps Essentials with Docker and Kubernetes",
        description: "Learn the essentials of DevOps, focusing on Docker and Kubernetes.",
        author: "David Lee",
        category: "LEARNING PATH",
        duration: "4 weeks",
        date: "November 2022",
        progress: 0,
        isFree: false,
        isBookmarked: false,
        skillLevel: "Intermediate",
    },
    {
        id: uuidv4(),

        title: "Cybersecurity Basics",
        description: "Understand the basics of cybersecurity and learn how to protect systems and data.",
        author: "Sophia Taylor",
        category: "LEARNING PATH",
        duration: "3 weeks",
        date: "December 2022",
        progress: 20,
        isFree: true,
        isBookmarked: false,
        skillLevel: "Beginner",
    },
    {
        id: uuidv4(),

        title: "Artificial Intelligence and Machine Learning",
        description: "Explore the fundamentals of AI and machine learning, and build your own models.",
        author: "James Anderson",
        category: "LEARNING PATH",
        duration: "8 weeks",
        date: "January 2023",
        progress: 10,
        isFree: false,
        isBookmarked: true,
        skillLevel: "Advanced",
    }
];

