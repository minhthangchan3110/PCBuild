import React from "react";
import FreeShip from "../../assets/img/freeship.jpg";
import { TbExclamationMark } from "react-icons/tb";
export default function Ticket() {
  const ticketItem = [
    {
      img: FreeShip,
      title: "Miễn phí vẫn chuyển",
      content: "Đơn hàng từ 0đ",
      code: "MTT31102002",
      expiry: "HSD: 10/04/2024",
    },
    {
      img: FreeShip,
      title: "Giảm 10%",
      content: "Tất cả sản phẩm của Mocato",
      code: "NP4TKOL1DYP7",
      expiry: "HSD: 05/05/2024",
    },
    {
      img: FreeShip,
      title: "Giảm 50.000đ",
      content: "Chỉ áp dụng khi mua Gundam",
      code: "F38FX2TPA66G",
      expiry: "HSD: 05/05/2024",
    },
    {
      img: FreeShip,
      title: "Giảm ngay 20.000đ",
      content: "Đơn hàng từ 500.000đ",
      code: "5A5BWYQCC1LI",
      expiry: "HSD: 20/05/2024",
    },
  ];
  return (
    <div className="flex w-full gap-3 mt-2">
      {ticketItem.map((item, index) => (
        <div className="w-1/4 flex " key={index}>
          <div className="border bg-white px-3 py-6 w-1/4 flex items-center rounded-l-lg">
            <img src={FreeShip} alt="#" className="" />
          </div>
          <div className="border px-4 bg-white py-2 flex flex-col items-start justify-between gap-2 w-3/4 rounded-r-lg h-auto">
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs">{item.content}</p>
              </div>
              <div className="border rounded-full border-black">
                <TbExclamationMark />
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="text-xs">
                  Mã: <span className="font-semibold">{item.code}</span>
                </p>
                <p className="text-xs">{item.expiry}</p>
              </div>
              <button className="rounded-full hover:bg-blue-500 delay-150 text-[10px] bg-yellow-400 text-white px-3 py-1">
                SAO CHÉP MÃ
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
