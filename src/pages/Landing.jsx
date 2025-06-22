import { useNavigate } from "react-router";
import { FaCodeBranch } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { FaHeadSideVirus } from "react-icons/fa6";
import { madeFor, whoIsThis, whyContribute } from "../utils/landingPage";
import { Helmet } from "react-helmet-async";

function Landing() {
  const navigate = useNavigate();

  return (
    <>
    
        <Helmet>
          <title>OpenRadar - Discover Open Source Projects</title>
          <meta
            name="description"
            content="OpenRadar helps web developers discover trending open source projects, first issues, and learning resources."
          />
          <meta
            name="keywords"
            content="open source, open radar, trending github projects, contribute, first issue, web development, mern stack, angular, react, next.js, python"
          />
        </Helmet>
  
      <main className="pt-20">
        <div className="flex flex-col justify-center items-center mx-auto border border-b-black py-26 h-[70vh]">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl text-center font-semibold">
            Learn by Doing — Real Open Source Projects for Web Developers
          </h1>
          <span className="py-2 sm:text-xl md:text-xl lg:text-xl my-2 font-bold">
            curated, organized, and ready for action.
          </span>

          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-4 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Start Contributing
          </button>
        </div>
      </main>

      {/* The Who Section  */}
      <section className="bg-white p-4 py-16">
        <div className="grid grid-cols-1 content-center  place-items-center gap-4 my-4">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
            Who Is This For?
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 ld:grid-cols-2 content-center gap-4">
            {whoIsThis.map((head) => (
              <div
                key={head.id}
                className="flex text-start text-justify items-center gap-2"
              >
                <FaCodeBranch className="text-xl sm:text-xl md:text-2xl lg:text-3xl" />
                <span className="flex item-center gap-2 text-xl sm:text-xl md:text-2xl lg:text-2xl">
                  {head.heading}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/learn")}
            className="py-4 px-6 my-4 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Know How to Contribute
          </button>
        </div>
      </section>

      {/* The Why Section  */}

      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black">
        <div className="">
          <img
            className="border border-r-black object-cover"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586185/banner_nwmas8.png"
            alt="banner"
          />
        </div>
        <div className="flex flex-col items-center py-6 mb-2 ">
          <h3 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6 my-6">
            Why Contribute ?
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 ld:grid-cols-2 content-center gap-4">
            {whyContribute.map((head) => (
              <div
                key={head.id}
                className="flex text-start text-justify items-center gap-2"
              >
                <CiCircleCheck className="text-xl sm:text-xl md:text-3xl lg:text-4xl my-5" />
                <span className="flex item-center gap-2 text-xl sm:text-xl md:text-2xl lg:text-2xl">
                  {head.heading}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The About Section  */}
      <section className="bg-white p-4 py-24">
        <div className="grid grid-cols-1 content-center  place-items-center gap-4 my-4">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
            About
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 ld:grid-cols-2 content-center gap-4">
            <p className="max-w-3xl text-xl">
              You’re learning React, Next.js, Tailwind, vanilla JS — and you
              want real projects where you can practice these skills. That’s why
              we built this. A platform 100% focused on web developers — no more
              searching through irrelevant issues.
            </p>
          </div>

          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-4 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Contribute
          </button>
        </div>
      </section>

      {/* Made For section  */}
      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black">
        <div className="flex flex-col items-center py-6 mb-2 ">
          <h3 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6 my-6">
            Specially Made For
          </h3>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 ld:grid-cols-2 content-center gap-4">
            {madeFor.map((head) => (
              <div
                key={head.id}
                className="flex text-start text-justify items-center gap-2"
              >
                <FaHeadSideVirus className="text-xl sm:text-xl md:text-3xl lg:text-4xl my-5" />
                <span className="flex item-center gap-2 text-xl sm:text-xl md:text-2xl lg:text-2xl">
                  {head.heading}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <img
            className="border border-l-black object-cover"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586184/tech_mmg1vo.png"
            alt="tech"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
