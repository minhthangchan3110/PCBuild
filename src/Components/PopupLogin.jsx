import React from "react";

export default function PopupLogin() {
  return (
    <section class="xl:w-[80%] lg:w-[60%] md:w-[100%] sm:w-[100%]">
      <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto ">
        <div class="w-full bg-white rounded-lg shadow-xl z-50 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-2 md:space-y-6 sm:p-8">
            <div>
              <h1 class="text-sm font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white pb-2">
                ĐĂNG NHẬP TÀI KHOẢN
              </h1>
              <p>Nhập email và mật khẩu của bạn</p>
            </div>

            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <hr className="py-2" />
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="w-full text-white bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Đăng nhập
              </button>
              <div className="">
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 pb-2">
                  Khách hàng mới?{" "}
                  <a
                    href="#"
                    class="font-medium text-orange-600 hover:underline "
                  >
                    Tạo tài khoản
                  </a>
                </p>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Quên mật khẩu?{" "}
                  <a
                    href="#"
                    class="font-medium text-orange-600 hover:underline "
                  >
                    Khôi phục mật khẩu
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
