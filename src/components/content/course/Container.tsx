import { Skeleton } from "@/components/ui/skeleton";
import { useParams, useNavigate } from "react-router-dom";
import Data from "@/data/course.json";

export default function CoursePageContainer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = Data.find((course) => course.content_info.id === courseId);

  const handlePageClick = (page : Page) => {
    navigate(`page/${page.id}`);
    console.log("Page clicked", page);
  };

  const formatDuration = (duration : string) => {
    // Convert duration format if necessary
    // Example: convert '120' to '2 hours'
    return duration; // Update with actual conversion logic if needed
  };

  if (!course) {
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
    <div className="flex flex-row px-[5rem] items-center justify-around gap-10 2xl:gap-32 2xl:px-[10rem] py-[3rem]">
      <div className="flex flex-col gap-8 2xl:gap-12">
        <h1 className="text-4xl 2xl:text-5xl">{course.content_info.title}</h1>
        <div className="relative flex left-2 flex-col gap-4 2xl:gap-6 font-light 2xl:text-lg">
          <p className="tracking-wider">{course.content_info.description}</p>
          <h2>By: {course.content_info.author}</h2>
        </div>
        <div className="relative left-2 flex flex-row gap-4 2xl:gap-6 items-center justify-start">
          <span className="px-3 py-1 rounded-full bg-blue-100/40">
            {course.content_info.skill_level}
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-100/40">
            {course.content_info.technology}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-100/40">
            {course.content_info.language}
          </span>
          <span className="px-3 py-1 rounded-full bg-red-100/40">
            {formatDuration(course.duration)}
          </span>
        </div>
        <div className="relative left-2 flex flex-row gap-4 2xl:gap-6 text-gray-300/80">
          {course.content_info.keywords.map((keyword, index) => (
            <div key={index}>
              #<span>{keyword}</span>
            </div>
          ))}
        </div>
        <div className="relative left-2 flex flex-row gap-4 2xl:gap-6">
          <button className="relative top-6 border border-blue-500 text-white px-4 py-2 tracking-wider rounded-full cursor-pointer">
            {course.content_info.is_free ? "Start Now" : "Enroll Now"}
          </button>
          {!course.content_info.is_trial && (
            <button className="relative top-6 text-sky-500 px-4 py-2 underline tracking-wider cursor-pointer rounded-full">
              Try for free
            </button>
          )}
        </div>
      </div>
      <div className="content-pages flex flex-col gap-8 p-4 2xl:gap-12">
        <h2 className="text-2xl font-semibold">Content Pages</h2>
        <div className="relative left-4 flex flex-col gap-3 2xl:gap-4">
          {course.pages.map((page) => (
            <div
              key={page.id}
              className="text-lg underline cursor-pointer"
              onClick={() => handlePageClick(page)}
            >
              {page.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type Page = {
  id: string;
  title: string;
  sections: {
    title: string;
    description: string;
    resources: {
      id: string;
      name: string;
      description: string;
      url: string;
    }[];
    paragraph: string;
  }[];
  question: {
    content: string;
    options: string[];
    answer: string;
  };
};

// type Course = {
//   content_info: {
//     id: string;
//     title: string;
//     description: string;
//     author: string;
//     skill_level: string;
//     technology: string;
//     language: string;
//     keywords: string[];
//     is_free: boolean;
//     is_trial: boolean;
//   };
//   pages: Page[];
//   duration: string;
// };
