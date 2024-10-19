"use client";
import React from "react";
import { Navbar } from "flowbite-react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import NavTwo from "./NavTwo";
export default function MyNavbar() {
  return (
    <>
      <Navbar className="bg-[#232F3E] flex justify-between items-center p-4">
        <Navbar.Brand className="text-white text-[32px] font-normal">
          ONE CART
        </Navbar.Brand>
        <div className="flex-grow flex justify-center">
          <form className="flex items-center relative w-full max-w-md">
            <input
              type="text"
              className="border rounded-lg p-2 mr-2 pl-5 pr-10 w-full" // إضافة padding-right
              placeholder="Search"
            />
            <button type="submit" className="hidden">
              بحث
            </button>
            <AiOutlineSearch className="absolute right-5 text-[#232F3E] text-2xl" />{" "}
            {/* وضع الأيقونة على اليمين */}
          </form>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <AiOutlineUser className="text-2xl text-white" />
          <AiOutlineShoppingCart className="text-2xl text-white" />
        </div>
      </Navbar>
      <NavTwo />
    </>
  );
}
