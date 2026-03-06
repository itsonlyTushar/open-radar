import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Selection({ title, changeFunc, name, optionData }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={name} className="font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
        {title}
      </label>

      <div className="relative">
        <select
          className="w-full pl-4 pr-10 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800 transition-colors duration-200 text-neutral-900 dark:text-neutral-100 appearance-none cursor-pointer"
          onChange={changeFunc}
          name={name}
          id={name}
        >
          {optionData.map((opt) => (
            <option key={opt.tech} value={opt.tech}>{opt.title}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FiChevronDown className="text-neutral-500" />
        </div>
      </div>
    </div>
  );
}

export default Selection;
