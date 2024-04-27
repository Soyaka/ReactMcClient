import { Route, Routes } from 'react-router-dom';
import Foryou from '@/main/Foryou/Foryou';
import Explore from '@/main/explore/explore';
import NavBar from "@/components/MainNavBar"
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/for-you" element={<Foryou />} />
        <Route path="/explore" element={<Explore />} />
        {/* <Route path="/certifications" element={<div />} />
        <Route path="/community" element={<div />} />
        <Route path="/view-plans" element={<div />} /> */}
      </Routes>

    </div>
  )
}
