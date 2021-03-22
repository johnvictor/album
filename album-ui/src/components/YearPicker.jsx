import React, { useState } from "react";

export default function YearPicker() {
  const currentYear = new Date().getFullYear();
  let [year, setYear] = useState(currentYear);

  const getYears = () => {
    let startYear = 1900;
    const years = [];
    while (startYear <= currentYear) {
      years.push(startYear);
      startYear++;
    }
    return years;
  };

  const changeYear = (count) => {
    year += count;
    if (year <= currentYear) {
      setYear(year);
    } else {
      year--;
    }
  };

  const handleYearChange = (year) => {
    setYear(+year);
  };

  return (
    <div className="flex mt-5">
      <svg
        className="w-12 h-8 text-gray-100 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => changeYear(-1)}
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <select
        value={year}
        onChange={(e) => handleYearChange(e.currentTarget.value)}
        className="border border-blue-800 rounded-full text-gray-100 h-8 text-sm pl-5 pr-10 bg-blue-400 hover:border-red-400 
        focus:outline-none appearance-none p-0"
      >
        {getYears().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <svg
        className="w-12 h-8 text-gray-100 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => changeYear(1)}
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
