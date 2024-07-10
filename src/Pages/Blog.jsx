import React from "react";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";
import { BreadCrumbs, Footer, Subscribe } from "../components";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto">
        <BreadCrumbs />
      </div>
      <div className="container grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] custom-margin mx-auto">
        <div class="hidden lg:block border border-[--border] p-[15px] rounded-[10px] h-max ">
          <p class="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">
            Направления
          </p>
          <ul class="rounded-[5px]  flex flex-col gap-2 w-auto ">
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Реанимация
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Хирургия{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Офтальмология{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Лабораторная диагностика{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Акушерство{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Гинекология{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Гистология{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Косметология{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Оториноларингология{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Рентгенология и томография{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Рентгенология и томография{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Стерилизация{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Физиотерапия и реабилитация{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] mb-[7px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Функциональная диагностика{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Новинки{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Распродажи{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
            <a href="/catalog">
              <li class="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
                Кабинеты под ключ{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class=" rotate-[-90deg] w-[17px] h-[17px]  "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                </svg>
              </li>
            </a>
          </ul>
        </div>
        <div class="flex flex-col">
          <div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] ">
              <div class="grid grid-cols-1 lg:grid-cols-[3fr_5fr] border border-[--border] rounded-[10px] ">
                <div class="rounded-[10px] overflow-hidden lg:h-[304px] ">
                  <img
                    src={Img1}
                    alt=""
                    class="w-full h-[175px] lg:h-full object-cover "
                  />
                </div>
                <div class="flex flex-col justify-between p-[15px] lg:p-[30px] gap-[30px] md:gap-[40px] ">
                  <div>
                    <p class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                      Что такое инфузомат (инфузионный насос)
                    </p>
                    <p class="text-[10px] md:text-[12px] mb-[10px] md:mb-[15px] lg:mb-[25px]  ">
                      14.03.2023
                    </p>
                    <p class=" custom-text text-[--text] ">
                      Обеспечение нашей деятельности требует определения и
                      уточнения распределения внутренних резервов и ресурсов.
                      Каждый из нас понимает очевидную вещь.{" "}
                    </p>
                  </div>
                  <div>
                    <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] bg-[#07745E] border border-[--border] text-white  text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-[3fr_5fr] border border-[--border] rounded-[10px] ">
                <div class="rounded-[10px] overflow-hidden lg:h-[304px] ">
                  <img
                    src={Img2}
                    alt=""
                    class="w-full h-[175px] lg:h-full object-cover "
                  />
                </div>
                <div class="flex flex-col justify-between p-[15px] lg:p-[30px] gap-[30px] md:gap-[40px] ">
                  <div>
                    <p class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                      Что такое инфузомат (инфузионный насос)
                    </p>
                    <p class="text-[10px] md:text-[12px] mb-[10px] md:mb-[15px] lg:mb-[25px]  ">
                      14.03.2023
                    </p>
                    <p class=" custom-text text-[--text] ">
                      Обеспечение нашей деятельности требует определения и
                      уточнения распределения внутренних резервов и ресурсов.
                      Каждый из нас понимает очевидную вещь.{" "}
                    </p>
                  </div>
                  <div>
                    <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] bg-[#07745E] md:px-[20px] lg:px-[30px] border border-[--border] text-white hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-[3fr_5fr] border border-[--border] rounded-[10px] ">
                <div class="rounded-[10px] overflow-hidden lg:h-[304px] ">
                  <img
                    src={Img3}
                    alt=""
                    class="w-full h-[175px] lg:h-full object-cover "
                  />
                </div>
                <div class="flex flex-col justify-between p-[15px] lg:p-[30px] gap-[30px] md:gap-[40px] ">
                  <div>
                    <p class="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                      Что такое инфузомат (инфузионный насос)
                    </p>
                    <p class="text-[10px] md:text-[12px] mb-[10px] md:mb-[15px] lg:mb-[25px]  ">
                      14.03.2023
                    </p>
                    <p class=" custom-text text-[--text] ">
                      Обеспечение нашей деятельности требует определения и
                      уточнения распределения внутренних резервов и ресурсов.
                      Каждый из нас понимает очевидную вещь.{" "}
                    </p>
                  </div>
                  <div>
                    <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] bg-[#07745E] border border-[--border] text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mt-[30px] justify-center">
            <div class="MuiStack-root css-1sos3zc-MuiStack-root">
              <nav
                aria-label="pagination navigation"
                class="MuiPagination-root MuiPagination-outlined css-g60h9i-MuiPagination-root"
              >
                <ul class="MuiPagination-ul css-wjh20t-MuiPagination-ul">
                  <li>
                    <button
                      class="MuiButtonBase-root Mui-disabled MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-rounded Mui-disabled MuiPaginationItem-firstLast css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root"
                      tabindex="-1"
                      type="button"
                      disabled=""
                      aria-label="Go to first page"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="FirstPageIcon"
                      >
                        <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      class="MuiButtonBase-root Mui-disabled MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-rounded Mui-disabled MuiPaginationItem-previousNext css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root"
                      tabindex="-1"
                      type="button"
                      disabled=""
                      aria-label="Go to previous page"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="NavigateBeforeIcon"
                      >
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-outlined MuiPaginationItem-rounded MuiPaginationItem-firstLast css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root"
                      tabindex="0"
                      type="button"
                      aria-label="Go to last page"
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="LastPageIcon"
                      >
                        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                      </svg>
                      <span class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Blog;
