import { FaGithub } from "react-icons/fa";


function Card({fetchedApi, viewVar, setView}) {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
      {fetchedApi?.map((details) => {
        const isoDate = details.updated_at;
        const date = new Date(isoDate);
        const formattedDate = new Intl.DateTimeFormat("en-GB").format(date);

        return (
          <div
            className="bg-white hover:scale-200 h-full min-h-[5rem] text-wrap m-2 border border-black hoverEffect p-4 rounded-md"
            key={details.id}
          >
            <div className="flex justify-between">
              <a
                target="_blank"
                className="hover:underline"
                href={details.html_url}
                rel="noopener noreferrer"
              >
                <h1 className="sm:text-xl md:text-2xl lg:text-3xl flex items-center gap-4 text-wrap max-w-2xl w-full">
                  {details.title}
                </h1>
              </a>

              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-4 my-3 font-thin text-sm">
              <FaGithub className="text-xl" />
              <a target="_blank" href={details.user.html_url}>
                {
                  details.repository_url.split(
                    "https://api.github.com/repos/"
                  )[1]
                }
              </a>
            </div>

            {/* here we mapped all the tags max 3  */}
            <span className="flex items-center text-center text-wrap overflow-hidden">
              {details.labels.slice(0, 3).map((tags) => (
                <p
                  key={tags.id}
                  className={`mx-2 my-2 text-black font-semibold text-sm rounded-md px-2 `}
                  style={{ backgroundColor: `#${tags.color}` }}
                >
                  {tags.name}
                </p>
              ))}
            </span>

            <p>
              {details.body ? (
                details.body.length > 120 ? (
                  <>
                    {details.body.slice(0, viewVar ? details.body.length : 120)}
                    {
                      <button onClick={setView}>
                        {viewVar ? (
                          <span className="underline mx-2">view less...</span>
                        ) : (
                          <span className="underline mx-2">view more...</span>
                        )}
                      </button>
                    }
                  </>
                ) : (
                  details.body
                )
              ) : (
                ""
              )}
            </p>

            {/* From which users its posted  */}
            <div className="flex items-center gap-4 py-4">
              <p>From :</p>
              <img
                className="object-cover max-w-xs w-10 rounded-md"
                src={details.user.avatar_url}
                alt={details.user.id}
              />
              <span className="text-md font-semibold hover:underline">
                <a
                  target="_blank"
                  href={details.user.html_url}
                  rel="noopener noreferrer"
                >
                  {details.user.html_url.split("https://github.com/")[1]}
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
