import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from 'primereact/sidebar';
import Footer from "../components/Footer";
import {services} from "../assets/data"
import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore";
export default function OurSpecialities() {
    const [item , setItem] = useState('')
    const [project , setProject] = useState()
    const [visibleBottom, setVisibleBottom] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "projects"); // Get collection reference
        const querySnapshot = await getDocs(usersCollectionRef); // Fetch documents

        const finelData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(finelData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

    if (loading === true ) {
      return <img src="/collapsed_app_bar_image.png" className=" block mx-auto translate-y-72 w-[100px]"/>
    }
  return (
    <div>
      <Navbar />
      <div className=" relative  ">
        <div className=" relative lg:h-[95vh] bg-[url('/our_specialties_header_background_image.png')]">
            <div className=" relative  pt-20 ">
            <h2 className=" text-white text-center font-bold text-[40px] ">
            Our Specialities
          </h2>
          <h3 className=" text-center text-white font-bold text-[18px] mb-4">
          We can craft the project you need. explore our services!
          </h3>
            </div>
          <div className=" relative overflow-hidden" >
            <div className="flex overflow-hidden justify-center items-center flex-col pb-4 lg:pb-0 lg:flex-row relative  lg:translate-x-44 lg:w-[1000px]">
                {
                    services.map(e => {
                        return (
                            <div key={e} className={`overflow-hidden relative duration-[2s] ${item === e.title ? "lg:w-[800px] w-[300px] h-[250px] lg:h-[350px]":"bg-secondary w-[300px] lg:w-[400px] h-[60px] lg:h-[350px]"} w-[300px] lg:w-[400px] border `} onMouseEnter={() => setItem(e.title)}>
                            <h3 className={`${item === e.title ? " text-primary  text-center translate-y-28 lg:translate-y-40 translate-x-20 lg:translate-x-9 lg:rotate-0 font-bold text-[16px]":" text-[16px] font-semibold text-white lg:rotate-[-90deg] translate-x-[100px] lg:translate-x-[140px] w-[160px]"} leading-8 z-10 relative   w-[160px] h-full duration-[2s] `}>{e.title}</h3>
                            {
                                item === e.title ? <img className={`${item === e.title ? "w-full h-full translate-y-[-250px] lg:translate-y-[-100%]":" translate-y-[-250px] lg:translate-y-0 max-w-0 max-h-0"} relative translate-y-[-250px] lg:translate-y-0  lg:z-[-1] duration-[3s] `} src={e.image} alt="" />: null
                            }
                        </div>
                        )
                    })
                }
            </div>
          </div>
        </div>
          <div className="bg-secondary py-10">
          <div className=" relative ">
            <h2 className=" text-primary text-center font-bold text-[40px] ">
            Our UI/UX Design Projects
          </h2>
          <h3 className=" text-center text-white font-bold text-[12px] px-10 lg:px-40 mb-4">
          Our UI/UX design services go beyond aesthetics; they’re strategic tools for business growth. We analyze your industry, audience, and brand to craft digital experiences that captivate and convert. Each pixel reflects our attention to detail, ensuring optimal user flow, intuitive navigation, and seamless interactions. By blending art and science, we create stunning and functional interfaces. Our designs are search engine optimized, effectively reaching your target audience. Focused on modern trends and user experience, we deliver visually appealing designs that drive real results.
          </h3>
            </div>
        <div className=" flex justify-center mx-10 lg:mx-40  my-20 lg:gap-[65px] gap-6 flex-wrap">
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Intensive Prior Research</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Proficiency in Web Scrapping Tools</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Data Cleaning</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Data Analysis and Documentation</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Database Creation and Publishing</h3>
          </div>
        </div>
            <div className=" flex flex-wrap lg:mx-40 mx-10 gap-2">
                {
                    data.map(e => {
                        return (
                            <div key={e} onClick={()=> {setProject(e) , setVisibleBottom(true)}} className="">
                                <img src={e.image} alt="" className="w-[330px]  rounded-t-[8px]" />
                                <div className="bg-[#1B2125] px-4 py-2  rounded-b-[8px]">
                                    <p className=" text-white font-bold">{e.title}</p>
                                    <p className=" text-[#F4F4F4]/50 font-light text-[14px]">{e.dec}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <Sidebar visible={visibleBottom} className="h-screen overflow-hidden bg-secondary" position="bottom" onHide={() => setVisibleBottom(false)}>
                <div className=" overflow-hidden">
                    <div>
                        <h3 className=" text-white text-center text-xl mt-10">{project?.title}</h3>
                        <p className=" text-center text-white/50 mt-5 ">{project?.fullDecs}</p>
                        <div className=" flex flex-col-reverse lg:flex-row mt-8 mx-9">
                            <div className=" flex max-h-fit h-fit">
                               <div className=" min-w-1 mr-4 bg-white">
                               </div>
                               <div>
                               <h3 className=" text-white font-semibold text-xl ">the Challenge:</h3>
                                <p className="text-white/50 font-light lg:mr-36">{project?.Challenge}</p>
                                <h3 className=" text-white font-semibold text-xl mt-4 ">The Solution:</h3>
                                <p className="text-white/50 font-light lg:mr-36">{project?.Solution}</p>
                                <p className="text-white/50 font-light lg:mr-36 mt-4">{project?.text}</p>
                               </div>
                            </div>
                           <div className=" min-w-[400px] lg:mb-0 mb-4">
                           <img className=" border border-[#ddd]/50 lg:w-full w-[300px] ml-[-5px] mx-auto lg:mx-0 rounded-[8px]" src={project?.image} alt="" />
                           <button className=" bg-primary py-3 rounded-[8px] w-[300px] text-white mt-4 lg:w-full">Watch the full Case Study</button>
                           </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
            </div>
          </div>
      </div>
      <Footer/>
    </div>
  );
}
