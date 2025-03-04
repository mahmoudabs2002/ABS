import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.js";
import { getCountFromServer } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";
import { IoMdArrowForward } from "react-icons/io";
export default function OurProjects() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sideBar, setSideBar] = useState("UI/UX Desgin");
  const [count , setCount] = useState()
 
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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

  const filterDataByCategory = (data, sideBar) => {
    if (!sideBar) return data; // If no category is selected, return all data
    return data.filter(item => item.Category.name === sideBar);
  };

  useEffect(() => {
    const filtered = filterDataByCategory(data, sideBar);
    setFilteredData(filtered);
  }, [data, sideBar]);

  
  const getDocumentCount = async () => {
    const collectionRef = collection(db, "projects");
    const snapshot = await getCountFromServer(collectionRef);
    setCount(snapshot.data().count)
  };
  
  getDocumentCount();
  
  return (
    <div className=" py-20 lg:px-20 px-5 relative bg-[url('/our_projects_background_image.png')] bg-center bg-cover bg-no-repeat">
      <div className="">
        <h3 className=" text-center font-bold text-[32px] text-primary ">
          Our Projects
        </h3>
        <div className=" flex justify-between relative z-50 overflow-hidden ">
          <div className=" mt-4  border lg:w-[300px] w-[150] max-h-[550px] py-8 text-white rounded-[50px]">
            <p className=" text-center text-sm text-slate-300/50 mb-3">
              Starting 2023
            </p>
            <div className=" flex items-center justify-center mb-[-20px]">
              <p className=" top-0 font-bold text-[24px] left-12">{count}</p>
              <img
                src="/our_projects_tab_bar_image.png"
                className=" max-w-12 max-h-12 mb-8"
                alt=""
              />
            </div>
            <ul className=" text-center relative ">
              <li
                className={` absolute w-[98%]  bg-primary rounded-r-3xl py-5 duration-700 ${
                  sideBar === "UI/UX Desgin"
                    ? "-top-2"
                    : sideBar === "App Development"
                    ? "lg:top-11 top-8"
                    : sideBar === "Web Development"
                    ? "lg:top-24 top-20"
                    : sideBar === "Computer Vision"
                    ? "top-[120px] lg:top-[150px]"
                    : sideBar === "NLP Models"
                    ? "top-[165px] lg:top-[200px]"
                    : sideBar === "Chatbots"
                    ? "top-[210px] lg:top-[250px]"
                    : sideBar === "Dataset Collection"
                    ? "top-[252px] lg:top-[302px]"
                    : ""
                }`}
              ></li>
              <li
                className={` relative text-xs md:text-base my-7 cursor-pointer  font-bold `}
                onClick={() => setSideBar("UI/UX Desgin") }
              >
                {" "}
                UI/UX Desgin
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("App Development")}
              >
                {" "}
                App Development
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Web Development")}
              >
                {" "}
                Web Development
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Computer Vision")}
              >
                {" "}
                Computer Vision
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("NLP Models")}
              >
                {" "}
                NLP Models
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700`}
                onClick={() => setSideBar("Chatbots")}
              >
                {" "}
                Chatbots
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Dataset Collection")}
              >
                {" "}
                Dataset Collection
              </li>
            </ul>
          </div>
       
         
          <div
            className={` flex items-center duration-500 gap-y-20 lg:gap-y-0 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
             {filteredData.slice(0,4).map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                   className=" lg:w-[400px] lg:max-w-[400px] lg:max-h-[251px] w-[300px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.slice(0,3).map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                           <span className=" text-[8px] lg:text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec.name}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
                <div
                onClick={() => navigate("/specialities")}
                 className=" flex items-center float-end  my-6 bg-primary w-fit py-2 px-8 text-white rounded-3xl">
                  <button className=" ">Discover</button>
                  <IoMdArrowForward />
                </div>
      </div>
    </div>
  );
}
