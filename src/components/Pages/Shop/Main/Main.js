import React from "react";
import addIcon from "../../../../images/add.png";
import aside1 from "../../../../images/aside1.png";
import aside2 from "../../../../images/aside2.png";
import aside3 from "../../../../images/aside3.png";
import aside4 from "../../../../images/aside4.png";
import aside5 from "../../../../images/aside5.png";
import aside6 from "../../../../images/aside6.png";
import profile1 from "../../../../images/profile1.png";
import profile2 from "../../../../images/profile2.png";
import profile3 from "../../../../images/profile3.png";
import profile4 from "../../../../images/profile4.png";
import cart from "../../../../images/cart.png";
import Item1 from "../../../../images/item1.png";
import Item2 from "../../../../images/item2.png";
import Item3 from "../../../../images/item3.png";
import Item4 from "../../../../images/item4.png";
import Item5 from "../../../../images/item5.png";
import Item6 from "../../../../images/item6.png";
import Item7 from "../../../../images/item7.png";
import Item8 from "../../../../images/item8.png";
import Item9 from "../../../../images/item9.png";
import Item10 from "../../../../images/item10.png";
import Item11 from "../../../../images/item11.png";
import Item12 from "../../../../images/item12.png";
import add from "../../../../images/add.png";
import tick from "../../../../images/tick.png";
import filter from "../../../../images/filter.png";
import search from "../../../../images/search.png";
import edit from "../../../../images/edit.png";
import del from "../../../../images/delete.png";
import men1 from "../../../../images/menu1.png";
import men2 from "../../../../images/menu2.png";
import chart from "../../../../images/Chart.png";
import ChartLine from "../../../../images/Chart3.png";
import ChartLineOrange from "../../../../images/Chart5.png";
import ChartOrange from "../../../../images/Chart4.png";
import Chart2 from "../../../../images/Chart2.png";
import Chart6 from "../../../../images/Chart6.png";
import navigationVertical from "../../../../images/navigation-vertical.png";

let data = [
  { id: 1, name: "Apple Air Pods 2", price: "$600", img: Item1 },
  { id: 2, name: "Samsung Smart Watch", price: "$600", img: Item2 },
  { id: 3, name: "Apple Monitor Pro", price: "$600", img: Item3 },
  { id: 4, name: "Apple Watch Series 4", price: "$600", img: Item4 },
  { id: 5, name: "Google Pixel 4 XL", price: "$600", img: Item5 },
  { id: 6, name: "Amazon Smart Speaker", price: "$600", img: Item6 },
  { id: 7, name: "Apple MacBook Pro 16", price: "$600", img: Item7 },
  { id: 8, name: "Apple iPad 10.2", price: "$600", img: Item8 },
  { id: 9, name: "Microsoft Surface Book", price: "$600", img: Item9 },
  { id: 10, name: "Google Nest", price: "$600", img: Item10 },
  { id: 11, name: "Apple iMac Pro", price: "$600", img: Item11 },
  { id: 12, name: "Samsung Smart Watch", price: "$600", img: Item12 },
];

function Main() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between items-center w-[100px] border-r-2 border-gray-100 hidden ">
        <div className="flex flex-col  bg-white-500 gap-[20px]">
          <button className="rounded-full bg-white">
            <img src={aside1} alt="dir" />
          </button>
          <button className="rounded-full bg-white">
            <img src={aside2} alt="star" />
          </button>
          <button className="rounded-full bg-white">
            <img src={aside3} alt="zig" />
          </button>
          <button className="rounded-full bg-white">
            <img src={aside4} alt="path" />
          </button>
          <button className="rounded-full bg-white">
            <img src={aside5} alt="globe" />
          </button>
          <button className="rounded-full bg-white">
            <img src={aside6} alt="graph" />
          </button>
        </div>
        <div>
          <button className="rounded-full bg-white w-[50px] h-[50px] p-[10px]">
            <img src={addIcon} alt="add" />
          </button>
          <img
            src={profile1}
            alt="prof1"
            className="rounded-full bg-white w-[50px] h-[50px]"
          />
          <img
            src={profile2}
            alt="prof2"
            className="rounded-full bg-white w-[50px] h-[50px]"
          />
          <img
            src={profile3}
            alt="prof3"
            className="rounded-full bg-white w-[50px] h-[50px]"
          />
          <img
            src={profile4}
            alt="prof4"
            className="rounded-full bg-white w-[50px] h-[50px]"
          />
        </div>
      </div>

      <div className="w-[100%] p-4 md:p-10">
        <div className="flex justify-between bg-gray-50 rounded-ss-lg rounded-se-lg p-4 w-full border  border-gray-200">
          <div className="w-1/5 flex items-center">
            <img src={cart} className="w-[30px] h-[30px] mr-3" />
            <p>Products</p>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <p className="capitalize text-[12px] font-bold text-[#7D8FB3]">
              active
            </p>
            <p className="capitalize text-[12px] font-bold text-[#7D8FB3]">
              draft
            </p>
            <p className="capitalize text-[12px] font-bold text-[#7D8FB3]">
              assembly
            </p>
          </div>
          <div className="w-1/5 bg-[#8833FF] rounded-3xl w-[136px] h-[40px]">
            <button className=" flex justify-content items-center py-[6px] pl-[15px] pr-[20px] text-[#fff] ">
              <img src={add} alt="add" />
              <p className="text-xs">Add Product</p>
            </button>
          </div>
        </div>
        <div className="flex justify-between w-full bg-white p-4 h-[50px] border-gray-200  border-r border-l">
          <div className="btn-group flex gap-2 justify-between items-center">
            <button className="btn">
              <span>
                <img src={tick} alt="tick" />
              </span>
            </button>
            <button className="btn text-[#7D8FB3] font-bold text-sm">
              Select All
            </button>
          </div>
          <div className="btn-group flex gap-2 justify-between items-center ">
            <button className="btn">
              <span>
                <img src={filter} alt="filter" />
              </span>
            </button>
            <button className="btn text-[#7D8FB3] font-bold text-sm">
              Filters
            </button>

            <button className="btn">
              <span>
                <img src={search} alt="search" />
              </span>
            </button>
            <button className="btn text-[#7D8FB3] font-bold text-sm">
              Search
            </button>
            <button className="btn">
              <span>
                <img src={edit} alt="edit" />
              </span>
            </button>
            <button className="btn text-[#7D8FB3] font-bold text-sm">
              Edit
            </button>
            <button className="btn">
              <span>
                <img src={del} alt="del" />
              </span>
            </button>
            <button className="btn text-[#7D8FB3] font-bold text-sm">
              Delete
            </button>
          </div>
          <div>
            <button className="btn">
              <span>
                <img src={men1} alt="men1" />
              </span>
            </button>
            <button className="btn">
              <span>
                <img src={men2} alt="men2" />
              </span>
            </button>
          </div>
        </div>
        <div className="p-4 w-full gap-2 lg:gap-5 mx-auto lg:p-6 bg-white items-start content-start rounded-ee-lg rounded-es-lg border-t border-r border-l border-b  flex flex-wrap">
          {data.map((itm) => (
            <div className="w-full h-[250px] md:w-[320px] mx-auto lg:w-[300px]  bg-slate-50 p-5 rounded-lg text-center">
              <div className="h-[120px]">
                <img src={itm.img} className="w-full h-full object-contain" />
              </div>
              <div className="mt-4">
                <p>{itm.name}</p>
                <button className="text-[10px] px-[15px] py-[5px] bg-white mt-[30px] rounded-xl">
                  {itm.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/4  border-l-2 border-gray-100 px-4 py-6 hidden 2xl:block">
        <section className="w-full rounded-lg border-2 border-gray-100">
          <div className="flex justify-between  border-b-2 border-gray-100 px-3 py-2">
            <div>
              <p className="text-xs mb-6 text-slate-500">Total Sales</p>
              <p className="font-bold text-base text-slate-500">$281.90</p>
            </div>
            <div className="w-[100px] h-[60px] relative">
              <img src={ChartLine} className="absolute t-0 w-full" />
              <img src={chart} className="w-full" />
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between">
              <p className="text-slate-500">6 Total Orders</p>
              <p className="text-slate-500"> View Report</p>
            </div>
          </div>
        </section>

        <section className="w-full rounded-lg border-2 mt-6 border-gray-100">
          <div className="flex justify-between  border-b-2 border-gray-100 px-4 py-2">
            <div>
              <p className="text-xs mb-6 text-slate-500">Total Sessions</p>
              <p className="font-bold text-base text-slate-500">456</p>
            </div>
            <div className="w-[100px] h-[60px] relative">
              <img src={ChartLineOrange} className="absolute t-0 w-full" />
              <img src={ChartOrange} className="w-full" />
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-center">
              <div className="bg-purple-200 py-1 px-3 rounded-lg">
                <p className="text-purple-600 font-bold">Live</p>
              </div>
              <p className="text-slate-500">4 Visitor</p>
              <p className="text-slate-500">See Live View</p>
            </div>
          </div>
        </section>

        <section className="w-full rounded-lg border-2 mt-6 border-gray-100">
          <div className="flex justify-between  border-b-2 border-gray-100 px-3 py-2">
            <div>
              <p className="text-xs mb-6 text-slate-500">Customer Rate</p>
              <p className="font-bold text-base text-slate-500">5.43%</p>
            </div>
            <div className="w-[100px] h-[60px] relative">
              <img src={Chart2} className=" w-full" />
              <img src={Chart6} className="w-full absolute top-6 " />
            </div>
          </div>
          <div className="p-3">
            <div className="flex justify-around">
              <div className="flex items-center">
                <div className="bg-purple-500 w-[8px] h-[8px] rounded-full mr-2" />
                <p className="text-slate-500">First</p>
              </div>

              <div className="flex items-center">
                <div className="bg-orange-500 w-[8px] h-[8px] rounded-full mr-2" />
                <p className="text-slate-500">Second</p>
              </div>
            </div>
          </div>
        </section>

        <div className="border-2 border-gray-100 h-[375px] overflow-hidden  rounded-lg mt-3 px-4 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-slate-500">Actions</p>
            <p className="text-purple-700 font-bold">Orders</p>
            <img src={navigationVertical} className="object-contain" />
          </div>
          <div className="mt-10">
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>11:32</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Category Added</p>
                <p className="text-slate-500 mt-1">Mobile Phones</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>11:21</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Product Added</p>
                <p className="text-slate-500 mt-1">Apple iPhone 9</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>10:54</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Product Added</p>
                <p className="text-slate-500 mt-1">Apple iPad Pro 12.9</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>09:45</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Product Added</p>
                <p className="text-slate-500 mt-1">Apple iPad Pro 12.9</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>09:45</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Category Added</p>
                <p className="text-slate-500 mt-1">Smart Watches</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col justify-center items-center pr-5">
                <div className="px-3 py-1 rounded-2xl border-2 border-gray-200">
                  <p>09:45</p>
                </div>
                <div className="w-[1px] h-[50px]  border border-gray-200" />
              </div>
              <div>
                <p className="text-slate-500">New Category Added</p>
                <p className="text-slate-500 mt-1">Smart Watches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
