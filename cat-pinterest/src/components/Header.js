import React from "react";

export const Header = () => {
  return (
    <header className="h-16 bg-[#2196F3] flex text-white font-roboto font-normal text-[14px] leading-[21px] tracking-[0.25px]">
      <div className="hover:bg-[#1E88E5] w-[120px] flex items-center justify-center">
        Все котики
      </div>
      <div className="hover:bg-[#1E88E5] w-[173px] flex items-center justify-center">
        Любимые котики
      </div>
    </header>
  );
};

export default Header;
