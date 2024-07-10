import React from "react";
import { BreadCrumbs, Subscribe } from "../components";
import Telegram from "../assets/telegramc.svg";
import Vk from "../assets/vkc.svg";
import Whatsapp from "../assets/whatsappc.svg";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto">
        <BreadCrumbs />
      </div>
      <div class=" container mx-auto custom-margin mb-[100px] md:mt-[50px] lg:mt-[100px]   ">
        <p class=" custom-title">Контакты</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px] mt-[20px] md:mt-[30px] lg:mt-[40px] ">
          <div class="border border-[--border] rounded-[10px] p-[20px] md:p-[30px] lg:p-[40px] bg-white">
            <p class="text-[16px] md:text-[18px] lg:text-[20px] font-medium mb-[25px] ">
              ООО Глобал Медикал Трейд
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[16px] flex-wrap mb-[30px] ">
              <div>
                <span class="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Location_On">
                      <g>
                        <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                        <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                      </g>
                    </g>
                  </svg>
                  Юридический адрес:
                </span>
                <p class=" custom-text pl-[15px] ">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
              <div>
                <span class="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Location_On">
                      <g>
                        <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                        <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                      </g>
                    </g>
                  </svg>
                  Фактический адрес:
                </span>
                <p class=" custom-text pl-[15px] ">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
              <div>
                <span class="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Location_On">
                      <g>
                        <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                        <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                      </g>
                    </g>
                  </svg>
                  Режим работы:
                </span>
                <p class=" custom-text pl-[15px] ">
                  Пн-Пт с 09:00-19:00 <br />
                  Сб-Вс - выходной
                </p>
              </div>
            </div>
            <p class="text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-[25px] ">
              Звоните. Звонки по России бесплатны:
            </p>
            <div class="mb-[15px] ">
              <span class="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
                Телефоны:
              </span>
              <span class=" custom-text pl-[15px] flex gap-3 items-center ">
                <span>8-800-000-00-00</span>
                <span>+7-000-000-00-00</span>
                <span>+7-495-000-00-00</span>
              </span>
            </div>
            <div class="mb-[30px] ">
              <span class="text-[12px] text-[--text] flex gap-1 items-center font-medium ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="text-[14px] "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Mail">
                    <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path>
                  </g>
                </svg>
                Пишите:
              </span>
              <p class=" custom-text pl-[15px] ">info@mail.ru</p>
            </div>
            <div class="flex items-center justify-between w-[90%] text-[14px] md:text-[16px] lg:text-[18px] font-medium mb-[25px] ">
              <span>Реквизиты: </span>
              <span>Мы в соцсетях</span>
            </div>
            <div class="flex flex-col md:flex-row  gap-[30px]  w-[90%]">
              <span>
                <span class="text-[--text] custom-text block leading-3 ">
                  ИНН
                </span>
                <span class=" custom-text ">9717039181</span>
              </span>
              <span>
                <span class="text-[--text] custom-text block leading-3 ">
                  ОГРН
                </span>
                <span class=" custom-text ">1167746796986</span>
              </span>
              <div class="flex ml-auto gap-[10px] ">
                <img src={Vk} alt="" class=" " />
                <img src={Telegram} alt="" class=" text-white " />
                <img src={Whatsapp} alt="" class=" text-white " />
              </div>
            </div>
          </div>
          <div class=" bg-white p-[40px] border border-[--border] rounded-md">
            <h2 class=" lg:text-[30px] mb-4"> Бесплатная консультация </h2>
            <p class="mb-6 text-[14px] text-[--text] xl:pr-[150px] ">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </p>
            <form>
              <div class="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  required=""
                  class="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
                  value=""
                />
              </div>
              <div class="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  required=""
                  class="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
                  value=""
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  required=""
                  class="w-full p-[11px] text-[14px] outline-none border-b border-[--border] "
                  value=""
                />
              </div>
              <div class=" lg:mb-[30px] ">
                <textarea
                  name="question"
                  placeholder="Ваш вопрос"
                  required=""
                  class="w-full h-[100px] resize-none p-[11px] text-[14px] outline-none border-b border-[--border] "
                ></textarea>
              </div>
              <div class="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px] items-start lg:items-center ">
                <button class="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
                  Отправить
                </button>
                <p class="mt-4 text-[12px] font-medium text-[--text] opacity-60">
                  Нажимая «Отправить», я соглашаюсь с обработкой персональных
                  данных на условиях{" "}
                  <a href="#" class="text-[#088269] underline">
                    Политики конфиденциальности
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="border border-[--border] rounded-[10px] overflow-hidden relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta'lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719840169404!5m2!1suz!2s"
            width="100%"
            height="450"
          ></iframe>
          <span class=" absolute top-[20px] left-[20px] bg-white ">
            <button class="text-[12px]  px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] text-[--second] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
              г. Москва, ул. Московская, д. 35
            </button>{" "}
          </span>
          <span class=" absolute bottom-[20px] right-[20px] ">
            <button class="text-[12px] bg-[--pri] text-white bg-green-900 py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Построить маршрут
            </button>{" "}
          </span>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;
