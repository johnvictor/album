import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UploadPhotosPreview from "./UploadPhotosPreview";

export default function UploadPhotosForm() {
  const history = useHistory();
  const [images, setImages] = useState(0);

  const [taggedUsers, setTaggedUsers] = useState(() => {
    return [
      "Antony",
      "Mark",
      "Basha",
      "Manik",
      "Antony",
      "Mark",
      "Basha",
      "Manik",
      "Antony",
      "Mark",
      "Basha",
      "Manik",
    ];
  });

  const onFileChange = (event) => {
    const photos = [...event.target.files].map((file) =>
      URL.createObjectURL(file)
    );
    setImages(photos);
  };

  const handlePhotosUpload = () => {};

  const submitUploadPhotoForm = () => {
    history.push("/gallery");
  };

  const renderAlbumDetailsForm = () => {
    if (!images.length) {
      return;
    }
    return (
      <div>
        <div className="text-blue-700">Album name</div>
        <input
          type="text"
          className="mt-1 mb-5 w-64 block w-full border-none bg-blue-900 h-8 rounded-xl shadow-lg focus:bg-blue-700 focus:ring-0"
        />

        <div className="text-blue-700">Tag user</div>
        <div className="relative w-64 mb-5">
          <input
            type="text"
            name="search"
            className="bmt-1 block w-full border-none bg-blue-900 h-8 rounded-xl shadow-lg focus:bg-blue-700 focus:ring-0"
          />
        </div>
      </div>
    );
  };

  const renderSubmitButton = () => {
    if (!images.length) {
      return;
    }

    return (
      <div className="flex flex-col flex-auto items-center justify-center bg-grey-lighter">
        <span className="relative bg-blue-900  inline-flex rounded-md shadow-sm">
          <button
            onClick={submitUploadPhotoForm}
            type="button"
            className="hover:bg-indigo-500 hover:text-gray-100 inline-flex bg-blue-900 
                      items-center px-4 py-2 border border-purple-400 text-base leading-6 
                      font-medium rounded-md text-blue-900 bg-white focus:border-purple-300 
                      transition ease-in-out duration-150"
          >
            <svg
              className="h-6 fill-current hover:text-gray-100"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>CSS3 icon</title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
            </svg>
            <div>
              <p className="text-xs font-bold ml-2 text-base">SUBMIT</p>
            </div>
          </button>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </span>
      </div>
    );
  };

  const renderTaggedUsers = () => {
    if (!images.length) {
      return;
    }

    return (
      <div className="w-64">
        <div className="mb-1 h-5 flex flex-wrap content-center relative tracking-wider text-gray-800 bg-blue-700 text-sm rounded leading-loose">
          <span className="ml-1 font-semibold">Tagged users</span>
        </div>
        <div className="mb-5 h-44 overflow-auto">
          {taggedUsers.map((taggedUser, index) => (
            <div
              key={index}
              className="mb-1 h-5 flex hover:bg-blue-800 flex-wrap content-center relative tracking-wider text-gray-800 bg-blue-900 text-sm rounded leading-loose"
            >
              <span className="ml-1">{taggedUser}</span>
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
  };

  return (
    <div className="font-sans h-full">
      <div className="relative flex h-full flex-col sm:justify-center items-center bg-gray-900">
        <div className="flex items-center h-full justify-center bg-grey-lighter">
          <div className="flex flex-col h-full flex-auto items-center justify-center bg-grey-lighter">
            {renderAlbumDetailsForm()}
            {renderTaggedUsers()}
            <label
              onChange={onFileChange}
              className="w-64 flex flex-col items-center px-4 py-6 bg-blue-900 text-blue rounded-lg shadow-lg tracking-wide border border-blue-900 hover:border-blue-700 cursor-pointer hover:bg-blue hover:text-white transform"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Upload images
              </span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
          <UploadPhotosPreview images={images} />
          {renderSubmitButton()}
        </div>
      </div>
    </div>
  );
}
