import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/contact"
import OurSpecialities from "./pages/ourSpecialities"
import Offering from "./pages/offering"
import Camp from "./pages/camp"
import BlogDetails from "./pages/blogDetails"
import Careers from "./pages/Careers"
import CareersDetails from "./pages/careersDetails"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/specialities" element={<OurSpecialities/>}/>
    <Route path="/offerings-solutions" element={<Offering/>}/>
    <Route path="/camp-blogs" element={<Camp/>}/>
    <Route path="/blog/:title" element={<BlogDetails/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/careers-details/:id" element={<CareersDetails/>}/>
    <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
    </>
  )
}

export default App
