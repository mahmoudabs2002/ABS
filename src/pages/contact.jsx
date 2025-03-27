/* eslint-disable react/no-unknown-property */
import { Mic } from "lucide-react";
import { Navigation } from "lucide-react";
import { Paperclip } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { v4 as uuidv4 } from "uuid"; // Generate unique IDs
import { Tooltip } from 'primereact/tooltip';
import emailjs from "emailjs-com";

import ReactMarkdown from "react-markdown";
import { industry, platform, design, ai } from "../assets/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toast } from "primereact/toast";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";
// import { io } from "socket.io-client";
import MeetingScheduler from "../components/meeting";
import axios from "axios";

export default function Contact() {
    const micRef = useRef(null);
  const paperclipRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const toastTopCenter = useRef(null);
  const [active, setActive] = useState(true);
  const [focas, setFocas] = useState(false);
  const [platformSelect, setPlatformSelect] = useState([]);
  const [aiSelect, setAiSelect] = useState([]);
  const [section, setSection] = useState(1);
  const [date, setDate] = useState(null);
  const { pathname } = useLocation();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
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
            text: "Our team will contact you in 2 Days time",
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
  
  const animateTypingEffect = (fullText) => {
    if (!fullText) {
      console.error("Error: fullText is undefined or empty");
      return;
    }
  
    let index = 0;
    let currentText = "";
  
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        index++;
  
        setMessages((prev) => {
          const filtered = prev.filter((msg) => msg.animated !== true);
          return [...filtered, { user: false, text: currentText, animated: true }];
        });
      } else {
        clearInterval(interval);
  
        setMessages((prev) =>
          prev.map((msg) =>
            msg.animated ? { ...msg, animated: false } : msg
          )
        );
      }
    }, 50);
  };
  

  // Generate or retrieve user ID
  useEffect(() => {
    let storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      storedUserId = uuidv4(); // Generate new ID
      localStorage.setItem("userId", storedUserId);
    }
    setUserId(storedUserId);
  }, []);
  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessages = [...messages, { user: true, text: message }];
    setMessages(newMessages);
    setMessage("");
    setLoading(true); // Show "Bot is typing..."

    try {
      axios.defaults.headers.common["AbsBackendAI"] =
  "sadkjansdiuanejacjakcadnckasjcnaijbcjabcbakibafaeob";
      const response = await axios.post(
        "http://161.97.126.168:8000/chat",
        JSON.stringify({
          message: message,
          thread_id: userId,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Animate typing effect
      animateTypingEffect(response.data.chatbot_response);
      
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>ABS.ai | Contact us</title>
        <meta
          name="description"
          content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
        />
        <meta
          name="keywords"
          content="abs , ABS ,absai,ABS.ai ,abs.ai , web , app ,Software development company , Custom software solutions , Web development services , Mobile app development , UI/UX design services"
        />
        <meta property="og:title" content="ABS.ai" />
        <meta
          property="og:description"
          content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
        />
        <meta property="og:type" content="website" />
      </Helmet>
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
                className="absolute left-16 w-40 md:w-full z-10 text-sm text-gray-300"
              />
            )}
            <input
              type="text"
              onFocus={() => setFocas(true)}
              onBlur={() => setFocas(false)}
              className="bg-secondary text-white  pl-16 pr-40 w-full h-12 rounded-3xl outline-none"
            />
            <button className="absolute right-2 z-10 bg-primary text-white py-2 px-8 rounded-3xl hover:bg-primary/90 transition duration-200">
              tell me
            </button>
          </div>
          {/* <button className="border border-primary text-white font-bold rounded-3xl px-4 mt-4 py-2 hover:bg-secondary transition duration-200">
            contact us the old way
          </button> */}
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
              className={`flex lg:translate-x-24 overflow-hidden translate-x-[210px] mt-8 w-[300px] lg:w-[600px] duration-700 ${
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
              className={`mr-[400px] lg:mr-0  ${
                active === true ? "chat-forward" : "chat-backward"
              }`}
            >
              <div
                onClick={() =>
                  active === true ? setActive(false) : setActive(true)
                }
                className="bg-primary hidden cursor-pointer lg:block absolute rounded-l-2xl  text-white h-full"
              >
                <div
                  className={`w-7 translate-y-72 duration-300 cursor-pointer ${
                    active === true ? "" : "rotate-180"
                  }`}
                >
                  <ChevronLeft className=" font-bold w-8 h-8 translate-x-[-4px]" />
                </div>
              </div>
              <div className="">
                <div className="bg-secondary lg:rounded-tr-2xl rounded-t-2xl flex lg:ml-4 h-20 px-4 items-center border-b border-white">
                  <img src="/chatbot_beta_icon.png" alt="" className="w-16" />
                  <div className="text-white">
                    <h3 className="text-sm">ABS.AI CHATBOT</h3>
                    <p className="text-xs text-[#A2A6A8]">
                      Answers all your project inquiries
                    </p>
                  </div>
                </div>
                <div className="bg-black h-[500px] lg:w-[800px] w-[390px] p-4 overflow-y-auto flex flex-col">
                  {messages.map((msg, index) => (
                    <div 
                      key={index}
                      className={`mb-2 mx-6 p-2 rounded-lg max-w-fit ${
                        msg.user ? " bg-primary self-start w-[200px] lg:w-[400px] text-white" : "bg-gray-700 w-[200px] lg:w-[400px] self-end text-white"
                      }`}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ))}

                  {/* Fix: Move "Bot is typing..." inside chat messages */}
                  {loading && (
  <div className="bg-gray-700 text-white p-2 rounded-lg max-w-[75%] self-end">
    Bot is typing...
  </div>
)}
                </div>
                <div className="bg-[#151A1D] lg:ml-3 lg:rounded-br-2xl rounded-b-2xl border-t h-16 border-white flex items-center px-4">
                    <Tooltip target={micRef} content="this feature comming soon" position="top" />
      <Tooltip target={paperclipRef} content=" this feature comming soon" position="top" />

      {/* Mic Icon with Tooltip */}
      <Mic ref={micRef} className="text-white mr-4 w-8 cursor-pointer" />

      {/* Paperclip Icon with Tooltip */}
      <Paperclip ref={paperclipRef} className="text-white w-8 cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="bg-[#151A1D] w-full outline-none px-4 caret-white text-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  />

                  <Navigation
                    className="text-white ml-4 w-8 cursor-pointer"
                    onClick={sendMessage}
                  />
                </div>
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
                } ${section === 1 ? "ml-16 lg:ml-0" : "lg:ml-0"}  ${
                  section === 2 ? "ml-6 lg:ml-0" : "lg:ml-0"
                } lg:w-full text-center text-2xl`}
              >
                Skip chatting, let’s meet in person!!
              </p>
            </div>
            <div
              className={` ${
                section === 2
                  ? " flex gap-1 lg:translate-x-0 ml-[-98px] lg:ml-0 lg:w-[1200px] w-[350px] mt-2"
                  : ""
              } ${
                section === 1
                  ? " flex gap-1 lg:translate-x-0 ml-5 lg:ml-0 lg:w-[1200px] w-[350px] mt-2"
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
                  <h3 className=" ml-4 lg:ml-0 text-white my-4 text-2xl">
                    Basic Information
                  </h3>
                  <ContactForm
                    formData={formData}
                    setSection={setSection}
                    handleChange={handleChange}
                  />
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
                          ? Swal.fire({
                              title: "all field is requierd",
                              icon: "error",
                              draggable: true,
                            })
                          : setSection(3)
                      }
                      className=" flex gap-2 items-center bg-primary rounded-3xl text-white py-2 px-10 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Next Step
                      <IoMdArrowForward />
                    </div>
                    <div
                      onClick={() => setSection(1)}
                      className=" mr-8 flex gap-2 items-center bg-[#B8BBBD] rounded-3xl text-white py-2 px-10 w-fit mt-4 float-end cursor-pointer hover:shadow-xl duration-300"
                    >
                      Back
                    </div>
                  </div>
                </div>
              ) : section === 3 ? (
                <MeetingScheduler
                  formData={formData}
                  setFormData={setFormData}
                  date={date}
                  setDate={setDate}
                  setSection={setSection}
                  sendEmail={sendEmail}
                />
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
