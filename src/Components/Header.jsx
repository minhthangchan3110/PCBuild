import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import LogoGame from "../assets/img/LogoGame.jpg";
import PopupLogin from "./PopupLogin";
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const loginRef = useRef(null);

  const handleOpenLogin = (event) => {
    event.stopPropagation();
    setShowLogin(!showLogin);
  };

  const closeShowLogin = () => {
    setShowLogin(false);
  };

  const handleClickOutside = (event) => {
    if (loginRef.current && !loginRef.current.contains(event.target)) {
      closeShowLogin();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:flex flex-col">
      <div className="flex justify-between mx-[55px]">
        <div className="flex items-center xl:hidden lg:hidden gap-4">
          <AiOutlineMenu />
          <div className="w-[80px] h-[80px]">
            <img src={LogoGame} alt="" />
          </div>
        </div>
        <div className="w-[100px] h-[100px] md:hidden sm:hidden">
          <img src={LogoGame} alt="" />
        </div>
        <div className="w-2/5 flex flex-col justify-center md:hidden sm:hidden">
          <form className="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Tìm kiếm
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm sản phẩm..."
                required
              />
              <button
                type="submit"
                className=" text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
        <div className="flex  items-center">
          <div
            className="flex flex-col items-center pl-2 pr-1 "
            onClick={handleOpenLogin}
            ref={loginRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div className="flex pr-2 pl-1">
            <div
              className="mr-8 relative "
              onClick={handleOpenLogin}
              ref={loginRef}
            >
              <div className="flex pb-1">
                <div className="mr-1 text-sm cursor-pointer  md:hidden sm:hidden">
                  Đăng nhập
                </div>
                <div className="text-sm  md:hidden sm:hidden"> / </div>
                <div className="ml-1 text-sm cursor-pointer  md:hidden sm:hidden">
                  Đăng ký
                </div>
              </div>

              <div>
                <div className="text-sm cursor-pointer flex  md:hidden sm:hidden">
                  <div>Tài khoản của tôi</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-6 mx-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {showLogin && (
              <div
                className="absolute top-[70px] right-[10px]"
                onClick={(event) => event.stopPropagation()}
              >
                <PopupLogin />
              </div>
            )}
            <div className="flex items-center">
              <a href="#" role="button" class="relative flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 font-sans m-0 text-white leading-tight text-center text-xs">
                  0
                </span>
              </a>

              <div className="text-sm cursor-pointer md:hidden sm:hidden">
                Giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:hidden mx-[55px]">
        <div className=" flex flex-col justify-center xl:hidden lg:hidden">
          <form className="">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Tìm kiếm
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:outline-none focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                placeholder="Tìm kiếm sản phẩm..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
