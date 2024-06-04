import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Data from "@/data/course.json";
import { Course, Page } from "@/types/index";
import renderResource from "./RenderRessource";

export default function ScrollAreaContent() {
  const [data] = React.useState<Course[]>(Data);
  const { courseId, pageId } = useParams<{
    courseId: string;
    pageId: string;
  }>();
  const course = data.find((course) => course.content_info.id === courseId);
  const page = course?.pages.find((page: Page) => page.id === pageId) || null;
  const nextPage = course?.pages[course?.pages.indexOf(page!) + 1];
  const prevPage = course?.pages[course?.pages.indexOf(page!) - 1];

  const [selectedOption, setSelectedOption] = React.useState<string>("");
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState<boolean | null>(
    null
  );
  const [isAnswered, setAnswered] = React.useState<boolean>(false);
  const isLastPage = () => {
    return course?.pages.indexOf(page!) === course?.pages.length! - 1;
  };

  const handleOptionClick = (option: string) => {
    setAnswered(true);
    setSelectedOption(option);
    checkAnswer(option);
  };

  const checkAnswer = (option: string) => {
    if (page?.question) {
      setIsAnswerCorrect(option === page.question.answer);
    }
  };
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    if (nextPage) {
      navigate(`/content/course/${courseId}/page/${nextPage.id}`)
    }
  };

  const navigateToPrevPage = () => {
    if (prevPage) {
      navigate(`/content/course/${courseId}/page/${prevPage.id}`)
    }
  };

  return (
    <ScrollArea className="relative bg-white text-black overflow-y-auto w-3/4 p-4 pb-12 h-[80vh] rounded-md">
      <div className="max-w-4xl mx-auto p-3">
        <h1 className="font-semibold mb-6 text-4xl 2xl:text-5xl pb-10">
          {page?.title}
        </h1>
        {page?.sections.map((section, index: number) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-base mb-4">{section.description}</p>
            <p className="text-base mb-4">{section.paragraph}</p>
            {section.resources?.map((resource, idx: number) => (
              <div key={idx} className="mb-4 relative left-[5vw]">
                <h3 className="text-lg font-medium">{resource.name}</h3>
                {renderResource(resource)}
                <p className="text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Separator />
      <div>
        {page?.question && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Question</h2>
            <p className="text-base mb-4">{page.question.content}</p>
            {page.question.options.map((option: string, index: number) => (
              <button
                key={index}
                className={`mb-2 p-2 border rounded w-full text-left ${
                  selectedOption === option
                    ? "bg-sky-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}

            <div>
              {isAnswered ? (
                isAnswerCorrect ? (
                  <div className="text-green-500">Correct</div>
                ) : (
                  <div className="text-red-500">Incorrect</div>
                )
              ) : (
                <div className="text-gray-500">Not answered</div>
              )}
            </div>
          </div>
        )}
        <Separator />
        <div className="flex flex-row p-2 gap-4 items-center justify-between">
          {isLastPage() ? (
            <>
              <button onClick={navigateToPrevPage}> Prev </button>
              <button> Complete Course </button>
            </>
          ) : (
            <>
              <button onClick={navigateToPrevPage} className="">
                {" "}
                Prev{" "}
              </button>
              <button onClick={navigateToNextPage}> Next </button>
            </>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
