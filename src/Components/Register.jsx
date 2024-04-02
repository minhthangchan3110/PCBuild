import React from "react";
import Header from "./Header";
import { AiOutlineMenu } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import Footer from "../Components/Footer";

export default function Register() {
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
      <div className="flex flex-col my-10 items-center">
        <section class="bg-white w-2/5  dark:bg-gray-900">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div class="text-xl mb-10 font-bold gap-5 h-full justify-center flex leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  <p className="opacity-50">Đăng nhập</p>
                  <hr className="w-[2px] h-6 bg-black opacity-50" />
                  <p className="">Đăng ký</p>
                </div>
                <form class="space-y-8 md:space-y-6" action="#">
                  <div>
                    <input
                      type="lastname"
                      name="firstname"
                      id="firstname"
                      className="bg-gray-100 p-4 border focus:outline-none focus:bg-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Họ"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="lastname"
                      name="lastname"
                      id="lastname"
                      className="bg-gray-100 p-4 border focus:outline-none focus:bg-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Tên"
                      required=""
                    />
                  </div>

                  <div className="flex gap-4">
                    <div class="flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value="female"
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-1"
                        class="ms-2 text-sm  text-gray-900 dark:text-gray-300"
                      >
                        Nam
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        checked
                        id="default-radio-2"
                        type="radio"
                        value="male"
                        name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-radio-2"
                        class="ms-2 text-sm text-gray-900 dark:text-gray-300"
                      >
                        Nữ
                      </label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="datebirth"
                      name="datebirth"
                      id="datebirth"
                      className="bg-gray-100 p-4 border focus:outline-none focus:bg-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="mm/dd/yyyy"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-100 p-4 border focus:outline-none focus:bg-white border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Mật khẩu"
                      class="bg-gray-100 p-4 focus:outline-none focus:bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <p className="text-sm">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a
                        href="https://policies.google.com/terms"
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://policies.google.com/terms"
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm p-4 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    ĐĂNG KÝ
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Bạn đã có tài khoản?{" "}
                    <a
                      href="#"
                      class="font-medium text-orange-500 text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Đăng nhập
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
