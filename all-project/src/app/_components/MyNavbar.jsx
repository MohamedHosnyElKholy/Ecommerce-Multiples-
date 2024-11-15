"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "flowbite-react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineLogout,
  AiOutlineLogin, // إضافة أيقونة تسجيل الدخول
} from "react-icons/ai";
import NavTwo from "./NavTwo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearToken } from "../lib/loginSlice";

export default function MyNavbar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const [authoNav, setAuthoNav] = useState(false);

  useEffect(() => {
    if (token) {
      setAuthoNav(true);
    } else {
      setAuthoNav(false);
    }
  }, [token]);

  const route = useRouter();

  function logged() {
    localStorage.removeItem("token");
    dispatch(clearToken());
    route.push("/login");
  }

  const { inDashboard } = useSelector((store) => store.dashboardReducer);

  return (
    <>
      {!inDashboard && (
        <>
          {authoNav ? (
            <div className="fixed top-0 left-0 right-0 z-[100]">
              <Navbar className="bg-[#232F3E] flex justify-between items-center p-4">
                <Navbar.Brand className="text-white text-[32px] font-normal">
                  ONE CART
                </Navbar.Brand>
                <div className="flex-grow flex justify-center">
                  <form className="flex items-center relative w-full max-w-md">
                    <input
                      type="text"
                      className="border rounded-lg p-2 mr-2 pl-5 pr-10 w-full"
                      placeholder="Search"
                    />
                    <button type="submit" className="hidden">
                      بحث
                    </button>
                    <AiOutlineSearch className="absolute right-5 text-[#232F3E] text-2xl" />
                  </form>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  <AiOutlineUser className="text-2xl text-white" />
                  <Link href="/cart">
                    <AiOutlineShoppingCart className="text-2xl text-white" />
                  </Link>
                  <AiOutlineLogout
                    className="text-2xl text-white cursor-pointer"
                    onClick={logged}
                  />
                </div>
              </Navbar>
              <NavTwo />
            </div>
          ) : (
            <div className="fixed top-0 left-0 right-0 z-[100] hidden">
              {/* Navbar للمستخدم غير المسجل */}
              <Navbar className="bg-[#232F3E] flex justify-between items-center p-4">
                {/* الشعار في الجهة اليسرى */}
                <Navbar.Brand className="text-white text-[32px] font-normal">
                  ONE CART
                </Navbar.Brand>
                {/* الجهة اليمنى بها رابط لتسجيل الدخول مع الأيقونة */}
                <div className="flex items-center space-x-4 ml-4">
                  <Link href="/login">
                    <button className="flex items-center text-white text-xl">
                      <AiOutlineLogin className="mr-2 text-white" />
                      Login
                    </button>
                  </Link>
                </div>
              </Navbar>
            </div>
          )}
        </>
      )}
    </>
  );
}
