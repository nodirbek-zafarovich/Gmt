import React, { useState } from "react";

import {
  AboutCompany,
  BreadCrumbs,
  Footer,
  Header,
  News,
  Options,
  SendQuestion,
  Subscribe,
} from "../components";
import Restangel from "../assets/reflense.svg";

const Manufactures = () => {
  const [selectedCountries, setSelectedCountries] = useState({
    Austria: true,
    Belarus: true,
    Belgium: false,
    UK: true,
    Germany: false,
    Israel: true,
    Spain: true,
  });

  const toggleCountry = (country) => {
    setSelectedCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  const resetSelection = () => {
    setSelectedCountries({
      Austria: false,
      Belarus: false,
      Belgium: false,
      UK: false,
      Germany: false,
      Israel: false,
      Spain: false,
    });
  };

  const countries = [
    { name: "Австралия", key: "Australia" },
    { name: "Австрия", key: "Austria" },
    { name: "Беларусь", key: "Belarus" },
    { name: "Бельгия", key: "Belgium" },
    { name: "Великобритания", key: "UK" },
    { name: "Германия", key: "Germany" },
    { name: "Испания", key: "Spain" },
    { name: "Узбекистан", key: "Uzbekistan" },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <div className="min-h-screen container mx-auto bg-gray-100">
          <main className="container mx-auto py-6">
            <BreadCrumbs />
            <div className="flex">
              <aside className="w-1/4 pr-4">
                <h2 className="text-lg font-bold mb-4">Filters</h2>
                <div className="mb-4">
                  <h3 className="font-semibold">Categories</h3>
                  <ul>
                    <li>
                      <form action="Направления">
                        <select
                          name="Направления"
                          id="1"
                          className="bg-transparent w-[300px] px-3 mt-6 h-[52px] rounded-lg outline-none  border border-gray-400 "
                        >
                          <option value="Направления">Направления</option>
                          <option value="Реанимация">Реанимация</option>
                          <option value="Хирургия">Хирургия</option>
                          <option value="Лабораторная диагностика">
                            Лабораторная диагностика
                          </option>
                          <option value="Акушерство и Гинекология">
                            Акушерство и Гинекология
                          </option>
                          <option value="Гистология">Гистология</option>
                          <option value="Оториноларингология">
                            Оториноларингология
                          </option>
                          <option value="Рентгенология и томография">
                            Рентгенология и томография
                          </option>
                          <option value="Стерилизация">Стерилизация</option>
                          <option value="Физиотерапия и реабилитация">
                            Физиотерапия и реабилитация
                          </option>
                          <option value="Функциональная диагностика">
                            Функциональная диагностика
                          </option>
                          <option value="Эндоскопия">Эндоскопия</option>
                        </select>
                      </form>
                    </li>
                  </ul>
                </div>
                <div>
                  <label htmlFor="search" className="block text-sm font-medium">
                    Страны
                  </label>
                  <div className="max-w-sm mx-auto p-4 bg-gray-100 text-white rounded-lg">
                    <div>
                      <input
                        id="search"
                        type="text"
                        placeholder="Поиск по стране"
                        className="w-full px-3 py-2 mt-1 mb-4 text-gray-900 bg-gray-100 border border-gray-400 rounded-md focus:outline-none"
                      />
                    </div>
                    <div className="h-64 overflow-y-auto">
                      {countries.map((country) => (
                        <div
                          key={country.key}
                          className="flex items-center mb-2"
                        >
                          <input
                            id={country.key}
                            type="checkbox"
                            checked={selectedCountries[country.key]}
                            onChange={() => toggleCountry(country.key)}
                            className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded  focus:ring-green-500"
                          />
                          <label
                            htmlFor={country.key}
                            className="ml-2 text-black"
                          >
                            {country.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={resetSelection}
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        Сбросить
                      </button>
                      <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                        Показать
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              <section className="w-3/4 rounded-t-lg">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded">
                      <div className="mx-5">
                        <img
                          src={Restangel}
                          alt="Product"
                          className="mx-auto mb-2"
                        />
                        <h3 className="font-semibold ">
                          НМИЦ онкологии им. Н.Н. <br />
                          Блохина{" "}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
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
          </main>
        </div>
      </div>
      <Subscribe />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Manufactures;
