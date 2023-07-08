import React from "react";

import MainImage from "../../images/main-image.png";
import { useNavigate } from "react-router-dom";
import Shop from "../Pages/Shop/Shop";
import star1 from "../../images/star1.png";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex flex-col mt-12 w-80 h-48">
          <h1 className="uppercase text-[#677DA8] text-5xl font-bold w-[420px] pb-[18.57px]">
            purchase your shoes now.
          </h1>

          <p className="w-[568px] h-[60px] text-[#677DA8] text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi
            velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor
            ac.
          </p>
        </div>
        <div className="border-solid border-white mt-10 w-[196px] h-[64px] px-[46px] py-[18px] bg-[#FFF] rounded-lg ">
          <button
            onClick={() => navigate("/shop")}
            className="capitalize text-[22px]"
          >
            shop now
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-clip-border ml-[510px] z-10 p-0.5 bg-white-500 border-4 rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] border-white-500 border-dashed w-[275px] h-[608px]"></div>
        <div className="absolute bg-clip-border ml-[350px] mt-[135px] z-20 p-0.5 bg-white-500 border-4 rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] border-white-500 border-dashed w-[608px] h-[275px]"></div>
        <div className=" absolute mt-[380px] p-[2px] rounded-full  ml-[760px]  z-30 border-solid border-0.5  border-gray-100 bg-gradient-to-br from-[#E142AA] to-[#73FFFF]">
          <img src={star1} className="w-[29px] h-[29px] p-[4px]" />
        </div>
        <div className="ml-[400px]">
          <img
            src={MainImage}
            alt="main-img"
            className=" w-[611px] h-[611px] shrink z-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
