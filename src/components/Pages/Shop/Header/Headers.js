import React from "react";
import MenuIcon from "../../../../images/menu.png";
import Navigate from "../../../../images/navigate.png";
import SearchIcon from "../../../../images/search.png";
import ShopProfile from "../../../../images/shopProfile.png";
import bellIcon from "../../../../images/bellicon.png";
import crossIcon from "../../../../images/cross.png";

function Headers() {
  return (
    <div className="flex justify-between px-[25px] py-[20px] border-b border-gray-100 border-b-2">
      <div className="flex gap-5 ">
        <img src={MenuIcon} alt="menu" />
        <h1 className="uppercase text-lg font-bold text-lg pt-[2px] text-[#4D5E80]">
          constructor
        </h1>
      </div>
      <div>
        <ul className="flex gap-[30px] capitalize text-[#7D8FB3] font-bold md:max-lg:hidden">
          <li>dashboard</li>
          <li>about us</li>
          <li>news</li>
          <li>user policy</li>
          <li>contacts</li>
          <li>
            <img src={Navigate} alt="nav" />
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center border-solid border-2 border-white-500 sm:max-lg:hidden rounded-[30px]">
        <input type="image" src={SearchIcon} />
        <p className="capitalize text-xs p-[10px] text-[#7D8FB3]">
          search transactions and documents
        </p>
      </div>

      <div className="flex gap-[30px]">
        <div className="flex justify-between gap-[15px]">
          <img src={ShopProfile} alt="profile" className="w-[30px] h-[30px]" />
          <p className="capitalize text-[#7D8FB3]">clayton santos</p>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <button className="rounded-full bg-white">
          <img src={bellIcon} alt="bell" className="w-[30px] h-[30px]" />
        </button>
        <button className="rounded-full bg-white">
          <img src={crossIcon} alt="cross" className="w-[30px] h-[30px]" />
        </button>
      </div>
    </div>
  );
}

export default Headers;
