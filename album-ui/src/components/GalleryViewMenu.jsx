import React from "react";
import FourColumnIcon from "../img/FourColumnIcon";
import FullScreenIcon from "../img/FullScreenIcon";
import TwoColumnIcon from "../img/TwoColumnIcon";
import Menu from "./Menu";

export default function GalleryViewMenu({ emitResizeAction }) {
  const menuItems = [
    {
      isSelected: true,
      className: "ml-10",
      icon: <FourColumnIcon />,
    },
    {
      icon: <TwoColumnIcon />,
    },
    {
      icon: <FullScreenIcon />,
    },
  ];

  const handleOnMenuSelect = (index) => emitResizeAction(index);
  return <Menu menuItems={menuItems} emitOnMenuSelect={handleOnMenuSelect} />;
}
