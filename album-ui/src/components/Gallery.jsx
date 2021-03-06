import React, { useState } from "react";
import FullScreenView from "./FullScreenView";
import GallerySort from "./GallerySort";
import YearPicker from "./YearPicker";

export default function Gallery() {
  const columnSizes = [4, 2, 1];
  const [columnSize, setColumnSize] = useState(columnSizes[0]);
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = function () {
    setFullScreen(!fullScreen);
  };
  // const
  const renderTimeline = () => {
    return (
      <div className="relative m-8 h-auto w-full mx-4">
        <div
          className="border-r-2 border-gray-200 border-dotted h-full absolute bottom-0 top-0 z-0"
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
            <div className="ml-12 mr-4">
              <div>
                <span className="flex-1 ml-4 mb-4 mt-4 font-medium text-pink-700 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                  US TRIP
                </span>
              </div>
              <div className={`grid grid-cols-${columnSize} gap-12`}>
                <img
                  className="w-full"
                  src="/images/images.jpeg"
                  onClick={handleFullScreen}
                />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
              </div>
              <div>
                <span className="flex-1 ml-4 mb-4 mt-4 font-medium text-pink-700 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                  OOTY
                </span>
              </div>
              <div className={`grid grid-cols-${columnSize} gap-12`}>
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
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
            <div className="ml-12 mr-4">
              <div className={`grid grid-cols-${columnSize} gap-12`}>
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
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
            <div className="ml-12 mr-4">
              <div className={`grid grid-cols-${columnSize} gap-12`}>
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
                <img className="w-full" src="/images/images.jpeg" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };

  const handleSortAction = (menu) => {
    console.log(menu);
  };

  const handleResizeAction = (index) => {
    setColumnSize(columnSizes[index]);
  };

  return (
    <div className="relative h-full flex flex-col sm:justify-center items-center bg-gray-900 overflow-auto">
      <div className="relative h-full flex flex-col items-center bg-gray-900 w-full">
        <GallerySort
          emitSortAction={handleSortAction}
          emitResizeAction={handleResizeAction}
        />
        <YearPicker />

        {renderTimeline()}
      </div>

      {fullScreen && <FullScreenView handleFullScreen={handleFullScreen} />}
    </div>
  );
}
