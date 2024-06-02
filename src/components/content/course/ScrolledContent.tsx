
// @ts-nocheck

//this compenets was needded in previues version : not used
import * as React from "react";
import { useParams } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Data from "@/data/course.json";


export default function ScrollAreaContent() {
    const [data] = React.useState<Course[]>(Data);
    const { courseId, pageId } = useParams<{ courseId: string; pageId: string }>();
    const course = data.find((course) => course.content_info.id === courseId);
    const page = course?.pages.find((page) => page.id === pageId);
    const nextPage = course?.pages[course?.pages.indexOf(page!) + 1];
    const prevPage = course?.pages[course?.pages.indexOf(page!) - 1];
  
    const [selectedOption, setSelectedOption] = React.useState<string>("");
    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState<boolean | null>(null);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      checkAnswer(option);
    };
  
    const checkAnswer = (option: string) => {
      if (page?.question) {
        setIsAnswerCorrect(option === page.question.answer);
      }
    };
  
    const navigateToNextPage = () => {
      if (nextPage) {
        window.location.href = `/content/course/${courseId}/page/${nextPage.id}`;
      }
    };
  
    const navigateToPrevPage = () => {
      if (prevPage) {
        window.location.href = `/content/course/${courseId}/page/${prevPage.id}`;
      }
    };
  
    return (
      <ScrollArea className="relative bg-white text-black overflow-y-auto w-3/4 p-4 pb-12 h-[80vh] rounded-md">
        <div className="max-w-4xl mx-auto p-3">
          <h1 className="font-semibold mb-6 text-4xl 2xl:text-5xl pb-10">{page?.title}</h1>
          {page?.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-base mb-4">{section.description}</p>
              <p className="text-base mb-4">{section.paragraph}</p>
              {section.resources?.map((resource, idx) => (
                <div key={idx} className="mb-4 relative left-[5vw]">
                  <h3 className="text-lg font-medium">{resource.name}</h3>
                  {renderResource(resource)}
                  <p className="text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          {page?.question && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Question</h2>
              <p className="text-base mb-4">{page.question.content}</p>
              {page.question.options.map((option, index) => (
                <button
                  key={index}
                  className={`mb-2 p-2 border rounded w-full text-left ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
              {isAnswerCorrect !== null && (
                <p className={`mt-4 ${isAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
                  {isAnswerCorrect ? 'Correct!' : 'Incorrect, try again.'}
                </p>
              )}
            </div>
          )}
        </div>
        <div>
          <Separator />
          <div className="flex justify-between p-4">
            {prevPage && <button className="p-2 underline tracking-widest" onClick={navigateToPrevPage}>Prev</button>}
            {nextPage && <button className="p-2 underline tracking-widest" onClick={navigateToNextPage}>Next</button>}
          </div>
        </div>
      </ScrollArea>
    );
  }
  
function renderResource(resource: any) {
  switch (resource.type) {
    case "video":
      return (
        <video
          src={resource.url}
          controls
          className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
        />
      );
    // TODO: make the logic to fetch the video from the server
    case "image":
      return (
        <img
          src={resource.url}
          alt={resource.name}
          className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
        />
      );
    case "pdf":
      return (
        <embed
          src={resource.url}
          type="application/pdf"
          className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
        />
      );
    case "code":
      return (
        <embed
          src={resource.url}
          type="application/pdf"
          className="  w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]  "
        />
      );
    default:
      return null;
  }
}
