import React, { useState, useEffect } from "react";
import products from "../assets/data/products";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { AiOutlineMenu } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import ImgGaming from "../assets/img/gaming.jpg";
import ImgBuild from "../assets/img/build.jpg";
import ImgSmart from "../assets/img/smarthome.jpg";
import ImgPc from "../assets/img/pc.jpeg";
import ImgBag from "../assets/img/bag.jpg";
import ImgMain from "../assets/img/main.jpg";
import Clock from "../Components/UI/Clock";
import { IoIosArrowDropright } from "react-icons/io";
import Ticket from "../Components/Services/Ticket";
import MenuProduct from "../Components/UI/MenuProduct";
import Accessory from "../Components/UI/Accessory";
import Firm from "../Components/UI/Firm";
import TrakeMark from "../Components/UI/TrakeMark";
import Trend from "../Components/UI/Trend";
import ProductList from "../Components/UI/ProductList";
import ImgBanner1 from "../assets/img/bannerAccessory.png";
export default function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [screensProducts, setScreensProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "case"
    );
    const filteredScreenProducts = products.filter(
      (item) => item.category === "screen"
    );
    setTrendingProducts(filteredTrendingProducts);
    setScreensProducts(filteredScreenProducts);
  }, []);
  return (
    <div className="h-auto w-auto bg-[#f5f5f5] overflow-x-hidden">
      <header className="bg-white">
        <Header />
      </header>
      <div className="mx-[55px] my-7 w-auto">
        <section className="grid grid-rows-10 grid-flow-col gap-4 w-auto">
          <div className="row-span-7 col-span-1 bg-white border shadow-sm px-4 py-2">
            <div className="flex flex-col gap-4 ">
              <div className="flex gap-2 items-center ">
                <div className="">
                  <AiOutlineMenu />
                </div>
                <p className="font-semiboldbold">DANH MỤC SẢN PHẨM</p>
              </div>
              <div>
                <div>PC - Máy tính chơi game, Làm việc</div>
              </div>
              <div>
                <div>Linh kiện máy tính</div>
              </div>
              <div>
                <div>Smarthome</div>
              </div>
              <div>
                <div>Balo - Túi xách</div>
              </div>
              <div>
                <div>Build PC theo yêu cầu</div>
              </div>
              <div>
                <div>Ghế bàn</div>
              </div>
              <div>
                <div>Miracle tại Shoppe</div>
              </div>
              <div>
                <div>Miracle tại Lazada</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-start-8 row-end-13 border relative overflow-hidden">
            <img
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              src={ImgGaming}
              alt=""
            />
          </div>

          <div className="col-span-4 row-span-1 border flex items-center bg-white shadow-sm gap-4 px-4 py-2">
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
          <div className=" row-span-6 col-span-3 overflow-hidden border relative ">
            <img
              src={ImgMain}
              alt=""
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>

          <div className="col-span-1 row-start-8 row-end-13 border relative overflow-hidden">
            <img
              src={ImgBuild}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 row-start-8 row-end-13 border relative overflow-hidden">
            <img
              src={ImgSmart}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 row-start-8 row-end-13 border relative overflow-hidden">
            <img
              src={ImgPc}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 border row-start-2 row-end-4 relative overflow-hidden">
            <img
              src={ImgBag}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 border row-start-4 row-end-6 relative overflow-hidden">
            <img
              src={ImgBag}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 border row-start-6 row-end-8 relative overflow-hidden">
            <img
              src={ImgBag}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
          <div className="col-span-1 border row-start-8 row-end-13 relative overflow-hidden">
            <img
              src={ImgBag}
              className="absolute w-full h-full object-cover transition-all duration-500 hover:scale-105"
              alt=""
            />
          </div>
        </section>
        <section className=" bg-red-500 flex flex-col items-center mt-6 w-full rounded-lg col-1 px-[15px] py-[20px]">
          <div className="row-1 flex items-center justify-between w-full">
            <div>
              <p className="text-2xl font-semibold text-white">
                SẢN PHẨM KHUYỄN MÃI
              </p>
            </div>
            <Clock />
          </div>
          <div className="w-full">
            <div className="flex gap-2">
              <ProductList data={trendingProducts.slice(0, 5)} />
            </div>
          </div>

          <button className="transition ease-in-out delay-350 mt-6 px-6 py-4 flex items-center gap-3 hover:-translate-y-1 hover:scale-110 bg-white rounded-lg hover:bg-yellow-300 hover:text-white ">
            <p className="text-lg">Xem tất cả SẢN PHẨM KHUYẾN MÃI</p>
            <div className="text-xl">
              <IoIosArrowDropright />
            </div>
          </button>
        </section>
        <section className="mt-6">
          <div className="font-semibold">Khuyến mãi dành cho bạn</div>
          <div>
            <Ticket />
          </div>
        </section>
        <section className="mt-6 row md:col-5 w-full">
          <div className="font-semibold text-2xl">TOP SẢN PHẨM BÁN CHẠY</div>

          <div className="flex gap-2">
            <ProductList data={trendingProducts.slice(0, 5)} />
          </div>
        </section>
        <section className="flex flex-col mt-6 w-full  bg-white">
          <div className="border-t border-l border-r">
            <p className="pl-5 font-semibold text-2xl py-3">DANH MỤC NỔI BẬT</p>
          </div>
          <div className="">
            <MenuProduct />
          </div>
        </section>
        <section className="mt-6 w-full">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-semibold text-2xl">LINH KIỆN MÁY TÍNH</p>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded-md border text-white border-yellow-400 bg-yellow-400">
                Màn hình
              </button>
              <button className="bg-white px-4 py-1 rounded-md border">
                Card đồ họa
              </button>
              <button className=" bg-white px-4 py-1 rounded-md border">
                Ổ cứng
              </button>
              <button className="px-4 py-1 bg-white rounded-md border">
                Vỏ case
              </button>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-6 gap-3 h-auto">
            <img
              src={ImgBanner1}
              alt=""
              className="row-span-2 col-span-1 mt-5 w-full h-[1000px]"
            />
            <ProductList data={screensProducts.slice(0, 10)} />
          </div>

          <div className="w-full flex mt-4 items-center justify-center">
            <button className="text-yellow-500 gap-1 border flex px-8 rounded-lg border-yellow-500 bg-white py-2 hover:bg-blue-800 hover:text-white hover:border-blue-500">
              Xem tất cả <p className="font-medium"> Màn hình</p>
            </button>
          </div>
        </section>
        <section className="mt-6 w-full">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-semibold text-2xl">LAPTOP GAMING NỔI BẬT</p>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded-md border text-white border-yellow-400 bg-yellow-400">
                Asus
              </button>
              <button className="bg-white px-4 py-1 rounded-md border">
                Acer
              </button>
              <button className=" bg-white px-4 py-1 rounded-md border">
                Msi
              </button>
            </div>
          </div>
          <TrakeMark />
          <div className="w-full flex mt-4 items-center justify-center">
            <button className="text-yellow-500 gap-1 border flex px-8 rounded-lg border-yellow-500 bg-white py-2 hover:bg-blue-800 hover:text-white hover:border-blue-500">
              Xem tất cả <p className="font-medium"> Laptop Gaming</p>
            </button>
          </div>
        </section>
        <section className="mt-8">
          <Firm />
        </section>
        <section className="mt-10">
          <Trend />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
