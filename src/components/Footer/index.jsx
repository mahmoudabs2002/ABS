import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const data = new Date
const year = data.getFullYear()

export default function Footer() {
  return (
    <>
      <div className=" bg-[#1B2125] py-10 px-20">
        <div className=" flex flex-col md:flex-row items-center gap-28">
          <img src="/footer_logo.png" alt="" className=" w-52" />
          <ul className=" text-white">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Quick Links
            </li>
            <li className=" mb-2 font-light w-[200px]">Products and Systems</li>
            <li className=" mb-2 font-light">Our Projects</li>
            <li className=" mb-2 font-light">Blogs</li>
            <li className=" mb-2 font-light">R & D</li>
            <li className=" mb-2 font-light">Courses</li>
            <li className="font-light">ABSAI Camp</li>
          </ul>
          <ul className=" text-white">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Company
            </li>
            <li className=" mb-2 font-light">About</li>
            <li className=" mb-2 font-light">Pricing</li>
            <li className="font-light">Join us</li>
          </ul>
          <ul className=" text-white ml-32 md:ml-0">
            <li className=" border-b w-[200px] mb-4 border-primary pb-4 text-white">
              Get in Touch
            </li>
            <li>
              <div className=" flex gap-2 items-center text-sm mb-2 font-light">
                <IoLocationOutline className=" text-4xl" /> Egypt, Cairo, First
                Settlements, Banafsig 11, V55
              </div>
            </li>
            <li>
              <div className=" flex gap-2 items-center text-sm mb-2 font-light">
                <FiPhone className=" text-2xl" />
                <div>
                  +20 1100126436 <br />
                  +20 1065220951
                </div>
              </div>
            </li>
            <li>
              <div className=" flex gap-2 items-center text-sm mb-2 font-light">
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
          <FaFacebookF className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" />
          <FaInstagram className=" cursor-pointer rounded-lg  bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" />
          <FaTiktok className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" />
          <FaLinkedin className=" cursor-pointer rounded-lg bg-[#090C0E] mt-4 text-white w-10 h-10 py-1 px-2" />
        </div>
      </div>
      <div className="bg-[#1B2125] mt-[-50px]">
      <div className=" border-t bg-[#1B2125] px-20 py-4 text-white font-thin border-white/20 mt-4">
        <div className=" flex justify-between">
            <p>@{year} ABS.AI Technologies</p>
            <div className=" flex justify-between gap-20">
            <p>Privacy Policy</p>
            <p>Terms and Services</p>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
