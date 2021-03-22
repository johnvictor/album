import React from "react";

export default function RenderSharedUsers({ sharedUsers }) {
  return (
    <div className="w-64">
      <div className="mb-1 h-5 flex flex-wrap content-center relative tracking-wider text-gray-300 bg-blue-700 text-sm rounded leading-loose">
        <span className="ml-1 font-semibold text-xs">Shared with</span>
      </div>
      <div className="mb-5 h-44 overflow-auto">
        {sharedUsers.map((sharedUser, index) => (
          <div
            key={index}
            className="mb-1 h-5 flex hover:bg-blue-800 flex-wrap content-center relative tracking-wider text-blue-500 bg-blue-900 text-sm rounded leading-loose"
          >
            <span className="ml-1">{sharedUser}</span>
            <span className="absolute top-0.5 right-1 h-4 w-4 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="fill-current text-red-700 hover:text-red-400"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
