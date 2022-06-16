import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { TeachersItems } from './data';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SingleTeacher from "./pages/SingleTeacher";
import GeneralEnglish from "./pages/GeneralEnglish";
import Corporate from "./pages/Corporate";
import ExamPreparation from "./pages/ExamPreparation";
import SpecialistCourse from "./pages/SpecialistCourse";
import Juniors from "./pages/Juniors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route index path="/GeneralEnglish" element={<GeneralEnglish />} />
          <Route index path="/Corporate" element={<Corporate />} />
          <Route index path="/ExamPreparation" element={<ExamPreparation />} />
          <Route index path="/SpecialistCourse" element={<SpecialistCourse />} />
          <Route index path="/Juniors" element={<Juniors />} />
        </Route>
        <Route path="Teachers"  >
          <Route index element={<Teachers />} />
          <Route path=":teacherId" element={<SingleTeacher item={TeachersItems} />} />
        </Route>
        <Route index path="/About" element={<AboutUs />} />
        <Route index path="/Contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
