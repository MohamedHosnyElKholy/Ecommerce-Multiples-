'use client'
import React, { useState } from "react";
import { Label, Select } from "flowbite-react";
import { FaBell, FaCommentDots, FaSearch } from "react-icons/fa";
export default function AddDash() {
  const [fileName, setFileName] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
      setCategory(event.target.value);
  };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFileName(selectedFile ? selectedFile.name : '');
    };

  return (
    <>
      <div className="bg-white shadow-md border-b border-gray-300">
        <div className="flex justify-between items-center p-4">
          {/* Left side - Welcome and Date/Time */}
          <div>
            <p className="text-[20px] font-bold text-black">Welcome, Islam</p>
            <p className="text-[14px] text-[#7C7C7C]">
              1 October 2022 | 11:59 AM GMT
            </p>
          </div>

          {/* Right side - Icons and Search */}
          <div className="flex items-center gap-4">
            {/* Chat Icon */}
            <div className="relative">
              <FaCommentDots className="text-gray-600 text-xl" />
              {/* Notification badge */}
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>

            {/* Bell Icon */}
            <FaBell className="text-gray-600 text-xl" />

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-8 pr-2 border border-gray-300 text-sm text-gray-600 focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#ccc]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] bg-white rounded-[16px] mx-[10px] md:mx-[40px] lg:mx-[180px] py-[54px] px-[37px]">
        <h2 className="text-[24px] font-[400] leading-[29.05px] mb-[26px]">
          Add New Product
        </h2>
        <div className="border rounded-[8px] pt-[42px] px-[27px] pb-[25px]">
          <form className="flex flex-col gap-4 dashFrom">
            <label htmlFor="productName" className="block">Product Name :</label>
            <input type="text" id="productName" placeholder="Product Name" className="outline-[#D1D1D1DD] border-[#D1D1D1DD] w-full rounded-[8px]"  />
            <label htmlFor="productDescription" className="block">Product Description : </label>
            <input
              type="text"
              id="productDescription"
              placeholder="Product Description"
              className="outline-[#D1D1D1DD] border-[#D1D1D1DD] w-full rounded-[8px]"
            />
            <div className="w-full">
      <div className="mb-2 block">
        <Label htmlFor="productCategory" value="Product Category :" />
      </div>
            <select id="productCategory"  className={category ==''?'placeholder outline-[#D1D1D1DD] border-[#D1D1D1DD] w-full rounded-[8px]' : "outline-[#D1D1D1DD] border-[#D1D1D1DD] w-full rounded-[8px]"} value={category} onChange={handleCategoryChange}  >
            <option value="" disabled hidden className="text-black" >
                    Product Category
                </option>
              <option className="text-black">Women's Fashion</option>
              <option className="text-black">Men's Fashion</option>
              <option className="text-black" >Baby & Toys</option>
              <option className="text-black">Electronics</option>
            </select>
            </div>
            <label htmlFor="productAmount" className="block">Amount of product in stock : </label>
            <input type="number" id="productAmount" placeholder="Amount of product in stock" className="outline-[#D1D1D1DD] border-[#D1D1D1DD] w-full rounded-[8px]"  />
            <label htmlFor="productImage" className="block">Product image : </label>
            <div className="file-upload">
              <input type="text" value={fileName} className="order-2" readOnly placeholder="Product Image" />
              <input type="file" onChange={handleFileChange} id="file-input" />
              <label for="file-input" className="file-button order-1 md:order-3">Choose File</label>
            </div>
            <button className='bg-[#FF9900] rounded-[8px] px-[44px] py-[8px] text-white w-fit mx-auto'>Add Item</button>
          </form>
        </div>
      </div>
    </>
  );
}
