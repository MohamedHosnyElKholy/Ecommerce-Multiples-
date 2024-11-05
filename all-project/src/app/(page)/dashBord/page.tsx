'use client';
import React from "react";
import { Sidebar } from "flowbite-react";
import Link from "next/link";  // استيراد مكون Link من Next.js
import {
  HiChartPie,  // أيقونة Dashboard
  HiShoppingBag,  // أيقونة Products
  HiPlus,  // أيقونة Add Product
  HiUser,  // أيقونة Team
} from "react-icons/hi";  // استيراد الأيقونات المطلوبة

export default function Page() {
  return (
    <div className="grid grid-cols-12 pt-[150px]">
      <div className="col-span-3">
        <Sidebar
          aria-label="Default sidebar example"
          className="bg-[#232F3E] text-white h-full"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                as={Link}  // استخدام as لتمرير مكون Link
                href="/dashBord"  // تغيير الرابط إلى الصفحة المناسبة
                icon={HiChartPie}
                className="hover:bg-gray-600 hover:text-gray-200 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                href="/products"
                icon={HiShoppingBag}
                className="hover:bg-gray-600 hover:text-gray-200 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                href="/add-product"
                icon={HiPlus}
                className="hover:bg-gray-600 hover:text-gray-200 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Add Product
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                href="/team"
                icon={HiUser}
                className="hover:bg-gray-600 hover:text-gray-200 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Team
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="col-span-9">
        {/* هذا هو المكان المخصص للمحتوى الرئيسي */}
        AAAAA
      </div>
    </div>
  );
}
