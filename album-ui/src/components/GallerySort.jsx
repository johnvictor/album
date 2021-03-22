import React, { useState } from "react";
import GalleryViewMenu from "./GalleryViewMenu";
import SortMenu from "./SortMenu";

export default function GallerySort({ emitSortAction, emitResizeAction }) {
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
      m.isSelected = m.title === title;
      return m;
    });
    emitSortAction(title);
    setMenu(newMenu);
  };

  const handleResizeAction = (size) => emitResizeAction(size);

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

      <SortMenu></SortMenu>

      <GalleryViewMenu emitResizeAction={handleResizeAction} />
    </div>
  );
}
