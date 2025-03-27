import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {User ,Clock3 , BriefcaseBusiness } from "lucide-react";

import { getDatabase, ref, get } from "firebase/database"; // Import from Realtime Database
import { db } from "../firebase"; // Ensure db is the correct instance

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
const database = getDatabase(); // Initialize database

export default function CareersDetails(){
  const { id } = useParams(); // Get item ID from URL
  const [item, setItem] = useState(null);

 
useEffect(() => {
  const fetchData = async () => {
    if (!id) return;

    const itemRef = doc(db, "jobs", id); // Firestore reference
    try {
      const snapshot = await getDoc(itemRef);
      if (snapshot.exists()) {
        setItem(snapshot.data()); // Store Firestore document data
      } else {
        console.log("No data found for ID:", id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [id]);
  return (
    <div>
       <Helmet>
                    <title>ABS.ai</title>
                    <meta
                      name="description"
                      content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
                    />
                    <meta
                      name="keywords"
                      content="abs , ABS ,absai,ABS.ai ,abs.ai , web , app ,Software development company , Custom software solutions , Web development services , Mobile app development , UI/UX design services"
                    />
                    <meta property="og:title" content="ABS.ai" />
                    <meta
                      property="og:description"
                      content="Looking for top-notch software development? Our expert team specializes in web and mobile app development, AI solutions, and custom software tailored to your business needs. Contact us today!"
                    />
                    <meta property="og:type" content="website" />
                  </Helmet>
    <Navbar />
    <div>
      <div className="bg-secondary px-10 pb-4 pt-[65px]">
        <div className="pl-20 pt-10">
          {item ? (
            <>
              <h3 className="font-bold text-white text-3xl">{item.title}</h3>
              <div className="flex flex-col lg:flex-row ml-[-8px] mt-4 gap-4 text-white/50">
                <div className="flex gap-2"><User /> {item.position} positions</div>
                <div className="flex gap-2"><BriefcaseBusiness /> {item.exp} year</div>
                <div className="flex gap-2"><Clock3 /> {item.time}</div>
              </div>
            </>
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
      <div className="px-[115px] pb-16 bg-secondary/95">
        <div className="relative pt-10 z-10">
          <h3 className="text-white font-bold text-3xl mb-5">Job Description</h3>
          <p className="w-full mb-4 lg:w-[800px] text-white">{item ? item.dec : "Loading..."}</p>
        </div>
        <button  onClick={() => (window.location.href = `${item?.link}`)} className="block hover:scale-[1.02] duration-300 float-right bg-primary text-white px-4 py-2 rounded-3xl">
          Apply Now
        </button>
      </div>
    </div>
    <Footer />
  </div>
  )
}
