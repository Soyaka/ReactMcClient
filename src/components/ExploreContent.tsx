import ExploreSearch from "./layouts/explore-search"
import ExploreHeader from "./extra/ExploreHeader"
export default function ExploreContent() {
  return (
    <div className="flex flex-col p-4 pt-8 gap-4 2xl:px-28 2xl:pt-12 text-black/80">
        <ExploreHeader />
        <ExploreSearch />
    </div>
  )
}
