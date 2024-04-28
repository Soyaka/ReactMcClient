import React from 'react'
import CarouselSpacingML from './caroussels/MlContentCaroussel'
import BookmarksToggles from './extra/BookmarksBtns'
import TutorialCaroussel from './caroussels/TutorialCaroussel'
import Welcome from './extra/WelcomeSect'
export default function ForyouContent() {
  return (
    <div className='flex flex-col gap-16'>
        <div><Welcome/> </div>
        <div><BookmarksToggles/></div>
        <div><CarouselSpacingML/></div>
        <div><TutorialCaroussel/></div>
    </div>
  )
}
