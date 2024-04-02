import React from "react";
import ImgMan from "../../assets/img/gamen.png";
export default function Trend() {
  const iconTrend = [
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
    {
      img: ImgMan,
      title: "Màn hình",
    },
  ];
  return (
    <div className="grid grid-cols-9 w-full items-center bg-white shadow-md">
      <div className="col-span-2 flex flex-col gap-2 items-start pl-10">
        <div className="font-semibold text-xl">Xu hướng tìm kiếm</div>
        <button className="border px-4 py-2 rounded-lg bg-yellow-400 text-white">
          XEM THÊM
        </button>
      </div>
      {iconTrend.map((item, index) => (
        <div className="col-span-1 border-r border-l ">
          <div className="flex flex-col w-full gap-2 items-center py-7 px-3">
            <div className="w-1/2 mb-2">
              <img src={item.img} alt="" />
            </div>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
