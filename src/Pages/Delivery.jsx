import React from "react";
import { BreadCrumbs, SendQuestion, Subscribe } from "../components";
import AboutCompanyAcc from "../components/AboutCompanyAcc";
import Delivery1 from "../assets/subtract.svg";
import Delivery2 from "../assets/delivery2.svg";
import Delivery3 from "../assets/delivery3.svg";
import Delivery4 from "../assets/delivery4.svg";

const Delivery = () => {
  return (
    <div>
      <div class=" container mx-auto custom-margin mb-[100px] md:mt-[50px]  lg:mt-[20px] ">
        <BreadCrumbs />
        <p class="text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[110%] text-[--second] mb-[30px] lg:mb-[40px] ">
          Информация о доставке
        </p>
        <div class="w-full relative border border-[--border] rounded-[10px] overflow-hidden mb-[25px] lg:mb-[40px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4928.13349616861!2d69.22925989857053!3d41.31567817943225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza%2C%20Samarqand%20Darvoza%20ko'chasi%205a%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1719611199524!5m2!1suz!2s"
            width="100%"
            height="450"
          ></iframe>
          <span class=" absolute bottom-5 right-5 ">
            <button class="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Пункт выдачи
            </button>
          </span>
        </div>
        <div class=" grid grid-cols-1 lg:grid-cols-2">
          <p></p>
          <p class="custom-text w-full md:w-[80%] lg:w-full text-[--second] ">
            Учитывая стремительное развитие мировых медицинских технологий,
            врачи в&nbsp;Российской Федерации и&nbsp;соседних странах
            столкнулись с&nbsp;вызовом, требующим обновления приборов
            в&nbsp;различных направлениях, от&nbsp;установок компьютерной
            томографии до&nbsp;ультразвуковых сканеров
            и&nbsp;ЛОР&nbsp;комбайнов. Переход на&nbsp;полностью цифровую
            платформу при&nbsp;диагностике и&nbsp;лечении заболеваний
            также&nbsp;стал серьёзным испытанием для&nbsp;большинства больниц
            и&nbsp;частных клиник.
          </p>
        </div>
        <div class="container mt-[200px] mb-[200px] custom-margin ">
          <div class="mb-[25px] md:mb-[30px] lg:mb-[40px] ">
            <p class="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
              С нами выгодно и удобно
            </p>
          </div>
          <div class="grid grid-cols-2 gap-[10px] md:grid-cols-4 ">
            <div class="border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Delivery1} alt="image" />
              <p class="text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
                Доставка по всей России
              </p>
            </div>
            <div class="border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Delivery2} alt="image" />
              <p class="text-center text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
                Собственный склад с продукцией
              </p>
            </div>
            <div class="border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Delivery3} alt="image" />
              <p class="text-center text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
                Весь товар сертифицирован
              </p>
            </div>
            <div class="border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Delivery4} alt="image" />
              <p class="text-center text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[140%] font-medium leading-[118%]">
                Безопасные способы оплаты
              </p>
            </div>
          </div>
          <div class="mt-[30px] lg:mt-[40px] flex justify-center lg:justify-end ">
            <button class="text-[12px] bg-[#07745E] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Проверить статус доставки
            </button>
          </div>
        </div>
        <div class=" container custom-margin grid grid-cols-1 lg:grid-cols-2 mt-[100px] ">
          <div>
            <span class=" block w-[70%] md:w-[100%] lg:w-[70%] xl:w-[60%] ">
              <p class="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
                Правила получения товара в пункте выдачи
              </p>
            </span>
            <p class="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[80%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в&nbsp;Российской Федерации и&nbsp;соседних странах
              столкнулись с&nbsp;вызовом, требующим обновления приборов.
            </p>
          </div>
          <div class="flex flex-col gap-[20px]  ">
            <div class="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[--border] pb-[10px] lg:pb-[20px] ">
              <p class="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
                Подготовить документы
              </p>
              <p class="text-[12px] md:text-[14px] lg:text-4 text-[--text] ">
                Предварительно ознакомиться с условиями выдачи грузов на сайте и
                подготовьте нужные документы
              </p>
            </div>
            <div class="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[--border] pb-[10px] lg:pb-[20px] ">
              <p class="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
                Проверка упаковки
              </p>
              <p class="text-[12px] md:text-[14px] lg:text-4 text-[--text] ">
                При получении необходимо внимательно осмотреть упаковку груза на
                наличие механических повреждений и нарушений целостности
                упаковки
              </p>
            </div>
            <div class="flex flex-col gap-[15px] md:gap-[10px] lg:gap-[15px]  border-t border-[--border] pb-[10px] lg:pb-[20px] ">
              <p class="pt-[15px] md:pt-[25px] cursor-text font-semibold ">
                Проверка товара
              </p>
              <p class="text-[12px] md:text-[14px] lg:text-4 text-[--text] ">
                Вскрыть каждую упаковку и проверите товар по количеству согласно
                накладной поставщика и на наличие повреждений товара внутри тары
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutCompanyAcc />
      <div class=" container mx-auto grid mt-[200px] mb-[100px] grid-cols-2 custom-margin">
        <div class=" order-1">
          <p class="text-[--second] font-medium leading-[120%] text-[18px] md:text-[20px] xl:text-[30px] pb-[25px] md:pb-[30px] lg:pb-0  ">
            Вы сможете забрать оборудование <br />{" "}
            <span class="text-[--pri] ">самостоятельно</span> из нашего офиса{" "}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 mb-[10px] gap-[10px] col-span-2 lg:col-span-1 order-2 lg:order-1  ">
          <div class="border border-[--border] rounded-[10px] p-[25px]  bg-white ">
            <p class="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">
              Контакты
            </p>
            <p class=" custom-text text-[--text] font-medium mb-1 ">
              +7 (000) 000-00-00
            </p>
            <p class=" custom-text text-[--text] font-medium ">info@mail.ru</p>
          </div>
          <div class="border border-[--border] rounded-[10px] p-[25px]  bg-white ">
            <p class="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">
              Режим работы
            </p>
            <p class=" custom-text text-[--text] font-medium mb-1 ">
              пн-пт: 09:00-19:00
            </p>
            <p class=" custom-text text-[--text] font-medium ">
              сб-вс: выходной
            </p>
          </div>
        </div>
        <div class=" order-1 w-full relative border border-[--border] rounded-[10px] overflow-hidden mb-[11px] col-span-2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4928.13349616861!2d69.22925989857053!3d41.31567817943225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28832acd7%3A0xf05928b7bdb7ab15!2sSamarqand%20Darvoza%2C%20Samarqand%20Darvoza%20ko'chasi%205a%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1719611199524!5m2!1suz!2s"
            width="100%"
            height="450"
          ></iframe>
          <span class=" absolute bottom-5 right-5 ">
            <button class="text-[12px] bg-[#07745E] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Построить маршрут
            </button>
          </span>
        </div>
      </div>
      <SendQuestion />
      <Subscribe />
    </div>
  );
};

export default Delivery;
