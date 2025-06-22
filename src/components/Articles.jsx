import { Link } from "react-router";
import { articles } from "../utils/articles";

function Articles() {
  return (
    <section className="border border-black pt-16 p-5">
      <h1 className="text-5xl text-center py-6 font-semibold">Top Articles</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center content-center gap-5">
        {articles.map((article) => (
          <div
            className="rounded-lg hoverEffect border border-black flex border gap-5 bg-white p-5 m-5 w-full max-w-xl min-h-[150px] h-full"
            key={article.link}
          >
            <Link target="_blank" to={article.link}>
              <article className="mt-2">
                <h1 className="text-3xl font-semibold">
                  {article.articleheading}
                </h1>

                <p className="text-justify text-center mt-4">
                  About : {article.about}
                </p>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
