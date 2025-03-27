import { Dialog } from "primereact/dialog";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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
export default function ApsSection() {
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [dec, setDec] = useState("");
    const [Challenge, setChallenge] = useState("");
    const [Solution, setSolution] = useState("");
    const [data, setData] = useState([]);
    const fileInputRef = useRef(null); // Create a reference for the file input
    const [loading, setLoading] = useState(false);
    let location = useLocation();
  const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const usersCollectionRef = collection(db, "systems"); // Get collection reference
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
          const docRef = await addDoc(collection(db, "systems"), {
            image: imageURL,
            title: title,
            Challenge: Challenge,
            Solution: Solution,
            dec: dec,
            createdAt: new Date(),
          });
          console.log("Document written with ID: ", docRef.id);
          setImage(""); // Clear input field after adding
                Swal.fire({
                  title: "data added successfully",
                  icon: "success",
                  draggable: true,
                });
          window.location.reload();
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
    <div className=" relative bg-secondary py-20">
        <div>
        <h3 className=" text-primary font-bold text-[32px]  text-center ">ABS.AI Systems</h3>
        <div className=" flex flex-wrap gap-2 justify-center pt-8 lg:mx-40 mx-5 ">
        {
            data.slice(0,3).map((e)=> {
                return (
                    <div key={e?.id} className=" max-w-fit relative border hover:border-primary duration-300 mx-2 rounded-xl overflow-hidden ">
                     <button
                        className={` absolute top-0 ${location.pathname === "/admin/home/add/items" ? " flex" : " hidden"}   left-2  z-[400] hover:bg-red-700 bg-red-600 mt-2 text-white rounded-3xl px-2 py-2`}
                        onClick={() => deleteDocument("systems", e.id)}
                      >
                        Delete
                      </button>
                    <img src={e.image} className="max-w-[300px] w-[300px]" alt="" />
                    <div className=" bg-[#1B2125] p-2 text-white px-2 relative max-w-[350px] z-[900]">
                        <h3 className=" font-bold text-base">{e.title}</h3>
                        <p className=" text-sm mt-2 text-[#ddd]/60">{e.dec.slice(0,40)}..</p>
                        <div className=" text-center pb-2">
                            <button className=" bg-primary text-white rounded-3xl py-2 px-10 my-4 relative " onClick={()=> navigate('/offerings-solutions')}>Know More</button>
                        </div>
                    </div>
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
        <label htmlFor=""> add title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value) }
            className=" border block rounded-lg w-full  my-2 "
          />
        <label htmlFor=""> add description</label>
          <input
            type="text"
            value={dec}
            onChange={(e)=> setDec(e.target.value) }
            className=" border block rounded-lg w-full  my-2 "
          />
                  <label htmlFor=""> add Challenge</label>
          <input
            type="text"
            value={Challenge}
            onChange={(e)=> setChallenge(e.target.value) }
            className=" border block rounded-lg w-full  my-2 "
          />
                  <label htmlFor=""> add Solution</label>
          <input
            type="text"
            value={Solution}
            onChange={(e)=> setSolution(e.target.value) }
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
  )
}
