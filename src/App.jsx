import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/contact"
import OurSpecialities from "./pages/ourSpecialities"
import Offering from "./pages/offering"
import Camp from "./pages/camp"
import BlogDetails from "./pages/blogDetails"
import Careers from "./pages/Careers"
import CareersDetails from "./pages/careersDetails"
import Courses from "./pages/courses"
import AddBlog from "./pages/add-blog"
import AddProject from "./pages/add-project"
import About from "./pages/about"
import AddCareers from "./pages/AddCareers"
import AdminHome from "./pages/admin-home"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/admin/home/add/items" element={<AdminHome/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/specialities" element={<OurSpecialities/>}/>
    <Route path="/offerings-solutions" element={<Offering/>}/>
    <Route path="/camp-blogs" element={<Camp/>}/>
    <Route path="/camp-blogs/blog/add" element={<AddBlog/>}/>
    <Route path="/specialities/project/add" element={<AddProject/>}/>
    <Route path="/careers/career/add" element={<AddCareers/>}/>
    <Route path="/blog/:title" element={<BlogDetails/>}/>
    <Route path="/careers" element={<Careers/>}/>
    <Route path="/careers-details/:id" element={<CareersDetails/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
    </>
  )
}

export default App
