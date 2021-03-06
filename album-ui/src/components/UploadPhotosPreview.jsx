import React, { Fragment } from "react";

export default function UploadPhotosPreview({ images }) {
  const renderPhotosPreview = () => {
    if (!images.length) {
      return;
    }
    return (
      <div
        className="flex flex-col flex-auto m-6 h-full items-center justify-center bg-grey-lighter 
                      grid grid-cols-3 gap-4 -auto-auto transform overflow-auto"
      >
        {images.length &&
          images.map((image, index) => (
            <div key={index} className="relative my-2">
              <div className="absolute top-0 right-4 h-4 w-4 bg-black bg-opacity-90 cursor-pointer">
                <svg
                  className="fill-current text-green-700 hover:text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div className="absolute top-0 right-0 h-4 w-4 bg-black bg-opacity-90 cursor-pointer">
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
              </div>
              <img src={image} className="h-48 object-cover w-full" />
            </div>
          ))}
      </div>
    );
  };

  return <Fragment>{renderPhotosPreview()}</Fragment>;
}
