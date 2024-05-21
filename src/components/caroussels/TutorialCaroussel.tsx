import React, { Suspense, lazy } from 'react';
import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import { Carousel, CarouselContent } from "@/components/ui/carousel";



type props = {
  data : [any]
}



const TutorialCard = lazy(() => import('../cards/TutorialCard'));

const TutorialCaroussel: React.FC = ( props : any) => {

  const {data} = props

  return (
    <>
      <h1 className='text-3xl font-light text-black dark:text-gray-100'>Tutorials</h1>
      <Carousel opts={{
          align: "start",
          loop: true,
        }} className="w-full flex flex-col ">

        <CarouselContent className="-ml-1 w-full gap-4 p-3 mr-4">
          {Array.from({ length: 8 })?.map((item: any, index: number) =>
            <Suspense key={index} fallback={<SkeletonCard />}>
              <TutorialCard {...item}/>
            </Suspense>
          )}
        </CarouselContent>

        {/* <CarouselContent className="-ml-1 w-full gap-6"> //TODO: make this dynamic
          {data?.map((item: any, index: number) =>
            <Suspense key={index} fallback={<SkeletonCard />}>
              <TutorialCard {...item}/>
            </Suspense>
          )}
        </CarouselContent> */}

      </Carousel>
    </>
  );
};

export default TutorialCaroussel;
