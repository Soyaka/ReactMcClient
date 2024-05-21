
import { Suspense } from 'react';

import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";

import React ,{ lazy } from "react";


export default function CarouselSpacingML() {


  const LearningPathCard = lazy(() => 
  import('../cards/LearningPathCard'));


  return (
    <Carousel opts={{
        align: "start",
        loop: true,
      }} className="w-full max-h-[40vh] ">
      <CarouselContent className="-ml-1 w-full gap-6 p-3 mr-4">
        {Array.from({ length: 8 }).map((item : any, index) =>
          <Suspense key={index} fallback={<SkeletonCard />}>
            <LearningPathCard key={index}  {...item} />
          </Suspense>
        )}
      </CarouselContent>
    </Carousel>
  );
}