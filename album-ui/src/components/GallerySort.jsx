import React, { useState } from "react";
import GalleryView from "./GalleryView";

export default function GallerySort({ emitSortAction }) {
  const [menu, setMenu] = useState([
    {
      title: "Uploaded on",
      icon: "timeline.png",
      isSelected: false,
    },
    {
      title: "Yearly",
      icon: "year.png",
      isSelected: true,
    },
    {
      title: "Monthly",
      icon: "month.png",
      isSelected: false,
    },
  ]);

  const handleMenuSelect = ({ title }) => {
    let newMenu = [...menu];
    newMenu = newMenu.map((m) => {
      m.isSelected = false;
      if (m.title === title) {
        m.isSelected = true;
      }
      return m;
    });
    emitSortAction(title);
    setMenu(newMenu);
  };
  return (
    <div className="flex justify-center mt-4 items-center">
      {menu.map((m) => (
        <a
          key={m.title}
          alt={m.title}
          onClick={() => handleMenuSelect(m)}
          href="#"
          className={`rounded-full h-4 flex items-center py-3 px-2 mx-1 uppercase text-xs font-bold cursor-pointer tracking-wider 
                        border-pink-500 border-2 hover:bg-pink-900 hover:text-white transition ease-out 
                        duration-700 ${
                          m.isSelected
                            ? "bg-pink-500 text-white"
                            : "text-pink-500"
                        }`}
        >
          <img className="w-5 h-5 m-1" src={"images/" + m.icon} />
          {m.title}
        </a>
      ))}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 ml-16 fill-current text-green-900"
        x="0"
        y="0"
        enableBackground="new 0 0 511.626 511.627"
        version="1.1"
        viewBox="0 0 511.626 511.627"
        xmlSpace="preserve"
      >
        <path d="M215.232 401.991h-54.818V9.136c0-2.663-.854-4.856-2.568-6.567C156.133.859 153.946 0 151.279 0H96.461c-2.663 0-4.856.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567V401.99H32.507c-4.184 0-7.039 1.902-8.563 5.708-1.525 3.621-.856 6.95 1.997 9.996l91.361 91.365c2.096 1.707 4.281 2.562 6.567 2.562 2.474 0 4.664-.855 6.567-2.562l91.076-91.078c1.906-2.279 2.856-4.571 2.856-6.844 0-2.676-.854-4.859-2.568-6.584-1.714-1.706-3.9-2.562-6.568-2.562zM428.511 479.082h-70.808c-3.997 0-6.852.191-8.559.568l-4.001.571v-.571l3.142-3.142c2.848-3.419 4.853-5.896 5.996-7.409l105.344-151.331v-25.406H297.744v65.377h34.263v-32.832h66.236c3.422 0 6.283-.288 8.555-.855.572 0 1.287-.048 2.143-.145.853-.085 1.475-.144 1.852-.144v.855l-3.142 2.574c-1.704 1.711-3.713 4.273-5.995 7.706L296.31 485.934v25.693h166.734v-66.521h-34.54v33.976h.007zM468.475 189.008L402.807 0h-46.25l-65.664 189.008h-19.979v30.264h81.933v-30.264h-21.409l13.419-41.112h69.381l13.415 41.112H406.25v30.264h82.228v-30.264h-20.003zm-114.197-72.521l20.841-62.241c.76-2.285 1.479-5.046 2.143-8.28.66-3.236.996-4.949.996-5.139l.855-5.708h1.143c0 .761.191 2.664.562 5.708l3.433 13.418 20.554 62.241h-50.527z"></path>
      </svg>
      <svg
        className="h-4 ml-2 fill-current text-green-300"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 511.626 511.627"
        version="1.1"
        viewBox="0 0 511.626 511.627"
        xmlSpace="preserve"
      >
        <path d="M215.232 401.991h-54.818V9.136c0-2.663-.854-4.856-2.568-6.567C156.133.859 153.946 0 151.279 0H96.461c-2.663 0-4.856.855-6.567 2.568-1.709 1.715-2.568 3.905-2.568 6.567V401.99H32.507c-4.184 0-7.039 1.902-8.563 5.708-1.525 3.621-.856 6.95 1.997 9.996l91.361 91.365c2.096 1.707 4.281 2.562 6.567 2.562 2.474 0 4.664-.855 6.567-2.562l91.076-91.078c1.906-2.279 2.856-4.571 2.856-6.844 0-2.676-.854-4.859-2.568-6.584-1.714-1.706-3.9-2.562-6.568-2.562zM468.475 481.361l-65.664-189.01h-46.25L290.9 481.364h-19.98v30.263h81.934v-30.266h-21.412l13.418-41.11h69.381l13.415 41.11H406.25v30.266h82.228v-30.266h-20.003zm-114.197-72.515l20.841-62.242c.76-2.283 1.479-5.045 2.143-8.278.66-3.234.996-4.948.996-5.137l.855-5.715h1.143c0 .767.191 2.669.562 5.715l3.433 13.415 20.554 62.242h-50.527zM463.055 152.745h-34.537v33.975H357.71c-4.001 0-6.852.097-8.556.288l-4.004.854v-.854l3.142-2.858c2.851-3.422 4.853-5.896 5.996-7.421L459.632 25.41V0H297.754v65.387h34.259V32.552h66.232c3.426 0 6.283-.288 8.56-.859.571 0 1.286-.048 2.142-.144.855-.094 1.476-.144 1.854-.144v.855l-3.141 2.568c-1.708 1.713-3.71 4.283-5.996 7.71L296.32 193.569v25.697h166.735v-66.521z"></path>
      </svg>

      <GalleryView />
    </div>
  );
}
