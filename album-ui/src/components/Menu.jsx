import React, { useState } from "react";

export default function Menu({ menuItems, emitOnMenuSelect }) {
  const [menu, setMenu] = useState(menuItems);

  const handleMenuSelect = (selectedIndex) => {
    let newMenu = [...menu];
    newMenu = newMenu.map((m, index) => {
      m.isSelected = index === selectedIndex;
      return m;
    });
    if (emitOnMenuSelect) {
      emitOnMenuSelect(selectedIndex);
    }
    setMenu(newMenu);
  };

  return (
    <div className="inline-flex items-center">
      {menu.map((menu, index) => (
        <span
          key={index}
          onClick={() => handleMenuSelect(index)}
          className={`hover:text-green-300 ${menu.className} 
          ${menu.isSelected ? "text-green-300" : "text-green-900"}`}
        >
          {menu.icon}
        </span>
      ))}
    </div>
  );
}
