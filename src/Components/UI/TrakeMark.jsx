import React from "react";
import ImgBanner2 from "../../assets/img/bannerLaptop.png";

import ImgLapTop from "../../assets/img/laptopgaming1.png";
import { CiShoppingBasket } from "react-icons/ci";
export default function TrakeMark() {
  const accessoryItems1 = [
    {
      img: ImgLapTop,
      title: "Màn hình AOC 22B3HM/74 (VA - FHD - 75Hz)",
      firm: "AOC",
      price: "1,779,000₫",
    },
    {
      img: ImgLapTop,
      title: "Màn hình AOC 22B3HM/74 (VA - FHD - 75Hz)",
      firm: "AOC",
      price: "1,779,000₫",
    },
    {
      img: ImgLapTop,
      title: "Màn hình AOC 22B3HM/74 (VA - FHD - 75Hz)",
      firm: "AOC",
      price: "1,779,000₫",
    },
    {
      img: ImgLapTop,
      title: "Màn hình AOC 22B3HM/74 (VA - FHD - 75Hz)",
      firm: "AOC",
      price: "1,779,000₫",
    },
    {
      img: ImgLapTop,
      title: "Màn hình AOC 22B3HM/74 (VA - FHD - 75Hz)",
      firm: "AOC",
      price: "1,779,000₫",
    },
  ];
  const accessoryItems2 = [
    {
      img: ImgLapTop,
      title:
        "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
      firm: "ASUS",
      price: "6,299,000₫",
    },
    {
      img: ImgLapTop,
      title:
        "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
      firm: "ASUS",
      price: "6,299,000₫",
    },
    {
      img: ImgLapTop,
      title:
        "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
      firm: "ASUS",
      price: "6,299,000₫",
    },
    {
      img: ImgLapTop,
      title:
        "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
      firm: "ASUS",
      price: "6,299,000₫",
    },
    {
      img: ImgLapTop,
      title:
        "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
      firm: "ASUS",
      price: "6,299,000₫",
    },
  ];
  return (
    <div>
      <div className="flex w-full gap-4 h-full">
        <div className="w-4/5 grid-rows-2 gap-4 grid ">
          <div className=" row-span-1 grid gap-2 grid-cols-5 h-full">
            {accessoryItems1.map((item, index) => (
              <div className="col-span-1 bg-white rounded-lg" key={index}>
                <div className="flex flex-col items-center h-auto">
                  <img
                    src={item.img}
                    alt="#Anh"
                    className="w-full h-1/2 px-2 py-4"
                  />
                </div>
                <div className="h-1/2 py-2 w-full px-3 flex flex-col justify-between">
                  <p className="text-slate-400 text-sm">{item.firm}</p>
                  <p className="w-full line-clamp-2">{item.title}</p>
                  <p className="text-sm text-black font-semibold">
                    {item.price}
                  </p>
                  <div
                    class="flex items-center gap-3 mt-4 hover:bg-blue-800 hover:text-white hover:rounded-full w-full transition rounded-full delay-150 cursor-pointer"
                    data-te-animation="[slide-right_1s_ease-in-out]"
                  >
                    <div class="bg-blue-800 text-white p-2 text-2xl rounded-full">
                      <CiShoppingBasket />
                    </div>
                    <p class="text-xs font-medium">THÊM VÀO GIỎ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" row-span-1 grid gap-2 grid-cols-5 h-full">
            {accessoryItems2.map((item, index) => (
              <div className="col-span-1 bg-white rounded-lg" key={index}>
                <div className="flex flex-col items-center h-auto">
                  <img
                    src={item.img}
                    alt="#Anh"
                    className="w-full h-1/2 px-2 py-4"
                  />
                </div>
                <div className="h-1/2 py-2 w-full px-3 flex flex-col justify-between">
                  <p className="text-slate-400 text-sm">{item.firm}</p>
                  <p className="w-full line-clamp-2">{item.title}</p>
                  <p className="text-sm text-black font-semibold">
                    {item.price}
                  </p>
                  <div
                    class="flex items-center gap-3 mt-4 hover:bg-blue-800 hover:text-white hover:rounded-full w-full transition rounded-full delay-150 cursor-pointer"
                    data-te-animation="[slide-right_1s_ease-in-out]"
                  >
                    <div class="bg-blue-800 text-white p-2 text-2xl rounded-full">
                      <CiShoppingBasket />
                    </div>
                    <p class="text-xs font-medium">THÊM VÀO GIỎ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-500 w-1/5 rounded-lg">
          <img src={ImgBanner2} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
