import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Navbar() {
  const [nav, setNav] = useState("h-[50px] lg:px-40 px-20  w-full ");
  const [visible, setVisible] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [campOpen, setCampOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30 || window.innerWidth <= 780) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Handle window resize

    handleScroll(); // Run on mount to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage("/collapsed_app_bar_image.webp");
    preloadImage("/logo.webp");
  }, []);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setNav(
          "h-[50px] px-20 lg:px-20 text-white lg:w-[800px] rounded-3xl w-[calc(100%-70px)] translate-x-[30px]  lg:translate-x-[300px] translate-y-4 pr-4 "
        );
      } else {
        setNav("h-[50px] lg:px-40 px-20  w-full ");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div className={` bg-secondary py-2  ${nav} fixed z-[1000] duration-700 `}>
      <div className={` flex justify-between items-center`}>
        <img
        onClick={()=> navigate("/")}
          key={collapsed ? "collapsed-logo" : "default-logo"} // Forces re-render
          src={collapsed ? "/collapsed_app_bar_image.webp" : "/logo.webp"}
          alt="logo"
          className={`duration-700 cursor-pointer ${
            collapsed
              ? "w-10 h-10 ml-[-60px] mb-5"
              : window.innerWidth <= 780
              ? "w-10 "
              : "w-56"
          }`}
        />
        <ul
          className={` hidden lg:flex gap-2 translate-x-7 items-center text-white ${
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
              ? " mb-5"
              : ""
          }`}
        >
          <li
            onClick={() => navigate("/")}
            className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            About
          </li>
          <li
            onClick={() =>
              offerOpen === true ? setOfferOpen(false) : setOfferOpen(true)
            }
            className={` flex gap-1 items-center cursor-pointer duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            <span>Offerings</span>
            <MdKeyboardArrowDown className=" text-2xl text-white" />
            {offerOpen === true ? (
              <div>
                <div>
                  <div className=" bg-secondary w-[150px] rounded-xl absolute top-11 right-44">
                    <ul className=" text-white ">
                      <li
                        className=" cursor-pointer  px-8 pt-4 pb-4 hover:bg-white/10 duration-300 rounded-lg"
                        onClick={() => navigate(`/specialities`)}
                      >
                        Services
                      </li>
                      <li
                        className=" cursor-pointer  pb-4 px-8 pt-4 hover:bg-white/10 duration-300  "
                        onClick={() => navigate(`/offerings-solutions`)}
                      >
                        Solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </li>
          <li
            onClick={() =>
              campOpen === true ? setCampOpen(false) : setCampOpen(true)
            }
            className={` flex gap-1 items-center cursor-pointer relative duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            <span>Camp</span>
            <MdKeyboardArrowDown className=" text-2xl text-white" />
            {campOpen === true ? (
              <div>
                <div>
                  <div className=" bg-secondary w-[150px] rounded-xl absolute top-11 left-0">
                    <ul className=" text-white ">
                      <li
                        className=" cursor-pointer  px-8 pt-4 pb-4 hover:bg-white/10 duration-300 rounded-lg"
                        onClick={() => navigate(`/camp-blogs`)}
                      >
                        Blogs
                      </li>
                      <li
                        className=" cursor-pointer  pb-4 px-8 pt-4 hover:bg-white/10 duration-300  "
                        onClick={() => navigate(`/courses`)}
                      >
                        Courses
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : null}
          </li>
          <li
            onClick={() => navigate("/careers")}
            className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            Careers
          </li>
        </ul>
        <div className=" flex items-center">
          <button
            className={` border border-[#fe5008] min-w-fit translate-x-12 lg:translate-x-0 rounded-3xl text-white py-1 px-2 ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "mb-5 translate-x-12 lg:mr-[-40px]"
                : "translate-y-[-10px] translate-x-[100px] md:translate-x-0 md:translate-y-0"
            }`}
            onClick={() => navigate("/contact")}
          >
            {" "}
            contact us
          </button>
          <div
            className={` hidden lg:flex items-center gap-[2px] ml-2 ${
              document.documentElement.scrollTop > 30
                ? "mb-5   translate-x-12 "
                : " "
            }`}
          >
            <TbWorld className=" text-white text-2xl font-thin" />
            <MdKeyboardArrowDown className=" text-2xl text-white" />
          </div>
          <div
            className={`card flex justify-content-center ${
              document.documentElement.scrollTop > 30 ? "mb-5 mr-2" : ""
            }`}
          >
            <Sidebar
              className=" bg-secondary text-white"
              visible={visible}
              onHide={() => setVisible(false)}
            >
              <ul
                className={`gap-4 mt-10 flex flex-col  translate-x-7 text-white ${
                  document.body.scrollTop > 30 ||
                  document.documentElement.scrollTop > 30
                    ? " mb-5"
                    : ""
                }`}
              >
                <li
                  onClick={() => navigate("/")}
                  className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : ""
                  }`}
                >
                  Home
                </li>
                <li
                  onClick={() => navigate("/about")}
                  className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : ""
                  }`}
                >
                  About
                </li>
                <li
                  onClick={() =>
                    offerOpen === true
                      ? setOfferOpen(false)
                      : setOfferOpen(true)
                  }
                  className={` flex gap-1 items-center cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : ""
                  }`}
                >
                  <span>Offerings</span>
                  <MdKeyboardArrowDown className=" text-2xl text-white" />
                </li>
                {offerOpen === true ? (
                  <div>
                    <div className="">
                      <div className=" bg-secondary w-[150px] rounded-xl">
                        <ul className=" text-white ">
                          <li
                            className=" cursor-pointer px-8 pt-4 pb-4 duration-300 rounded-lg"
                            onClick={() => navigate(`/specialities`)}
                          >
                            Services
                          </li>
                          <li
                            className=" cursor-pointer  pb-4 px-8 pt-4 duration-300  "
                            onClick={() => navigate(`/offerings-solutions`)}
                          >
                            Solutions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
                <li
                  onClick={() =>
                    campOpen === true ? setCampOpen(false) : setCampOpen(true)
                  }
                  className={` flex gap-1 items-center cursor-pointer relative duration-500 py-1 px-2 rounded-3xl ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : ""
                  }`}
                >
                  <span>Camp</span>
                  <MdKeyboardArrowDown className=" text-2xl text-white" />
                </li>
                {campOpen === true ? (
                  <div>
                    <div>
                      <div className=" bg-secondary w-[150px] rounded-xl ">
                        <ul className=" text-white ">
                          <li
                            className=" cursor-pointer  px-8 pt-4 pb-4 duration-300 rounded-lg"
                            onClick={() => navigate(`/camp-blogs`)}
                          >
                            Blogs
                          </li>
                          <li
                            className=" cursor-pointer  pb-4 px-8 pt-4 duration-300  "
                            onClick={() => navigate(`/courses`)}
                          >
                            Courses
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
                <li
                  onClick={() => navigate("/careers")}
                  className={` cursor-pointer  duration-500 py-1 px-2 rounded-3xl ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : ""
                  }`}
                >
                  Careers
                </li>
              </ul>
            </Sidebar>
            <Menu
              className={`lg:hidden  ${
                    document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30
                      ? "text-sm"
                      : " translate-y-[-10px] translate-x-[100px] md:translate-x-0 md:translate-y-0"
                  }  flex text-white mr-10 ml-2 translate-x-12 
          `}
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
