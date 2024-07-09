import React, { useState } from "react";
import Products from "../data/products.json";
import { BreadCrumbs } from "../components";

const ProductCatalog = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Products ? Math.ceil(Products.length / itemsPerPage) : 0;

  const handleChange = (value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const currentPageData = Products?.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-8">
        <BreadCrumbs />
        <div className="flex">
          <div className="hidden w-[300px] md:block border p-[15px] rounded-[10px] h-max mr-[100px]">
            <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b">
              Категории
            </p>
            <ul className="rounded-[5px] flex flex-col gap-2 w-full">
              <a href="/discount">
                <li className="flex justify-between items-center text-[14px] text-gray-700 hover:text-blue-500 duration-200 hover:underline hover:scale-105">
                  Группы товаров
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-[-90deg] w-[17px] h-[17px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </li>
              </a>
              <a href="/discount">
                <li className="flex justify-between items-center text-[14px] text-gray-700 hover:text-blue-500 duration-200 hover:underline hover:scale-105">
                  Мониторы
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-[-90deg] w-[17px] h-[17px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </li>
              </a>
              <a href="/discount">
                <li className="flex justify-between items-center text-[14px] text-gray-700 hover:text-blue-500 duration-200 hover:underline hover:scale-105">
                  Лампы
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-[-90deg] w-[17px] h-[17px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </li>
              </a>
              <a href="/discount">
                <li className="flex justify-between items-center text-[14px] text-gray-700 hover:text-blue-500 duration-200 hover:underline hover:scale-105">
                  Кровати
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-[-90deg] w-[17px] h-[17px]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </li>
              </a>
              <a href="/discount">
                <li className="flex justify-between items-center text-[14px] text-gray-700 hover:text-blue-500 duration-200 hover:underline hover:scale-105">
                  Рентгены
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="rotate-[-90deg] w-[17px] h-[17px]"
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

          {/* Product Grid */}
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {currentPageData.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 shadow-md rounded-lg relative"
              >
                {product.label && (
                  <span className="absolute top-2 left-2 bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full">
                    {product.label}
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">{product.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Add to cart
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-900">
                      <i className="fas fa-balance-scale"></i>
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`bg-white p-2 mx-1 shadow-md rounded-lg ${
                page === index + 1 ? "bg-gray-300" : ""
              }`}
              onClick={() => handleChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductCatalog;
