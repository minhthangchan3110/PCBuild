import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { AiOutlineMenu } from "react-icons/ai";
import Footer from "../Components/Footer";
import { GiAchievement } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import InfoProduct from "../Components/InfoProduct";
import Ticket from "../Components/Services/Ticket";
import DescProduct from "../Components/UI/DescProduct";

import products from "../assets/data/products";
import ProductList from "../Components/UI/ProductList";
export default function Product() {
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "case"
    );
    setData(filteredProducts);
  }, []);
  return (
    <div className="h-auto w-auto bg-[#f5f5f5] overflow-x-hidden">
      <header className="bg-white">
        <Header />
      </header>
      <div className="bg-white w-full shadow-inner">
        <div className="flex mx-[55px] gap-10 ">
          <div className="flex gap-2 items-center border-r border-l py-3 px-5 shadow-lg">
            <div className="">
              <AiOutlineMenu />
            </div>
            <p className="font-semibold">DANH MỤC SẢN PHẨM</p>
          </div>
          <div className="flex items-center">
            <div>
              <GiAchievement />
            </div>
            <div>Đảm bảo chất lượng</div>
          </div>
          <div className="flex items-center">
            <div>
              <IoMdCheckmarkCircleOutline />
            </div>
            <div>Mở hộp kiểm tra nhận hàng</div>
          </div>
          <div className="flex items-center">
            <div>
              <FaShippingFast />
            </div>
            <div>Vận chuyển siêu tốc</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-600 mx-[55px] mt-3">
        Trang chủ / Màn hình máy tính / Màn hình Asus ProArt PA247CV
        (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)
      </div>
      <div className="mx-[55px] my-3 w-auto">
        <section className="mt-3 bg-white">
          <InfoProduct />
        </section>
        <section className="bg-white p-4 mt-6">
          <p className="font-semibold">Khuyến mãi dành cho bạn</p>
          <Ticket />
        </section>
        <section className="bg-white p-4 mt-6">
          <DescProduct />
        </section>
        <section className="mt-6">
          <p className="font-semibold text-2xl">Sản phẩm liên quan</p>
          <div className="flex gap-2">
            <ProductList data={data.slice(0, 5)} />
          </div>
        </section>
      </div>
      <footer className="mt-14">
        <Footer />
      </footer>
    </div>
  );
}
