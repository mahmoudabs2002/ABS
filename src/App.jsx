import { Navigate, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/main"
import Home from "./pages/home"
import Contact from "./pages/contact"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Route>
    <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
    </>
  )
}

export default App
