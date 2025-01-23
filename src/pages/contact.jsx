export default function Contact() {
  return (
    <div className=" relative min-h-screen bg-cover bg-[url('/contact_us_background_image.png')]">
      <div className=" flex flex-col justify-center items-center pt-20">
        <img src="/chat.png" alt="" className="w-24 mb-4" />
        <h2 className=" text-white font-bold text-[40px] ">
          ABS.AI chatbot is at your service
        </h2>
        <h3 className=" text-white font-bold text-[18px] mb-4">
          Know the budget of your project, now! no meetings required.
        </h3>
        <div className=" relative flex items-center ">
          <img
            src="/beta_text_field_image.png"
            alt=""
            className=" translate-x-20   relative z-50 h-6"
          />
          <input
            type="text"
            name=""
            className=" bg-secondary pl-16 pr-40 relative z-0 rounded-3xl h-12 w-[850px] translate-x-10"
          />
          <button className=" bg-primary relative z-50 text-white py-2 px-8 rounded-3xl translate-x-[-100px]">
            {" "}
            tell me
          </button>
        </div>
        <button className=" border border-primary text-white font-bold rounded-3xl px-4 mt-4 py-2">
          contact us the old way
        </button>
        <div>
          <marquee>
            <div className=" bg-secondary text-white ">
            I want to build a portfolio website for my company
            </div>
            <div className="">
            I have a new app idea
                </div>
                <div className="">
                What is the cost of designing a logo for my app
                </div>
                <div className="">
                I want a trading bot for my app
                </div>
                <div className="">
                I want to build a portfolio website for my company
                </div>
          </marquee>
          <marquee>
            <div className=" inline">What is the cost of building an e-commerce application?</div>
            <div className=" inline">Can you build desktop applications?</div>
            <div className=" inline">I need a management system for my company</div>
            <div className=" inline">I need an AI model that can tell if someone is cheeting</div>
            <div className=" inline">I need a program to help me extract the text in papers automatically</div>
          </marquee>
          <marquee>
            <div className="">Can you create something to help me analyze my brand’s reviews</div>
            <div className="">I need a system that can analyze my revenue and predict my next year profit</div>
            <div className="">I need a special chatbot that is able to answer astronomical questions</div>
            <div className="">Can you collect a dataset for a model working in agriculture? </div>
            <div className="">Can you create something to help me analyze my brand’s reviews</div>
          </marquee>
        </div>
      </div>
    </div>
  );
}
