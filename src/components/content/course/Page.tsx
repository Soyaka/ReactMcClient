import Data from "@/data/course.json";
import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import ScrollAreaContent from "./ScrolledContent";
import CourseSidebar from "./SideBar";

export default function CoursePage() {
  const { courseId, pageId } = useParams();
  console.log(useParams());
  const navigate = useNavigate();


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
    <div className="fixed flex  flex-row justify-center gap-6   w-screen text-white px-12 ">
      <ScrollAreaContent />
      <CourseSidebar course={course} />
    </div>
  );
}
