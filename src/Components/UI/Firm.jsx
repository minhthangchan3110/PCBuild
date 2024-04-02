import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ImgPain from "../../assets/img/pain.png";
export default function Firm() {
  const firm1 = [
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
    {
      img: ImgPain,
      title: "Đế Tản Nhiệt Cooler Master X-Slim II",
      price: "465.000₫",
    },
  ];
  return (
    <div className="w-full border py-4 px-6 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-3">
        <p className="font-semibold text-xl">Phụ kiện</p>
        <div className="flex gap-8 p">
          <div className="opacity-50 cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer ">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full">
        {firm1.map((item, index) => (
          <div key={index} className="border-b flex items-center p-2 w-full ">
            <div className="w-1/3">
              <img src={item.img} alt="Product" className="w-full h-auto" />
            </div>
            <div className="w-2/3 ml-2">
              <p className="text-start text-sm text-gray-500">{item.title}</p>
              <p className="text-start text-sm font-semibold mt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
