import React from "react";
import { CiShoppingBasket } from "react-icons/ci";

export default function ProductCard({ item }) {
  return (
    <div className="w-full h-auto justify-between gap-3  mt-5">
      <div className="bg-white rounded-lg w-full h-full pb-4 flex flex-col justify-between">
        <div className="w-full  h-2/5 flex justify-center items-center">
          <img src={item.imgUrl} alt="" className=" mt-8 w-4/5 h-full" />
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="text-slate-500">{item.firm}</div>
          <div className="w-full line-clamp-2">{item.productName}</div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <div className="">
                {item.discount ? (
                  <>
                    <p className="font-semibold text-red-500">{item.price}</p>
                    <p className="line-through text-slate-500">
                      {item.originalPrice}
                    </p>
                  </>
                ) : (
                  <p className="font-semibold text-black">
                    {item.originalPrice}
                  </p>
                )}
              </div>
            </div>
            {item.discount && (
              <div className="bg-red-500 text-sm px-2 py-1 rounded-lg text-white">
                {item.discount}
              </div>
            )}
          </div>
          <div
            className="flex items-center gap-3 mt-4 hover:bg-blue-800 hover:text-white hover:rounded-full w-3/4 transition rounded-full delay-150 cursor-pointer"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            <div className="bg-blue-800 text-white p-2 text-2xl rounded-full">
              <CiShoppingBasket />
            </div>
            <p className="text-xs font-medium">THÊM VÀO GIỎ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
