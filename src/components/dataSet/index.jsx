import { useState } from "react";
import { CircleHelp } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DateSet() {
  const [isOpen, setIsOpen] = useState(0);
  const navigate = useNavigate()
  return (
    <div className=" bg-secondary py-10  bg-[url('/datasets_background.png')] bg-center bg-cover bg-no-repeat">
      <div className="text-center">
        <h3 className=" text-primary font-bold text-[32px]">Need a Dataset?</h3>
        <p className=" text-white">We are ready</p>
        <div className=" flex justify-center mx-10 lg:mx-40  my-20 lg:gap-[58px] gap-6 flex-wrap">
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Intensive Prior Research</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Proficiency in Web Scrapping Tools</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Data Cleaning</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Data Analysis and Documentation</h3>
          </div>
          <div className=" flex flex-col text-center items-center ">
            <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
            <h3 className=" text-white w-[150px]">Database Creation and Publishing</h3>
          </div>
        </div>
        <div className=" border border-white rounded-xl lg:mx-48 mx-5 p-4 mb-4">
          <div className=" p-4 border-b border-white">
            <div
              className=" flex justify-between text-white"
              onClick={() => (isOpen === 1 ? setIsOpen(0) : setIsOpen(1))}
            >
              <div className=" flex items-center gap-2">
                <CircleHelp />
                <p>What exactly is a dataset?</p>
              </div>
              <div>
                <ChevronUp
                  className={` duration-700 ${
                    isOpen === 1 ? " rotate-0" : " rotate-180"
                  } `}
                />
              </div>
            </div>
            {isOpen === 1 ? (
              <p className={`text-white mt-4 text-left duration-500 overflow-hidden`}>
                A dataset is a large group of collected data in different forms like images, text, numeric values and time series data. Data is beneficial for any business aiming to take clear and strategic decisions. 
              </p>
            ) : null}
          </div>
          <div className=" p-4 border-b border-white">
            <div
              className=" flex justify-between text-white"
              onClick={() => (isOpen === 2 ? setIsOpen(0) : setIsOpen(2))}
            >
              <div className=" flex items-center gap-2">
                <CircleHelp />
                <p>Why would I need a dataset?</p>
              </div>
              <div>
                <ChevronUp
                  className={` duration-700 ${
                    isOpen === 2 ? " rotate-0" : " rotate-180"
                  } `}
                />
              </div>
            </div>
            {isOpen === 2 ? (
              <p className={`text-white mt-4 text-left duration-500 overflow-hidden`}>
A dataset is originally the fuel to AI Models through which it learns, but it can also help you to take decisions based on clear understanding of the given state of you business either from a client perspective or internal perspective. 
              </p>
            ) : null}
          </div>
          <div className=" p-4 ">
            <div
              className=" flex justify-between text-white"
              onClick={() => (isOpen === 3 ? setIsOpen(0) : setIsOpen(3))}
            >
              <div className=" flex items-center gap-2">
                <CircleHelp />
                <p>What formats do you support?</p>
              </div>
              <div>
                <ChevronUp
                  className={` duration-700 ${
                    isOpen === 3 ? " rotate-0" : " rotate-180"
                  } `}
                />
              </div>
            </div>
            {isOpen === 3 ? (
              <p className={`text-white mt-4 text-left duration-500 overflow-hidden`}>
We have the ability to collect different types of image-based, text-based, numeric value and time series data. We follow industry standards in the formats and structures of our datasets  based on its type and use case.
              </p>
            ) : null}
          </div>
        </div>
        <button onClick={()=> navigate("/contact")}  className=" bg-primary py-3 px-10 text-white rounded-3xl">
          Request a Dataset
        </button>
      </div>
    </div>
  );
}
