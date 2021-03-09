import React from "react";

export default function YearPicker() {
  const getYears = () => {
    let startYear = 1900;
    const years = [];
    while (startYear <= 2200) {
      years.push(startYear);
      startYear++;
    }
    return years;
  };
  return (
    <div className="relative h-32 inline-flex overflow-auto">
      <select
        value={new Date().getFullYear()}
        className="border border-blue-800 rounded-full text-gray-100 h-8 text-sm pl-5 pr-10 ml-5 bg-blue-400 hover:border-red-400 
        focus:outline-none appearance-none p-0"
      >
        {getYears().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
