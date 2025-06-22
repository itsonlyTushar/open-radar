import { useNavigate } from "react-router";
import my from "../assets/my.jpg";
import { Helmet } from "react-helmet-async";

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
      <main className="pt-20">
        <div className="flex flex-col justify-center items-center mx-auto border border-b-black py-16 h-[70vh]">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center">
            About This Platform
          </h1>
          <span className="py-2 sm:text-xl md:text-xl lg:text-xl my-2 font-bold text-center">
            Focused on helping web developers learn by contributing.
          </span>

          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-4 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Browse Projects
          </button>
        </div>
      </main>

      {/* About the Creator */}
      <section className="bg-white p-4 py-16">
        <div className="grid grid-cols-1 content-center place-items-center gap-6 my-4">
          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
            About the Creator
          </h1>

          {/* Add your image and text here */}
          <div className="flex flex-col items-center text-center max-w-3xl">
            {/* Example Image */}
            <div className="w-40 h-40 rounded-full bg-gray-300 mb-4">
              <img className="rounded-md" src={my} alt="tushar" />
            </div>

            <p className="text-xl">
              Hi, I’m Tushar — a passionate web developer who loves building
              cool stuff. I created this platform because when I was learning, I
              struggled to find good open source projects for web developers.
              Now I want to make it easier for others and me too, to start
              contributing — and level up their skills by working on real-world
              projects.
            </p>
          </div>

          <button
            onClick={() => navigate("/home")}
            className="py-4 px-6 my-8 bg-black rounded-md text-white font-semibold transition-all ease-in-out border hover:border-b-[#ffc900] hover:border-r-[#ffc900] hover:border-b-4 hover:border-r-4"
          >
            Start Contributing
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
