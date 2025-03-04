import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div>
      <Navbar/>
      <div className=" bg-[url(/contact_us_background_image.png)] flex items-center justify-center  bg-top h-screen text-center  ">
         <h3
          className={` relative pt-24  text-center duration-300 text-[40px] font-bold  text-primary  `}
        >
          Comming soon
        </h3>
      </div>
      <Footer/>
    </div>
    // <div>
    //     <Navbar/>
    //     <div className="bg-[url(/contact_us_background_image.png)]  bg-top">
    //     <h3
    //       className={` relative pt-24 text-center duration-300 text-[40px] font-bold  text-white  `}
    //     >
    //       Courses
    //     </h3>
    //     <div className=" flex relative mb-28 ">
    //       <div className=" flex items-center justify-center mt-10  mx-auto ">
    //         <input
    //           value={search}
    //           onChange={(e) => setSearch(e.target.value)}
    //           type="text"
    //           className=" lg:w-[930px] px-8 rounded-xl ml-[-10px] h-[40px]"
    //           placeholder="Search here"
    //         />
    //         <Search className=" text-primary translate-x-[-30px]" />
    //         <div>
    //           <button
    //             onClick={() =>
    //               isOpen === true ? setIsOpen(false) : setIsOpen(true)
    //             }
    //             className=" bg-white h-[40px] px-4 rounded-xl ml-[-8px] lg:ml-2"
    //           >
    //             <ListFilter className=" text-primary" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mx-40 ">
    //     {filteredData.length === 0 ? (
    //       <div>
    //         <h3 className=" my-8 relative text-center text-white text-xl">
    //           No career with this name
    //         </h3>
    //         {/* <h3 className=" text-white text-2xl mb-4 relative text-center ">another careers</h3> */}
    //       </div>
    //     ) : null}
    //       { 
    //       filteredData === 0 ? courses.slice(0,3).map((e , index) => {
    //         return (
    //             <motion.div  
    //             initial={{ opacity: 0, x: -30 }}
    //             whileInView={{ opacity: 1, x: 0 }}
    //             transition={{ duration: 0.8 }}
    //             key={e} onClick={()=> navigate(`/careers-details/${e.id}`)} className="cursor-pointer rounded-xl w-[600px] bg-secondary">
    //               <div className=" relative ">
    //                <img className={` w-[280px] h-[400px] relative ${index === 1 ? " lg:right-[-180px]  top-[-80px]": " top-[-60px] lg:left-[-180px]"} lg:absolute`} src={e.image} alt="" />
    //                <div className={` ${index === 1 ? " translate-y-12 translate-x-[20px] " : " float-right translate-y-12 translate-x-[-20px]"} w-[450px] text-center h-[400px]`}>
    //                   <div className={` text-primary text-3xl text-center my-4`}>{e.title}</div>
    //                   <div className=" text-white ">{e.desc}</div>
    //                   <button className=" bg-primary mt-5 text-white rounded-3xl px-4 py-2">Show Content</button>
    //                </div>
    //               </div>
    //             </motion.div>
    //         )
    //       }) :  
    //       <div className=" flex flex-col items-center gap-32 pb-10">
    //         {
    //                       filteredData.map((e , index) => {
    //                         return (
    //                           <motion.div  
    //                           initial={{ opacity: 0, x: -30 }}
    //                           whileInView={{ opacity: 1, x: 0 }}
    //                           transition={{ duration: 0.8 }}
    //                           key={e} onClick={()=> navigate(`/careers-details/${e.id}`)} className="cursor-pointer rounded-xl lg:w-[600px] w-[400px] bg-secondary">
    //                             <div className=" relative flex lg:block  ">
    //                              <img className={` lg:w-[280px] w-[200px] h-[400px] relative ${index === 1 ? " lg:right-[-180px]  lg:top-[-80px]": " lg:top-[-60px] lg:left-[-180px]"} lg:absolute`} src={e.image} alt="" />
    //                              <div className={` ${index === 1 ? " lg:translate-y-12 lg:translate-x-[20px] " : " lg:float-right lg:translate-y-12 lg:translate-x-[-20px]"} lg:w-[450px] w-[200px] ml-6 lg:ml-0 lg:text-center h-[400px]`}>
    //                                 <div className={` text-primary text-3xl lg:text-center my-4`}>{e.title}</div>
    //                                 <div className=" text-white text-sm lg:text-base mr-2 lg:mr-0 ">{e.desc}</div>
    //                                 <button className=" bg-primary mt-5 text-white rounded-3xl px-4 py-2">Show Content</button>
    //                              </div>
    //                             </div>
    //                           </motion.div>
    //                         )
    //                       })
    //         }
    //       </div>
    // }
    //     </div>
    //     </div>
    //     <Footer/>
    // </div>
  )
}
