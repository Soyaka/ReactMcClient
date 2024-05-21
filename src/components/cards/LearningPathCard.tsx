import Bookmark from "@/components/extra/bookamrk";
import { Duration } from "@/components/extra/smallComps";
import { Level } from "@/components/extra/smallComps";
type pathCardProps = {
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
}: pathCardProps) {
  isFree = false
  return (
    < div className="path-card w-full h-full rounded-lg  text-zinc-600 bg-gray-100 hover:bg-gray-200 cursor-pointer">
      <div className="  flex flex-col gap-4 p-2   m-1 min-w-[25rem]">
        <div className=" path-card-content">
          <div className=" path-card-header flex gap-4 justify-between">
            <div className=" path-card-header-left flex flex-col gap-3">
              <div className=" path-card-category text-black text-xs leading-tight tracking-[0.2em]">
                {category || 'LEARNING PATH'}
              </div>
              <div className=" path-card-author flex items-center text-xs gap-3 text-black">
                <div className=" path-card-author-image flex items-end">
                  <span className=" py-[1.6em] px-[1.33em] min-w-3 bg-sky-500 "></span>
                </div>
                {/* <div className=" path-card-author-name  ">
                  {author || 'Anas Benhalima'}
                </div> */}
              </div>
            </div>
            <div className="path-card-header-right">
              <div className="path-card-bookmark">
                <Bookmark isBookmarked={isBookmarked} />
              </div>
            </div>
          </div>
          <div className="path-card-body flex flex-col gap-3 pb-3">
            <div className="path-card-title w-full p-1 text-sm text-black tracking-tighter">
              {title || 'Flask and SQLite: Consuming API Endpoints with Swagger'}
            </div>
            <p className="path-card-description w-full text-xs multiline-truncate">
              {description ||
                "Configuration drift, the gradual deviation of a device configuration from its intended state, can lead to network issues and security vulnerabilities. This path will walk you through how to build a configuration manager leveraging Cisco DNA Center's SDK to capture regular snapshots of device configurations and comparing them to a baseline."}
            </p>
          </div>
          <div className="path-card-footer flex flex-col">
            <div className="flex flex-raw items-end justify-between">
              <div className="path-card-statistics flex flex-raw items-center gap-1 px-2 ">
                <div className="path-card-duration flex flex-col items-center gap-2">
                  <Duration />
                  <span className="path-card-duration-text text-[0.6em] text-black">
                    {duration || '30m'}
                  </span>
                </div>
                <div className="path-card-level flex flex-col items-center gap-2">
                  <Level />
                  <span className="path-card-level-text text-[0.6em] text-black">
                    {skillLevel || 'Intermediate'}
                  </span>
                </div>
              </div>
                {
                  isFree ? (
                    <div className="path-card-free bg-[#EEB300]/90 px-2 rounded-sm">
                      <span className="path-card-free-text text-[0.8em] font-semibold text-black/60">
                        $ Free
                      </span>
                    </div>
                  ):(
                    <div className="path-card-price bg-sky-600 px-3 py-1  rounded-full text-white">
                      <button className="path-card-price-text text-[0.8em] ">
                        subscribe now
                      </button>
                    </div>
                  )
                }
            </div>

          </div>
        </div>
      </div>
        {
          progress && (
            <div className={`w-full rounded-full bg-gray-300  `}>
            <div className={`bg-[#8FB339] p-1 rounded-full w-0 w-[${progress}%]`}></div>
          </div>
          )
        }
    </div>
  );
}


