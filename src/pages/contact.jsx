/* eslint-disable react/no-unknown-property */
import { AlertCircle, Mic } from "lucide-react";
import { Navigation } from "lucide-react";
import { Paperclip } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { Calendar } from 'primereact/calendar';

import {industry , platform , design , ai} from "../assets/data"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [active, setActive] = useState(true);
  const [focas, setFocas] = useState(false);
  const [industrySelect , setIndustrySelect] = useState()
  const [designSelect , setDesignSelect] = useState()
  const [location , setlocation] = useState()
  const [platformSelect , setPlatformSelect] = useState([])
  const [aiSelect , setAiSelect] = useState([])
  const [section , setSection] = useState(1)
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [workhour, setWorkhour] = useState(null);
  const [firstname , setfirstname] = useState('')
  const [lastname , setLastname] = useState('')
  const [emailValid , setEmailValid] = useState(false)
  const [email , setEmail] = useState()
  const [mobile , setMobile] = useState('')
  


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handlePlatform = (p) => {
    if (!platformSelect.includes(p)) {
      setPlatformSelect((prevPlatfomrm) => [...prevPlatfomrm, p]);
    }
    else (
      setPlatformSelect((prevPlatfomrm) => prevPlatfomrm.filter((t) => t !== p))
    )
  };
  const handleAi = (p) => {
    if (!aiSelect.includes(p)) {
      setAiSelect((prevai) => [...prevai, p]);
    }
    else (
      setAiSelect((prevai) => prevai.filter((t) => t !== p))
    )
  };

  const firstnameEmpty = firstname.trim() === "";
  const lastnameEmpty = lastname.trim() === "";
  const mobileEmpty = mobile.trim() === "";


const handleEmail = (e) => {
  const value = e.target.value;
  setEmail(value);
  setEmailValid(emailRegex.test(value)); // Validate input
};


  return (
   <>
   <Navbar/>
    <div className=" relative pb-4 min-h-screen overflow-hidden bg-cover bg-[url('/contact_us_background_image.png')]">
      <div className=" flex flex-col justify-center items-center pt-20">
        <img src="/chat.png" alt="" className="w-24 mb-4" />
        <h2 className=" text-white text-center font-bold text-[40px] ">
          ABS.AI chatbot is at your service
        </h2>
        <h3 className=" text-center text-white font-bold text-[18px] mb-4">
          Know the budget of your project, now! no meetings required.
        </h3>
        <div className=" relative flex items-center ">
          <img
            src="/beta_text_field_image.png"
            alt=""
            className=" translate-x-20   relative z-50 h-6"
          />
          {focas === true ? null : (
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "i want to build a website for my company ",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "12px",
                display: "inline-block",
                color: "#ddd",
              }}
              className=" translate-x-32 absolute z-10"
            />
          )}
          <input
            type="text"
            name=""
            onFocus={() => setFocas(true)}
            onBlur={() => setFocas(false)}
            className=" bg-secondary pl-16 pr-40 relative z-0 rounded-3xl h-12 w-full lg:w-[850px] translate-x-10"
          />
          <button className=" bg-primary relative z-50 text-white py-2 w-[150px] lg:w-[120px] lg:px-8 rounded-3xl translate-x-[-70px] lg:translate-x-[-100px]">
            {" "}
            tell me
          </button>
        </div>
        <button className=" border hover:shadow-lg hover:bg-secondary duration-200 border-primary text-white font-bold rounded-3xl px-4 mt-4 py-2">
          contact us the old way
        </button>
        <div className="mt-4">
          <marquee scrollamount="4">
            <div className=" inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I want to build a portfolio website for my company
            </div>
            <div className=" inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I have a new app idea
            </div>
            <div className=" inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              What is the cost of designing a logo for my app
            </div>
            <div className=" inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I want a trading bot for my app
            </div>
            <div className=" inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I want to build a portfolio website for my company
            </div>
          </marquee>
          <marquee scrollamount="5">
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              What is the cost of building an e-commerce application?
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              Can you build desktop applications?
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I need a management system for my company
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I need an AI model that can tell if someone is cheeting
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I need a program to help me extract the text in papers
              automatically
            </div>
          </marquee>
          <marquee scrollamount="4">
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              Can you create something to help me analyze my brand’s reviews
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I need a system that can analyze my revenue and predict my next
              year profit
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              I need a special chatbot that is able to answer astronomical
              questions
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              Can you collect a dataset for a model working in agriculture?{" "}
            </div>
            <div className="inline-block mx-4 px-3 py-6 rounded-md bg-secondary text-white ">
              Can you create something to help me analyze my brand’s reviews
            </div>
          </marquee>
        </div>
        <div className=" flex flex-col-reverse lg:flex-row relative mt-6">
          <div
            className={`flex lg:translate-x-24 translate-x-[300px] mt-8 w-[400px] lg:w-[600px] duration-700 ${
              active === false ? "opacity-0" : ""
            }`}
          >
            <div className=" bg-[#151A1D] w-6 lg:h-[520px] h-[620px] mr-4 " />
            <div className=" text-white">
              <h3 className=" text-3xl font-bold">
                How to use the ABS.AI Chatbot?
              </h3>
              <div>
                <div className=" my-8 ml-6 hover:text-primary duration-300">
                  <h3 className=" text-xl mb-4">Answers all your questions</h3>
                  <p className="text-[#ddd] text-sm">
                    The bot is able to answer all your questions regarding our
                    products and services or our company expertise.
                  </p>
                </div>
                <div className=" my-8 ml-6 hover:text-primary duration-300">
                  <h3 className=" text-xl mb-4">Upload or record</h3>
                  <p className="text-[#ddd] text-sm">
                    You can easily chat through voice or simple apload a project
                    brief and the chat bot will give you an initial budegt
                    proposal.
                  </p>
                </div>
                <div className=" my-8 ml-6 hover:text-primary duration-300">
                  <h3 className=" text-xl mb-4">Describe your needs</h3>
                  <p className="text-[#ddd] text-sm">
                    The chatbot will take you in a step y step process to
                    understand your project based on a simple Q & A chat.
                  </p>
                </div>
                <div className=" my-8 ml-6 hover:text-primary duration-300">
                  <h3 className=" text-xl mb-4">
                    Get initial budget and timeline
                  </h3>
                  <p className="text-[#ddd] text-sm">
                    The bot can give you an initial budgeting and timeline for
                    your project with accuracy up to 89% but this is not the
                    final proposal. Creating a meeting in person is always best
                    for exact prices and durations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`mr-[440px] lg:mr-0  ${active === true ? "chat-forward" : "chat-backward "}`}
          >
            <div className="bg-primary hidden lg:block absolute rounded-l-2xl  text-white h-full">
              <div
                className={`w-7 translate-y-72 duration-300 cursor-pointer ${
                  active === true ? "" : "rotate-180"
                }`}
                onClick={() =>
                  active === true ? setActive(false) : setActive(true)
                }
              >
                <ChevronLeft className=" font-bold w-8 h-8 translate-x-[-4px]" />
              </div>
            </div>
            <div className=" bg-secondary rounded-tr-2xl flex ml-4 h-20 px-4 items-center border-b border-white ">
              <img src="/chatbot_beta_icon.png" alt="" className=" w-16" />
              <div className=" text-white">
                <h3 className=" text-sm"> ABS.AI CHATBOT</h3>
                <p className=" text-xs text-[#A2A6A8]">
                  Answers all your project inquiries
                </p>
              </div>
            </div>
            <div className=" bg-black h-[500px] lg:w-[800px] w-[550px]"></div>
            <div className=" bg-[#151A1D] ml-3 rounded-br-2xl border-t h-16 border-white flex items-center ">
              <Mic className=" text-white ml-10 mr-4 w-8" />
              <Paperclip className=" text-white w-8" />
              <input
                type="text"
                placeholder="Type your message..."
                className=" bg-[#151A1D] w-full outline-none px-10 caret-white"
              />
              <Navigation className=" text-white mr-4 w-8" />
            </div>
          </div>
        </div>
        <div className=" mt-10">
          <div className=" text-center">
            <h3 className=" text-primary font-bold text-3xl">
              Request a meeting
            </h3>
            <p className=" text-[#ddd] text-2xl">
              Skip chatting, let’s meet in person!!
            </p>
          </div>
          <div className=" flex gap-1 lg:translate-x-0 lg:w-[1200px] w-[400px] mt-2">
            <div className={` ${section === 3 ? "translate-x-[300px] lg:translate-x-0": ""} ${section === 2 ? "translate-x-[80px] lg:translate-x-0": ""} relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}>
              <div className={` ${section === 1 ||section === 2 || section === 3 ? "bg-primary w-full h-[2px]":""} absolute`} />
            </div>
            <div className={`  ${section === 3 ? "translate-x-[300px] lg:translate-x-0": ""} ${section === 2 ? "translate-x-[80px] lg:translate-x-0": ""}   relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}>
              <div className={` ${section === 2 || section === 3 ? "bg-primary w-full h-[2px]":""} absolute`} />
            </div>
            <div className={` ${section === 3 ? "translate-x-[300px] lg:translate-x-0": ""} ${section === 2 ? "translate-x-[80px] lg:translate-x-0": ""}  relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}>
              <div className={` ${section === 3 ? "bg-primary w-full h-[2px]":""} absolute`} />
            </div>
          </div>
          <form>
            {
              section === 1 ?  
              <div>
                <h3 className=" text-white my-4 text-2xl">Basic Information</h3>
                <div>
                  <div className={`inline-block relative ${firstnameEmpty ? "mb-8 md:mb-2": ""}`}>
                    <label htmlFor="" className=" text-white">First name</label>
                    <input value={firstname} onChange={(e)=> setfirstname(e.target.value)} className={`block ${firstnameEmpty ? "border border-red-600": ""} lg:w-[550px] w-[180px] h-8 mt-2 outline-none px-2 rounded-lg`}  type="text" name="" id="" />
                    {
                      firstnameEmpty ? <span className=" absolute text-red-600">firstname must not be Empty</span>: null
                    }
                  </div>
                  <div className="inline-block lg:translate-x-[34px] translate-x-10 relative ">
                    <label htmlFor="" className=" text-white">Last name</label>
                    <input value={lastname}  onChange={(e)=> setLastname(e.target.value)} className={`block ${lastnameEmpty ? "border border-red-600":""} lg:w-[615px] w-[180px] h-8 mt-2 outline-none px-2 rounded-lg`} type="text" name="" id="" />
                    {
                      lastnameEmpty ? <span className="absolute text-red-600">lastname must not be Empty</span>: null
                    }
                  </div>
                  <div className=" my-4">
                    <label htmlFor="" className=" text-white">Your e-mail address</label>
                    <input value={email} onChange={handleEmail} className={` ${emailValid === false  ? "border border-red-600": ""} block lg:w-[1200px] w-full  h-8 mt-2 outline-none px-2 rounded-lg`}  type="text" name="" id="" />
                    {
                      emailValid === false ? <p className=" text-red-600">email is not vaild</p>: null
                    }
                  </div>
                  <div>
                    <label htmlFor="" className=" text-white">Your phone number</label>
                    <input value={mobile}  onChange={(e)=> setMobile(e.target.value)} className={` ${mobileEmpty ? "border border-red-600": ""} block lg:w-[1200px] w-full  h-8 mt-2 outline-none px-2 rounded-lg`}  type="text" name="" id="" />
                    {
                      mobileEmpty ? <p className=" text-red-600">mobile must not be Empty</p>: null
                    }
                  </div>
                </div>
                {
                  console.log(emailValid)
                }
                <div onClick={()=> firstnameEmpty || lastnameEmpty || mobileEmpty || emailValid === false ?  null : setSection(2)   } className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300">
                Next Step
                <IoMdArrowForward />
                </div>
              </div>
              :
              section === 2 ? 
              <div className="ml-4 lg:ml-0">
                <h3 className=" text-white my-4 text-2xl">About Your Project</h3>
                <div>
                <h3 className="text-white text-xl" >The Industry</h3>
                <p className=" text-[#ddd]/50">Select the industry you work in. Select only one</p>
                <div className=" flex flex-wrap gap-4 lg:w-[1200px] mt-4">
                  {
                    industry.map(e => {
                      return (
                        <div onClick={()=>setIndustrySelect(e.id)} className={` ${ industrySelect === e.id ?" bg-primary":""} duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`} key={e.id}>
                          <p>{e.name}</p>
                        </div>
                      )
                    }) 
                  }
                </div>
                </div>
                <div className=" mt-4">
                <h3 className="text-white text-xl" >The Platform</h3>
                <p className=" text-[#ddd]/50">Select the platform you need for your project. You can select more than one</p>
                <div className=" flex flex-wrap gap-4 lg:w-[1200px] mt-4">
                  {
                    platform.map(e => {
                      return (
                        <div onClick={()=> handlePlatform(e.id) }  className={` ${ platformSelect.includes(e.id)?" bg-primary":""} duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`} key={e.id}>
                          <p>{e.name}</p>
                        </div>
                      )
                    }) 
                  }
                </div>
                </div>
                <div className=" mt-4">
                <h3 className="text-white text-xl" >Design</h3>
                <p className=" text-[#ddd]/50">Do you need a UI Design for your platform. Select only one</p>
                <div className=" flex flex-wrap gap-4 lg:w-[1200px] mt-4">
                  {
                    design.map(e => {
                      return (
                        <div onClick={()=>setDesignSelect(e.id)} className={` ${ designSelect === e.id ?" bg-primary":""} duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`} key={e.id}>
                        <p>{e.name}</p>
                      </div>
                      )
                    }) 
                  }
                </div>
                </div>
                <div className=" mt-4">
                <h3 className="text-white text-xl" >AI-Based Solutions</h3>
                <p className=" text-[#ddd]/50">Will your project require AI Models? You can select more than one</p>
                <div className=" flex flex-wrap gap-4 lg:w-[1200px] mt-4">
                  {
                    ai.map(e => {
                      return (
                        <div onClick={()=> handleAi(e.id) }  className={` ${ aiSelect.includes(e.id)?" bg-primary":""} duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`} key={e.id}>
                        <p>{e.name}</p>
                      </div>
                      )
                    }) 
                  }
                </div>
                </div>
                <div className=" mt-4">
                <h3 className="text-white text-xl" >Project Description</h3>
                <p className=" text-[#ddd]/50">Describe your project in briefly.</p>
                  <textarea className=" lg:w-full w-[450px] mt-4 outline-none"></textarea>
                </div>
                  <div className=" gap-10">
                <div onClick={()=>setSection(3)} className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300">
                Next Step
                <IoMdArrowForward />
                </div>
                <div onClick={()=>setSection(1)} className=" mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-8 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300">
                      Back
                    </div>
 
                  </div>

              </div> : section === 3 ? 
              <div className=" lg:w-[1200px] mt-4">
                <h3 className=" text-white my-4 text-2xl" >Meeting Details</h3>
                <div className=" text-white flex items-center translate-x-[300px] lg:translate-x-0 w-[400px] lg:w-full gap-4 ">
                  <AlertCircle/>
                  <p>Confirmation of the meeting details will be sent through e-mail. Please Follow up your email. If a problem arises please contact us through our direct contact channels.</p>
                </div>
                <h3 className=" text-white my-4 text-2xl" >Location</h3>
                <div className=" bg-white lg:w-fit w-[400px] p-4 translate-x-[300px] lg:translate-x-0">
                  <h3 className=" font-bold text-black text-2xl">Location</h3>
                  <div> 
                    <div onClick={()=> setlocation("At ABS.AI Headquarters")} className={`${location === "At ABS.AI Headquarters" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 mt-2 px-10 text-center py-2`}>
                    At ABS.AI Headquarters
                    </div>
                    <div onClick={()=> setlocation("At your headquarters")} className={`${location === "At your headquarters" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    At your headquarters
                    </div>
                    <div onClick={()=> setlocation("Online Meeting")} className={`${location === "Online Meeting" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    Online Meeting
                    </div>
                  </div>
                </div>
                <h3 className=" text-white my-4 text-2xl" >Date and Time</h3>
                <div className=" flex flex-col lg:flex-row gap-8 w-[1000px]">
                <Calendar className="w-[400px] translate-x-[300px] lg:translate-x-0 " value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                <div className=" bg-white lg:w-fit w-[400px] translate-x-[300px] lg:translate-x-0 p-4">
                  <h3 className=" font-bold text-black text-2xl">Time Slots</h3>
                  <div className=" flex gap-2 mt-2"> 
                    <div onClick={()=> setTime("30 min")} className={`${time === "30 min" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    30 min
                    </div>
                    <div onClick={()=> setTime("1 Hour")} className={`${time === "1 Hour" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    1 Hour
                    </div>
                    <div onClick={()=> setTime("1+ Hour")} className={`${time === "1+ Hour" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    1+ Hour
                    </div>
                  </div>
                  <h3 className=" font-bold text-black my-3">Workhours Time Slots (PM)</h3>
                  <div className=" flex flex-wrap gap-2"> 
                    <div onClick={()=> setWorkhour("1:00")} className={`${workhour === "1:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    1:00
                    </div>
                    <div onClick={()=> setWorkhour("1:30")} className={`${workhour === "1:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    1:30
                    </div>
                    <div onClick={()=> setWorkhour("2:00")} className={`${workhour === "2:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    2:00
                    </div>
                    <div onClick={()=> setWorkhour("2:30")} className={`${workhour === "2:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    2:30
                    </div>
                    <div onClick={()=> setWorkhour("3:00")} className={`${workhour === "3:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    3:00
                    </div>
                    <div onClick={()=> setWorkhour("3:30")} className={`${workhour === "3:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    3:30
                    </div>
                    <div onClick={()=> setWorkhour("4:00")} className={`${workhour === "4:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    4:00
                    </div>
                  </div>
                  <p className=" text-black font-bold">Post-workhours Time Slots (PM)</p>
                  <div className=" flex flex-wrap gap-2"> 
                    <div onClick={()=> setWorkhour("7:30")} className={`${workhour === "7:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    7:30
                    </div>
                    <div onClick={()=> setWorkhour("8:00")} className={`${workhour === "8:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    8:00
                    </div>
                    <div onClick={()=> setWorkhour("8:30")} className={`${workhour === "8:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    8:30
                    </div>
                    <div onClick={()=> setWorkhour("9:00")} className={`${workhour === "9:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    9:00
                    </div>
                    <div onClick={()=> setWorkhour("9:30")} className={`${workhour === "9:30" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    9:30
                    </div>
                    <div onClick={()=> setWorkhour("10:00")} className={`${workhour === "10:00" ? "bg-primary text-white":""}  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}>
                    10:00
                    </div>
                  </div>
                  
                </div>
                
                </div>
                <div className=" gap-10">
                <div className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300">
                Send request
                <IoMdArrowForward />
                </div>
                <div onClick={()=>setSection(2)} className=" mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-8 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300">
                      Back
                    </div>
 
                  </div>
              </div>
               : null
            }
          </form>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}
