import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "primereact/sidebar";
import Footer from "../components/Footer";
import { services } from "../assets/data";
import { Dialog } from "primereact/dialog";
import { db } from "../firebase";
import { categorys, tags } from "../assets/data";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { getCountFromServer } from "firebase/firestore";
import Swal from "sweetalert2";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { storage } from "../firebase";
export default function AddProjexts() {
  const [item, setItem] = useState("");
  const [project, setProject] = useState();
  const [visibleBottom, setVisibleBottom] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [dec, setDec] = useState("");
  const [selectedTec, setSelectedTec] = useState(null);
  const [fullDecs, setFullDecs] = useState("");
  const [Challenge, setChallenge] = useState("");
  const [Solution, setSolution] = useState("");
  const [Category, setCategory] = useState("");
  const [text, setText] = useState("");
  const fileInputRef = useRef(null); // Create a reference for the file input
  const [data, setData] = useState([]);
  const [count , setCount] = useState()

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

  const uploadFile = (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageURL(url);
          console.log("File available at", url);

          // Reset the input field after upload
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        });
      }
    );
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "projects"); // Get collection reference
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

  const getDocumentCount = async () => {
    const collectionRef = collection(db, "projects");
    const snapshot = await getCountFromServer(collectionRef);
    setCount(snapshot.data().count)
  };
  
  getDocumentCount();
  

  const handleAddData = async (e) => {
    e.preventdefault;
    setLoading(true); // Start loading
    if (title === "") {
      return null;
    }
    if (dec === "") {
      return null;
    }
    if (fullDecs === "") {
      return null;
    }
    if (Challenge === "") {
      return null;
    }
    if (Solution === "") {
      return null;
    }
    if (text === "") {
      return null;
    }
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        image: imageURL,
        title: title,
        dec: dec,
        tec: selectedTec,
        fullDecs: fullDecs,
        Challenge: Challenge,
        Solution: Solution,
        Category: Category,
        text: text,
        createdAt: new Date(),
      });
                Swal.fire({
                  title: "data added successfully",
                  icon: "success",
                  draggable: true,
                });
      console.log("Document written with ID: ", docRef.id);
      setImage(""); // Clear input field after adding
      setTitle(""); // Clear input field after adding
      setDec(""); // Clear input field after adding
      fullDecs(""); // Clear input field after adding
      setChallenge(""); // Clear input field after adding
      setSolution(""); // Clear input field after adding
      setText(""); // Clear input field after adding
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setLoading(false); // Stop loading
  };
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
      <div className=" relative  ">
        <div className=" relative lg:h-[95vh] bg-[url('/our_specialties_header_background_image.png')]">
          <div className=" relative  pt-20 ">
            <h2 className=" text-white text-center font-bold text-[40px] ">
              Our Specialities
            </h2>
            <h3 className=" text-center text-white font-bold text-[18px] mb-4">
              We can craft the project you need. explore our services!
            </h3>
          </div>
          <div className=" relative overflow-hidden">
            <div className="flex overflow-hidden justify-center items-center flex-col pb-4 lg:pb-0 lg:flex-row relative  lg:translate-x-44 lg:w-[1000px]">
              {services.map((e) => {
                return (
                  <div
                    key={e}
                    className={`overflow-hidden relative duration-[2s] ${
                      item === e.title
                        ? "lg:w-[800px] w-[300px] h-[250px] lg:h-[350px]"
                        : "bg-secondary w-[300px] lg:w-[400px] h-[60px] lg:h-[350px]"
                    } w-[300px] lg:w-[400px] border `}
                    onMouseEnter={() => setItem(e.title)}
                  >
                    <h3
                      className={`${
                        item === e.title
                          ? " text-primary  text-center translate-y-28 lg:translate-y-40 translate-x-20 lg:translate-x-9 lg:rotate-0 font-bold text-[16px]"
                          : " text-[16px] font-semibold text-white lg:rotate-[-90deg] translate-x-[100px] lg:translate-x-[140px] w-[160px]"
                      } leading-8 z-10 relative   w-[160px] h-full duration-[2s] `}
                    >
                      {e.title}
                    </h3>
                    {item === e.title ? (
                      <img
                        className={`${
                          item === e.title
                            ? "w-full h-full translate-y-[-250px] lg:translate-y-[-100%]"
                            : " translate-y-[-250px] lg:translate-y-0 max-w-0 max-h-0"
                        } relative translate-y-[-250px] lg:translate-y-0  lg:z-[-1] duration-[3s] `}
                        src={e.image}
                        alt=""
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-secondary py-10">
          <div className=" relative ">
            <h2 className=" text-primary text-center font-bold text-[40px] ">
              Our UI/UX Design Projects
            </h2>
            <h3 className=" text-center text-white font-bold text-[12px] px-10 lg:px-40 mb-4">
              Our UI/UX design services go beyond aesthetics; they’re strategic
              tools for business growth. We analyze your industry, audience, and
              brand to craft digital experiences that captivate and convert.
              Each pixel reflects our attention to detail, ensuring optimal user
              flow, intuitive navigation, and seamless interactions. By blending
              art and science, we create stunning and functional interfaces. Our
              designs are search engine optimized, effectively reaching your
              target audience. Focused on modern trends and user experience, we
              deliver visually appealing designs that drive real results.
            </h3>
          </div>
          <div className=" flex justify-center mx-10 lg:mx-40  my-20 lg:gap-[65px] gap-6 flex-wrap">
            <div className=" flex flex-col text-center items-center ">
              <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
              <h3 className=" text-white w-[150px]">
                Intensive Prior Research
              </h3>
            </div>
            <div className=" flex flex-col text-center items-center ">
              <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
              <h3 className=" text-white w-[150px]">
                Proficiency in Web Scrapping Tools
              </h3>
            </div>
            <div className=" flex flex-col text-center items-center ">
              <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
              <h3 className=" text-white w-[150px]">Data Cleaning</h3>
            </div>
            <div className=" flex flex-col text-center items-center ">
              <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
              <h3 className=" text-white w-[150px]">
                Data Analysis and Documentation
              </h3>
            </div>
            <div className=" flex flex-col text-center items-center ">
              <img src="/checkbox_image.png" className="lg:w-8 w-6" alt="" />
              <h3 className=" text-white w-[150px]">
                Database Creation and Publishing
              </h3>
            </div>
          </div>
          <div className=" relative">
            <button
              className=" absolute top-[-70px] right-0 z-60 text-white float-right mr-4 rounded-3xl px-4 py-2 bg-primary"
              onClick={() => setVisible(true)}
            >
              add Project
            </button>
            <Dialog
              header="add Project"
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
              <label htmlFor="">Add Summery</label>
              <input
                type="text"
                onChange={(e) => setDec(e.target.value)}
                value={dec}
                className=" border block rounded-lg w-full my-2"
              />
              <label htmlFor=""> add image</label>
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                className=" border block rounded-lg w-full  my-2 "
              />
              <progress
                value={progress}
                max="100"
                className=" block mb-2"
              ></progress>
              <label htmlFor=""> add Description </label>
              <input
                type="text"
                onChange={(e) => setFullDecs(e.target.value)}
                value={fullDecs}
                className=" border block rounded-lg w-full  my-2 "
              />
              <label htmlFor=""> add Tages </label>
              <MultiSelect
                value={selectedTec}
                onChange={(e) => setSelectedTec(e.value)}
                options={tags}
                optionLabel="name"
                placeholder="Select Tages"
                maxSelectedLabels={3}
                className="w-full my-2 border md:w-20rem"
              />
              <label htmlFor=""> add Category </label>
              <Dropdown
                value={Category}
                onChange={(e) => setCategory(e.value)}
                options={categorys}
                optionLabel="name"
                placeholder="Select a category"
                className="w-full border my-2 md:w-14rem"
              />
              <label htmlFor=""> add Challenge </label>
              <textarea
                type="text"
                onChange={(e) => setChallenge(e.target.value)}
                value={Challenge}
                className=" border block rounded-lg w-full  h-40 my-2 "
              />
              <label htmlFor=""> add Solution </label>
              <textarea
                type="text"
                onChange={(e) => setSolution(e.target.value)}
                value={Solution}
                className=" border block rounded-lg w-full  my-2 "
              />
              <label htmlFor=""> add finelText </label>
              <textarea
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
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
          <div className=" flex flex-wrap lg:mx-40 mx-10 gap-2">
            {data.map((e) => {
              return (
                <div
                  key={e}
                  onClick={() => {
                    setProject(e), setVisibleBottom(true);
                  }}
                  className=""
                >
                  <img
                    src={e.image}
                    alt=""
                    className="w-[330px]  rounded-t-[8px]"
                  />
                  <div className="bg-[#1B2125] px-4 py-2  rounded-b-[8px]">
                    <p className=" text-white font-bold">{e.title}</p>
                    <p className=" text-[#F4F4F4]/50 font-light text-[14px]">
                      {e.dec}
                    </p>
                    <button className=" relative z-[10] bg-red-600 mt-2 text-white rounded-3xl px-2 py-2" onClick={() => deleteDocument("projects",e.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            <Sidebar
              visible={visibleBottom}
              className="h-screen overflow-hidden bg-secondary"
              position="bottom"
              onHide={() => setVisibleBottom(false)}
            >
              <div className=" overflow-hidden">
                <div>
                  <h3 className=" text-white text-center text-xl mt-10">
                    {project?.title}
                  </h3>
                  <p className=" text-center text-white/50 mt-5 ">
                    {project?.fullDecs}
                  </p>
                  <div className=" flex flex-col-reverse lg:flex-row mt-8 mx-9">
                    <div className=" flex max-h-fit h-fit">
                      <div className=" min-w-1 mr-4 bg-white"></div>
                      <div>
                        <h3 className=" text-white font-semibold text-xl ">
                          the Challenge:
                        </h3>
                        <p className="text-white/50 font-light lg:mr-36">
                          {project?.Challenge}
                        </p>
                        <h3 className=" text-white font-semibold text-xl mt-4 ">
                          The Solution:
                        </h3>
                        <p className="text-white/50 font-light lg:mr-36">
                          {project?.Solution}
                        </p>
                        <p className="text-white/50 font-light lg:mr-36 mt-4">
                          {project?.text}
                        </p>
                      </div>
                    </div>
                    <div className=" min-w-[400px] lg:mb-0 mb-4">
                      <img
                        className=" border border-[#ddd]/50 lg:w-full w-[300px] ml-[-5px] mx-auto lg:mx-0 rounded-[8px]"
                        src={project?.image}
                        alt=""
                      />
                      <button className=" bg-primary py-3 rounded-[8px] w-[300px] text-white mt-4 lg:w-full">
                        Watch the full Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
