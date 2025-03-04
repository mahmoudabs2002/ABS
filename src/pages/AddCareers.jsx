import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Swal from "sweetalert2";

import {
  Search,
  ArrowRight,
  User,
  Clock3,
  BriefcaseBusiness,
} from "lucide-react";

import { jobs } from "../assets/data";

import { useNavigate } from "react-router-dom";

import { Dialog } from "primereact/dialog";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export default function AddCareers() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [position, setPosition] = useState("");
  const [time, setTime] = useState("");
  const [exp, setExp] = useState("");
  const [dec, setDec] = useState("");
  const [link, setLink] = useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "jobs"); // Get collection reference
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

  // function formatDate(dateString) {
  //   // Convert "20/2/2025" to "2025-02-20" (ISO format)
  //   const [day, month, year] = dateString.split("/");
  //   const date = new Date(
  //     `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  //   );

  //   const now = new Date();
  //   const timeDiff = now - date;
  //   const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  //   const formattedTime = date.toLocaleString("en-US", {
  //     hour: "numeric",
  //     minute: "2-digit",
  //     hour12: true,
  //   });

  //   let dayIndicator;
  //   if (daysDiff === 0) {
  //     dayIndicator = "Today";
  //   } else if (daysDiff === 1) {
  //     dayIndicator = "1d";
  //   } else {
  //     dayIndicator = `${daysDiff}d`;
  //   }

  //   return `${dayIndicator}`;
  // }

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleAddData = async (e) => {
    e.preventdefault;
    setLoading(true); // Start loading
    if (title === "") {
      return null;
    }
    if (dec === "") {
      return null;
    }
    if (time === "") {
      return null;
    }
    if (exp === "") {
      return null;
    }
    if (position === "") {
      return null;
    }
    try {
      const docRef = await addDoc(collection(db, "jobs"), {
        title: title,
        dec: dec,
        exp: exp,
        position: position,
        time: time,
        createdAt: new Date(),
      });
      if (docRef) {
               Swal.fire({
                  title: "data added successfully",
                  icon: "success",
                  draggable: true,
                });
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setLoading(false); // Stop loading
  };
  console.log(data);
  const deleteDocument = async (collectionName, docId) => {
    try {
      await deleteDoc(doc(db, collectionName, docId));
      Swal.fire({
        title: "Document successfully deleted!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
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
          </div>
        </div>
        <div className=" relative">
          <button
            className=" absolute top-[-70px] right-0 z-60 text-white float-right mr-4 rounded-3xl px-4 py-2 bg-primary"
            onClick={() => setVisible(true)}
          >
            add Job
          </button>
          <Dialog
            header="add job"
            visible={visible}
            // style={{ width: "50vw" }}
            className=" w-full lg:w-[50vw]"
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          >
            <label htmlFor="">Add Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className=" border block rounded-lg w-full my-2"
            />
            <label htmlFor="">Add Position number</label>
            <input
              type="text"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              className=" border block rounded-lg w-full my-2"
            />
            <label htmlFor=""> add Exp</label>
            <input
              type="text"
              onChange={(e) => setExp(e.target.value)}
              className=" border block rounded-lg w-full  my-2 "
            />
            <label htmlFor=""> add Time(part-time or full-time ) </label>
            <input
              type="text"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              className=" border block rounded-lg w-full  my-2 "
            />
            <label htmlFor=""> add link </label>
            <input
              type="text"
              onChange={(e) => setLink(e.target.value)}
              value={link}
              className=" border block rounded-lg w-full  my-2 "
            />
            <label htmlFor=""> add job Describe </label>
            <textarea
              type="text"
              onChange={(e) => setDec(e.target.value)}
              value={dec}
              className=" border block rounded-lg w-full  my-2 "
            />
            <button
              className=" bg-primary text-white px-4 py-2 rounded-3xl text-center block mx-auto mt-4 "
              disabled={loading}
              onClick={handleAddData}
            >
              {loading ? "Adding..." : "Add Data"}
            </button>
          </Dialog>
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
          {filteredData === 0
            ? jobs.map((e) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    key={e}
                    onClick={() => navigate(`/careers-details/${e.id}`)}
                    className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary"
                  >
                    <div className=" relative">
                      <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                      <div className=" flex flex-col lg:flex-row  gap-4 text-white/50 ">
                        {/* <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div> */}
                        <div className=" flex gap-2">
                          <span>
                            <User />
                          </span>{" "}
                          {e.position}
                        </div>
                        <div className=" flex gap-2">
                          <span>
                            <BriefcaseBusiness />
                          </span>{" "}
                          {e.exp}
                        </div>
                        <div className=" flex gap-2">
                          <span>
                            <Clock3 />
                          </span>{" "}
                          {e.time}
                        </div>
                        <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                          view
                          <span>
                            <ArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            : filteredData.map((e) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    key={e}
                    onClick={() => navigate(`/careers-details/${e.id}`)}
                    className=" mb-3 cursor-pointer rounded-xl p-7 bg-secondary"
                  >
                    <div className=" relative">
                      <h3 className=" mb-4 text-white text-3xl">{e.title}</h3>
                      <div className="  flex flex-col lg:flex-row gap-4 text-white/50 ">
                        {/* <div className=" absolute right-4 top-[-10px] ">{formatDate(e.date)}</div> */}
                        <div className=" flex gap-2">
                          <span>
                            <User />
                          </span>{" "}
                          {e.position}
                        </div>
                        <div className=" flex gap-2">
                          <span>
                            <BriefcaseBusiness />
                          </span>{" "}
                          {e.exp}
                        </div>
                        <div className=" flex gap-2">
                          <span>
                            <Clock3 />
                          </span>{" "}
                          {e.time}
                        </div>
                        <div  onClick={() => deleteDocument("jobs", e.id)} className=" bg-red-700 text-white py-2 px-4 rounded-2xl absolute top-[-15px] right-0"> X</div>
                        <div className=" flex py-2 px-4 gap-3 rounded-3xl bg-primary text-white absolute right-0 bottom-[-6px]">
                          view
                          <span>
                            <ArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
