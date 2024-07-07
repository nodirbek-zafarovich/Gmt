import React, { useEffect } from "react";
import Services1 from "../assets/services1.png";
import Services2 from "../assets/services2.png";
import Services3 from "../assets/services3.png";
import Services4 from "../assets/services4.png";
import Services5 from "../assets/services5.png";
import Services6 from "../assets/services6.png";
import Services7 from "../assets/services7.png";
import Services8 from "../assets/services8.png";
import {
  AboutCompany,
  Footer,
  News,
  Options,
  SendQuestion,
} from "../components";

const Uslugi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div class=" container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px] mx-[60px] mb-[50px] ">
        <p class="mb-[30px] lg:mb-[40px]  text-[28px] md:text-[34px] lg:text-[48px] ">
          Услуги
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px] ">
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Апробация
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services1}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Помощь инженеров в настройке
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services2}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Обучение работе с оборудованием
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services3}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Работа с учебными центрами повышения квалификации
                    медицинского персонала
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services4}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Помощь в подборе оборудования
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services5}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Пуско-наладочные работы
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services6}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Подменный аппарат
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services7}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
          <div class="bg-white rounded-[10px] overflow-hidden border-[--border] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
            <div class=" order-2  lg:order-1 h-full ">
              <div class="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
                <div>
                  <p class="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px] font-semibold ">
                    Организация обучения врачей на собственной территории
                  </p>
                  <p class="text-[12px] text-[--text] ">Описание услуги</p>
                  <p class=" custom-text text-[--text] mb-[51px] lg:mb-[93px] ">
                    Также как постоянное информационно-пропагандистское
                    обеспечение нашей деятельности требует определения и
                    уточнения распределения внутренних резервов и ресурсов.{" "}
                  </p>
                </div>
                <div class="mt-auto  ">
                  <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-green-900 text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class=" order-1 overflow-hidden  ">
              <img
                src={Services8}
                alt="image"
                class="w-full h-[245px] lg:h-full object-cover  "
              />
            </div>
          </div>
        </div>
        <div className="py-10">
          <Options />
        </div>
        <div className="py-10">
          <News />
        </div>

        <div>
          <AboutCompany />
        </div>
        <SendQuestion />

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Uslugi;
