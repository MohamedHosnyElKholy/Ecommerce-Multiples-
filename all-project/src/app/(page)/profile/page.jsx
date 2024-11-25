"use client";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdGift } from "react-icons/io";
import { FaCcMastercard } from "react-icons/fa6";
import PersonalInformation from "../../_components/profile/PersonalInformation/PersonalInformation";
import MyOrders from "../../_components/profile/MyOrders/MyOrders";
import MyOffers from "../../_components/profile/MyOffers/MyOffers";
import PaymentMethods from "../../_components/profile/PaymentMethods/PaymentMethods";
import { redirect } from "next/navigation";
import { FaUser } from "react-icons/fa";
export default function page() {
  const [activeTab, setActiveTab] = useState("personalInformation");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      redirect("/login");
    }
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-[#232f3e] overflow-hidden z-[30]">
        <Sidebar
          aria-label="Default sidebar"
          className="bg-[#232F3E] text-white dashboardNav "
        >
          <Sidebar.Items className="bg-[#232f3e] flex flex-col items-center justify-center mt-[180px]">
            <Sidebar.ItemGroup className="flex flex-col gap-10">
              <div className="text-center ">
                <div className="text-center w-[fit-content] mx-auto userImgProfile mb-3 ">
                  <FaUser />
                </div>
                <h3 className="text-[16px] font-[500] leading-[19.36px]">
                  Zahra Mohmad
                </h3>
              </div>
              <Sidebar.Item
                onClick={() => setActiveTab("personalInformation")}
                className={
                  activeTab === "personalInformation"
                    ? "text-[#FF9900] text-[20px]  font-[500] leading-[29.05px] cursor-pointer hover:bg-gray-600 hover:text-gray-200 py-2 px-2 rounded-md"
                    : "cursor-pointer text-[20px]  font-[500] leading-[29.05px]  hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-2 rounded-md"
                }
              >
                <span className="inline-block mr-3">
                  <ImProfile />
                </span>
                <span className="inline-block">Personal Information</span>
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("myOrders")}
                className={
                  activeTab === "myOrders"
                    ? "text-[#FF9900] text-[20px]  font-[500] leading-[29.05px] cursor-pointer hover:bg-gray-600 hover:text-gray-200 py-2 px-2 rounded-md"
                    : "cursor-pointer text-[20px]  font-[500] leading-[29.05px] hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-2 rounded-md"
                }
              >
                <span className="inline-block mr-3">
                  <FaShoppingBag />
                </span>
                <span className="inline-block">My Orders</span>
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("myOffers")}
                className={
                  activeTab === "myOffers"
                    ? "text-[#FF9900] cursor-pointer text-[20px]  font-[500] leading-[29.05px] hover:bg-gray-600 hover:text-gray-200 py-2 px-2 rounded-md"
                    : "cursor-pointer text-[20px]  font-[500] leading-[29.05px] hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-2 rounded-md"
                }
              >
                <span className="inline-block mr-3">
                  <IoMdGift />
                </span>
                <span className="inline-block">My Offers</span>
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("paymentMethods")}
                className={
                  activeTab === "paymentMethods"
                    ? "text-[#FF9900] cursor-pointer text-[20px]  font-[500] leading-[29.05px] hover:bg-gray-600 hover:text-gray-200 py-2 px-2 rounded-md"
                    : "cursor-pointer text-[20px]  font-[500] leading-[29.05px] hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-2 rounded-md"
                }
              >
                <span className="inline-block mr-3">
                  <FaCcMastercard />
                </span>
                <span className="inline-block">Payment Methods</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      <div className="col-span-10 overflow-hidden bg-[#edeeee]">
        <div className="col-span-1 md:col-span-10 mt-[150px]">
          {activeTab === "personalInformation" && <PersonalInformation />}

          {activeTab === "myOrders" && <MyOrders />}
          {activeTab === "myOffers" && <MyOffers />}
          {activeTab === "paymentMethods" && <PaymentMethods />}
        </div>
      </div>
    </div>
  );
}
