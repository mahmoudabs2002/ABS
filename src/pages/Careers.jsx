import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Search, ListFilter ,ArrowRight , User ,Clock3 , BriefcaseBusiness } from "lucide-react";
import { jobs } from "../assets/data";
import { useNavigate } from "react-router-dom";
export default function Careers() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function formatDate(dateString) {
    // Convert "20/2/2025" to "2025-02-20" (ISO format)
    const [day, month, year] = dateString.split("/");
    const date = new Date(
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    );

    const now = new Date();
    const timeDiff = now - date;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    let dayIndicator;
    if (daysDiff === 0) {
      dayIndicator = "Today";
    } else if (daysDiff === 1) {
      dayIndicator = "1d";
    } else {
      dayIndicator = `${daysDiff}d`;
    }

    return `${dayIndicator}`;
  }
  
     // Filter data based on search input
     const filteredData = jobs.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) 
        &&
          (selectedTags === "" ||
            item.tags.includes(selectedTags))
      );
  return (
    <div>
      <Navbar />
      <div className="bg-[url(/contact_us_background_image.png)] pb-10  bg-top">
        <h3
          className={` relative pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
        >
          Careers
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
              <button
                onClick={() =>
                  isOpen === true ? setIsOpen(false) : setIsOpen(true)
                }
                className=" bg-white h-[40px] px-4 rounded-xl ml-[-8px] lg:ml-2"
              >
                <ListFilter className=" text-primary" />
              </button>
            </div>
          </div>
        </div>
        <div className="mx-40 ">
        {filteredData.length === 0 ? (
          <div>
            <h3 className=" my-8 relative text-center text-white text-xl">
              No career with this name
            </h3>
            {/* <h3 className=" text-white text-2xl mb-4 relative text-center ">another careers</h3> */}
          </div>
        ) : null}
          { filteredData === 0 ? jobs.map((e) => {
            return (
              <div key={e} onClick={()=> navigate(`/careers-details/${e.id}`)} className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary">
                <div className=" relative">
                  <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                  <div className=" flex flex-col lg:flex-row  gap-4 text-white/50 ">
                    <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div>
                    <div className=" flex gap-2"><span><User/></span> {e.positions}</div>
                    <div className=" flex gap-2"><span><BriefcaseBusiness/></span> {e.exp}</div>
                    <div className=" flex gap-2"><span><Clock3/></span> {e.time}</div>
                    <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                      view
                      <span>
                        <ArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) :  
          filteredData.map((e) => {
            return (
              <div key={e} onClick={()=> navigate(`/careers-details/${e.id}`)} className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary">
                <div className=" relative">
                  <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                  <div className="  flex flex-col lg:flex-row gap-4 text-white/50 ">
                    <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div>
                    <div className=" flex gap-2"><span><User/></span> {e.positions}</div>
                    <div className=" flex gap-2"><span><BriefcaseBusiness/></span> {e.exp}</div>
                    <div className=" flex gap-2"><span><Clock3/></span> {e.time}</div>
                    <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                      view
                      <span>
                        <ArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
