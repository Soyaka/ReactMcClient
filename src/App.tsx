import { Route, Routes } from 'react-router-dom';
import Foryou from '@/main/Foryou/Foryou';
import Explore from '@/main/explore/explore';
import NavBar from "@/components/MainNavBar";
import Content from '@/components/content/Content';
import CoursePageContainer from '@/components/content/course/Container';
import CoursePage from '@/components/content/course/Page';
import TutorialPageContainer from '@/components/content/tutorial/Container';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/for-you" element={<Foryou />} />
        <Route path="/explore/*" element={<Explore />} />
        <Route path="/content/*" element={<Content />}>
          <Route path="course/:courseId" element={<CoursePageContainer />} />
          <Route path="course/:courseId/page/:pageId" element={<CoursePage />} />
          <Route path="tutorial/:tutorialId" element={<TutorialPageContainer />} />
        </Route>
      </Routes>
    </div>
  );
}
