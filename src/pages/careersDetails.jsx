import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Search, ListFilter ,ArrowRight , User ,Clock3 , BriefcaseBusiness } from "lucide-react";

import { jobs } from "../assets/data";

export default function CareersDetails() {
    const { id } = useParams();
    const item = jobs.find(item => item.id === Number(id));
  return (
    <div>
        <Navbar/>
        <div >
                <div className="bg-secondary pb-4 pt-[65px]">
                    <div className=" pl-20 pt-10">
                    <h3 className=" font-bold text-white text-3xl">{item.title}</h3>
                    <div className=" flex flex-col lg:flex-row  mt-4 gap-4 text-white/50 ">
                    <div className=" flex gap-2"><span><User/></span> {item.positions}</div>
                    <div className=" flex gap-2"><span><BriefcaseBusiness/></span> {item.exp}</div>
                    <div className=" flex gap-2"><span><Clock3/></span> {item.time}</div>
                  </div>
                    </div>
                </div>
        </div>
        <Footer/>
    </div>
  )
}
