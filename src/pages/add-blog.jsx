import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Search } from "lucide-react";
import { Dialog } from "primereact/dialog";
import Swal from "sweetalert2";

// import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { storage } from "../firebase";
export default function AddBlog() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef(null); // Create a reference for the file input
  const [caption, setCaption] = useState("");
  const [link, setLink] = useState("");
  const [visible, setVisible] = useState(false);
  // const navigate = useNavigate();

  const [data, setData] = useState([]);

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

  const handleAddData = async (e) => {
    e.preventdefault;
    setLoading(true); // Start loading
    if (caption === "") {
      return null;
    }
    if (link === "") {
      return null;
    }
    if (image === "") {
      return null;
    }
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        image: imageURL,
        caption: caption,
        link: link,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setImage(""); // Clear input field after adding
      setCaption(""); // Clear input field after adding
      setLink(""); // Clear input field after adding
      Swal.fire({
        title: "data added successfully",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setLoading(false); // Stop loading
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.caption.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              className="lg:w-[930px] px-8 rounded-xl ml-[-10px] h-[40px]"
              placeholder="Search here"
            />
            <Search className="text-primary translate-x-[-30px]" />
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div>
            <h3 className=" my-8 relative text-center text-white text-xl">
              No blogs with this name
            </h3>
            <h3 className=" text-white text-2xl mb-4 relative text-center ">
              another blogs
            </h3>
          </div>
        ) : null}
        <div className=" flex flex-wrap gap-7 relative mx-40">
          {filteredData.length === 0
            ? data.map((e) => {
                return (
                  <div key={e} className=" relative">
                    <div
                      className="  cursor-pointer translate-x-[-80px] lg:translate-x-0 relative bg-secondary rounded-xl w-[320px]"
                      key={e}
                      onClick={() => (window.location.href = `${e.link}`)}
                    >
                      <img
                        className="max-w-[320px] max-h-[250px] min-h-[250px]  object-cover "
                        src={e.image}
                        alt=""
                      />
                      <div className=" p-4 pb-16">
                        {/* <h3 className=" text-primary">{e.title}</h3> */}
                        <p className="text-white text-sm">{e.caption}</p>
                        <button className=" capitalize absolute right-3 bottom-4 text-right text-white bg-primary py-2 px-2 rounded-full">
                          more info
                        </button>
                      </div>
                    </div>
                    <div>
                      <button
                        className=" absolute bottom-4 left-3   z-[400] hover:bg-red-700 bg-red-600 mt-2 text-white rounded-3xl px-2 py-2"
                        onClick={() => deleteDocument("blogs", e.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            : currentData.map((e) => {
                return (
                  <div key={e} className=" relative">
                    <div
                      className="  cursor-pointer translate-x-[-80px] lg:translate-x-0 relative bg-secondary rounded-xl w-[320px]"
                      key={e}
                      onClick={() => (window.location.href = `${e.link}`)}
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
                    <div>
                      <button
                        className=" absolute bottom-4 left-3   z-[400] hover:bg-red-700 bg-red-600 mt-2 text-white rounded-3xl px-2 py-2"
                        onClick={() => deleteDocument("blogs", e.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
        <button
          className=" relative z-60 text-white float-right mr-4 rounded-3xl px-4 py-2 bg-primary"
          onClick={() => setVisible(true)}
        >
          add blog
        </button>
        <Dialog
          header="add blog"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <label htmlFor=""> Add Caption</label>
          <input
            type="text"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            className=" border block rounded-lg w-full  my-2 "
          />
          <label htmlFor=""> add image</label>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            className=" border block rounded-lg w-full  my-2 "
          />{" "}
          {progress}%
          <progress
            value={progress}
            max="100"
            className=" block my-2"
          ></progress>
          <label htmlFor=""> add link</label>
          <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            value={link}
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
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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
