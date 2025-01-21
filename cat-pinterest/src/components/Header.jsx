import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Все котики", width: "120px", link: "/frontend-challenge/" },
  {
    text: "Любимые котики",
    width: "173px",
    link: "/frontend-challenge/favorites",
  },
];

export const Header = () => {
  return (
    <header className="pl-[62px] pr-[62px] h-16 bg-[#2196F3] flex text-white font-roboto font-normal text-[14px] leading-[21px] tracking-[0.25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.24)]">
      {menuItems.map((item, index) => (
        <Link
          to={item.link}
          className="hover:bg-[#1E88E5] flex items-center justify-center"
          style={{ width: item.width }}
          key={index}
        >
          {item.text}
        </Link>
      ))}
    </header>
  );
};

export default Header;
