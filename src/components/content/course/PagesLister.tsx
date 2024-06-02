// // @ts-nocheck

// //this compenets was needded in previues version : not used


// import {CoursePageLister} from '@/types/index'
// import { Progress } from "@/components/ui/progress"
// import { FaCircle } from "react-icons/fa6";
// import { MdLastPage } from "react-icons/md";


// export default function PagesLister(props : CoursePageLister) {
//     const {pages,handlePageClick , progress} = props
//   return (
//     <div className='relative  flex flex-col gap-6'
//     >
//         <div className='flex flex-col gap-2'>
//             {props.courseName}
//             <Progress value={props.progress}   className='w-[20rem] h-2 border  bg-transparent  '/>
//             <p className='flex justify-end text-xs font-light'>{progress?progress*100: 0}% completed</p>
//         </div>
//         <div className='flex flex-col items-start gap-3'>
//             {
//                 pages.map((page, index) => (
//                     <div key={index} onClick={() => handlePageClick(page.id) } className='flex flex-row gap-1 items-center  justify-center' >
//                         <FaCircle size={12} />
//                         <MdLastPage />
//                         <h3 className=''>{page.title}</h3>
//                     </div>
//                 ))
//             }
//         </div>
//     </div>
//   )
// }


