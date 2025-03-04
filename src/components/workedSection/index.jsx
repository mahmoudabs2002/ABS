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
export default function WorkedSection() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null); // Create a reference for the file input
  const [loading, setLoading] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollectionRef = collection(db, "work"); // Get collection reference
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
console.log(data)
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
      const docRef = await addDoc(collection(db, "work"), {
        image: imageURL,
        createdAt: new Date(),
      });
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
    <div className=" relative ">
      <div className=" px-20 bg-[url('/worked_with_background_image.png')] bg-center bg-cover bg-no-repeat">
        <h3 className=" py-10  text-center text-primary font-bold text-[32px]">We worked for</h3>
        <div className="flex justify-center py-10 flex-wrap items-center">
           {
            data.map((e)=> {
              return (
                <div key={e?.id} className=" relative">
                                       <button
                        className={` absolute top-0 ${location.pathname === "/admin/home/add/items" ? " flex" : " hidden"}   left-2  z-[400] hover:bg-red-700 bg-red-600 mt-2 text-white rounded-3xl px-2 py-2`}
                        onClick={() => deleteDocument("work", e.id)}
                      >
                        X
                      </button>
                   <img src={e?.image} alt="" className="lg:w-36 lg:mx-16 mx-2 my-2" />
                </div>
              )
            } )
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
