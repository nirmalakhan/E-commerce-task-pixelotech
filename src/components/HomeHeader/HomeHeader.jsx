import React from "react";
import Logo from "../../images/logoicon.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Profile from "../../images/profile.jpg";

function HomeHeader() {
  return (
    <div className="flex pt-2">
      <div className="flex mr-80">
        <img src={Logo} alt="logo" className="h-14 w-8 mr-2" />
        <p className="uppercase text-center pt-4 font-bold">bizpush</p>
      </div>
      <div>
        <ul className="flex gap-4 mr-56">
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex justify-content items-center">
        <BsSearch className="h-6 w-6 mr-4" />
        <AiOutlineShoppingCart className="h-6 w-6 mr-4" />
        <img src={Profile} alt="profile" className="h-46 w-46" />
      </div>
    </div>
  );
}

export default HomeHeader;
