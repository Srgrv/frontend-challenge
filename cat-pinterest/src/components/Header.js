import React from "react";

const menuItems = [
  { text: "Все котики", width: "120px" },
  { text: "Любимые котики", width: "173px" },
];

export const Header = () => {
  return (
    <header className="h-16 bg-[#2196F3] flex text-white font-roboto font-normal text-[14px] leading-[21px] tracking-[0.25px]">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="hover:bg-[#1E88E5] flex items-center justify-center"
          style={{ width: item.width }}
        >
          {item.text}
        </div>
      ))}
    </header>
  );
};

export default Header;
