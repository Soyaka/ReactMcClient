
import { Suspense } from 'react';

import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";

import { lazy } from "react";

export default function TutorialCaroussel() {
    const TutorialCard = lazy(() => 
    import('../cards/TutorialCard'));
  
  
    return (
      <>
      <h1 className='text-3xl font-light text-black dark:text-gray-100'>Tutorials</h1>
      <Carousel opts={{
          align: "start",
          loop: true,
        }} className="w-full max-h-[40vh]">
        <CarouselContent className="-ml-1 w-full gap-6">
          {Array.from({ length: 8 }).map((_, index) =>
            <Suspense key={index} fallback={<SkeletonCard />}>
              <TutorialCard />
            </Suspense>
          )}
        </CarouselContent>
      </Carousel>
      </>
    );
}
