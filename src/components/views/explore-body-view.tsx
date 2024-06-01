import React from 'react'
import CourseCaroussel from '../caroussels/CourseCaroussel'
import TutorialCaroussel from '../caroussels/TutorialCaroussel'
import LearningPathCaro from '../caroussels/LearningPathCaro'
import  PodcastsCaro from '../caroussels/podcastsCaro'


export default function ExploreBodyView( props : any) {
    const {courses , tutorials, learningPaths, podcasts} = props
  return (
    <div className='  '>
      <CourseCaroussel courses ={courses} />
      <TutorialCaroussel tutorials={tutorials} />
      <LearningPathCaro learningPaths={learningPaths} />
      <PodcastsCaro  podcasts={podcasts}/>
    </div>
  )
}
