import React from "react";
import { BreadCrumbs, SendQuestion, Subscribe } from "../components";
import Image1 from "../assets/Group1.svg";
import Image2 from "../assets/Group2.svg";
import Image3 from "../assets/Group3.svg";
import Image4 from "../assets/Group4.svg";

const Guarantees = () => {
  return (
    <div>
      <div className="container mx-auto">
        <BreadCrumbs />
      </div>
      <div class="container mx-auto mt-[20px] md:mt-[50px] lg:mt-[100px] mb-[60px] md:mb-[120px] lg:mb-[80px] ">
        <p class=" custom-title pb-[20px] lg:pb-[40px] text-3xl font-semibold ">
          Гарантии
        </p>
        <div class="xl:w-1/2 lg:w-3/4 md:w-5/6 w-full ">
          <p class=" custom-text mb-[15px] md:mb-[20px] ">
            Регулярное сервисное обслуживание медицинской техники – залог ее
            надежной, беспроблемной эксплуатации, а также продолжительного срока
            службы. Периодическая диагностика позволяет выявить любые
            неисправности, отклонения от нормального рабочего режима на самых
            ранних сроках. Это предотвратит серьезные поломки, приводящие к
            дорогостоящим ремонтам.
          </p>
          <p class=" custom-text mb-[10px] md:mb-[20px] lg:mb-[10px] ">
            Являясь авторизованным дилером брендов, продукция которых
            представлена в каталоге, компания:
          </p>
          <ul class="custom-text list-decimal pl-[25px] mb-[15px] md:mb-[20px] ">
            <li>
              Предоставляет услуги сервисного и гарантийного обслуживания.
            </li>
            <li>
              Осуществляет поставку оригинальных запчастей и комплектующих.
            </li>
            <li>
              Обучает медицинский персонал работе с современным
              высокотехнологичным оборудованием.
            </li>
          </ul>
          <p class="custom-text">
            Глобал Медикал Трейд является надежным поставщиком медицинского
            оборудовани, предлагая своим клиентам качественную продукцию по
            лучшей цене. Наша компания гарантирует всем клиентам возможность
            воспользоваться услугами квалифицированных мастеров в установке,
            пуско-наладке, сервисном и техническом обслуживании приобретенного
            оборудования.
          </p>
        </div>
        <div class="container custom-margin mt-[70px] ">
          <div class="mb-[25px] md:mb-[30px] lg:mb-[40px] ">
            <p class="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
              Перечень гарантийных услуг
            </p>
          </div>
          <div class="grid grid-cols-2 gap-[10px] md:grid-cols-4 mb-[30px] md:mb-[25px] lg:mb-[40px] ">
            <div class=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Image1} alt="image" />
              <p class="  w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]" />
              Установка, настройка и пуско-наладка медтехники
              <p />
            </div>
            <div class=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Image2} alt="image" />
              <p class=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]" />
              Сервисное обслуживание медицинской техники любой комплектации
              <p />
            </div>
            <div class=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Image3} alt="image" />
              <p class=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
                Гарантийное и постгарантийное обслуживание
              </p>
            </div>
            <div class=" border border-[--border] rounded-[10px] gap-4 md:gap-[25px] lg:gap-[41px] flex flex-col justify-center items-center h-[168px] sm:h-[175px] lg:h-[300px] ">
              <img src={Image4} alt="image" class="w-[62px] " />
              <p class=" w-[80%] lg:w-[75%] xl:w-[65%] mx-auto text-center custom-text lg:leading-[140%] font-medium leading-[118%]">
                Диагностика и проведение профилактических работ
              </p>
            </div>
          </div>
          <div class="flex gap-[10px] justify-center md:justify-end ">
            <button class="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] text-[#07745E] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
              Гарантийный случай
            </button>
            <button class="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] bg-[#07745E] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Замена товара
            </button>
          </div>
        </div>
        <div class=" container custom-margin mt-[100px]">
          <div class="bg-[--pri] text-white bg-[#07745E]  px-[20px] py-[40px] lg:px-[40px] rounded-[10px] border-[--border]  border grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-2 gap-[20px]">
            <p class="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-white ">
              Внимание!
            </p>
            <div class=" custom-text flex flex-col gap-[20px] ">
              <p>
                Рассмотрение заявки на замену товара осуществляется в срок до 30
                дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
                при условии предоставления документов, перечисленных в договоре.
              </p>
              <p>
                Оформление гарантийного случая осуществляется согласно
                Гражданскому кодексу РФ, при условии предоставления документов,
                перечисленных в договоре и при наличии заявления с указанием
                причины возврата, оформленного надлежащим образом.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SendQuestion />
      <Subscribe />
    </div>
  );
};

export default Guarantees;
