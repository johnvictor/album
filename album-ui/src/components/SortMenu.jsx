import React from "react";
import AscIcon from "../img/AscIcon";
import DescIcon from "../img/DescIcon";
import Menu from "./Menu";

export default function TestMenu() {
  const menuItems = [
    {
      isSelected: true,
      icon: <AscIcon />,
      className: "ml-6",
    },
    {
      icon: <DescIcon />,
      className: "ml-2",
    },
  ];
  return <Menu menuItems={menuItems} />;
}
