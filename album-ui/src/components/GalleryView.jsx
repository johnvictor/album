import React from "react";

export default function GalleryView({ emitResizeAction }) {
  const columnOptions = [1, 2, 4];

  return (
    <div className="flex justify-center items-center ml-16">
      <svg
        onClick={() => emitResizeAction(columnOptions[2])}
        className="h-4 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 14"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-171 -2729)">
            <g transform="translate(100 2626)">
              <g transform="translate(68 98)">
                <path d="M0 0L24 0 24 24 0 24z"></path>
                <path
                  className="fill-current text-green-300"
                  d="M3 9h4V5H5c-1.1 0-2 .9-2 2v2zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM5 19h2v-4H3v2c0 1.1.9 2 2 2zm3 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h2c1.1 0 2-.9 2-2v-2h-4v4zm0-14v4h4V7c0-1.1-.9-2-2-2h-2z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <svg
        onClick={() => emitResizeAction(columnOptions[1])}
        className="h-6 w-6 fill-current ml-1 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
      <svg
        onClick={() => emitResizeAction(columnOptions[0])}
        className="h-5 w-6 fill-current ml-1 text-green-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 137.145 137.145"
      >
        <path d="M48 89.143h41.143V48.001H48v41.142zM34.286 75.429h-6.857v34.287h34.286v-6.857H34.286v-27.43zm0-41.143h27.429v-6.857H27.429v34.286h6.857V34.286zM109.715 0H27.429C12.281 0 0 12.28 0 27.429v82.286c0 15.149 12.28 27.429 27.429 27.429h82.286c15.149 0 27.429-12.28 27.429-27.429V27.429C137.144 12.28 124.864 0 109.715 0zm13.715 102.859c0 11.361-9.21 20.571-20.572 20.571H34.286c-11.361 0-20.572-9.21-20.572-20.571V34.286c0-11.361 9.21-20.571 20.572-20.571h68.572c11.361 0 20.572 9.21 20.572 20.571v68.573zm-20.572-.001H75.429v6.857h34.286V75.429h-6.857v27.429zM75.429 27.429v6.857h27.429v27.429h6.857V27.429H75.429z"></path>
      </svg>
    </div>
  );
}
