import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Selection from "../components/Selection";
import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";
import { Helmet } from "react-helmet-async";
import { FaCheck } from "react-icons/fa6";
import * as Checkbox from "@radix-ui/react-checkbox";
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

  const dataPerPage = 10;
  const totalPages = Math.ceil(totalCount / dataPerPage);

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/github?tech=${tech}&status=${status}&perPage=${dataPerPage}&page=${currentPage}`
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

      <main>
        {/* Dropdown Data  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-24">
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

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 place-items-center content-center px-6 py-2">
            <div className="flex gap-2 items-center">
              <span>Not Assigned</span>
              <Checkbox.Root
                className="bg-white border border-black w-6 hoverEffect hover:scale-110 h-6 flex items-center justify-center rounded"
                checked={isAssigned}
                onCheckedChange={() => setIsAssigned(!isAssigned)}
              >
                <Checkbox.Indicator>
                  <FaCheck />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </div>

            <div className="flex gap-2 items-center">
              <span>Exclude Self Assigned</span>
              <Checkbox.Root
                className="bg-white border border-black w-6 hoverEffect hover:scale-110 h-6 flex items-center justify-center rounded"
                checked={isSelfAssigned}
                onCheckedChange={() => setIsSelfAssigned(!isSelfAssigned)}
              >
                <Checkbox.Indicator>
                  <FaCheck />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </div>
          </div>
        </div>
      </main>

      {isLoading ? (
        <Loading textSize={"text-4xl"} />
      ) : (
        <>
          <div className="p-2 text-sm text-gray-600">
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

      {/* Pagination numbers  */}
      <section className="text-black p-5 flex items-center justify-center">
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
              className={`p-2 px-3 transition ease-in-out m-2 rounded-md text-xl font-semibold border border-black ${
                currentPage === pageNum
                  ? "bg-[#D6F7E7]"
                  : "bg-white hover:bg-[#D6F7E7]"
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
    </>
  );
}

export default Home;
