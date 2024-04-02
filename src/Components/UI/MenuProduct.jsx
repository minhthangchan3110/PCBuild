import React from "react";
import ImgMouse from "../../assets/img/DMNB/mouse.png";
import ImgBP from "../../assets/img/DMNB/BP.png";
import ImgDS from "../../assets/img/DMNB/DS.png";
import ImgL from "../../assets/img/DMNB/L.png";
import ImgMH from "../../assets/img/DMNB/MH.png";
import ImgSDP from "../../assets/img/DMNB/SDP.png";
import ImgTN from "../../assets/img/DMNB/TN.png";
export default function MenuProduct() {
  return (
    <div className="w-full flex">
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgMouse} alt="" />
        <p className="pt-2">Chuột máy tính</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgBP} alt="" />
        <p className="pt-2">Bàn phím cơ</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgDS} alt="" />
        <p className="pt-2">Cáp sạc</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgL} alt="" />
        <p className="pt-2">Loa bluetooth</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgMH} alt="" />
        <p className="pt-2">Màn hình máy tính</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgSDP} alt="" />
        <p className="pt-2">Sạc dự phòng</p>
      </div>
      <div className="cursor-pointer w-1/6 border hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex flex-col items-center py-5">
        <img src={ImgTN} alt="" />
        <p className="pt-2">Tai nghe</p>
      </div>
    </div>
  );
}
