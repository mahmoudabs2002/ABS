/* eslint-disable react/no-unknown-property */
import { AlertCircle, Mic } from "lucide-react";
import { Navigation } from "lucide-react";
import { Paperclip } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { Calendar } from "primereact/calendar";
import emailjs from "emailjs-com";
import { industry, platform, design, ai } from "../assets/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toast } from "primereact/toast";
import Swal from "sweetalert2";

export default function Contact() {
  // const indRef = useRef(null);
  const toastTopCenter = useRef(null);
  const [active, setActive] = useState(true);
  const [focas, setFocas] = useState(false);
  // const [industrySelect , setIndustrySelect] = useState()
  // const [designSelect , setDesignSelect] = useState()
  const [location, setlocation] = useState();
  const [platformSelect, setPlatformSelect] = useState([]);
  const [aiSelect, setAiSelect] = useState([]);
  const [section, setSection] = useState(1);
  const [date, setDate] = useState(null);
  const [visible, setVisible] = useState(false);
  // const [time, setTime] = useState(null);
  // const [workhour, setWorkhour] = useState(null);
  // const [firstname , setfirstname] = useState('')
  // const [lastname , setLastname] = useState('')
  // const [emailValid , setEmailValid] = useState(false)
  // const [email , setEmail] = useState()
  // const [mobile , setMobile] = useState('')
  // const [dec , setDec] = useState('')
  const showMessage = (ref, severity) => {
    const label = "all field is requierd";

    ref.current.show({
      severity: severity,
      summary: label,
      detail: label,
      life: 3000,
    });
  };

  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handlePlatform = (p) => {
    if (!platformSelect.includes(p)) {
      setPlatformSelect((prevPlatfomrm) => [...prevPlatfomrm, p]);
    } else
      setPlatformSelect((prevPlatfomrm) =>
        prevPlatfomrm.filter((t) => t !== p)
      );
  };

  const handleAi = (p) => {
    if (!aiSelect.includes(p)) {
      setAiSelect((prevai) => [...prevai, p]);
    } else setAiSelect((prevai) => prevai.filter((t) => t !== p));
  };

  // const handleEmail = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   setEmailValid(emailRegex.test(value)); // Validate input
  // };
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    industry: "",
    platform: [],
    design: "",
    ai_solutions: [],
    project_description: "",
    location: "",
    date: "",
    time_slot: "",
    work_hours_time_slot: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    platformSelect.forEach((name) => {
      formData.platform.push(name); // Use names[] to ensure it's recognized as an array
    });
    aiSelect.forEach((name) => {
      formData.ai_solutions.push(name); // Use names[] to ensure it's recognized as an array
    });

    if (formData.first_name.trim() === "") {
      return null;
    }

    if (formData.last_name.trim() === "") {
      return null;
    }

    if (formData.email.trim() === "") {
      return null;
    }

    if (formData.phone.trim() === "") {
      return null;
    }

    if (formData.industry === null) {
      return null;
    }

    if (formData.platform.length === 0) {
      return null;
    }
    if (formData.design === "") {
      return null;
    }
    if (formData.ai_solutions.length === 0) {
      return null;
    }
    if (formData.project_description.trim() === "") {
      return null;
    }
    if (formData.location === "") {
      return null;
    }
    if (formData.date === "") {
      return null;
    }
    if (formData.time_slot === "") {
      return null;
    }
    if (formData.work_hours_time_slot === "") {
      return null;
    }

    emailjs
      .send(
        "service_5rvdpe1", // Replace with your EmailJS Service ID
        "template_nfe1mdt", // Replace with your EmailJS Template ID
        formData,
        "5GDVXQdrLam3ZcO9r" // Replace with your EmailJS Public Key (not user_id)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Request Received",
            text:"Our team will contact you in 2 Days time",
            icon: "success",
            draggable: true,
          });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            title: "Failed to send email.",
            icon: "error",
            draggable: true,
          });
        }
      );
  };
  const firstnameEmpty = formData.firstname === "";
  const lastnameEmpty = formData.lastname === "";
  const mobileEmpty = formData.emailmail === "";

  return (
    <>
      <Navbar />
      <div className=" relative pb-4 min-h-screen overflow-hidden bg-cover bg-[url('/contact_us_background_image.png')]">
        <div className=" flex flex-col justify-center overflow-hidden items-center pt-20">
          <img src="/chat.png" alt="" className="w-24 mb-4" />
          <h2 className=" text-white text-center font-bold text-[40px] ">
            ABS.AI chatbot is at your service
          </h2>
          <h3 className=" text-center text-white font-bold text-[18px] mb-4">
            Know the budget of your project, now! no meetings required.
          </h3>
          <div className="relative flex items-center w-full max-w-[850px] mx-auto">
            <img
              src="/beta_text_field_image.png"
              alt=""
              className="absolute left-4 z-50 h-6"
            />
            {!focas && (
              <TypeAnimation
                sequence={["i want to build a website for my company", 1000]}
                wrapper="span"
                speed={50}
                className="absolute left-16 z-10 text-sm text-gray-300"
              />
            )}
            <input
              type="text"
              onFocus={() => setFocas(true)}
              onBlur={() => setFocas(false)}
              className="bg-secondary text-white pl-16 pr-40 w-full h-12 rounded-3xl outline-none"
            />
            <button className="absolute right-2 z-10 bg-primary text-white py-2 px-8 rounded-3xl hover:bg-primary/90 transition duration-200">
              tell me
            </button>
          </div>
          <button className="border border-primary text-white font-bold rounded-3xl px-4 mt-4 py-2 hover:bg-secondary transition duration-200">
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
          <div className=" flex overflow-hidden flex-col-reverse lg:flex-row relative mt-6">
            <div
              className={`flex lg:translate-x-24 overflow-hidden translate-x-[230px] mt-8 w-[300px] lg:w-[600px] duration-700 ${
                active === false ? "opacity-0" : ""
              }`}
            >
              <div className=" bg-[#151A1D] w-6 lg:h-[520px] h-[720px] mr-4 " />
              <div className=" text-white">
                <h3 className=" text-3xl font-bold">
                  How to use the ABS.AI Chatbot?
                </h3>
                <div>
                  <div className=" my-8 ml-6 hover:text-primary duration-300">
                    <h3 className=" text-xl mb-4">
                      Answers all your questions
                    </h3>
                    <p className="text-[#ddd] text-sm">
                      The bot is able to answer all your questions regarding our
                      products and services or our company expertise.
                    </p>
                  </div>
                  <div className=" my-8 ml-6 hover:text-primary duration-300">
                    <h3 className=" text-xl mb-4">Upload or record</h3>
                    <p className="text-[#ddd] text-sm">
                      You can easily chat through voice or simple apload a
                      project brief and the chat bot will give you an initial
                      budegt proposal.
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
                      final proposal. Creating a meeting in person is always
                      best for exact prices and durations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mr-[440px] lg:mr-0  ${
                active === true ? "chat-forward" : "chat-backward "
              }`}
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
              <div className=" bg-secondary lg:rounded-tr-2xl rounded-t-2xl flex lg:ml-4 h-20 px-4 items-center border-b border-white ">
                <img src="/chatbot_beta_icon.png" alt="" className=" w-16" />
                <div className=" text-white">
                  <h3 className=" text-sm"> ABS.AI CHATBOT</h3>
                  <p className=" text-xs text-[#A2A6A8]">
                    Answers all your project inquiries
                  </p>
                </div>
              </div>
              <div className=" bg-black h-[500px] lg:w-[800px] w-[410px]"></div>
              <div className=" bg-[#151A1D] lg:ml-3 lg:rounded-br-2xl rounded-b-2xl border-t h-16 border-white flex items-center ">
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
              <p
                className={` text-[#ddd] w-[250px] ${
                  section === 3 ? "ml-96 lg:ml-0" : " lg:ml-0"
                } ${section === 1 ? "ml-20 lg:ml-0" : "lg:ml-0"}  ${
                  section === 2 ? "ml-3 lg:ml-0" : "lg:ml-0"
                } lg:w-full text-center text-2xl`}
              >
                Skip chatting, let’s meet in person!!
              </p>
            </div>
            <div
              className={` ${
                section === 2
                  ? " flex gap-1 lg:translate-x-0 ml-[-120px] lg:ml-0 lg:w-[1200px] w-[350px] mt-2"
                  : ""
              } ${
                section === 1
                  ? " flex gap-1 lg:translate-x-0 ml-4 lg:ml-0 lg:w-[1200px] w-[350px] mt-2"
                  : ""
              } ${
                section === 3
                  ? " flex gap-1 lg:translate-x-0 ml-4 lg:w-[1200px] w-[350px] mt-2"
                  : ""
              }`}
            >
              <div
                className={` ${
                  section === 3 ? "translate-x-[300px] lg:translate-x-0" : ""
                } ${
                  section === 2 ? "translate-x-[80px] lg:translate-x-0" : ""
                } relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}
              >
                <div
                  className={` ${
                    section === 1 || section === 2 || section === 3
                      ? "bg-primary w-full h-[2px]"
                      : ""
                  } absolute`}
                />
              </div>
              <div
                className={`  ${
                  section === 3 ? "translate-x-[300px] lg:translate-x-0" : ""
                } ${
                  section === 2 ? "translate-x-[80px] lg:translate-x-0" : ""
                }   relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}
              >
                <div
                  className={` ${
                    section === 2 || section === 3
                      ? "bg-primary w-full h-[2px]"
                      : ""
                  } absolute`}
                />
              </div>
              <div
                className={` ${
                  section === 3 ? "translate-x-[300px] lg:translate-x-0" : ""
                } ${
                  section === 2 ? "translate-x-[80px] lg:translate-x-0" : ""
                }  relative bg-[#ddd]/50 mt-2 w-full h-[2px]`}
              >
                <div
                  className={` ${
                    section === 3 ? "bg-primary w-full h-[2px]" : ""
                  } absolute`}
                />
              </div>
            </div>
            <form onSubmit={sendEmail}>
              {section === 1 ? (
                <div className="mx-4 lg:mx-0 max-w-full">
                  <h3 className=" text-white my-4 text-2xl">
                    Basic Information
                  </h3>
                  <div>
                    <div
                      className={`inline-block relative mr-2 ${
                        firstnameEmpty ? "mb-8 md:mb-2" : ""
                      }`}
                    >
                      <label htmlFor="" className=" text-white">
                        First name
                      </label>
                      <input
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                        className={`block ${
                          firstnameEmpty ? "border border-red-600" : ""
                        } lg:w-[550px] w-[180px] h-8 mt-2 outline-none px-2 rounded-lg`}
                        type="text"
                        name="first_name"
                        id=""
                      />
                      {firstnameEmpty ? (
                        <span className=" absolute text-red-600">
                          firstname must not be Empty
                        </span>
                      ) : null}
                    </div>
                    <div className="inline-block lg:translate-x-[34px] lg:ml-0 relative ">
                      <label htmlFor="" className=" text-white">
                        Last name
                      </label>
                      <input
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                        className={`block ${
                          lastnameEmpty ? "border border-red-600" : ""
                        } lg:w-[615px] w-[180px] h-8 mt-2 outline-none px-2 rounded-lg`}
                        type="text"
                        name="last_name"
                        id=""
                      />
                      {lastnameEmpty ? (
                        <span className="absolute text-red-600">
                          lastname must not be Empty
                        </span>
                      ) : null}
                    </div>
                    <div className=" my-4">
                      <label htmlFor="" className=" text-white">
                        Your e-mail address
                      </label>
                      <input
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={` block lg:w-[1200px] w-full  h-8 mt-2 outline-none px-2 rounded-lg`}
                        type="text"
                        name="email"
                        id=""
                      />
                    </div>
                    <div>
                      <label htmlFor="" className=" text-white">
                        Your phone number
                      </label>
                      <input
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={` ${
                          mobileEmpty ? "border border-red-600" : ""
                        } block lg:w-[1200px] w-full  h-8 mt-2 outline-none px-2 rounded-lg`}
                        type="text"
                        name="phone"
                        id=""
                      />
                      {mobileEmpty ? (
                        <p className=" text-red-600">
                          mobile must not be Empty
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      formData.first_name === "" ||
                      formData.last_name === "" ||
                      formData.email === "" ||
                      formData.phone === ""
                        ? showMessage(toastTopCenter, "error")
                        : setSection(2)
                    }
                    className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                  >
                    Next Step
                    <IoMdArrowForward />
                  </div>
                </div>
              ) : section === 2 ? (
                <div className=" lg:ml-0">
                  <h3 className=" text-white my-4 text-2xl">
                    About Your Project
                  </h3>
                  <div>
                    <h3 className="text-white text-xl">The Industry</h3>
                    <p className=" text-[#ddd]/50 w-[200px] lg:w-full">
                      Select the industry you work in. Select only one
                    </p>
                    <div className=" flex flex-wrap   relative gap-4 lg:w-[1200px] w-[250px] md:w-[350px] mt-4">
                      {industry.map((e) => {
                        return (
                          <div
                            onClick={() =>
                              setFormData({ ...formData, industry: e.name })
                            }
                            className={` ${
                              formData.industry === e.name ? " bg-primary" : ""
                            } duration-200 text-white cursor-pointer  border-primary border rounded-3xl px-3 py-2`}
                            key={e.id}
                          >
                            <p>{e.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h3 className="text-white text-xl">The Platform</h3>
                    <p className=" text-[#ddd]/50 w-[200px] lg:w-full">
                      Select the platform you need for your project. You can
                      select more than one
                    </p>
                    <div className=" flex flex-wrap gap-4 lg:w-[1200px] w-[250px] md:w-[350px] mt-4">
                      {platform.map((e) => {
                        return (
                          <div
                            onClick={() => handlePlatform(e.name)}
                            className={` ${
                              platformSelect.includes(e.name)
                                ? " bg-primary"
                                : ""
                            } duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`}
                            key={e.id}
                          >
                            <p>{e.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h3 className="text-white text-xl">Design</h3>
                    <p className=" text-[#ddd]/50 w-[200px] lg:w-full">
                      Do you need a UI Design for your platform. Select only one
                    </p>
                    <div className=" flex flex-wrap gap-4 lg:w-[1200px] w-[250px] md:w-[350px] mt-4">
                      {design.map((e) => {
                        return (
                          <div
                            onClick={() =>
                              setFormData({ ...formData, design: e.name })
                            }
                            className={` ${
                              formData.design === e.name ? " bg-primary" : ""
                            } duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`}
                            key={e.id}
                          >
                            <p>{e.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h3 className="text-white text-xl">AI-Based Solutions</h3>
                    <p className=" text-[#ddd]/50 w-[200px] lg:w-full">
                      Will your project require AI Models? You can select more
                      than one
                    </p>
                    <div className=" flex flex-wrap gap-4 lg:w-[1200px] w-[250px] md:w-[350px] mt-4">
                      {ai.map((e) => {
                        return (
                          <div
                            onClick={() => handleAi(e.name)}
                            className={` ${
                              aiSelect.includes(e.name) ? " bg-primary" : ""
                            } duration-200 text-white cursor-pointer border-primary border rounded-3xl px-3 py-2`}
                            key={e.id}
                          >
                            <p>{e.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" mt-4">
                    <h3 className="text-white text-xl">Project Description</h3>
                    <p className=" text-[#ddd]/50 w-[200px] lg:w-full">
                      Describe your project in briefly.
                    </p>
                    <textarea
                      value={formData.project_description}
                      name="project_description"
                      onChange={handleChange}
                      className=" lg:w-full w-[250px] mt-4 outline-none"
                    ></textarea>
                  </div>
                  <div className=" gap-10">
                    <div
                      onClick={() =>
                        aiSelect.length === 0 ||
                        formData.design === "" ||
                        formData.industry === "" ||
                        platformSelect.length === 0 ||
                        formData.project_description === ""
                          ? showMessage(toastTopCenter, "error")
                          : setSection(3)
                      }
                      className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Next Step
                      <IoMdArrowForward />
                    </div>
                    <div
                      onClick={() => setSection(1)}
                      className=" mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-8 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Back
                    </div>
                  </div>
                </div>
              ) : section === 3 ? (
                <div className=" lg:w-[1200px] w-full mt-4">
                  <h3 className=" text-white ml-80 lg:ml-0 my-4 text-2xl">
                    Meeting Details
                  </h3>
                  <div className=" text-white flex items-center translate-x-[300px] lg:translate-x-0 w-[400px] lg:w-full gap-4 ">
                    <AlertCircle />
                    <p>
                      Confirmation of the meeting details will be sent through
                      e-mail. Please Follow up your email. If a problem arises
                      please contact us through our direct contact channels.
                    </p>
                  </div>
                  <h3 className=" text-white ml-80 lg:ml-0 my-4 text-2xl">
                    Location
                  </h3>
                  <div className=" bg-white lg:w-fit w-[400px] p-4 translate-x-[300px] lg:translate-x-0">
                    <h3 className=" font-bold text-black text-2xl">Location</h3>
                    <div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            location: "At ABS.AI Headquarters",
                          })
                        }
                        className={`${
                          formData.location === "At ABS.AI Headquarters"
                            ? "bg-primary text-white"
                            : ""
                        }  cursor-pointer duration-200 border mb-2 mt-2 px-10 text-center py-2`}
                      >
                        At ABS.AI Headquarters
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            location: "At your headquarters",
                          })
                        }
                        className={`${
                          formData.location === "At your headquarters"
                            ? "bg-primary text-white"
                            : ""
                        }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                      >
                        At your headquarters
                      </div>
                      <div
                        onClick={() =>
                          setFormData({
                            ...formData,
                            location: "Online Meeting",
                          })
                        }
                        className={`${
                          formData.location === "Online Meeting"
                            ? "bg-primary text-white"
                            : ""
                        }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                      >
                        Online Meeting
                      </div>
                    </div>
                  </div>
                  <h3 className=" text-white ml-80 lg:ml-0 my-4 text-2xl">
                    Date and Time
                  </h3>
                  <div className=" flex flex-col lg:flex-row gap-8 w-[1000px]">
                    <Calendar
                      className="w-[400px] translate-x-[300px] lg:translate-x-0 "
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          date: e.value.toLocaleDateString("en-US"),
                        })
                      }
                      inline
                      showWeek
                    />
                    <div className=" bg-white lg:w-fit w-[400px] translate-x-[300px] lg:translate-x-0 p-4">
                      <h3 className=" font-bold text-black text-2xl">
                        Time Slots
                      </h3>
                      <div className=" flex gap-2 mt-2">
                        <div
                          onClick={() =>
                            setFormData({ ...formData, time_slot: "30 min" })
                          }
                          className={`${
                            formData.time_slot === "30 min"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          30 min
                        </div>
                        <div
                          onClick={() =>
                            setFormData({ ...formData, time_slot: "1 Hour" })
                          }
                          className={`${
                            formData.time_slot === "1 Hour"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          1 Hour
                        </div>
                        <div
                          onClick={() =>
                            setFormData({ ...formData, time_slot: "1+ Hour" })
                          }
                          className={`${
                            formData.time_slot === "1+ Hour"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          1+ Hour
                        </div>
                      </div>
                      <h3 className=" font-bold  text-black my-3">
                        Workhours Time Slots (PM)
                      </h3>
                      <div className=" flex flex-wrap gap-2">
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "1:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "1:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          1:00
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "1:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "1:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          1:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "2:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "2:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          2:00
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "2:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "2:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          2:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "3:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "3:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          3:00
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "3:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "3:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          3:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "4:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "4:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          4:00
                        </div>
                      </div>
                      <p className=" text-black font-bold">
                        Post-workhours Time Slots (PM)
                      </p>
                      <div className=" flex flex-wrap gap-2">
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "7:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "7:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          7:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "8:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "8:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          8:00
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "8:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "8:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          8:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "9:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "9:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          9:00
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "9:30",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "9:30"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          9:30
                        </div>
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              work_hours_time_slot: "10:00",
                            })
                          }
                          className={`${
                            formData.work_hours_time_slot === "10:00"
                              ? "bg-primary text-white"
                              : ""
                          }  cursor-pointer duration-200 border mb-2 px-10 text-center py-2`}
                        >
                          10:00
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center lg:justify-end lg:items-end">
                    <div
                      onClick={() => setSection(2)}
                      className=" mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-8 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Back
                    </div>
                    <button
                      onClick={() =>
                        formData.location === "" ||
                        formData.time_slot === "" ||
                        formData.date === ""
                          ? showMessage(toastTopCenter, "error")
                          : sendEmail()
                      }
                      className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-4 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Send request
                      <IoMdArrowForward />
                    </button>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <Toast ref={toastTopCenter} position="top-center" />
      <Footer />
    </>
  );
}
