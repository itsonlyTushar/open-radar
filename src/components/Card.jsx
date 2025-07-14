import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

function Card({ fetchedApi, selfAsn, isAsn }) {
  const [expandedId, setExpandedId] = useState(null);

  const shouldShowCard = (details) => {
    const assignees = details.assignees || [];
    const user = details.user.html_url.split("https://github.com/")[1];
    
    if (isAsn) {
      return assignees.length === 0;
    } else if (selfAsn) {

      return assignees.length === 0 || !assignees.some((assignee) => assignee.login === user);
    }
 
    return true;
  };

  const toggleExpanded = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderCardContent = (details) => {
    const isoDate = details.updated_at;
    const date = new Date(isoDate);
    const formattedDate = new Intl.DateTimeFormat("en-GB").format(date);
    const user = details.user.html_url.split("https://github.com/")[1];
    const isExpanded = expandedId === details.id;
    const hasBody = details.body && details.body.length > 0;
    const needsTruncation = hasBody && details.body.length > 120;

    return (
      <div
        className="bg-white h-full min-h-[5rem] text-wrap m-2 border border-black transition-transform duration-200 p-4 rounded-md"
        key={details.id}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <a
            target="_blank"
            className="hover:underline flex-1 mr-4"
            href={details.html_url}
            rel="noopener noreferrer"
          >
            <h1 className="sm:text-xl md:text-2xl lg:text-2xl flex items-center gap-4 text-wrap">
              {details.title}
            </h1>
          </a>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            {formattedDate}
          </span>
        </div>

        {/* Repository Info */}
        <div className="flex items-center gap-4 my-3 font-thin text-sm">
          <FaGithub className="text-xl" />
          <a 
            target="_blank" 
            href={details.user.html_url}
            className="hover:underline"
            rel="noopener noreferrer"
          >
            {details.repository_url.split("https://api.github.com/repos/")[1]}
          </a>
        </div>

        {/* Labels */}
        <div className="flex items-center text-center text-wrap overflow-hidden mb-3">
          {details.labels?.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="mx-1 my-1 text-black font-semibold text-sm rounded-md px-2 py-1"
              style={{ backgroundColor: `#${tag.color}` }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Body/Description */}
        {hasBody && (
          <div className="mb-4">
            <p className="text-gray-700">
              {needsTruncation && !isExpanded
                ? `${details.body.slice(0, 120)}...`
                : details.body}
            </p>
            {needsTruncation && (
              <button
                onClick={() => toggleExpanded(details.id)}
                className="text-blue-600 hover:text-blue-800 underline text-sm mt-2"
              >
                {isExpanded ? "View less..." : "View more..."}
              </button>
            )}
          </div>
        )}

        {/* User Info */}
        <div className="flex items-center gap-4 py-4">
          <p className="text-gray-600">From:</p>
          <img
            className="object-cover w-10 h-10 rounded-full"
            src={details.user.avatar_url}
            alt={`${user} avatar`}
          />
          <span className="text-md font-semibold hover:underline">
            <a
              target="_blank"
              href={details.user.html_url}
              rel="noopener noreferrer"
            >
              {user}
            </a>
          </span>
        </div>


        <div className="flex gap-2">
          <div className="bg-red-100 max-w-xs w-full text-center rounded font-semibold px-3 py-1">
            Assigned Developers: {details.assignees?.length || 0}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
      {fetchedApi
        ?.filter(shouldShowCard)
        .map((details) => (
          <React.Fragment key={details.id}>
            {renderCardContent(details)}
          </React.Fragment>
        ))}
    </section>
  );
}

export default Card;