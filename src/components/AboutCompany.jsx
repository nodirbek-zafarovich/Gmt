import { useEffect } from "react";
import BreadCrumbs from "./BreadCrumbs";
import NewsCompany from "../assets/CompanyNews.png";
import Partners from "./Partners";
import Options from "./Options";
import Brends from "./Brends";
import SendQuestion from "./SendQuestion";

const AboutCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mx-[40px]"></div>
      <div className="container flex pt-[20px] gap-2 custom-text mx-[40px] ">
        <div class=" container mb-[60px] md:mb-[120px] lg:mb-[150px] mt-[15px] md:mt-[25px] lg:mt-[40px] ">
          <div class="mb-[25px] lg:mb-10">
            <img src={NewsCompany} alt="" />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 ">
            <p class="text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[110%] text-[--second] mb-[15px] md:mb-[20px] ">
              Глобал медикал трейд
            </p>
            <div>
              <p class="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-gray-700 mb-4 ">
                Учитывая стремительное развитие мировых медицинских технологий,
                врачи в&nbsp;Российской Федерации и&nbsp;соседних странах
                столкнулись с&nbsp;вызовом, требующим обновления приборов
                в&nbsp;различных направлениях, от&nbsp;установок компьютерной
                томографии до&nbsp;ультразвуковых сканеров
                и&nbsp;ЛОР&nbsp;комбайнов. Переход на&nbsp;полностью цифровую
                платформу при&nbsp;диагностике и&nbsp;лечении заболеваний
                также&nbsp;стал серьёзным испытанием для&nbsp;большинства
                больниц и&nbsp;частных клиник.
              </p>
              <p class="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-gray-700 ">
                Компания ООО&nbsp;«Глобал Медикал Трейд» считает своим долгом
                оказать специалистам всю&nbsp;необходимую помощь в&nbsp;деле
                поставок медицинского оборудования. Наш&nbsp;каталог включает
                передовое оборудование от&nbsp;лучших производителей России,
                Европы, Азии и&nbsp;США.
              </p>
            </div>
          </div>
          <div class=" container mb-[60px] md:mb-[120px] lg:mb-[150px] mt-[50px] grid grid-cols-1 lg:grid-cols-2 ">
            <div>
              <p class="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
                Цифры и факты
              </p>
              <p class="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[50%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
                Мы работаем на результат и продаём только качественную продукцию
              </p>
            </div>
            <div class="flex flex-col gap-[20px] ">
              <div class="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
                <p class="text-[28px] md:text-[34px]  text-[#088269] lg:text-[48px] font-medium leading-[110%]">
                  7 лет
                </p>
                <p class="text-3 md:text-[14px] lg:text-4 text-[--second] ">
                  на рынке
                </p>
              </div>
              <div class="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
                <p class="text-[28px] md:text-[34px] text-[#088269]  lg:text-[48px] font-medium leading-[110%]">
                  964+
                </p>
                <p class="text-3 md:text-[14px] lg:text-4 text-[--second] ">
                  оригинальной продукции со всего мира
                </p>
              </div>
              <div class="grid grid-cols-[2fr_3fr] items-center border-b border-[--border] pb-[10px] lg:pb-[20px] ">
                <p class="text-[28px] md:text-[34px] text-[#088269]  lg:text-[48px] font-medium leading-[110%]">
                  23+
                </p>
                <p class="text-3 md:text-[14px] lg:text-4 text-[--second] ">
                  международных сертификатов качества
                </p>
              </div>
              <div class="grid grid-cols-[2fr_3fr] items-center">
                <p class="text-[28px] md:text-[34px] text-[#088269]  lg:text-[48px] font-medium leading-[110%]">
                  2452+
                </p>
                <p class="text-3 md:text-[14px] lg:text-4 text-[--second] ">
                  товаров всегда в наличии
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <div className="mb-[100px]">
        <Options />
      </div>
      <div>
        <Brends />
        <SendQuestion />
      </div>
    </div>
  );
};

export default AboutCompany;
