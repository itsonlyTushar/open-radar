import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
        className="hoverEffect flex flex-col border border-black dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-200"
        key={details.id}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4 gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              className="w-11 h-11 object-cover rounded-full border border-neutral-100 dark:border-neutral-800 shrink-0"
              src={details.user.avatar_url}
              alt={user}
            />
            <div className="flex flex-col min-w-0">
              <h3 className="font-bold text-lg truncate" title={details.title}>
                {details.title}
              </h3>
              <span className="text-sm text-neutral-500 truncate hover:underline cursor-pointer">
                <a target="_blank" href={details.user.html_url} rel="noopener noreferrer">
                  @{user}
                </a>
              </span>
            </div>
          </div>
          <span className="text-xs text-neutral-500 shrink-0 mt-1 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded">
            {formattedDate}
          </span>
        </div>

        {/* Labels */}
        <div className="flex flex-wrap gap-2 mb-4">
          {details.labels?.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="text-xs font-semibold px-2 py-1 rounded-full text-white"
              style={{ backgroundColor: `#${tag.color}` }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Body/Description */}
        {hasBody && (
          <div className="mb-6 flex-grow">
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {needsTruncation && !isExpanded
                ? `${details.body.slice(0, 120)}...`
                : details.body}
            </p>
            {needsTruncation && (
              <button
                onClick={() => toggleExpanded(details.id)}
                className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 underline text-sm mt-1"
              >
                {isExpanded ? "View less" : "View more"}
              </button>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2 font-medium">
              <FaGithub className="text-lg" />
              <a 
                target="_blank" 
                href={details.repository_url.replace("https://api.github.com/repos/", "https://github.com/")}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors truncate max-w-[150px]"
                title={details.repository_url.split("https://api.github.com/repos/")[1]}
                rel="noopener noreferrer"
              >
                {details.repository_url.split("https://api.github.com/repos/")[1]}
              </a>
            </div>
            
            <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded">
              <span className="text-xs font-semibold whitespace-nowrap">
                Assignees: {details.assignees?.length || 0}
              </span>
            </div>
          </div>

          <a
            href={details.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-semibold transition-colors duration-200"
          >
            View Issue <FiExternalLink />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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