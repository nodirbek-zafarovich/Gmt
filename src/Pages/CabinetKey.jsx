import { useEffect } from "react";
import Reanimatsiya from "../assets/reanimatsiya.png";
import { AboutCompany, News, Options, SendQuestion } from "../components";

const CabinetKey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-[1300px] mx-auto px-5 mb-5">
      <div>
        <div class=" container mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin ">
          <p class=" custom-title mb-[20px] md:mb-[30px] lg:mb-[40px] ">
            Кабинеты под ключ
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-[10px] ">
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
            <a href="/kobinet/reanimatsiya">
              <div class="bg-white rounded-[10px] border border-[--border]  ">
                <img src={Reanimatsiya} alt="" />
                <div class="p-[15px] lg:p-[20px] ">
                  <p class=" custom-text">Реанимация</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="my-[100px]">
        <Options />
      </div>
      <News />
      <AboutCompany />
      <SendQuestion />
    </section>
  );
};

export default CabinetKey;
