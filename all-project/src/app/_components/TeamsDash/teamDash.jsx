import React from "react";
import { PiUsersDuotone } from "react-icons/pi";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaBell, FaCommentDots, FaSearch } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import img from "../../../images/s1.jpg";
import Image from "next/image";
import SelectFlowBite from "./../SelectFlowBite/SelectFlowBite";
import PaginationTeamDash from './../PaginationTeamDash/PaginationTeamDash';
export default function teamDash() {
  return (
    <>
      <div>
        {/* Navbar container */}
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

        {/* 4 divs under the navbar, using grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="flex justify-center gap-10">
              <div className="w-[90px] h-[84px] rounded-[50%] teamIcon text-[42px] text-white flex justify-center items-center">
                <PiUsersDuotone />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h4 className="text-[#ACACAC] text-[14px] font-[400] leading-[21px] tracking-[-0.01em]">
                  Total Customers
                </h4>
                <p className="text-[32px] font-[600] leading-[32px] tracking-[-0.01em]">
                  5,423
                </p>
                <p className="flex">
                  <span className="text-[#00AC4F] mr-1">
                    <IoArrowUpOutline />
                  </span>
                  <span className="text-[12px] font-[700] leading-[18px] tracking-[-0.01em] text-[#00AC4F]">
                    16%
                  </span>
                  <span className="text-[12px] font-[400] leading-[18px] tracking-[-0.01em]">
                    this month
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div className="w-[90px] h-[84px] rounded-[50%] teamIcon text-[42px] text-white flex justify-center items-center">
                <TbUserCheck />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h4 className="text-[#ACACAC] text-[14px] font-[400] leading-[21px] tracking-[-0.01em]">
                  Members
                </h4>
                <p className="text-[32px] font-[600] leading-[32px] tracking-[-0.01em]">
                  1,893
                </p>
                <p className="flex">
                  <span className="text-[#D0004B] mr-1">
                    <IoArrowDownOutline />
                  </span>
                  <span className="text-[12px] font-[700] leading-[18px] tracking-[-0.01em] text-[#D0004B]">
                    1%
                  </span>
                  <span className="text-[12px] font-[400] leading-[18px] tracking-[-0.01em]">
                    this month
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-10">
              <div className="w-[90px] h-[84px] rounded-[50%] teamIcon text-[42px] text-white flex justify-center items-center">
                <FiMonitor />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h4 className="text-[#ACACAC] text-[14px] font-[400] leading-[21px] tracking-[-0.01em]">
                  Active Now
                </h4>
                <p className="text-[32px] font-[600] leading-[32px] tracking-[-0.01em]">
                  189
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* members Table */}
        <div className="overflow-x-auto p-6 teamShadow container mx-auto">

          <div className="bg-white shadow-md border-b border-gray-300">
            <div className="flex justify-between items-center p-4">
              {/* Left side - Welcome and Date/Time */}
              <div>
                <p className="text-[22px] font-[600] leading-[33px] tracking-[-0.01em] text-black">All Users</p>
                <p className="text-[14px] font-[400] leading-[21px] tracking-[-0.01em] text-[#FF9900]">Active Members</p>
              </div>

              {/* Right side - Icons and Search */}
              <div className="flex items-center gap-4">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 pl-8 pr-2 border border-gray-300 rounded-[10px] text-sm text-gray-600 focus:outline-none focus:border-blue-500"
                  />
                  <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#ccc]" />
                </div>
                <div className="ml-6">
                  <SelectFlowBite />
                </div>
              </div>
            </div>
          </div>

          <table className="min-w-full bg-white shadow-md rounded-lg text-left">
            <thead>
              <tr className=" bg-white text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#B5B7C0]">
                <th className="py-3 px-6 text-[12px]">Customer Name</th>
                <th className="py-3 px-6 text-[12px]">Company</th>
                <th className="py-3 px-6 text-[12px]">Phone Number</th>
                <th className="py-3 px-6 text-[12px]">Email</th>
                <th className="py-3 px-6 text-[12px]">Country</th>
                <th className="py-3 px-6 text-[12px] text-center">Status</th>

              </tr>
            </thead>
            <tbody>
              {[...Array(8)].map((_, index) => (
                <tr key={index}>
                  <td className="py-4 px-6 text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#292D32]">
                    <h3>Ibrahim Malek</h3>
                  </td>
                  <td className="py-4 px-6">
                    <h4>Microsoft</h4>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#292D32]">
                    <h4>(225) 555-0118</h4>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#292D32]">
                    <h4>malek@microsoft.com</h4>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#292D32]">
                    <h4>Egypt</h4>
                  </td>
                  <td className="py-4 px-6 text-[14px] font-[500] leading-[21px] tracking-[-0.01em] text-[#008767] text-center">
                    <button disabled className='bg-[#16C09861] border-[1px] rounded-[4px] border-[#00B087] py-[4px] px-[24px]'>Online</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='px-6 mt-10 flex items-center flex-col md:flex-row gap-4 justify-between'>
            <p className='text-[#B5B7C0] text-[14px] font-[500] leading-[21px] tracking-[-0.01em]'>Showing data 1 to 8 of  256K entries</p>
            <div><PaginationTeamDash /> </div>
          </div>
        </div>
      </div>
    </>
  );
}