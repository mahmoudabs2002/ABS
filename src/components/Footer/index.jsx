import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const data = new Date
const year = data.getFullYear()
import Swal from "sweetalert2";

export default function Footer() {
  const navigate = useNavigate();
  const email = "info@absai.dev";
  const subject = encodeURIComponent("");
  const body = encodeURIComponent("");
  const phoneNumber = "+20 1065220951"; // Replace with the desired phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleClick = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText().then(() => {
            Swal.fire({
              title: "added to clipboard successfully",
              icon: "success",
              draggable: true,
            });
    });
  };

  return (
    <>
      <div className=" bg-[#1B2125] relative z-100 py-10 lg:px-40 px-5">
        <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start  lg:flex-row gap-10">
          <img onClick={()=>navigate("/")} src="/footer_logo.png" alt="" className=" cursor-pointer w-52" />
          <ul className=" text-white">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Quick Links
            </li>
            <li className=" mb-2 font-light cursor-pointer w-[200px]" onClick={()=> navigate("/offerings-solutions")}>Products and Systems</li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/specialities")}>Our Projects</li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/camp-blogs")}>Blogs</li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/about")}>R & D</li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/courses")}>Courses</li>
          </ul>
          <ul className=" text-white">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Company
            </li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/about")}>About</li>
            <li className=" mb-2 font-light cursor-pointer" onClick={()=> navigate("/about")}>Pricing</li>
            <li className="font-light cursor-pointer" onClick={()=> navigate("/careers")}>Join us</li>
          </ul>
          <ul className=" text-white">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Get in Touch
            </li>
            <li>
              <div className=" flex gap-2 items-center text-sm mb-2 font-light">
                <IoLocationOutline className=" ml-[-8px] md:ml-[-6px]  lg:ml-[-8px] text-3xl" /> Egypt, Cairo, First <br/>
                Settlements, Banafsig 11, V55
              </div>
            </li>
            <li>
              <div onClick={handleCall} className=" cursor-pointer flex gap-2 items-center text-sm mb-2 font-light">
                <FiPhone className=" text-2xl" />
                <div>
                  +20 1065220951
                </div>
              </div>
            </li>
            <li>
              <div onClick={handleClick} className=" cursor-pointer flex gap-2 items-center text-sm mb-2 font-light">
                {" "}
                <CiMail className=" text-2xl" />
                info@absai.dev
              </div>
            </li>
          </ul>
        </div>
        <div className=" text-white mt-8 font-light">
          ABS.AI Technologies is a tech startup founded in early 2023 with a
          bold vision to empower youth in the technological industries and
          create a solid fingerprint in the MENA Region throughout highly
          catered, timely and quality-based development of <br /> our solutions.
        </div>
        <div className=" flex gap-4 items-center justify-center md:items-start md:justify-start">
         <Link  target="_blank" to={"https://www.facebook.com/profile.php?id=61560367809342"}> <FaFacebookF className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" /></Link>
          <Link  target="_blank" to={"https://www.instagram.com/abs.aitechnologies/?fbclid=IwY2xjawI1EdtleHRuA2FlbQIxMAABHTqiqGd2llUHprJ4GijYqiBkb4pQUyO-uSVYg9X9X_CZ2AUy0YMS_6uoVg_aem_6fwFuj_e6LEfyqkjBl_qvw#"}><FaInstagram  className=" cursor-pointer rounded-lg  bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" /></Link>
        <Link  target="_blank" to={"https://www.tiktok.com/@abs.ai"}>  <FaTiktok className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" /></Link>
         <Link  target="_blank" to={"https://www.linkedin.com/company/abs-ai/"}> <FaLinkedin className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" /></Link>
        </div>
      </div>
      <div className="bg-[#1B2125] mt-[-50px] relative">
      <div className=" border-t bg-[#1B2125] lg:px-40 px-4 py-4 text-white font-thin border-white/20 mt-4">
        <div className=" flex justify-between">
            <p className=" text-[#ddd]/50 font-bold">@{year} ABS.AI Technologies</p>
            <div className=" text-[#ddd]/50 font-bold  flex justify-between gap-20">
            <p className=" cursor-pointer">Privacy Policy</p>
            <p className=" cursor-pointer">Terms and Services</p>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
