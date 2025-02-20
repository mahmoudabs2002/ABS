import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ui , app , web , chatbots , dataset, nlp , computer} from "../../assets/data.js"

export default function OurProjects() {
  const navigate = useNavigate();

  const [sideBar, setSideBar] = useState("");
 
  return (
    <div className=" py-20 px-20 relative bg-[url('/our_projects_background_image.png')] bg-center bg-cover bg-no-repeat">
      <div className="">
        <h3 className=" text-center font-bold text-[32px] text-primary ">
          Our Projects
        </h3>
        <div className=" flex justify-between relative z-50 overflow-hidden ">
          <div className=" mt-4  border lg:w-[300px] w-[200px] max-h-[550px] py-8 text-white rounded-[50px]">
            <p className=" text-center text-sm text-slate-300/50 mb-3">
              Starting 2023
            </p>
            <div className=" flex items-center justify-center mb-[-20px]">
              <p className=" top-0 font-bold text-[24px] left-12">15</p>
              <img
                src="/our_projects_tab_bar_image.png"
                className=" mb-8"
                alt=""
              />
            </div>
            <ul className=" text-center relative ">
              <li
                className={` absolute w-[98%]  bg-primary rounded-r-3xl py-5 duration-700 ${
                  sideBar === ""
                    ? "-top-2"
                    : sideBar === "App"
                    ? "top-11"
                    : sideBar === "Web"
                    ? "top-24"
                    : sideBar === "Computer"
                    ? "top-[148px]"
                    : sideBar === "NLP"
                    ? "top-[200px]"
                    : sideBar === "Chatbots"
                    ? "top-[252px]"
                    : sideBar === "Dataset"
                    ? "top-[302px]"
                    : ""
                }`}
              ></li>
              <li
                className={` relative my-7 cursor-pointer  font-bold `}
                onClick={() => setSideBar("")}
              >
                {" "}
                UI/UX Desgin
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("App")}
              >
                {" "}
                App Development
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Web")}
              >
                {" "}
                Web Development
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Computer")}
              >
                {" "}
                Computer Vision
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("NLP")}
              >
                {" "}
                NLP Models
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700`}
                onClick={() => setSideBar("Chatbots")}
              >
                {" "}
                Chatbots
              </li>
              <li
                className={` relative my-7 cursor-pointer  font-bold duration-700 `}
                onClick={() => setSideBar("Dataset")}
              >
                {" "}
                Dataset Collection
              </li>
            </ul>
          </div>
          {/*================== UI/UX================= */}
          <div
            className={` ${
              sideBar === "" ? "" : "opacity-0 -right-[1800px] absolute z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 w-full lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
            {ui.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== App Develpoer ============== */}
          <div
            className={` ${
              sideBar === "App"
                ? " "
                : " opacity-0 absolute -right-[1800px] z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
              {app.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== web Develpoer ============== */}
          <div
            className={` ${
              sideBar === "Web"
                ? " "
                : " opacity-0 absolute -right-[1800px] z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
             {web.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== Computer Develpoer ============== */}
          <div
            className={` ${
              sideBar === "Computer"
                ? " "
                : " opacity-0 absolute -right-[1800px] z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
             {computer.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== NLP Develpoer ============== */}
          <div
            className={` ${
              sideBar === "NLP"
                ? " "
                : " opacity-0 absolute  -right-[1800px] z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
             {nlp.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== App Develpoer ============== */}
          <div
            className={` ${
              sideBar === "Chatbots"
                ? " "
                : " opacity-0 absolute -right-[1800px] z-[-10]"
            }flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
            {chatbots.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/*================== App Develpoer ============== */}
          <div
            className={` ${
              sideBar === "Dataset"
                ? " "
                : " opacity-0 absolute -right-[1800px] z-[-10]"
            } flex items-center duration-500 overflow-hidden translate-y-48 lg:translate-y-0 translate-x-2 lg:translate-x-0 max-h-[250px] lg:max-h-full flex-1 lg:mx-4  flex-wrap`}
          >
             {dataset.map((e) => {
              return (
                <div key={e} className=" relative mx-2">
                  <img
                    src={e.image}
                    className=" w-[400px] max-w-[400px] max-h-[251px] "
                    alt=""
                  />
                  <div className=" px-2 bg-black/60 text-white p-2 absolute w-full bottom-0 rounded-xl">
                    <h3 className="px-2 text-sm font-bold ">{e.title}</h3>
                    <div className="flex  mt-2">
                    {e.tec.map((tec) => {
                      return (
                        <div key={tec} className=" flex gap-2">
                          <span className=" text-[12px] bg-primary w-fit mx-2 rounded-2xl py-1 px-2">
                            {tec}
                          </span>
                        </div>
                      );
                    })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => navigate("/specialities")}
          className="bg-primary text-white py-2 px-8 rounded-3xl block float-end "
        >
          Discover
        </button>
      </div>
    </div>
  );
}
