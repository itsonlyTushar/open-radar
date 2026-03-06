import React from "react";
import { Helmet } from "react-helmet-async";

function Policy() {
  return (
    <>
      <Helmet>
        <title>Policy - Discover Open Source Projects</title>
        <meta
          name="description"
          content="OpenRadar helps web developers discover trending open source projects, first issues, and learning resources."
        />
        <meta
          name="keywords"
          content="javascript, begineer projects, web dev projects, git, github, open source, open radar, trending github projects, contribute, first issue, web development, mern stack, angular, react, next.js, python"
        />
      </Helmet>
      
      <main className="pt-[8rem] pb-24 px-6 md:px-12 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-8 mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-100">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-500 text-sm font-medium">
            <span>Effective Date:</span>
            <time dateTime="2025-06-22">June 22, 2025</time>
          </div>
        </div>

        {/* Content Section */}
        <article className="prose prose-neutral dark:prose-invert prose-lg max-w-none space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p className="text-lg md:text-xl">
            This Privacy Policy explains how we handle your information when you
            use the <strong>"OpenRadar"</strong> platform. By using the Platform, you agree to
            this Privacy Policy.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Information We Collect
            </h2>
            <p>
              We do not collect, store, or process any personal information from
              users. The Platform is purely a discovery tool that displays publicly
              available data from external sources.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Third-Party Services
            </h2>
            <p>
              The Platform uses the following third-party services to display public
              content:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-3">
                <span className="text-neutral-900 dark:text-neutral-100 mt-1">•</span>
                <div>
                  <strong className="text-neutral-900 dark:text-neutral-100 font-semibold block mb-1">GitHub API</strong>
                  <span className="text-neutral-600 dark:text-neutral-400">Used to display public open source projects and issues. No personal GitHub data is stored.</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-900 dark:text-neutral-100 mt-1">•</span>
                <div>
                  <strong className="text-neutral-900 dark:text-neutral-100 font-semibold block mb-1">External Articles & Videos</strong>
                  <span className="text-neutral-600 dark:text-neutral-400">The Platform may link to or embed content from third-party websites and YouTube. Any data collected by those services is governed by their own privacy policies.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Cookies
            </h2>
            <p>
              The Platform does not set or use cookies for tracking, analytics, or
              advertising.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Data Sharing
            </h2>
            <p>
              Since we do not collect personal data, there is no personal
              information to share. We do not sell or rent any user data to third
              parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Security
            </h2>
            <p>
              While the Platform does not collect personal data, we take reasonable
              steps to ensure that the application and any external content
              integrations operate securely.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be
              posted on this page with a new effective date.
            </p>
          </section>

          <section className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 md:p-8 mt-12">
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <div className="flex flex-col gap-2 font-medium">
              <a href="mailto:tushargsoni17@gmail.com" className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors inline-flex items-center gap-2">
                tushargsoni17@gmail.com
              </a>
              <span className="text-neutral-700 dark:text-neutral-300">
                Maintainer: OpenRadar Team
              </span>
            </div>
          </section>

          <footer className="pt-8 mt-12 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
              This Privacy Policy is provided for informational purposes and does
              not constitute legal advice. For specific legal requirements, consult
              a qualified legal professional.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

export default Policy;
