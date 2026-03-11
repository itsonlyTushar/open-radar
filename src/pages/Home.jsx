import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Selection from "../components/Selection";
import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";
import { Helmet } from "react-helmet-async";
import Switch from "../components/UI/Switch";
import { debounce } from "lodash";

function Home() {
  const [tech, setTech] = useState("javascript");
  const [status, setStatus] = useState("open");
  const [fetchedData, setFetchedData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isSelfAssigned, setIsSelfAssigned] = useState(false);
  const [isAssigned, setIsAssigned] = useState(false);

  // Pagination
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const dataPerPage = 9;
  const totalPages = Math.ceil(totalCount / dataPerPage);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/github?tech=${tech}&status=${status}&perPage=${dataPerPage}&page=${currentPage}`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "API call failed");
      }

      setFetchedData(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (error) {
      console.error("Error fetching API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // check box is there so we are using debaunce below
  const debounceApi = debounce(() => {
    fetchApi();
  }, 500);

  useEffect(() => {
    debounceApi();
    return () => {
      debounceApi.cancel();
    };
  }, [tech, status, currentPage, dataPerPage, isAssigned, isSelfAssigned]);

  useEffect(() => {
    setCurrentPage(1);
  }, [tech, status]);

  // dropdown data
  const dropDownData = [
    {
      id: 1,
      name: "tech",
      title: "Tech",
      func: (e) => setTech(e.target.value),
      options: [
        { tech: "JavaScript", title: "JavaScript", isLang: true },
        { tech: "TypeScript", title: "TypeScript", isLang: true },
        { tech: "Python", title: "Python", isLang: true },
        { tech: "Java", title: "Java", isLang: true },
        { tech: "PHP", title: "PHP", isLang: true },
        { tech: "Go", title: "Go", isLang: true },
      ],
    },
    {
      id: 2,
      name: "status",
      title: "State",
      func: (e) => setStatus(e.target.value),
      options: [
        { tech: "open", title: "Open" },
        { tech: "closed", title: "Closed" },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Home - Discover Open Source Projects</title>
        <meta
          name="description"
          content="OpenRadar helps web developers discover trending open source projects, first issues, and learning resources."
        />
        <meta
          name="keywords"
          content="github, git, git api, python, open source, javascript, begineer projects, web dev projects, trending github projects, contribute, first issue, web development, mern stack"
        />
      </Helmet>

      <div className="pt-24 max-w-7xl mx-auto px-4 pb-12">
        <section className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
            Discover Open Source Projects
          </h1>
          <p className="mt-4 text-neutral-500 max-w-2xl text-lg">
            Find trending repositories, first issues, and learning resources.
          </p>
        </section>

        {/* Filters and Controls */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {dropDownData.map((details) => (
              <div key={details.id}>
                <Selection
                  title={details.title}
                  changeFunc={details.func}
                  optionData={details.options}
                  name={details.name}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="font-medium text-neutral-700 dark:text-neutral-300 text-sm">Not Assigned</span>
              <Switch checked={isAssigned} onChange={() => setIsAssigned(!isAssigned)} />
            </div>

            <div className="flex items-center gap-3">
              <span className="font-medium text-neutral-700 dark:text-neutral-300 text-sm">Exclude Self Assigned</span>
              <Switch checked={isSelfAssigned} onChange={() => setIsSelfAssigned(!isSelfAssigned)} />
            </div>
          </div>
        </div>

      {isLoading ? (
        <Loading textSize={"text-4xl"} />
      ) : (
        <>
          <div className="p-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing page {currentPage} of {totalPages} ({totalCount} total
            issues)
          </div>

          <Card
            isAsn={isAssigned}
            selfAsn={isSelfAssigned}
            fetchedApi={fetchedData}
          />
        </>
      )}

      {/* Pagination numbers */}
      <section className="text-neutral-900 dark:text-neutral-100 p-5 mt-8 flex items-center justify-center">
        <Button
          disabled={currentPage === 1}
          btnTitle={"Previous"}
          onClick={handlePrev}
        />

        {Array.from({ length: 5 }, (_, i) => {
          const offset = Math.max(0, Math.min(currentPage - 3, totalPages - 5));
          const pageNum = offset + i + 1;

          if (pageNum > totalPages) return null;

          return (
            <button
              onClick={() => handlePageClick(pageNum)}
              className={`p-2 px-3 transition ease-in-out m-2 rounded-md text-xl font-semibold border border-neutral-300 dark:border-neutral-700 ${
                currentPage === pageNum
                  ? "bg-neutral-200 dark:bg-neutral-800"
                  : "bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              }`}
              key={pageNum}
            >
              {pageNum}
            </button>
          );
        })}

        <Button
          btnTitle={"Next"}
          onClick={handleNext}
          disabled={currentPage >= totalPages}
        />
      </section>
      </div>
    </>
  );
}

export default Home;
