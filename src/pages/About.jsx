import { useNavigate } from "react-router";
import my from "../assets/my.jpg";
import { Helmet } from "react-helmet-async";
import React from "react";
import { FaCodeBranch } from "react-icons/fa6";

const features = [
  {
    id: 1,
    title: "Trending Projects",
    desc: "Browse real GitHub repositories gaining momentum, filtered by tech stack and ready to jump into.",
  },
  {
    id: 2,
    title: "Good First Issues",
    desc: "Find beginner-friendly issues curated specifically for developers making their first open source contribution.",
  },
  {
    id: 3,
    title: "Learning Resources",
    desc: "Access hand-picked articles and videos that teach you how to contribute, not just how to code.",
  },
  {
    id: 4,
    title: "AI Projects",
    desc: "Explore the latest trending open source repositories in the AI space, curated and updated regularly.",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>About Us - Discover Open Source Projects</title>
        <meta
          name="description"
          content="OpenRadar helps web developers discover trending open source projects, first issues, and learning resources."
        />
        <meta
          name="keywords"
          content="javascript, begineer projects, web dev projects, git, github, open source, open radar, trending github projects, contribute, first issue, web development, mern stack, angular, react, next.js, python"
        />
      </Helmet>

      {/* Hero */}
      <main className="pt-20">
        <div className="flex flex-col justify-center items-center mx-auto border border-b-black py-16 h-[70vh]">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-4xl font-semibold text-center">
            Built for developers who learn by doing.
          </h1>
          <span className="py-2 sm:text-xl md:text-xl lg:text-xl my-2 font-bold text-center max-w-xl">
            OpenRadar exists to close the gap between wanting to contribute and
            actually contributing.
          </span>
          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-4 bg-black text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Browse Projects
          </button>
        </div>
      </main>

      {/* Mission */}
      <section className="bg-white p-4 py-16 border border-b-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-6">
            The Mission
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            Open source is the best way to grow as a developer, but finding the
            right project to start with is surprisingly hard. OpenRadar makes
            that first step frictionless: surfacing trending repositories,
            curating beginner issues, and giving you the context you need to
            contribute with confidence.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="p-4 py-16 border border-b-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-10">
            What is Inside
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-0 border border-black">
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`p-8 border-black ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaCodeBranch className="text-2xl shrink-0" />
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Creator */}
      <section className="bg-white p-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-12">
            About the Creator
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="shrink-0">
              <img
                className="w-40 h-40 rounded-full object-cover border-2 border-black"
                src={my}
                alt="Tushar"
              />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold">Tushar</h3>
              <p className="text-xl leading-relaxed text-gray-700">
                Hi, I am Tushar, a passionate web developer who loves building
                things that matter. I created OpenRadar because when I was
                learning, I struggled to find good open source projects to
                practice on. I want to make it easier for every developer to
                take that first contribution and level up their skills by
                working on real-world code.
              </p>
              <div className="mt-2">
                <button
                  onClick={() => navigate("/home")}
                  className="py-4 px-6 bg-black  text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
                >
                  Start Contributing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;