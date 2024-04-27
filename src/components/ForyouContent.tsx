import React from 'react'
import CarouselSpacing from './ContentCaroussel'
import BookmarksToggles from './extra/BookmarksBtns'
import Welcome from './extra/WelcomeSect'
export default function ForyouContent() {
  return (
    <div>
        <div><Welcome/> </div>
        <div><BookmarksToggles/></div>
        <div><CarouselSpacing/></div>
    </div>
  )
}
