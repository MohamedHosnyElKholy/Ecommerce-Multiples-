"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navbar, Dropdown } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function NavTwo() {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navbar
      fluid
      rounded
      style={{ padding: "10px 9px", backgroundColor: "white" }}
      className="flex justify-center items-center"
    >
      <Navbar.Toggle onClick={() => setNavbarOpen(!navbarOpen)} />
      <Navbar.Collapse className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center ${navbarOpen ? "block" : "hidden"}`}>
        <Navbar.Link
          href="/"
          className={`text-[18px] text-black py-[8px] px-[16px] ${pathname === "/" ? "active font-bold" : ""}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/allproducts"
          className={`text-[18px] text-black py-[8px] px-[16px] ${pathname === "/allproducts" ? "active font-bold" : ""}`}
        >
          All Products
        </Navbar.Link>
        <Dropdown label={<span className="text-[18px] text-black">Category</span>} dismissOnClick={false}>
          <Dropdown.Item className="text-black text-[18px] py-[8px] px-[16px]">Dashboard</Dropdown.Item>
          <Dropdown.Item className="text-black text-[18px] py-[8px] px-[16px]">Settings</Dropdown.Item>
          <Dropdown.Item className="text-black text-[18px] py-[8px] px-[16px]">Earnings</Dropdown.Item>
          <Dropdown.Item className="text-black text-[18px] py-[8px] px-[16px]">Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Link
          href="/sell"
          className={`text-[18px] text-black py-[8px] px-[16px] ${pathname === "/sell" ? "active font-bold" : ""}`}
        >
          Sell now
        </Navbar.Link>
        <Navbar.Link
          href="/offers"
          className={`text-[18px] text-black py-[8px] px-[16px] ${pathname === "/offers" ? "active font-bold" : ""}`}
        >
          Offers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
