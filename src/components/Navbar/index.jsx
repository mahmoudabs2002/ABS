import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "primereact/sidebar";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [nav, setNav] = useState("h-[50px] lg:px-40 px-20  w-full ");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
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
    <div
      className={` bg-secondary py-2  ${nav} fixed z-[90000] duration-700 `}
    >
      <div className={` flex justify-between items-center`}>
        <img
        onClick={()=> navigate("/")}
          src={
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30 || window.innerWidth <= 780
              ? "/collapsed_app_bar_image.png"
              : "/logo.png"
          }
          className={`duration-700 cursor-pointer ${
            document.body.scrollTop > 30 ||
            document.documentElement.scrollTop > 30
              ? "w-10 h-10 ml-[-60px] mb-5"
              :window.innerWidth <= 780 ? "w-10 ":
              
              "w-56"
          }`}
          alt="logo"
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
                    onClick={()=> navigate("/")}
            className={` cursor-pointer hover:bg-slate-800 duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            Home
          </li>
          <li
            className={` cursor-pointer hover:bg-slate-800 duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            About
          </li>
          <li
          onClick={()=> navigate("/offerings-solutions")}
            className={` flex gap-1 items-center cursor-pointer hover:bg-slate-800 duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            <span>Offerings</span>
            <MdKeyboardArrowDown className=" text-2xl text-white" />
          </li>
          <li
            onClick={()=> navigate("/camp-blogs")}
            className={` flex gap-1 items-center cursor-pointer hover:bg-slate-800 duration-500 py-1 px-2 rounded-3xl ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "text-sm"
                : ""
            }`}
          >
            <span>Camp</span>
            <MdKeyboardArrowDown className=" text-2xl text-white" />

          </li>
          <li
          onClick={()=> navigate("/careers")}
            className={` cursor-pointer hover:bg-slate-800 duration-500 py-1 px-2 rounded-3xl ${
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
            className={` border border-[#fe5008] translate-x-12 lg:translate-x-0 rounded-3xl text-white py-1 px-2 ${
              document.body.scrollTop > 30 ||
              document.documentElement.scrollTop > 30
                ? "mb-5 translate-x-12"
                : ""
            }`}
            onClick={()=> navigate("/contact")}
          >
            {" "}
            contact us
          </button>
          <div
            className={` hidden lg:flex items-center gap-[2px] ml-2 ${
              document.documentElement.scrollTop > 30 ? "mb-5  translate-x-12 " : ""
            }`}
          >
            <TbWorld className=" text-white text-2xl font-thin" />
            <MdKeyboardArrowDown className=" text-2xl text-white" />
          </div>
          <div className={`card flex justify-content-center ${
            document.documentElement.scrollTop > 30 ? "mb-5 mr-2" : ""
          }`}>
            <Sidebar className=" hidden lg:flex bg-secondary text-white" visible={visible} onHide={() => setVisible(false)}>
              <h2>Sidebar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Sidebar>
            <Menu className={`lg:hidden flex text-white mr-10 ml-2 translate-x-12 
          `} onClick={() => setVisible(true)} />
          </div>
        </div>
      </div>
    </div>
  );
}
