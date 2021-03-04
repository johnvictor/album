import React from "react";

export default function Gallery() {
  // const
  const renderTimeline = () => {
    return (
      <div className="relative m-8">
        <div
          className="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0"
          style={{ left: "7px" }}
        ></div>
        <ul className="list-none m-0 p-0">
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
              <div className="flex-1 ml-4 font-medium text-blue-300">
                Oct 2020
              </div>
            </div>
            <div className="ml-12">
              <div>
                <span class="flex-1 ml-4 mb-4 mt-4 font-medium text-pink-700 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                  US TRIP
                </span>
              </div>
              <div className="grid grid-cols-4 gap-12">
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
              </div>
              <div>
                <span class="flex-1 ml-4 mb-4 mt-4 font-medium text-pink-700 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                  OOTY
                </span>
              </div>
              <div className="grid grid-cols-4 gap-12">
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
              </div>
            </div>
          </li>

          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
              <div className="flex-1 ml-4 font-medium text-blue-300">
                Sep 2020
              </div>
            </div>
            <div className="ml-12">
              <div className="grid grid-cols-4 gap-12">
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
              </div>
            </div>
          </li>

          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
              <div className="flex-1 ml-4 font-medium text-blue-300">
                Aug 2020
              </div>
            </div>
            <div className="ml-12">
              <div className="grid grid-cols-4 gap-12">
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
                <img src="/images/images.jpeg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-900">
      <div className="relative min-h-screen flex flex-col items-center bg-gray-900">
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="rounded-full py-3 px-4 uppercase text-xs font-bold cursor-pointer tracking-wider text-pink-500 border-pink-500 border-2 hover:bg-pink-500 hover:text-white transition ease-out duration-700"
          >
            Uploaded on
          </a>
          <a
            href="#"
            className="rounded-full py-3 px-4 uppercase text-xs font-bold cursor-pointer tracking-wider text-pink-500 border-pink-500 border-2 ml-6 hover:bg-pink-500 hover:text-white transition ease-out duration-700"
          >
            Yearly
          </a>
          <a
            href="#"
            className="rounded-full py-3 px-4 uppercase text-xs font-bold cursor-pointer tracking-wider text-pink-500 border-pink-500 border-2 ml-6 hover:bg-pink-500 hover:text-white transition ease-out duration-700"
          >
            Monthly
          </a>
        </div>

        {renderTimeline()}
      </div>
    </div>
  );
}
