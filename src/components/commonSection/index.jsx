import { useNavigate } from "react-router-dom"

export default function Commen() {
  const navigate = useNavigate()
  return (
    <div className="bg-[url('/last_section_background_image.png')] bg-center bg-cover bg-no-repeat">
        <div className=" text-center text-white py-20">
            <h3 className=" text-primary text-[32px] font-bold">Have a project in mind?</h3>
            <p className=" mb-20">We’ve got you covered</p>
            <button onClick={()=> navigate("/contact")} className=" bg-primary text-white py-2 px-20 rounded-3xl">Tell us your need</button>
        </div>
    </div>
  )
}
