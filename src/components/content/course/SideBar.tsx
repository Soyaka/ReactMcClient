import { useParams, useNavigate } from "react-router-dom";
import { Page, Course } from "@/types/index"; 

interface CourseSidebarProps {
  course: Course;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  const { courseId, pageId } = useParams<{ courseId: string; pageId: string }>();
  const navigate = useNavigate();

  const handlePageClick = (page: Page) => {
    navigate(`/content/course/${courseId}/page/${page.id}`);
  };

  const getPageIndex = () => {
    const page = course?.pages.find((page: Page) => page.id === pageId);
    return course?.pages.indexOf(page || course.pages[0]) + 1;
  };

  const isLastPage = () => {
    return getPageIndex() === course?.pages.length;
  };

  const isVisited = (pageIndex: number) => {
    return pageIndex < getPageIndex();
  };

  const completionPercentage = ((getPageIndex() / course?.pages.length) * 100).toFixed(0);

  return (
    <div className="w-1/4 2xl:w-1/6 text-white right-[3%] h-full">
      <h2 className="mb-4 ">{course?.content_info.title}</h2>
      <div className="relative w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-4">
        <div className="absolute left-0 top-0 h-full bg-[#b3e460]" style={{ width: `${completionPercentage}%` }}></div>
      </div>
      <div className="text-right text-xs mb-2">{completionPercentage}% complete</div>
      {course?.pages.map((page: Page, index: number) => (
        <div
          key={page.id}
          className={`cursor-pointer p-2 rounded ${page.id === pageId ? 'bg-black/80' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          <div className="flex items-center">
            <div className={`h-3 w-3 rounded-full mr-2 ${isVisited(index) ? 'bg-[#b3e460]' : 'bg-gray-500'}`}></div>
            <h3>{page.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
