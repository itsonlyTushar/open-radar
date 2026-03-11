import { Link } from "react-router";
import { articles } from "../utils/articles";
import React from "react";

const difficultyBadge = {
  beginner: { label: "🟢 Beginner", color: "bg-green-100 text-green-800" },
  intermediate: {
    label: "🟡 Intermediate",
    color: "bg-yellow-100 text-yellow-800",
  },
  advanced: { label: "🔵 Advanced", color: "bg-blue-100 text-blue-800" },
};

function Articles() {
  return (
    <section className="border border-black pt-16 p-5">
      <h2 className="text-5xl text-center py-6 font-semibold">Top Articles</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center content-center gap-5">
        {articles.map((article) => {
          const badge = difficultyBadge[article.difficulty] || difficultyBadge.beginner;
          return (
            <div
              className="hoverEffect border-black flex flex-col border gap-3 bg-white p-5 m-5 w-full max-w-xl min-h-[150px] h-full"
              key={article.link}
            >
              <Link target="_blank" to={article.link}>
                <article className="mt-2">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                      {article.source}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                      {article.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {article.articleheading}
                  </h3>

                  <p className="text-justify mt-4 text-sm text-gray-600">
                    {article.about}
                  </p>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Articles;
