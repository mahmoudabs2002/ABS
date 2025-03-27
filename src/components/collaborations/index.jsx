import { Dialog } from "primereact/dialog";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import Swal from "sweetalert2";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { storage } from "../../firebase";
export default function Collaborations() {
  const [isOpen , setIsOpen] = useState()
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [dec, setDec] = useState("");
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null); // Create a reference for the file input
  const [loading, setLoading] = useState(false);
  let location = useLocation();

  useEffect(() => {
      const fetchData = async () => {
        try {
          const usersCollectionRef = collection(db, "collaborations"); // Get collection reference
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
    const handleAddData = async (e) => {
      e.preventdefault;
      setLoading(true); // Start loading
      if (image === "") {
        return null;
      }
      try {
        const docRef = await addDoc(collection(db, "collaborations"), {
          image: imageURL,
          dec: dec,
          createdAt: new Date(),
        });
        console.log("Document written with ID: ", docRef.id);
      setVisible(false)
        setImage(""); // Clear input field after adding
                  Swal.fire({
                    title: "data added successfully",
                    icon: "success",
                    draggable: true,
                  });
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
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
        window.location.reload();

      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    };
  return (
    <div className=" flex relative lg:flex-row flex-col  items-center lg:gap-52 gap-20 px-20 lg:px-64 bg-secondary">
      <h3 className=" text-center lg:-rotate-90 lg:w-20 lg:text-[80px] w-10 text-[50px] lg:leading-[150px] mr-72 lg:mr-0 lg:mt-80 text-white/10 font-bold  ">
        Development
        <pre> +Business</pre>
      </h3>
      <div className=" mb-28">
        <div className=" lg:ml-28 mb-10">
          <h3 className=" text-primary font-bold text-[32px] text-center ">
            Collaborations
          </h3>
          <p className=" text-white mb-8 text-lg text-center">
            We aim to serve your idea to investment
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 overflow-hidden duration-1000">
          {
            data.map((e,index) => {
             return(
              <div key={e?.id} className={` ${isOpen === index ? " h-[370px] w-96 bg-black/30": "w-24"} transition-all  ease-in-out cursor-pointer overflow-hidden relative duration-[1s]`} onClick={()=> isOpen === index ? setIsOpen(-1) :setIsOpen(index)}>
              <img
                src={e.image}
                alt=""
                className={` duration-1000 ${isOpen === index ? " rotate-90 translate-y-[-90px] translate-x-40 lg:translate-x-0 lg:translate-y-0  w-16 lg:absolute lg:right-[150px] -top-20" :"w-20 mx-2 " } transition-all duration-700  `}
              />
              <p className={` duration-300 text-white ${isOpen === index ? "w-[300px] text-center  absolute top-28 text-[13px] left-12" : "w-0 opacity-0 absolute -left-64"} `}>
              {e.dec}
              </p>
              <button
                        className={` absolute bottom-0 ${location.pathname === "/admin/home/add/items" ? " flex" : " hidden"}   left-5  z-[400] hover:bg-red-700 bg-red-600 mt-2 text-white rounded-3xl px-2 py-2`}
                        onClick={() => deleteDocument("collaborations", e.id)}
                      >
                        Delete
                      </button>
              </div>
             )
            })
          }
        </div>
      </div>
      <button className={`${location.pathname === "/admin/home/add/items" ? " bg-primary text-white absolute bottom-2 px-4 py-2 rounded-2xl left-2": " hidden"}`}   onClick={() => setVisible(true)} > add</button>
      <Dialog
          header="add"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <label htmlFor=""> add image</label>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            className=" border block rounded-lg w-full  my-2 "
          />
          <progress value={progress} max="100" className=" block my-2"></progress>
        <label htmlFor=""> add description</label>
          <input
            type="text"
            onChange={(e)=> setDec(e.target.value) }
            className=" border block rounded-lg w-full  my-2 "
          />
          <button
            className=" disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white px-4 py-2 rounded-3xl text-center block mx-auto mt-4 "
            disabled={loading}
            onClick={handleAddData}
          >
            {loading ? "Adding..." : "Add Data"}
          </button>
        </Dialog>
    </div>
  );
}
