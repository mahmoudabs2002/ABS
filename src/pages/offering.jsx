import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Offering() {
  return (
    <div>
        <Navbar/>
        <div className="bg-[url(/contact_us_background_image.png)] pb-10  bg-top">
        <h3
              className={` pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
            >
              Offerings <span className=" text-primary">Solutions</span> <br />
            </h3>
            <div className=" lg:mx-40 mx-10 mt-5">
                <div className="items-center mb-14 flex flex-col lg:flex-row gap-10">
                    <img src="/offering-image-1.png" alt="" className=" w-[500px]" />
                    <div>
                        <h3 className=" text-primary text-[24px] font-semibold">BROFA</h3>
                        <p className=" text-white">BROFA is a versatile platform that helps shop owners go digital effortlessly, offering tools for mobile apps, websites, and customizable templates, all with a user-friendly interface for a seamless shopping experience.</p>
                        <button className=" bg-primary text-white block mx-auto mt-4 px-16 py-2 rounded-3xl">Know more</button>
                    </div>
                </div>
                <div className="  items-center mb-14 flex flex-col lg:flex-row-reverse gap-10">
                    <img src="/offering-image-2.png" alt="" className=" w-[500px]" />
                    <div>
                        <h3 className=" text-primary text-[24px] font-semibold">LMS Level Zero</h3>
                        <p className=" text-white">A school system that improves interaction between students, parents, and staff by automating class assignments, managing communications, tracking attendance, and sending notifications. Available on mobile, tablet, and web.</p>
                        <button className=" bg-primary text-white block mx-auto mt-4 px-16 py-2 rounded-3xl">Know more</button>
                    </div>
                </div>
                <div className="  items-center mb-14 flex flex-col lg:flex-row gap-10">
                    <img src="/offering-image-3.png" alt="" className=" w-[500px]" />
                    <div>
                        <h3 className=" text-primary text-[24px] font-semibold">LMS Level One</h3>
                        <p className=" text-white">A school system that allows teachers to communicate with students, manage class materials, and grade assignments. Students receive reminders and track their progress. Administrators can control user roles and permissions.</p>
                        <button className=" bg-primary text-white block mx-auto mt-4 px-16 py-2 rounded-3xl">Know more</button>
                    </div>
                </div>
                <div className="  items-center flex flex-col lg:flex-row-reverse  gap-10">
                    <img src="/offering-image-4.png" alt="" className=" w-[500px]" />
                    <div>
                        <h3 className=" text-primary text-[24px] font-semibold">Private Teacher LMS</h3>
                        <p className=" text-white">The project provides a system for teachers to manage lessons, schedules, assignments, and attendance, while students can access lessons, download materials, watch videos, and submit assignments.</p>
                        <button className=" bg-primary text-white block mx-auto mt-4 px-16 py-2 rounded-3xl">Know more</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
