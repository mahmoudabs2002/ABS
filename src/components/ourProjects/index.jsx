import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.js";
import { getCountFromServer } from "firebase/firestore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { collection, getDocs } from "firebase/firestore";
import { IoMdArrowForward } from "react-icons/io";
import { Skeleton } from "primereact/skeleton";
export default function OurProjects() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [sideBar, setSideBar] = useState("UI/UX Desgin");
  const [count, setCount] = useState();

  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setLoading(true);
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
    return data.filter((item) => item.Category.name === sideBar);
  };
  useEffect(() => {
    const filtered = filterDataByCategory(data, sideBar);
    setFilteredData(filtered);
  }, [data, sideBar]);

  useEffect(() => {
    setLoading(true); // Show loading state before filtering

    setTimeout(() => {
      const filtered = filterDataByCategory(data, sideBar);
      setFilteredData(filtered);
      setLoading(false); // Hide loading state after update
    }, 100); // Small delay to ensure smooth transition

  }, [data, sideBar]);


  const getDocumentCount = async () => {
    const collectionRef = collection(db, "projects");
    const snapshot = await getCountFromServer(collectionRef);
    setCount(snapshot.data().count);
  };

  getDocumentCount();

  const displayedData = useMemo(() => filteredData.slice(0, 4), [filteredData]);
  
  // Preload images before rendering
  useEffect(() => {
    displayedData.forEach((e) => {
      const img = new Image();
      img.src = e.image;
    });
  }, [displayedData]);

  return (
    <div className=" py-20 lg:px-40 px-5 relative bg-[url('/our_projects_background_image.png')] bg-center bg-cover bg-no-repeat">
      <div className="">
        <h3 className=" text-center font-bold text-[32px] text-primary ">
          Our Projects
        </h3>
        <div className=" flex justify-between relative z-50 overflow-hidden ">
          <div className=" mt-4  border lg:w-[300px] w-[150px] max-h-[550px] py-8 text-white rounded-[30px] lg:rounded-[50px]">
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
            <ul className=" text-center relative  ">
              <li
                className={` absolute w-[98%]  bg-primary rounded-r-3xl py-5 duration-700 ${
                  sideBar === "UI/UX Desgin"
                    ? "-top-2"
                    : sideBar === "App Development"
                    ? "md:top-11 top-8"
                    : sideBar === "Web Development"
                    ? "md:top-24 top-20"
                    : sideBar === "Computer Vision"
                    ? "top-[120px] md:top-[150px]"
                    : sideBar === "NLP Models"
                    ? "top-[165px] md:top-[200px]"
                    : sideBar === "Chatbots"
                    ? "top-[210px] md:top-[250px]"
                    : sideBar === "Dataset Collection"
                    ? "top-[252px] md:top-[302px]"
                    : ""
                }`}
              ></li>
              <li
                className={` relative text-xs md:text-base my-7 cursor-pointer  font-bold `}
                onClick={() => {
                  setSideBar("UI/UX Desgin");
                  // handleClick();
                }}
              >
                {" "}
                UI/UX Desgin
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => {
                  setSideBar("App Development");
                  // handleClick();
                }}
              >
                {" "}
                App Development
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => {
                  // handleClick();
                  setSideBar("Web Development");
                }}
              >
                {" "}
                Web Development
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => {
                  // handleClick();
                  setSideBar("Computer Vision");
                }}
              >
                {" "}
                Computer Vision
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => {
                  // handleClick();
                  setSideBar("NLP Models");
                }}
              >
                {" "}
                NLP Models
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700`}
                onClick={() => {
                  // handleClick();
                  setSideBar("Chatbots");
                }}
              >
                {" "}
                Chatbots
              </li>
              <li
                className={` relative my-7 text-xs md:text-base cursor-pointer  font-bold duration-700 `}
                onClick={() => {
                  // handleClick();
                  setSideBar("Dataset Collection");
                }}
              >
                {" "}
                Dataset Collection
              </li>
            </ul>
          </div>

          <div
            className={` flex items-center duration-500 gap-y-20 lg:gap-y-0 overflow-hidden translate-y-28 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[320px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
            {loading === true ? (
              <div className=" flex gap-16 flex-wrap ml-10 ">
                <div>
                  <Skeleton
                    width="12rem"
                    height="10rem"
                    className=" bg-secondary"
                  ></Skeleton>
                </div>
                <div>
                  <Skeleton
                    width="12rem"
                    height="10rem"
                    className=" hidden md:flex bg-secondary"
                  ></Skeleton>
                </div>
                <div>
                  <Skeleton
                    width="12rem"
                    height="10rem"
                    className=" hidden lg:flex bg-secondary"
                  ></Skeleton>
                </div>
                <div>
                  <Skeleton
                    width="12rem"
                    height="10rem"
                    className=" hidden lg:flex bg-secondary"
                  ></Skeleton>
                </div>
              </div>
            ) : (
              displayedData.slice(0, 4).map((e ,index) => {
                return (
                  <div key={e} className={`${displayedData.length === 1 || displayedData.length === 2 ? " lg:translate-y-[-130px]": ""} ${index === 1 ? "hidden md:inline-block":""} ${index === 2 ? "hidden md:inline-block":""} relative mx-2`}>
                    <LazyLoadImage
                      src={e.image}
                      className=" lg:w-[320px] lg:max-w-[320px] lg:max-h-[185px] w-[300px] "
                      alt="Image"
                      effect="blur"
                    />
                    <div className=" px-2 bg-black/80 text-white p-2 relative w-full bottom-0 rounded-xl">
                      <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                      <div className="flex  mt-2">
                        {e.tec.slice(0, 3).map((tec) => {
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
              })
            )}
          </div>
        </div>

        <div
          onClick={() => navigate("/specialities")}
          className=" cursor-pointer flex items-center float-end lg:mr-4  my-6 bg-primary w-fit py-2 px-10 text-white rounded-3xl"
        >
          <button className=" ">Discover</button>
          <IoMdArrowForward />
        </div>
      </div>
    </div>
  );
}
