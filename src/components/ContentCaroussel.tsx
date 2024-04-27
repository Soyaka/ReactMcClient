
import { Suspense } from 'react';

import { SkeletonCard } from "@/components/extra/LearningPathSkeleton";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel";

import { lazy } from "react";


export default function CarouselSpacing() {

  const LearningPathCard = lazy(() => 
  import('./LearningPathCard'));

  return (
    <Carousel className="w-full max-h-[40vh]">
      <CarouselContent className="-ml-1 w-full gap-6">
        {Array.from({ length: 8 }).map((_, index) =>
          <Suspense key={index} fallback={<SkeletonCard />}>
            <LearningPathCard />
          </Suspense>
        )}
      </CarouselContent>
    </Carousel>
  );
}