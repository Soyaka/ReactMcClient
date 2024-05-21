import Bookamrk from "@/components/extra/bookamrk"
import { Duration } from "@/components/extra/smallComps"


type TutorialCardProps = {
  title: string
  description: string
  author: string
  category: string
  duration: string
  date: string
  progress: number
  is_free: boolean
  is_bookmarked: boolean
  skill_level: string
}





export default function TutorialCard(props: TutorialCardProps) {
  const { title, description, author, category, duration, date, progress, is_free, is_bookmarked, skill_level } = props

  return (
    <div className=" border tutorial-card  flex flex-col gap-4 w-full h-full p-3 rounded-lg m-1 min-w-[25rem]  text-zinc-600 bg-gray-100  hover:bg-gray-200 cursor-pointer  "   >
      <div className=" border tutorial-card-content ">
        <div className="border tutorial-card-header-2 flex flex-raw gap-4 justify-between ">
          <div className=" border tutorial-card-header-left flex flex-col gap-3">

            <div className=" border tutorial-card-category text-black text-xs leading-tight   tracking-[0.2em]">
              {category ? category : 'TUTORIAL'}
            </div>

            <div className=" border tutorial-card-author flex flex-row  items-center justify-center  text-xs text-black">
              <div className=" border tutorial-card-author-image h-full w-full  flex items-end ">
                <span className=" border  py-[1.6em] px-[1.33em] min-w-3   bg-blue-800 rounded-b-full "></span>
                <span className=" max-h-1 p-1 rounded-full bg-blue-800"></span>
              </div>
              <div className=" border tutorial-card-author-name ">{author ? author : 'Anas Benhalima'}</div>
            </div>
          </div>
          <div className="tutorial-card-header-right ">
            <div className="tutorial-card-bookmark">
              <Bookamrk isBookmarked={is_bookmarked} />
            </div>
          </div>
        </div>
        <div className="tutorial-card-body flex  w-full flex-col gap-3 pb-3   ">
          <div className="tutorial-card-title w-full p-1 text-sm  text-black  tracking-tighter ">
            {title ? title : 'Flask and SQLite: Consuming API Endpoints with Swagger '}
          </div>
          <p className="tutorial-card-description  w-full text-xs multiline-truncate ">
            {description ?
              description :
              "Configuration drift, the gradual deviation of a device configuration from its intended state, can lead to network issues and security vulnerabilities. This tutorial will walk you through how to build a configuration manager leveraging Cisco DNA Center's SDK to capture regular snapshots of device configurations and comparing them to a baseline"}
          </p>
        </div>



        <div className="tutorial-card-footer flex flex-col  ">

          <div className="flex flex-raw">
            <div className="tutorial-card-statistics flex flex-raw items-center justify-center ">
              <div className="tutorial-card-duration  flex flex-col items-center justify-center gap-2">
                <Duration />
                <span className="tutorial-card-duration-text text-[0.6em] text-black ">{duration ? duration : '30m'}</span>
              </div>
            </div>
            <div className="tutorial-card-date "></div>
          </div>
          <div className="tutorial-card-progress "></div>
        </div>
      </div>
    </div>
  )
}

