import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Search, ListFilter } from "lucide-react";
import { ArrowRight } from "lucide-react";
import {blogs} from "../assets/data"
import { useNavigate } from "react-router-dom";

export default function Camp() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Filter data based on search input
  const filteredData = blogs.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedTags === "" ||
        item.tags.includes(selectedTags))
  );
  const tags = [
    "UI/UX",
    "AI",
    "Flutter",
    "Cybersecurity",
    "Blockchain and Crypto",
    "Emerging Technologies",
    "Green Technology",
    "Robotics",
    "Biotechnology",
    "Virtual Reality and Augmented Reality",
    "Space Technology",
    "Internet of Things",
    "Ethical Technology",
    "Fintech",
    "Autonomous Vehicles",
    "Advanced Computing",
    "Tech Startups",
    "Wearable Technology",
    "Edtech",
    "Virtual Workspaces",
    "Cloud Computing",
    "Big Data and Analytics",
    "Human-Computer Interaction",
    "Digital Transformation",
    "E-commerce",
    "Advanced Networking",
    "Tech in Healthcare",
    "Tech Regulations",
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-secondary/95 relative py-4">
        <img src="/Group 162645 (1).png" className=" absolute top-0" alt="" />
        <h3
          className={` relative pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
        >
          Camp <span className=" text-primary">Blogs</span> <br />
        </h3>
        <div className=" flex relative mb-12 ">
          <div className=" flex items-center justify-center mt-10  mx-auto ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className=" lg:w-[930px] px-8 rounded-xl ml-[-10px] h-[40px]"
              placeholder="Search here"
            />
            <Search className=" text-primary translate-x-[-30px]" />
                <div>
                <button onClick={()=> isOpen === true ?  setIsOpen(false): setIsOpen(true)} className=" bg-white h-[40px] px-4 rounded-xl ml-[-8px] lg:ml-2">
              <ListFilter className=" text-primary" />
            </button>
                </div>
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div>
            <h3 className=" my-8 relative text-center text-white text-xl">
              No blogs with this name
            </h3>
            <h3 className=" text-white text-2xl mb-4 relative text-center ">another blogs</h3>
          </div>
        ) : null}
        <div className=" flex flex-wrap gap-7 relative mx-40">
          {filteredData.length === 0
            ? blogs.map((e) => {
                return (
                  <div
                    className=" cursor-pointer translate-x-[-80px] lg:translate-x-0  relative bg-secondary rounded-xl w-[320px]"
                    key={e}
                    onClick={()=> navigate(`/blog/${e.title}`)}
                  >
                    <img
                      className="max-w-[320px] max-h-[320px]  object-cover "
                      src={e.image}
                      alt=""
                    />
                    <div className=" p-4 pb-16">
                      <h3 className=" text-primary">{e.title}</h3>
                      <p className="text-white text-sm">{e.dec}</p>
                      <div className=" flex absolute bottom-4 flex-wrap gap-2 mt-4">
                        {e.tags.slice(0,1).map((tag) => {
                          return (
                            <div className=" flex" key={tag}>
                              <div className=" text-sm border border-primary px-4 rounded-2xl text-white">
                                {tag}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <button className=" absolute right-1 bottom-2 text-right text-white bg-primary py-2 px-2 rounded-full">
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                );
              })
            : filteredData.map((e) => {
                return (
                  <div
                    className="  cursor-pointer translate-x-[-80px] lg:translate-x-0 relative bg-secondary rounded-xl w-[320px]"
                    key={e}
                    onClick={()=> navigate(`/blog/${e.title}`)}
                  >
                    <img
                      className="max-w-[320px] max-h-[320px]  object-cover "
                      src={e.image}
                      alt=""
                    />
                    <div className=" p-4 pb-16">
                      <h3 className=" text-primary">{e.title}</h3>
                      <p className="text-white text-sm">{e.dec}</p>
                      <div className=" flex absolute bottom-4 flex-wrap gap-2 mt-4">
                        {e.tags.slice(0,2).map((tag) => {
                          return (
                            <div className=" flex" key={tag}>
                              <div className=" text-sm border border-primary px-4 rounded-2xl text-white">
                                {tag}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <button className=" absolute right-1 bottom-2 text-right text-white bg-primary py-2 px-2 rounded-full">
                        <ArrowRight />
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
