"use client";
import { useEffect, useState } from "react"; // لاستيراد useState
import { Sidebar } from "flowbite-react"; // لاستيراد Sidebar من Flowbite
import { HiHome, HiShoppingBag, HiPlus, HiUsers } from "react-icons/hi"; // أيقونات مناسبة
import ProductsDashbord from "../../_components/ProductsDashbord/DashProd";
import AddProdDash from "../../_components/AddProdDash/AddDash";
import TeamsDash from "../../_components/TeamsDash/teamDash";
import { useDispatch, useSelector } from "react-redux";
import { store } from './../../../store';
import dashboardReducer, { setInDashboard } from './../../feature/dashboardSlice';
export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard"); // حالة لتحديد التبويب النشط
  // const {inDashboard} = useSelector((store)=>store.dashboardReducer)
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(setInDashboard(true))

  return () => {
    dispatch(setInDashboard(false))
  }
}, [])

  return (
    <div className="grid grid-cols-12">
      {/* Sidebar على اليسار */}
      <div className="col-span-2 bg-[#232f3e] overflow-hidden">
        <Sidebar
          aria-label="Default sidebar"
          className="bg-[#232F3E] text-white dashboardNav"
        >
          <Sidebar.Items className="bg-[#232f3e]">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                onClick={() => setActiveTab("dashboard")} // تعيين التبويب النشط لـ "dashboard"
                icon={HiHome}
                className="cursor-pointer hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-4 rounded-md"
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("products")} // تعيين التبويب النشط لـ "products"
                icon={HiShoppingBag}
                className="cursor-pointer hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-4 rounded-md"
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("addProduct")} // تعيين التبويب النشط لـ "addProduct"
                icon={HiPlus}
                className="cursor-pointer hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-4 rounded-md"
              >
                Add Product
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("team")} // تعيين التبويب النشط لـ "team"
                icon={HiUsers}
                className="cursor-pointer hover:bg-gray-600 hover:text-gray-200 text-white py-2 px-4 rounded-md"
              >
                Team
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* المحتوى الرئيسي في الجهة اليمنى (9 أعمدة) */}
      <div className="col-span-10 p-4 overflow-hidden">
        {/* عرض المحتوى بناءً على التبويب النشط */}
        {activeTab === "dashboard" && (
          <div>
            <h2 className="text-2xl font-bold">Dashboard Content</h2>
            <p>This is the content for the Dashboard tab.</p>
          </div>
        )}

        {activeTab === "products" && <ProductsDashbord />}

        {activeTab === "addProduct" && <AddProdDash />}

        {activeTab === "team" && <TeamsDash />}
      </div>
    </div>
  );
}
