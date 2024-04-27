
import RevUp from "./extra/Revups"

import Recommandation from "./extra/Recommandtions"
import PrepNews from "./extra/PrepNews"
export default function NewsItems() {
  return (
    <div className="flex  flex-row gap-4 items-start justify-center ">
        <Recommandation />
        <RevUp />
        <PrepNews />    
    </div>
  )
}
