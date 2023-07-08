import React, { useState } from "react";
import Shoes1 from "../../images/main-image.png";
import Shoes2 from "../../images/shoes2.png";
import Shoes3 from "../../images/shoes3.png";
import Shoes4 from "../../images/shoes4.png";
import like from "../../images/heart.png";
import Review from "../../images/star.jpg";
import star1 from "../../images/star1.png";

function PopularProduct() {
  const shoesImg = [
    {
      img: Shoes1,
      name: "Nike Running Shoe",
      price: "$100",
      sold: "500 Sold Out",
      Review,
      like,
    },
    {
      img: Shoes2,
      name: "Nike Shoe Airmax",
      price: "$115",
      sold: "100 Sold Out",
      Review,
      like,
    },
    {
      img: Shoes3,
      name: "Jordan Sneaker",
      price: "$50",
      sold: "1500 Sold Out",
      Review,
      like,
    },
    {
      img: Shoes4,
      name: "Nike Running Shoe 2",
      price: "$220",
      sold: "210 Sold Out",
      Review,
      like,
    },
  ];
  return (
    <>
      <h1 className="uppercase text-[42px] text-[#677DA8] text-left">
        popular products
      </h1>
      <div className="flex w-full justify-between">
        {shoesImg.map(({ img, name, like, price, sold }) => (
          <div key={name} className="p-2 bg-transparent">
            <div className="relative">
              <img
                src={img}
                alt="shoe-img"
                className="border-solid border-2 border-sky-500 rounded-t-lg bg-white w-[278px] h-[185px]  border-t-purple-200 border-l-purple-200 border-b-blue-200 border-r-blue-200 "
              />
              <div className="absolute top-2 h-[18px] w-[18px] right-3  rounded-full  bg-gradient-to-br from-[#E142AA] to-[#73FFFF] ">
                <img src={like} alt="like" />
              </div>
            </div>
            <div className=" filter flex pt-[10px] justify-center text-xs text-left">
              <img src={Review} alt="review" className="w-[15px] h-[15px]" />
              <p className="text-left">(11.6k Reviews)</p>
            </div>
            <p className="text-left">{name}</p>
            <p className="text-left">{price}</p>
            <div className="flex flex-row justify-between">
              <p className="line-through text-left">{sold}</p>
              <div className="border-solid border-2 border-blue-500 rounded-[9px] w-[78px] h-[32px]">
                <button className="capitalize text-sm">buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PopularProduct;
