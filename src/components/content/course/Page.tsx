import Data from '@/data/course.json'
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function CoursePage( ) {
  const { courseId, pageId } = useParams();
  console.log(useParams());

  const course = Data.find((course) => course.content_info.id === courseId);

  const page = course?.pages.find((page) => page.id === pageId);
  if (!course || !page) {
    return (
      <div className="course-container">
        <div className="skeleton-group">
          <Skeleton className="skeleton-large" />
          <Skeleton className="skeleton-medium" />
          <Skeleton className="skeleton-small" />
        </div>
        <Skeleton className="skeleton-button" />
        <Skeleton className="skeleton-button" />
      </div>
    );
  }



  return (
    <div className=" flex flex-col items-center justify-center gap-12 text-white">

      <h1 className='text-4xl p-4  '>{page.title}</h1>
      <div className='flex flex-col gap-4'>
      {
        page.sections.map((section, index) => (
          <div key={index} className='flex flex-col gap-3 p-3 '>
            <h2 className='text-2xl'>{section.title}</h2>
            <p className='text-sm'>{section.description}</p>
            <p className='text-xs'>{section.paragraph}</p>
          </div>
        ))
      }
      </div>

    </div>
  )
}
