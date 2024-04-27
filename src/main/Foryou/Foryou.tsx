import NewsItems from "@/components/NewsItems"
import ForyouContent from "@/components/ForyouContent"
export default function Foryou() {
  return (
    <div className="">
        
        <div className="flex fixed w-full p-6  items-center justify-center"> <NewsItems />{/* Must be her=e the fixed div with 3 divs of cards  */}</div>
        <div className="relative w-full min-w-screen p-6 border bg-white top-[20rem] rounded-t-[2.7em] rounded"> 
            <ForyouContent />
        </div>
    </div>
  )
}
