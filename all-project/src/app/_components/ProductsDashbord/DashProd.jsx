import React from 'react';
import { FaCommentDots, FaBell, FaSearch, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';  // Assuming you're using Next.js for <Image>
import img from "../../../images/s1.jpg";  // Import the image

export default function DashProd() {
  return (
    <div>
      {/* Navbar container */}
      <div className="bg-white shadow-md border-b border-gray-300">
        <div className="flex justify-between items-center p-4">
          {/* Left side - Welcome and Date/Time */}
          <div>
            <p className="text-[20px] font-bold text-black">Welcome, Islam</p>
            <p className="text-[14px] text-[#7C7C7C]">1 October 2022 | 11:59 AM GMT</p>
          </div>

          {/* Right side - Icons and Search */}
          <div className="flex items-center gap-4">
            {/* Chat Icon */}
            <div className="relative">
              <FaCommentDots className="text-gray-600 text-xl" />
              {/* Notification badge */}
              <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">3</span>
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
              <FaSearch
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#ccc]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 divs under the navbar, using grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {/* Divs */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white rounded-[20px] p-6 shadow-md">
            <div>
              <p className="text-[24px] font-bold text-[#272525]">15</p>
              <p className="text-[#7C7C7C]">Categories</p>
            </div>
            <div className="mt-4 flex gap-2 items-center">
              <p className="text-[#7C7C7C] text-[12px]">2 more than last year</p>
              <FaArrowUp className="text-green-500 text-[12px]" />
            </div>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto p-6">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="text-left bg-white">
              <th className="py-3 px-6 text-[12px]">No#</th>
              <th className="py-3 px-6 text-[12px]">Image</th>
              <th className="py-3 px-6 text-[12px]">Product Name</th>
              <th className="py-3 px-6 text-[12px]">Product Description</th>
              <th className="py-3 px-6 text-[12px]">Category</th>
              <th className="py-3 px-6 text-[12px]">Unit Price</th>
              <th className="py-3 px-6 text-[12px]">In-Stock Status</th>
              <th className="py-3 px-6 text-[12px]">Rate</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td className="py-4 px-6 text-[14px] text-[#272525]">{index + 1}</td>
                <td className="py-4 px-6">
                  <Image src={img} width={50} height={50} alt={`Product ${index + 1}`} />
                </td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">Product {index + 1}</td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">Description for Product {index + 1}.</td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">Category {index + 1}</td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">${(index + 1) * 100}.00</td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">{index % 2 === 0 ? 'In Stock' : 'Out of Stock'}</td>
                <td className="py-4 px-6 text-[14px] text-[#272525]">4.{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
