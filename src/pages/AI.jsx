import React, { useEffect, useState } from "react";
import { RiStarSLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { FiExternalLink, FiSearch } from "react-icons/fi";
import { debounce } from "lodash";
import { BsStars } from "react-icons/bs";
import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";

const AI = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const dataPerPage = 18;
  const totalPages = Math.ceil(totalCount / dataPerPage);

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

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/ai?perPage=${dataPerPage}&page=${currentPage}&search=${encodeURIComponent(searchQuery)}`,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "API call failed");
      }
      setFetchedData(data.items || []);
      setTotalCount(data.total_count || 0);
    } catch (error) {
      console.error("Error fetching api", error);
    } finally {
      setLoading(false);
    }
  };

  const debounceApi = debounce(() => {
    fetchProjects();
  }, 500);

  useEffect(() => {
    debounceApi();
    return () => {
      debounceApi.cancel();
    };
  }, [currentPage, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-12">
      <section className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
          Find Trending AI Repos and Projects
        </h1>
        <p className="mt-4 text-neutral-500 max-w-2xl text-lg">
          Explore the latest and most popular artificial intelligence
          repositories.
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-xl relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-neutral-400 text-lg" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-colors duration-200 text-neutral-900 dark:text-neutral-100"
            placeholder="Search AI repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {loading ? (
        <Loading textSize={"text-4xl"} />
      ) : (
        <>
          <div className="p-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
            Showing page {currentPage} of {totalPages} ({totalCount} total
            repositories)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fetchedData.map((item) => (
              <div
                key={item.id}
                className="hoverAi flex flex-col border border-neutral-200 p-6 bg-white shadow-sm transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img
                      className="w-11 h-11 object-cover rounded-full border border-neutral-100 dark:border-neutral-800 shrink-0"
                      src={item.owner.avatar_url}
                      alt={item.owner.login}
                    />
                    <div className="flex flex-col min-w-0">
                      <h3
                        className="font-bold text-lg truncate"
                        title={item.name}
                      >
                        {item.name}
                      </h3>
                      <span className="text-sm text-neutral-500 truncate">
                        @{item.owner.login}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500 shrink-0 mt-1 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
                    {new Date(item.updated_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 flex-grow mb-6 line-clamp-3">
                  {item.description || "No description provided."}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5" title="Stars">
                        <BsStars className="text-lg" />
                        <span className="font-medium">
                          {item.stargazers_count}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-1.5"
                        title="Followers"
                      >
                        <RiUserFollowLine className="text-lg" />
                        <span className="font-medium">
                          {item.owner.followers_url?.length || 0}
                        </span>
                      </div>
                    </div>
                    {item.language && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-neutral-700 dark:bg-neutral-300"></span>
                        <span className="font-medium">{item.language}</span>
                      </div>
                    )}
                  </div>

                  <a
                    href={item.svn_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            ))}
          </div>
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
              className={`p-2 px-3 transition ease-in-out m-2 rounded-md text-xl font-semibold border border-neutral-300 dark:border-neutral-700 ${currentPage === pageNum
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
  );
};

export default AI;
