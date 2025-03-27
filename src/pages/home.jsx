import { IoMdArrowForward } from "react-icons/io";
import OurProjects from "../components/ourProjects";
import DateSet from "../components/dataSet";
import ProjectSection from "../components/projectSection";
import WorkedSection from "../components/workedSection";
import ApsSection from "../components/apsSection";
import { Helmet } from "react-helmet-async";
import Collaborations from "../components/collaborations";
import Commen from "../components/commonSection";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import "animate.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(
          carouselRef.current.scrollLeft / window.innerWidth
        );
        setSlide(index + 1);
      }
    };

    carouselRef.current?.addEventListener("scroll", handleScroll);
    return () =>
      carouselRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  // Set autoplay functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide === 7 ? 1 : prevSlide + 1)); // Loop back to slide 1 after 7
    }, 4000); // Change slide every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className=" overflow-hidden">
      <Helmet>
        <title>ABS.ai | Home</title>
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
      <div
        className={` bg-secondary px-20 py-[20px] relative mx-auto duration-500 ${
          slide === 1
            ? "bg-[url('/web_service_gradient.png')]"
            : slide === 2
            ? "bg-[url('/mobile_service_gradient.png')]"
            : slide === 3
            ? "bg-[url('/ui_service_gradient.png')]"
            : slide === 4
            ? "bg-[url('/computer_vision_service_gradient.png')]"
            : slide === 5
            ? "bg-[url('/nlp_service_gradient.png')]"
            : slide === 6
            ? "bg-[url('/chatbots_service_gradient.png')]"
            : slide === 7
            ? "bg-[url('/datasets_service_gradient.png')]"
            : "bg-[url('/web_service_gradient.png')]"
        }  bg-center bg-cover bg-no-repeat overflow-hidden `}
      >
        <div className=" text-center mt-10 ">
          {slide === 1 ? (
            <h3
              className={` duration-300 lg:text-[40px] text-[20px] font-bold  text-white ${
                slide === 1 || slide === 2 ? "heading1" : ""
              } `}
            >
              We create <span className=" text-primary">WEBSITES</span> <br />
              that <span className=" text-primary">TRANSFORM BUSINESSES</span>
            </h3>
          ) : slide === 2 ? (
            <h3
              className={` ${
                slide === 2 ? "heading2" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create <span className=" text-primary">APPS</span> <br /> that{" "}
              <span className=" text-primary ">PROVIDE SOLUTIONS</span>
            </h3>
          ) : slide === 3 ? (
            <h3
              className={` ${
                slide === 3 ? "heading3" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create <span className=" text-primary">UI DESIGNS</span> <br />{" "}
              that{" "}
              <span className=" text-primary uppercase">
                manifest your unique features
              </span>
            </h3>
          ) : slide === 4 ? (
            <h3
              className={` ${
                slide === 4 ? "heading4" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create{" "}
              <span className=" text-primary">COMPUTER VISION MODELS</span> that{" "}
              <br />{" "}
              <span className=" text-primary">
                CONVERT IMAGINATION TO REALITY
              </span>
            </h3>
          ) : slide === 5 ? (
            <h3
              className={` ${
                slide === 5 ? "heading5" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create <span className=" text-primary">CHATBOT AGENTS</span>{" "}
              that <br /> <span className=" text-primary">KNOW IT ALL</span>
            </h3>
          ) : slide === 6 ? (
            <h3
              className={` ${
                slide === 6 ? "heading6" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create <span className=" text-primary">NLP MODELS</span> that{" "}
              <br /> <span className=" text-primary">TRANSLATE TO ACTIONS</span>
            </h3>
          ) : slide === 7 ? (
            <h3
              className={` ${
                slide === 7 ? "heading7" : ""
              } duration-300 lg:text-[40px] text-[20px] font-bold  text-white `}
            >
              We create <span className=" text-primary">DATASETS</span> that{" "}
              <br /> <span className=" text-primary">LEAD TO SUCCESS</span>
            </h3>
          ) : null}
        </div>
        <div className="carousel">
          <div className="carousel__stage ">
            <input
              className="carousel__item-input"
              onClick={() => setSlide(1)}
              type="radio"
              name="item"
              id="input_0"
              checked={slide === 1 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(2)}
              type="radio"
              name="item"
              id="input_1"
              checked={slide === 2 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(3)}
              type="radio"
              name="item"
              id="input_2"
              checked={slide === 3 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(4)}
              type="radio"
              name="item"
              id="input_3"
              checked={slide === 4 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(5)}
              type="radio"
              name="item"
              id="input_4"
              checked={slide === 5 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(6)}
              type="radio"
              name="item"
              id="input_5"
              checked={slide === 6 ? "checked" : ""}
            />
            <input
              className="carousel__item-input"
              onClick={() => setSlide(7)}
              type="radio"
              name="item"
              id="input_6"
              checked={slide === 7 ? "checked" : ""}
            />
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-1">
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src=" website_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-2">
              {" "}
              <img
                className="w-[800px] mt-2 relative lg:mx-auto"
                src="mobile_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-3">
              {" "}
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src="ui_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-4">
              {" "}
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src="computer_vision_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-5">
              {" "}
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src="nlp_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-6">
              {" "}
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src="chatbots_service_image.png"
                alt=""
              />
            </div>
            <div className="carousel__item-content top-[-110px]  sm:top-[-70px] lg:top-0 item-7">
              {" "}
              <img
                className="w-[800px] mt-2 relative mx-auto"
                src="datasets_service_image.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" relative z-[500] lg:translate-y-[-50px] w-full translate-y-[-40px] md:translate-y-[-80px] lg:translate-x-[-130px]">
          <div
            className={` ${
              slide === 1
                ? " translate-x-[-10] lg:translate-x-40"
                : slide === 2
                ? " translate-x-[-10] lg:translate-x-32"
                : slide === 3
                ? " translate-x-[-10] lg:translate-x-28"
                : slide === 4
                ? " translate-x-[-10] lg:translate-x-24"
                : slide === 5
                ? " translate-x-[-10] lg:translate-x-20"
                : slide === 6
                ? " translate-x-[-10] lg:translate-x-16"
                : slide === 7
                ? " translate-x-[-10] lg:translate-x-12"
                : " translate-x-[-10] lg:translate-x-40"
            } duration-300 flex justify-center z-[80000] middle  mt-8 items-center`}
          >
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 1 ? "p-2 " : "p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(1)}
            >
              <img
                src={
                  slide === 1
                    ? "/website_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 1 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 2 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(2)}
            >
              <img
                src={
                  slide === 2
                    ? "/mobile_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 2 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 3 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(3)}
            >
              <img
                src={
                  slide === 3
                    ? "/ui_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 3 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 4 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(4)}
            >
              <img
                src={
                  slide === 4
                    ? "/computer_vision_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 4 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 5 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(5)}
            >
              <img
                src={
                  slide === 5
                    ? "/nlp_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 5 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 6 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(6)}
            >
              <img
                src={
                  slide === 6
                    ? "/chatbot_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 6 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
            <div
              className={` bg-secondary  duration-300 cursor-pointer hover:bg-[#303a40] w-fit ${
                slide === 7 ? " p-2 " : " p-3"
              } rounded-full mx-1 `}
              onClick={() => setSlide(7)}
            >
              <img
                src={
                  slide === 7
                    ? "/datasets_icon.png"
                    : "/unselected_carousel_slider_index.png"
                }
                className={`duration-300 ${
                  slide === 7 ? "lg:w-8 min-w-8" : "min-w-2 lg:w-2"
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/specialities")}
          className=" cursor-pointer relative flex items-center float-end mr-[-65px] lg:mr-[85px] bg-primary  my-6 w-fit py-2 px-10 text-white rounded-3xl"
        >
          <button className=" ">Discover</button>
          <IoMdArrowForward />
        </div>
      </div>
      <OurProjects />
      <DateSet />
      <ProjectSection />
      <WorkedSection />
      <ApsSection />
      <Collaborations />
      <Commen />
      <Footer />
    </div>
  );
}
