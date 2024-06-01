import { useParams } from 'react-router-dom';
import Data from "@/data/course.json";

export default function CoursePageContainer() {
  const { courseId } = useParams();

  const course = Data.find((course) => course.content_info.id === courseId);

  return (
    <div className="relative flex flex-col bg-cover bg-center text-white"

    >
      
    
    </div>
  );
}
