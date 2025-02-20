import { useState } from "react";

export default function Collaborations() {
  const [isOpen , setIsOpen] = useState(0)
  return (
    <div className=" flex items-center lg:gap-52 gap-20 px-20  lg:px-40 bg-secondary">
      <h3 className=" text-center -rotate-90 lg:w-20 lg:text-[80px] w-10 text-[50px] lg:leading-[150px] mt-80 text-white/10 font-bold  ">
        Development
        <pre> +Business</pre>
      </h3>
      <div className=" mb-28">
        <div className=" lg:ml-28 mb-10">
          <h3 className=" text-primary font-bold text-[32px] text-center ">
            Collaborations
          </h3>
          <p className=" text-white mb-8 text-lg text-center">
            We aim to serve your idea to investment
          </p>
        </div>
        <div className="flex overflow-hidden duration-1000">
          <div className={` ${isOpen === 1 ? " w-96 bg-black/60": "w-24"} cursor-pointer overflow-hidden relative duration-[1s]`} onClick={()=> isOpen === 1 ? setIsOpen(0) :setIsOpen(1)}>
          <img
            src="/collaborations_image_1.png"
            alt=""
            className={` duration-1000 ${isOpen === 1 ?" rotate-90  w-16 absolute right-[150px] -top-20" :"w-20 mx-2 " } `}
          />
          <p className={` duration-300 text-white ${isOpen === 1 ? "w-[300px] text-center  absolute top-28 text-[13px] left-12" : "w-0 opacity-0 absolute -left-64"} `}>
          We collaborate together to serve your business in Saudi Arabia, Qatar, and Egypt. With over than 47 projects and 15 years of experience, Frame Agency is a trustworthy agency to cater a winning Business Model, Business Strategy and Financial Models for your next investment round. They also specialize in creating highly engaging marketing campaigns.
          </p>
          </div>
          <div className={`${isOpen === 2 ? " w-96 bg-black/60": "w-24"} cursor-pointer overflow-hidden relative duration-[1s]`} onClick={()=> isOpen === 2 ? setIsOpen(0):setIsOpen(2)}>
          <img
            src="/collaborations_image_2.png"
            alt=""
            className={` duration-700 ${isOpen === 2 ?" rotate-90  w-16 absolute right-[150px] -top-20" :"w-20 mx-2 " } `}
          />
          <p className={` duration-500 text-white ${isOpen === 2 ? "w-[300px] text-center absolute top-28 text-[13px] left-12" : "w-0 opacity-0 absolute -left-64"} `}>
          We collaborate together to serve your business in Saudi Arabia, Qatar, and Egypt. With over than 47 projects and 15 years of experience, Frame Agency is a trustworthy agency to cater a winning Business Model, Business Strategy and Financial Models for your next investment round. They also specialize in creating highly engaging marketing campaigns.
          </p>
          </div>
          <div className={`${isOpen === 3 ? " w-96 bg-black/60": "w-24"} cursor-pointer overflow-hidden relative duration-[1s]`} onClick={()=> isOpen === 3 ? setIsOpen(0):setIsOpen(3)}>
          <img
            src="/collaborations_image_3.png"
            alt=""
            className={` duration-700 ${isOpen === 3 ?" rotate-90  w-16 absolute right-[150px]  top-10" :"w-20 mx-2" } `}
          />
          {/* <p className={` duration-500 text-white ${isOpen === 3 ? "w-full text-center absolute top-28 text-[13px]" : "w-0 opacity-0 absolute -left-64"} `}>
          We collaborate together to serve your business in Saudi Arabia, Qatar, and Egypt. With over than 47 projects and 15 years of experience, Frame Agency is a trustworthy agency to cater a winning Business Model, Business Strategy and Financial Models for your next investment round. They also specialize in creating highly engaging marketing campaigns.
          </p> */}
          </div>
          <div className={`${isOpen === 4 ? " w-96 bg-black/60": "w-24"} cursor-pointer overflow-hidden relative duration-[1s]`} onClick={()=> isOpen === 4 ? setIsOpen(0):setIsOpen(4)}>
          <img
            src="/collaborations_image_3.png"
            alt=""
            className={` duration-700 ${isOpen === 4 ?" rotate-90  w-16 absolute right-[150px] top-10" :"w-20 mx-2" } `}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
