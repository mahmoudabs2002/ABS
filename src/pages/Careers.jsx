import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "primereact/skeleton";

import { motion } from "framer-motion";
import Swal from "sweetalert2";

import {
  Search,
  ArrowRight,
  User,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react";

import { jobs } from "../assets/data";

import { useLocation, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Helmet } from "react-helmet-async";

export default function AddCareers() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "jobs"); // Get collection reference
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

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
       <Helmet>
                    <title>ABS.ai | Careers</title>
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
      {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    /> */}
      <Navbar />
      <div className="bg-[url(/contact_us_background_image.png)] pb-10  bg-top">
        <h3
          className={` relative pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
        >
          Careers
        </h3>
        <div className=" flex relative mb-12 ">
          <div className=" flex items-center justify-center mt-10  mx-auto ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className=" lg:w-[930px] px-8 rounded-xl ml-[-10px] h-[40px]"
              placeholder="Search here"
            />
            <Search className=" text-primary translate-x-[-30px]" />
          </div>
        </div>
        <div className="lg:mx-40 mx-5 ">
          {filteredData.length === 0 ? (
            <div>
              {loading === true ? (
                <div>
                  <div>
                    <Skeleton
                      className=" w-full min-h-[150px] hidden lg:flex bg-secondary"
                    ></Skeleton>
                  </div>
                </div>
              ) : (
                <h3 className=" my-8 relative text-center text-white text-xl">
                  No career is available
                </h3>
              )}
              {/* <h3 className=" text-white text-2xl mb-4 relative text-center ">another careers</h3> */}
            </div>
          ) : null}
          {filteredData === 0 ? (
            jobs.map((e) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  key={e}
                  onClick={() => navigate(`/careers-details/${e.id}`)}
                  className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary"
                >
                  <div className=" relative">
                    <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                    <div className=" flex flex-col lg:flex-row  gap-4 text-white/50 ">
                      {/* <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div> */}
                      <div className=" flex gap-2">
                        <span>
                          <User />
                        </span>{" "}
                        {e.position} position
                      </div>
                      <div className=" flex gap-2">
                        <span>
                          <BriefcaseBusiness />
                        </span>{" "}
                        {e.exp}
                      </div>
                      <div className=" flex gap-2">
                        <span>
                          <Clock3 />
                        </span>{" "}
                        {e.time}
                      </div>
                      <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                        view
                        <span>
                          <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            filteredData.map((e) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  key={e}
                  onClick={() => navigate(`/careers-details/${e.id}`)}
                  className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary"
                >
                  <div className=" relative">
                    <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                    <div className="  flex flex-col lg:flex-row gap-4 text-white/50 ">
                      {/* <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div> */}
                      <div className=" flex gap-2">
                        <span>
                          <User />
                        </span>{" "}
                        {e.position} positions
                      </div>
                      <div className=" flex gap-2">
                        <span>
                          <BriefcaseBusiness />
                        </span>{" "}
                        {e.exp} year
                      </div>
                      <div className=" flex gap-2">
                        <span>
                          <Clock3 />
                        </span>{" "}
                        {e.time}
                      </div>
                      <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                        view
                        <span>
                          <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
