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

      {/* Hero */}
      <main className="pt-20">
        <div className="flex flex-col justify-center items-center mx-auto border border-b-black py-26 h-[70vh]">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl text-center font-semibold">
            Learn by Doing — Real Open Source Projects for Developers
          </h1>
          <span className="py-2 sm:text-xl md:text-xl lg:text-xl my-2 font-bold">
            curated, organized, and ready for action.
          </span>
          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-4 bg-black text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Start Contributing
          </button>
        </div>
      </main>

      {/* Who Is This For */}
      <section className="bg-white p-4 py-16 border border-b-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-10">
            Who Is This For?
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-0 border border-black">
            {whoIsThis.map((head, i) => (
              <div
                key={head.id}
                className={`p-8 border-black ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <FaCodeBranch className="text-2xl shrink-0 mt-1" />
                  <span className="text-xl leading-relaxed">{head.heading}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/learn")}
              className="py-4 px-6 bg-black text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
            >
              Know How to Contribute
            </button>
          </div>
        </div>
      </section>

      {/* Why Contribute */}
      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black">
        <div className="border-r border-black">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586185/banner_nwmas8.png"
            alt="banner"
          />
        </div>
        <div className="flex flex-col justify-center px-10 py-16">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-8">
            Why Contribute?
          </h2>
          <div className="flex flex-col gap-5">
            {whyContribute.map((head) => (
              <div key={head.id} className="flex items-center gap-3">
                <CiCircleCheck className="text-3xl shrink-0" />
                <span className="text-xl">{head.heading}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made For */}
      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black border-t-0">
        <div className="flex flex-col justify-center px-10 py-16 border-r border-black">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-8">
            Specially Made For
          </h2>
          <div className="flex flex-col gap-5">
            {madeFor.map((head) => (
              <div key={head.id} className="flex items-center gap-3">
                <FaHeadSideVirus className="text-3xl shrink-0" />
                <span className="text-xl">{head.heading}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <button
              onClick={() => navigate("/home")}
              className="py-4 px-6 bg-black  text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
            >
              Browse Projects
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586184/tech_mmg1vo.png"
            alt="tech"
          />
        </div>
      </section>

      {/* SEO Description */}
      <section className="border border-black border-t-0 flex flex-col items-center py-20">
        <div className="max-w-4xl px-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Find Open Source Projects to Contribute to
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed text-justify">
            OpenRadar is a platform that helps developers discover quality open
            source projects to contribute to. We aggregate and analyze GitHub
            repositories to surface active projects with good maintainer
            engagement and clear contribution paths. The platform covers
            everything from beginner-friendly HTML/CSS projects to more complex
            React, Node.js, Python, and Go codebases, filtering for repos that
            actually have responsive maintainers and well-labeled issues.
            Whether you are looking to build your portfolio, learn a new tech
            stack, or give back to the open source community, we match you with
            repositories that have decent documentation and realistic first-time
            contributor opportunities.
          </p>
        </div>
      </section>
    </>
  );
}

export default Landing;