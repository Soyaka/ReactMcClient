import Bookmark from "@/components/extra/bookamrk";
import { Duration } from "@/components/extra/smallComps";
import { Level } from "@/components/extra/smallComps";
type TutorialCardProps = {
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

export default function TutorialCard({
  title,
  description,
  author,
  category,
  duration,
  date,
  progress,
  isFree,
  isBookmarked,
  skillLevel,
}: TutorialCardProps) {
  progress = 80
  return (
    < div className="tutorial-card w-full h-full rounded-lg  text-zinc-600 bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <div className="  flex flex-col gap-4 p-2   m-1 min-w-[25rem]">
        <div className=" tutorial-card-content">
          <div className=" tutorial-card-header flex gap-4 justify-between">
            <div className=" tutorial-card-header-left flex flex-col gap-3">
              <div className=" tutorial-card-category text-black text-xs leading-tight tracking-[0.2em]">
                {category || 'TUTORIAL'}
              </div>
              <div className=" tutorial-card-author flex items-center text-xs gap-3 text-black">
                <div className=" tutorial-card-author-image flex items-end">
                  <span className=" py-[1.6em] px-[1.33em] min-w-3 bg-blue-800 rounded-b-full"></span>
                  <span className="max-h-1 p-1 rounded-full bg-blue-800"></span>
                </div>
                <div className=" tutorial-card-author-name  ">
                  {author || 'Anas Benhalima'}
                </div>
              </div>
            </div>
            <div className="tutorial-card-header-right">
              <div className="tutorial-card-bookmark">
                <Bookmark isBookmarked={isBookmarked} />
              </div>
            </div>
          </div>
          <div className="tutorial-card-body flex flex-col gap-3 pb-3">
            <div className="tutorial-card-title w-full p-1 text-sm text-black tracking-tighter">
              {title || 'Flask and SQLite: Consuming API Endpoints with Swagger'}
            </div>
            <p className="tutorial-card-description w-full text-xs multiline-truncate">
              {description ||
                "Configuration drift, the gradual deviation of a device configuration from its intended state, can lead to network issues and security vulnerabilities. This tutorial will walk you through how to build a configuration manager leveraging Cisco DNA Center's SDK to capture regular snapshots of device configurations and comparing them to a baseline."}
            </p>
          </div>
          <div className="tutorial-card-footer flex flex-col">
            <div className="flex flex-raw items-end justify-between">
              <div className="tutorial-card-statistics flex flex-raw items-center gap-1 px-2 ">
                <div className="tutorial-card-duration flex flex-col items-center gap-2">
                  <Duration />
                  <span className="tutorial-card-duration-text text-[0.6em] text-black">
                    {duration || '30m'}
                  </span>
                </div>
                <div className="tutorial-card-level flex flex-col items-center gap-2">
                  <Level />
                  <span className="tutorial-card-level-text text-[0.6em] text-black">
                    {skillLevel || 'Intermediate'}
                  </span>
                </div>
              </div>
              <div className="tutorial-card-date">
                <span className="text-[0.7em]  text-normal "> Created {date || '24th June 2022'}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={`w-full rounded-full bg-gray-300  ` }>
                <div className={`bg-[#8FB339] p-1 rounded-full w-[${progress}%]`}></div>
      </div>
    </div>
  );
}



// TODO: the data must be formatted in a better way before using recieving it
// TODO: must set the fixed max and min width and height for the card
// TODO: make it responsive
// TODO: create dyanmic logic for the progress bar and the bookmark after setting up the state manager : it must be in the $general state manager