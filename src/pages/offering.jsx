import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Sidebar } from 'primereact/sidebar';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Helmet } from "react-helmet-async";

export default function Offering() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [project , setProject] = useState()
  const [visibleBottom, setVisibleBottom] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "systems"); // Get collection reference
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

  return (
    <div>
            <Helmet>
              <title>ABS.ai | Offerings-Solutions</title>
              <meta
                name="description"
                content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
              />
              <meta
                name="keywords"
                content="abs , ABS ,absai,ABS.ai ,abs.ai , web , app ,Software development company , Custom software solutions , Web development services , Mobile app development , UI/UX design services"
              />
              <meta property="og:title" content="ABS.ai" />
              <meta
                property="og:description"
                content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
              />
              <meta property="og:type" content="website" />
            </Helmet>
      <Navbar />
      <div className="bg-[url(/contact_us_background_image.png)] pb-10  bg-top">
        <h3
          className={` pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
        >
          Offerings <span className=" text-primary">Solutions</span> <br />
        </h3>
        <div className=" lg:mx-40 mx-10 mt-5">
          {
            data.map((e,index)=> {
              return (
                <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`items-center mb-14 flex flex-col gap-10 ${index % 2 === 0  ? " lg:flex-row  ":"lg:flex-row-reverse" }`}
                key={e.id}
              >
                <img src={e.image} alt="" className=" rounded-xl w-[500px]" />
                <div>
                  <h3 className=" text-primary text-[24px] font-semibold">{e.title}</h3>
                  <p className=" text-white">
                  {
                    e.dec
                  }
                  </p>
                  <button onClick={()=> {setProject(e) , setVisibleBottom(true)}} className=" bg-primary text-white block mx-auto mt-4 px-16 py-2 rounded-3xl">
                    Know more
                  </button>
                </div>
              </motion.div>
              )
            })
          }
        </div>
        <Sidebar visible={visibleBottom} className="h-screen overflow-hidden bg-secondary" position="bottom" onHide={() => setVisibleBottom(false)}>
                <div className=" overflow-hidden">
                    <div>
                        <h3 className=" text-white text-center text-xl mt-10">{project?.title}</h3>
                        <p className=" text-center text-white/50 mt-5 ">{project?.dec}</p>
                        <div className=" flex justify-between  flex-col-reverse lg:flex-row mt-8 mx-9">
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
      <Footer />
    </div>
  );
}
