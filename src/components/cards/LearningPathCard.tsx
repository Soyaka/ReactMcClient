import Bookmark from "@/components/extra/bookmark";
import Instrum from "../extra/instrum";
import { Duration, Level } from "@/components/extra/smallComps";

type PathCardProps = {
  id?: string;
  title: string;
  description: string;
  author: string;
  category: string;
  duration: string;
  date: string;
  progress: number;
  isFree: boolean;
  isBookmarked: boolean;
  skillLevel: string;
};

export default function LearningPathCard({
  id,
  title,
  description,
  category,
  duration,
  progress,
  isFree,
  isBookmarked,
  skillLevel,
}: PathCardProps) {





  return (
    <div onClick={()=> handlePathCardClick(id || "")}
      className="path-card w-full h-full rounded-lg min-w-[25rem] max-w-[25rem] min-h-[16rem] max-h-[16rem] text-zinc-600 m-1 bg-gray-100 hover:bg-gray-200 cursor-pointer overflow-hidden flex flex-col">
      <div
        className="flex flex-col flex-grow p-2">
        <div
          className="path-card-content flex flex-col flex-grow">
          <div
            className="path-card-header flex justify-between h-[27%]">
            <div
              className="path-card-header-left flex flex-col gap-4">
              <div
                className="path-card-category flex flex-row text-black text-xs leading-tight tracking-[0.2em] relative">
                {!isFree && (
                  <span
                    className="triangle-clip absolute -top-[0.5em] -left-[0.5em] bg-[#fbab2c]/90 font-serif pl-2 pr-6 pt-1 pb-3 text-lg text-left text-black/80">
                    $
                  </span>
                )}
                <span
                  className={`${!isFree && "ml-5"}`}>{category || "LEARNING PATH"}</span>
              </div>
              <div
                className="path-card-author-image flex items-end">
                <Instrum />
              </div>
            </div>
            <div
              className="path-card-header-right">
              <div
                className="path-card-bookmark">
                <Bookmark
                  isBookmarked={isBookmarked} />
              </div>
            </div>
          </div>
          <div
            className="path-card-body flex flex-col min-h-[33%] gap-3 pb-3">
            <div
              className="path-card-title w-full p-1 text-sm text-black tracking-tighter">
              {title || "Flask and SQLite: Consuming API Endpoints with Swagger"}
            </div>
            <p
              className="path-card-description w-full text-xs multiline-truncate overflow-clip">
              {
                description ||
                "Configuration drift, the gradual deviation of a device configuration from its intended state, can lead to network issues and security vulnerabilities. This path will walk you through how to build a configuration manager leveraging Cisco DNA Center's SDK to capture regular snapshots of device configurations and comparing them to a baseline."}
            </p>
          </div>
          <div
            className="path-card-footer flex flex-col h-[33%] mt-auto">
            <div
              className="flex flex-row items-end justify-between">
              <div
                className="path-card-statistics flex flex-row items-center gap-1 px-2">
                <div
                  className="path-card-duration flex flex-col items-center gap-2">
                  <Duration />
                  <span
                    className="path-card-duration-text text-[0.6em] text-black">
                    {duration || "30m"}
                  </span>
                </div>
                <div
                  className="path-card-level flex flex-col items-center gap-2">
                  <Level />
                  <span
                    className="path-card-level-text text-[0.6em] text-black">
                    {skillLevel || "Intermediate"}
                  </span>
                </div>
              </div>
              {!isFree ? (
                <div
                  className="path-card-price bg-sky-600 px-3 py-1 rounded-full text-white">
                  <button
                    className="path-card-price-text text-[0.8em]">
                    Subscribe Now
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {progress > 0 && (
        <div
          className="w-full mt-auto">
          <div
            className="relative bottom-0 left-0 right-0 w-full rounded-full bg-gray-300">
            <div
              className="bg-[#8FB339] p-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}




const pathUrlBuilder = (path_id : string) =>{
  return `content/path/${path_id}`
}

const NavigateToPath = (url : string) => {
  window.location.href = pathUrlBuilder(url)
}

const handlePathCardClick = (id: string) => {
 id && NavigateToPath(pathUrlBuilder(id))
}


// TODO: make a dynamic handler on click :
                    //check if the path is free or not and handle accordingly
                    //navigate to the path page
                    //add the associated to the interested tags and keywords
                    //check if the path is bookmarked or not and handle accordingly
                    //add a state manager to check if the path is bookmarked or not