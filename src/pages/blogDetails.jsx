import { useParams } from "react-router-dom";
import {blogs} from "../assets/data"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function BlogDetails() {
    const { title } = useParams();
    const getItemByTitle = (title) => {
        return blogs.find(item => item.title === title);
      };
      const item = getItemByTitle(title);
  return (
    <div>
        <Navbar/>
        <div className="">
             <div className="bg-secondary justify-between flex pt-[65px]">
                <div className=" pl-20 pt-10 w-[550px]">
                    <h3 className=" font-bold text-white text-3xl">{item.title}</h3>
                    <p className=" text-white/80 mt-8">{item.dec}</p>
                    <div className=" flex gap-4 mt-8">
                        {
                            item.tags.map(e => {
                                return (
                                    <div className=" flex" key={e}>
                                    <div className=" text-sm border border-primary px-4 py-2 rounded-2xl text-white">
                                      {e}
                                    </div>
                                  </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img className=" w-[600px]" src={item.image} alt="" />
             </div>
             <div className=" bg-secondary/95 p-40">
                <div className=" border border-white/40 px-5">
                        <div className=" flex justify-between"> 
                            <span className=" text-white/40">{item.title}</span>
                            <span className=" text-white/40">{item.date}</span>
                        </div>
                        <p className=" text-center text-white my-4 ">{item.fullDec}</p>
                        <h3 className=" text-white/40 text-center">Written By :{item.Written}</h3>
                </div>
             </div>
        </div>
        <Footer/>
    </div>
  )
}
