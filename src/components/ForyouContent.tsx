
import CourseCaroussel from './caroussels/CourseCaroussel'
import CarouselSpacingML from './caroussels/MlContentCaroussel'
import LearnigPathCaro from './caroussels/LearningPathCaro'
import BookmarksToggles from './extra/BookmarksBtns'
import TutorialCaroussel from './caroussels/TutorialCaroussel'
import Welcome from './extra/WelcomeSect'
export default function ForyouContent() {
  return (
    <div className='flex flex-col gap-16'>
      <div>
        <Welcome /> 
        <BookmarksToggles />
      </div>
      <CarouselSpacingML />
      <LearnigPathCaro />
      <TutorialCaroussel />
      <CourseCaroussel />
    </div>
  )
}
