import Bookmark from "@/components/extra/bookmark";
import Instrum from "../extra/instrum";
import { Duration, Level } from "@/components/extra/smallComps";

type CourseProps = {
  title: string;
  category: string;
  duration: string;
  progress: number;
  isFree: boolean;
  isBookmarked: boolean;
  skillLevel: string;
};

export default function CourseCard({
  title,
  category,
  duration,
  progress,
  isFree,
  isBookmarked,
  skillLevel,
}: CourseProps) {

  return (
    <div className="path-card w-full h-full rounded-lg min-w-[12rem] min-h-[16rem] max-h-[16rem] text-zinc-600 m-1 bg-gray-100 hover:bg-gray-200 cursor-pointer overflow-hidden">
      <div className="flex flex-col p-2 ">
        <div className="path-card-content flex flex-col gap-3">
          <div className=" path-card-header flex justify-between h-[27%] min-h-[27%] max-h-[27%]">
            <div className="path-card-header-left flex flex-col gap-8">
              <div className="path-card-category flex flex-row text-black text-xs leading-tight tracking-[0.2em] relative">
                {!isFree && (
                  <span className="triangle-clip absolute -top-[0.5em] -left-[0.5em] bg-[#fbab2c]/90 font-serif  pl-2 pr-6 pt-1 pb-3 text-lg text-left text-black/80">
                    $
                  </span>
                )}
                <span className={`${!isFree && "ml-5"}`}>{"COURSE"}</span>
              </div>
              <div className="path-card-author-image flex items-end">
                <Instrum />
              </div>
            </div>
            <div className="path-card-header-right">
              <div className="path-card-bookmark">
                <Bookmark isBookmarked={isBookmarked} />
              </div>
            </div>
          </div>
          <div className="path-card-body flex flex-col gap-3 h-[33%] min-h-[33%]  max-h-[33%] pb-3 overflow-hidden">
            <div className="path-card-title w-full p-1  text-black tracking-tighter">
              {title || "Flask and SQLite"}
            </div>
          </div>
          <div className="path-card-footer flex flex-col h-[33%] min-h-[33  max-h-[33%] p-2">
            <div className="flex flex-row items-end justify-between">
              <div className="path-card-statistics flex flex-row items-center gap-1 px-2">
                <div className="path-card-duration flex flex-col items-center gap-2">
                  <Duration />
                  <span className="path-card-duration-text text-[0.6em] text-black">
                    {duration || "30m"}
                  </span>
                </div>
                <div className="path-card-level flex flex-col items-center gap-2">
                  <Level />
                  <span className="path-card-level-text text-[0.6em] text-black">
                    {skillLevel || "Intermediate"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {progress > 0 && (
        <div className="w-full rounded-full bg-gray-300">
          <div
            className="bg-[#8FB339] p-1 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
