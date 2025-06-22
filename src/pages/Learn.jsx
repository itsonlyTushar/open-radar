import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLineContent } from "../utils/timeline";
import React from "react";
import Articles from "../components/Articles";
import Videos from "../components/Videos";
import { Helmet } from "react-helmet-async";

function Learn() {
  return (
    <>
      <Helmet>
        <title>
          Learn How to Contribute - OpenRadar | Open Source Projects & First
          Issues
        </title>
        <meta
          name="description"
          content="Learn how to contribute to open source projects with step-by-step guides, videos, and articles on OpenRadar. Ideal for beginner web developers looking to start their open source journey."
        />
        <meta
          name="keywords"
          content="open source contribution, open source projects, beginner projects, first issue, GitHub, Git, React, JavaScript, MERN stack, Next.js, Python, web development, OpenRadar, how to contribute"
        />
        <meta name="author" content="OpenRadar" />
        <meta
          property="og:title"
          content="Learn How to Contribute - OpenRadar"
        />
        <meta
          property="og:description"
          content="Start your open source journey with tutorials, articles, and videos. Learn how to contribute to trending open source projects on GitHub with OpenRadar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://openradar.live/learn" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dartdvch1/image/upload/v1750583185/Screenshot_2025-06-22_143518_h6mph4.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Learn How to Contribute - OpenRadar"
        />
        <meta
          name="twitter:description"
          content="Step-by-step learning resources to start contributing to open source projects. Explore with OpenRadar."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dartdvch1/image/upload/v1750583185/Screenshot_2025-06-22_143518_h6mph4.png"
        />
      </Helmet>

      <main className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border border-black pt-16">
        <div>
          <img
            className="border-r border-black object-cover max-w-3xl w-full"
            src="https://res.cloudinary.com/dartdvch1/image/upload/v1750586184/branch_ibrx1z.png"
            alt="branch"
          />
        </div>

        <div className="flex flex-col items-center justify-center py-6 px-8 w-full">
          <h3 className="sm:text-2xl md:text-3xl lg:text-6xl font-semibold text-center mb-6">
            Learn How to Contribute
          </h3>

          <p className="max-w-4xl text-justify mb-8">
            Start your open source journey by learning and contributing with the
            help of the resources provided below. These guides and articles will
            walk you through everything you need — from understanding the basics
            to making your first contribution. Just follow the instructions step
            by step, and you'll be ready to contribute to real-world projects in
            no time!
          </p>
        </div>
      </main>

      <section className="bg-white p-4 py-16">
        <div className="grid grid-cols-1 content-center  place-items-center gap-4 my-4">
          <h1 className="sm:text-2xl md:text-3xl lg:text-6xl max-w-6xl font-semibold text-center mb-6">
            How To Start
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-1 ld:grid-cols-2 content-center gap-4">
            <p className="max-w-3xl text-lg">
              Begin by learning the programming language you want to work with,
              then get familiar with Git and GitHub basics. Once you're
              comfortable with these, follow the steps outlined below to start
              contributing to open source projects. Each step will guide you
              through the process and help you build confidence along the way.
            </p>
          </div>

          {/* Time line compoenent  */}
          <VerticalTimeline className="z-index">
            {timeLineContent.map((time) => (
              <VerticalTimelineElement
                key={time.step}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#D6F7E7", color: "black" }}
                contentArrowStyle={{ borderRight: "7px solid  #D6F7E7" }}
                date={time.step}
                icon={React.createElement(time.icon)}
                iconStyle={{ backgroundColor: "#D6F7E7" }}
              >
                <h1 className="text-xl font-semibold">{time.heading}</h1>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      <section>
        <Articles />
      </section>

      <section className="bg-white p-4 py-16 ">
        <Videos />
      </section>
    </>
  );
}

export default Learn;
