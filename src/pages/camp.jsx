import { useState , useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Search, ListFilter } from "lucide-react";
import {blogs} from "../assets/data"
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
export default function Camp() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "blogs"); // Get collection reference
        const querySnapshot = await getDocs(usersCollectionRef); // Fetch documents

        const finelData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData(finelData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const itemsPerPage = 6;

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item?.caption?.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div>
            <h3 className=" my-8 relative text-center text-white text-xl">
              {
                loading ? "Loading...." : "No blogs with this name"
              }
            </h3>
            <h3 className=" text-white text-2xl mb-4 relative text-center ">another blogs</h3>
          </div>
        ) : null}
        <div className=" flex flex-wrap gap-7 relative mx-40">
          {filteredData.length === 0
            ? data.map((e) => {
                return (
                  <div
                  className="  cursor-pointer translate-x-[-80px] lg:translate-x-0 relative bg-secondary rounded-xl w-[320px]"
                  key={e}
                  // onClick={()=> navigate(`/blog/${e.title}`)}
                >
                  <img
                    className="max-w-[320px] max-h-[250px] min-h-[250px]   object-cover "
                    src={e.image}
                    alt=""
                  />
                  <div className=" p-4 pb-16">
                    {/* <h3 className=" text-primary">{e.title}</h3> */}
                    <p className="text-white text-sm">{e.caption}</p>
                    {/* <div className=" flex absolute bottom-4 flex-wrap gap-2 mt-4">
                      {e.tags.slice(0,2).map((tag) => {
                        return (
                          <div className=" flex" key={tag}>
                            <div className=" text-sm border border-primary px-4 rounded-2xl text-white">
                              {tag}
                            </div>
                          </div>
                        );
                      })}
                    </div> */}
                    <button className=" capitalize absolute right-3 bottom-4 text-right text-white bg-primary py-2 px-2 rounded-full">
                      more info
                    </button>
                  </div>
                </div>
                );
              })
            : currentData.map((e) => {
                return (
                  <div
                    className="  cursor-pointer translate-x-[-80px] lg:translate-x-0 relative bg-secondary rounded-xl w-[320px]"
                    key={e}
                    // onClick={()=> navigate(`/blog/${e.title}`)}
                  >
                    <img
                      className="max-w-[320px] max-h-[250px] min-h-[250px]  object-cover "
                      src={e.image}
                      alt=""
                    />
                    <div className=" p-4 pb-16">
                      {/* <h3 className=" text-primary">{e.title}</h3> */}
                      <p className="text-white text-sm">{e.caption}</p>
                      {/* <div className=" flex absolute bottom-4 flex-wrap gap-2 mt-4">
                        {e.tags.slice(0,2).map((tag) => {
                          return (
                            <div className=" flex" key={tag}>
                              <div className=" text-sm border border-primary px-4 rounded-2xl text-white">
                                {tag}
                              </div>
                            </div>
                          );
                        })}
                      </div> */}
                      <button className=" capitalize absolute right-3 bottom-4 text-right text-white bg-primary py-2 px-2 rounded-full">
                        more info
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
        <div className=" border border-[#eee] bg-white relative w-fit mx-auto text-primary my-4 text-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="  relative border-l border-t border-b  px-2  z-20  mr-2 disabled:text-primary/50  disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className=" border px-4 ">
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
           className=" border-r border-t px-4 relative  z-20  ml-2 cursor-pointer disabled:text-primary/50  disabled:cursor-not-allowed"
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
