export default function ProjectSection() {
  return (
    <div className=" bg-secondary py-20 px-20">
      <div className="">
        <h3 className=" text-primary font-bold text-[32px]  text-center ">How would the project work?</h3>
        <p className=" text-white  text-center ">Know every step</p>
        <div className=" flex items-center justify-center">
            <img src="/project_steps_image.png" alt="" className="hover:bg-[url('/project_steps_hover.png')] " />
            <ul className=" flex flex-col gap-8 lg:ml-24 ml-2">
                <li className="numContain my-4  text-center text-xl text-white font-bold hover:text-primary"><span className="number border rounded-xl py-4 text-2xl px-3 mr-2 text-white ">1</span>Requirements Gathering</li>
                <li className=" numContain my-4  text-xl text-white font-bold hover:text-primary"><span className=" number border rounded-xl py-4 text-2xl px-3 mr-2 text-white ">2</span>Prototyping</li>
                <li className=" numContain my-4  text-xl text-white font-bold hover:text-primary"><span className=" number border rounded-xl py-4 text-2xl px-3 mr-2 text-white ">3</span>Development</li>
                <li className=" numContain my-4  text-xl text-white font-bold hover:text-primary"><span className=" number border rounded-xl py-4 text-2xl px-3 mr-2 text-white ">4</span>Testing</li>
            </ul>
        </div>
        <p className=" text-white">
        Every stage is documented. A detailed timeline, phase deliverables and full documentation are your right. We thrive to deliver your project up to you quality standards.
        </p>
       <div className=" text-center">
       <button className=" bg-primary text-white rounded-xl py-2 px-4 my-4 relative ">
        Request a project
        </button>
       </div>
      </div>
    </div>
  );
}
