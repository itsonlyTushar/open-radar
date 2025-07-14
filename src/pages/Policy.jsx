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
      <section className="flex flex-col justify-center px-10 py-10 pt-[10rem]">
        <h1 className="text-5xl sm:text-xl md:text-2xl lg:text-6xl font-semibold text-center mb-6">
          Privacy Policy
        </h1>
        <span className="text-gray-600 text-sm mb-6">
          Effective Date: June 22, 2025
        </span>

        <p className="mb-4">
          This Privacy Policy explains how we handle your information when you
          use the "OpenRadar" platform . By using the Platform, you agree to
          this Privacy Policy.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We do not collect, store, or process any personal information from
          users. The Platform is purely a discovery tool that displays publicly
          available data from external sources.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Third-Party Services
        </h2>
        <p className="mb-4">
          The Platform uses the following third-party services to display public
          content:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>GitHub API:</strong> Used to display public open source
            projects and issues. No personal GitHub data is stored.
          </li>
          <li>
            <strong>External Articles & Videos:</strong> The Platform may link
            to or embed content from third-party websites and YouTube. Any data
            collected by those services is governed by their own privacy
            policies.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Cookies
        </h2>
        <p className="mb-4">
          The Platform does not set or use cookies for tracking, analytics, or
          advertising.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Data Sharing
        </h2>
        <p className="mb-4">
          Since we do not collect personal data, there is no personal
          information to share. We do not sell or rent any user data to third
          parties.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Security
        </h2>
        <p className="mb-4">
          While the Platform does not collect personal data, we take reasonable
          steps to ensure that the application and any external content
          integrations operate securely.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a new effective date.
        </p>

        <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Contact Us
        </h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact:
        </p>
        <p className="mb-4">
          Email: tushargsoni17@gmail.com <br />
          Maintainer: OpenRadar Team
        </p>

        <p className="text-sm text-gray-600 mt-6">
          This Privacy Policy is provided for informational purposes and does
          not constitute legal advice. For specific legal requirements, consult
          a qualified legal professional.
        </p>
      </section>
    </>
  );
}

export default Policy;
