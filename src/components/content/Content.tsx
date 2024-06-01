import { Route, Routes } from 'react-router-dom';
import CoursePageContainer from './course/Container';
import TutorialPageContainer from './tutorial/Container';

export default function Content() {
  return (
    <Routes>
      <Route path="course/:courseId" element={<CoursePageContainer />} />
      <Route path="tutorial/:tutorialId" element={<TutorialPageContainer />} />
    </Routes>
  );
}
