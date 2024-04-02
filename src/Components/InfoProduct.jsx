import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { BsBox2 } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FcUndo } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";

export default function InfoProduct() {
  const slides = [
    "https://product.hstatic.net/200000722513/product/post-04_5ea947c03ddb420d98b01380e75198b7_grande.jpg",
    "https://product.hstatic.net/1000288298/product/dsc05818_1c758945f949440a9a05213d8d36e0db_master.jpg",
    "https://product.hstatic.net/1000288298/product/dsc00875_b2ec304b6e0747ca804ae402c1e4bc39_master.jpg",
  ];
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="grid grid-cols-3">
      <div className="border-r">
        <div className="col-span-1 overflow-hidden relative m-4 h-2/3">
          <div
            className="flex transition-transform ease-out duration-500 h-full"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {slides.map((s) => (
              <img src={s} alt="" className="w-full" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <IoIosArrowBack size={40} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <IoIosArrowForward size={40} />
            </button>
          </div>
          <div className="absolute top-2 left-2">
            <div className="flex flex-col items-center justify-center bg-[#FF0000] px-3 py-2 text-sm text-white rounded-b-xl">
              <p>-18%</p>
              <p>OFF</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div
                  className={`transition-all w-3 h-3 bg-white rounded-full ${
                    curr === i ? "p-2" : "bg-opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="p-4 h-full">
          <div className="h-1/4">
            <p className="text-2xl font-semibold">
              PC HIỆU SUẤT GAMING CAO RTX 4060 - I5 12400F (Tất cả All NEW- BH
              36 tháng) - 16 Slots Order
            </p>
            <p>
              Tình trạng:{" "}
              <span className="text-orange-500 font-semibold">Còn hàng</span>
            </p>
          </div>
          <div className="grid grid-cols-3 mt-4 h-3/5">
            <div className="col-span-2 grid grid-rows-3 w-full pr-4">
              <div className="bg-[#f4f2f2] w-full row-span-1 flex px-4 py-2 items-center justify-center rounded-lg h-3/4">
                <p className="w-1/4 font-medium">Giá:</p>
                <div className=" w-3/4 flex gap-3 items-center ">
                  <span className="text-[28px] text-[#FF0000] font-semibold pr-2">
                    17,990,000₫
                  </span>
                  <del className="text-[18px] text-[#878c8f]">21,990,000₫</del>
                  <div className="border px-2 py-1 text-sm rounded-lg font-medium text-[#FF0000] border-[#FF0000]">
                    -18%
                  </div>
                </div>
              </div>
              <div className=" px-4 flex gap-10 items-center h-2/3">
                <span className="font-medium">Số lượng:</span>
                <div className="border rounded-lg flex w-1/3  py-2 justify-center">
                  <button
                    className="w-1/3 text-center border-r"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-1/3 text-center focus:outline-none"
                    value={quantity}
                    readOnly
                  />
                  <button className="w-1/3 border-l" onClick={handleIncrement}>
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-4 row-span-1 w-full h-2/3">
                <button className="w-1/2 border rounded-lg border-[#FF0000] font-semibold text-[#FF0000]">
                  THÊM VÀO GIỎ
                </button>
                <button className="w-1/2 bg-[#FF0000] font-semibold rounded-lg text-white border">
                  MUA NGAY
                </button>
              </div>
              <div className="flex">
                <div></div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col mb-3">
              <div className="border flex flex-col gap-4 pl-4 py-4 rounded-lg">
                <p className="font-semibold">Chính sách bán hàng</p>
                <div className="flex gap-3 items-center">
                  <BsBox2 className="opacity-50" size={20} />
                  <p>Cam kết 100% chính hãng</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FiPhoneCall className="opacity-50" size={20} />
                  <p>Hỗ trợ 24/7</p>
                </div>
                <p className="font-semibold">Thông tin thêm</p>
                <div className="flex gap-3 items-center">
                  <FcApproval className="opacity-50" size={20} />
                  <p>Hoàn tiền 111% nếu hàng giả</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FcPaid className="opacity-50" size={20} />
                  <p>Mở hộp kiểm tra nhận hàng</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FcUndo className="opacity-50" size={20} />
                  <p>Đổi trả trong 7 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
