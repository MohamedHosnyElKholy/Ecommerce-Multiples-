"use client";
import React from "react";
import Link from "next/link"; // تأكد من استيراد Link
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function MyFooter() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-[22px] text-white">ONE CART</p>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-[22px] text-[#FF9900]">
            Main Pages
          </h5>
          <ul className="flex flex-col">
            <Link href="/" className="text-[15px] text-[#ADAEB0] mb-5">
              Home
            </Link>
            <Link
              href="/allproducts"
              className="text-[15px] text-[#ADAEB0] mb-5"
            >
              All Products
            </Link>
            <Link href="/cart" className="text-[15px] text-[#ADAEB0] mb-5">
              Cart
            </Link>
            <Link href="/account" className="text-[15px] text-[#ADAEB0] mb-5">
              Account
            </Link>
            <Link href="/login" className="text-[15px] text-[#ADAEB0] mb-5">
              Login
            </Link>
            <Link href="/register" className="text-[15px] text-[#ADAEB0] mb-5">
              Register
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-[22px] text-[#FF9900]">
            Products
          </h5>
          <ul className="flex flex-col">
            <Link href="/elctron" className="text-[15px] text-[#ADAEB0] mb-5">
              Electronic
            </Link>
            <Link href="/devices" className="text-[15px] text-[#ADAEB0] mb-5">
              Devices
            </Link>
            <Link href="/smart" className="text-[15px] text-[#ADAEB0] mb-5">
              Smart Phones
            </Link>
            <Link href="/lap" className="text-[15px] text-[#ADAEB0] mb-5">
              Laptops
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2 text-[22px] text-[#FF9900] mb-[50px]">
            Get in touch
          </h5>
          <div className="flex space-x-4 mb-[50px]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
          <input
            type="text"
            placeholder="Enter e-mail address"
            className="w-full p-2 rounded text-gray-800"
          />
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        <p className="text[24px] text-center">
          copy right 2024 Trademark, All rights reserved
        </p>
      </div>
    </footer>
  );
}
