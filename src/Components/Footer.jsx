import React from "react";
import "../index.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export default function Footer() {
  return (
    <div>
      <footer className="w-screen h-auto">
        <div className="grid grid-cols-2 gap-5 w-screen bg-blue-400 py-8 px-4 ">
          <div className="flex flex-col items-end justify-center">
            <p className="text-2xl font-bold text-white ">
              Đăng ký nhận bản tin
            </p>
            <span className="text-white">
              Để nhận các thông tin mới từ Techgo cũng như các chương trình
              khuyến mãi
            </span>
          </div>
          <div className="w-5/6">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Vui lòng nhập email của bạn..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-[120px] grid grid-cols-4 gap-x-4 mt-[30px] gap-y-8 pb-7">
          <div>
            <div className="font-semibold text-xl">Về Miracle</div>
          </div>
          <div>
            <div className="font-semibold text-xl">Thông tin liên hệ</div>
          </div>
          <div>
            <div className="font-semibold text-xl">Hỗ trợ khách hàng</div>
          </div>
          <div>
            <div className="font-semibold text-xl">Chính sách</div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div>
              Trang thương mại chính thức của Miracle. Luôn tìm kiếm những sản
              phẩm vì game thủ.
            </div>
            <div className="flex gap-2">
              <div className="border p-2 cursor-pointer rounded-md">
                <FaFacebookF />
              </div>
              <div className="border p-2 cursor-pointer rounded-md">
                <FaInstagram />
              </div>
              <div className="border p-2 cursor-pointer rounded-md">
                <FaTwitter />
              </div>
              <div className="border p-2 cursor-pointer rounded-md">
                <FaGooglePlusG />
              </div>
              <div className="border p-2 cursor-pointer rounded-md">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div>
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>CS1:Ngõ 181 - Thanh Xuân - Hà Nội</p>
                <p>CS2: Quang Trung - TP Thái Nguyên</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FaPhoneAlt />
              </div>
              <div>0356458854</div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <IoMdMail />
              </div>
              <div>minhthang3916@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="cursor-pointer hover:text-blue-400 transition ease-in-out delay-150">
              Tài Khoản Ngân Hàng
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition ease-in-out delay-150">
              Tìm kiếm
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="cursor-pointer hover:text-blue-400 transition ease-in-out delay-150">
              Chính Sách Bảo Mật
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition ease-in-out delay-150">
              Qui Định Bảo Hành
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition ease-in-out delay-150">
              Chính Sách Đổi Trả
            </p>
          </div>
        </div>
        <hr />
        <p className="flex items-center justify-center py-4 opacity-55">
          Copyright © Miracle - Phụ kiện Game Thủ |Tư vấn Build PC| giá rẻ -
          www.miracle.com. Powered by Haravan
        </p>
      </footer>
    </div>
  );
}
