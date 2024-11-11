"use client";

import { useEffect, useState } from "react"; // لاستيراد useState
import { Sidebar } from "flowbite-react"; // لاستيراد Sidebar من Flowbite
import { HiHome, HiShoppingBag, HiPlus, HiUsers } from "react-icons/hi"; // أيقونات مناسبة
import ProductsDashbord from "../../_components/ProductsDashbord/DashProd";
import AddProdDash from "../../_components/AddProdDash/AddDash";
import TeamsDash from "../../_components/TeamsDash/teamDash";
import { useDispatch, useSelector } from "react-redux";
import { FaDollarSign, FaGlobe } from "react-icons/fa";
import { store } from "./../../../store";
<<<<<<< HEAD
import dashboardReducer, { setInDashboard } from "./../../feature/dashboardSlice";
import { ResponsiveLine } from "@nivo/line"; // استيراد ResponsiveLine
import { ResponsivePie } from "@nivo/pie"; // استيراد ResponsivePie

// بيانات وهمية للرسوم البيانية
const chartData = [
  {
    id: "sales",
    data: [
      { x: "2023-01", y: 100 },
      { x: "2023-02", y: 120 },
      { x: "2023-03", y: 130 },
      { x: "2023-04", y: 140 },
      { x: "2023-05", y: 150 },
    ],
  },
];

const chartDataTwo = [
  { id: "ruby", value: 60 },
  { id: "javascript", value: 30 },
  { id: "python", value: 10 },
];

=======
import dashboardReducer, {setInDashboard,} from "./../../feature/dashboardSlice";
import { FaDollarSign, FaGlobe } from "react-icons/fa";
import { ResponsiveLine } from "@nivo/line";
import { chartData } from "./data";
import { ResponsivePie } from "@nivo/pie";
import { chartDataTwo } from './dataTwo';
>>>>>>> aef3813349d700752c83e43ca9d6491359c58a6f
export default function Page() {
  const [activeTab, setActiveTab] = useState("dashboard"); // حالة لتحديد التبويب النشط
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setInDashboard(true));

    return () => {
      dispatch(setInDashboard(false));
    };
  }, []);

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
                onClick={() => setActiveTab("products")}
                icon={HiShoppingBag}
                className="cursor-pointer hover:bg-gray-700 hover:text-gray-200 py-3 px-6 rounded-lg transition duration-200 ease-in-out"
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("addProduct")}
                icon={HiPlus}
                className="cursor-pointer hover:bg-gray-700 hover:text-gray-200 py-3 px-6 rounded-lg transition duration-200 ease-in-out"
              >
                Add Product
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => setActiveTab("team")}
                icon={HiUsers}
                className="cursor-pointer hover:bg-gray-700 hover:text-gray-200 py-3 px-6 rounded-lg transition duration-200 ease-in-out"
              >
                Team
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* المحتوى الرئيسي في الجهة اليمنى (9 أعمدة) */}
      <div className="col-span-10 overflow-hidden bg-[#edeeee]">
        {/* عرض المحتوى بناءً على التبويب النشط */}

        {/* Main Content on the right */}
        <div className="col-span-1 md:col-span-10">
          {/* Display content based on active tab */}
          {activeTab === "dashboard" && (
            <div className='p-6'>
              <div className="container mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Visitor Info */}
                    <div className="bg-[#E7F3CC] rounded-lg shadow-md p-4">
                      <p className="text-[#232F3E] text-[14px] font-bold mb-2">
                        Number of visitors
                      </p>
                      <p className="text-[rgba(0,0,0,0.25)] text-[10px] p-2 rounded-md mb-4">
                        New Visitors Today
                      </p>
                      <div className="flex justify-between items-center">
                        <HiUsers className="mr-2" />
                        <p className="text-[rgba(9, 158, 49, 1)] text-[24px]">
                          +100
                        </p>
                      </div>
                    </div>

                    {/* Sales Info */}
                    <div className="bg-[#E3F2FF] rounded-lg shadow-md p-4">
                      <p className="text-[#232F3E] text-[14px] font-bold mb-2">
                        New Sales
                      </p>
                      <p className="text-[rgba(0,0,0,0.25)] text-[10px] p-2 rounded-md mb-4">
                        New Sales Today
                      </p>
                      <div className="flex justify-between items-center">
                        <FaDollarSign className="mr-2" />
                        <p className="text-[rgba(71, 123, 255, 1)] text-[24px]">
                          + $500
                        </p>
                      </div>
                    </div>

                    {/* Products Info */}
                    <div className="bg-[#FFEAE8] rounded-lg shadow-md p-4">
                      <p className="text-[#232F3E] text-[14px] font-bold mb-2">
                        All Products
                      </p>
                      <p className="text-[rgba(0,0,0,0.25)] text-[10px] p-2 rounded-md mb-4">
                        All Products You Have
                      </p>
                      <div className="flex justify-between items-center">
                        <HiPlus className="mr-2" />
                        <p className="text-[rgba(144, 48, 38, 1)] text-[24px]">
                          100
                        </p>
                      </div>
                    </div>

                    {/* Shipments Info */}
                    <div className="bg-[#FFF1CA] rounded-lg shadow-md p-4">
                      <p className="text-[#232F3E] text-[14px] font-bold mb-2">
                        Number of Shipments
                      </p>
                      <p className="text-[rgba(0,0,0,0.25)] text-[10px] p-2 rounded-md mb-4">
                        All Shipments You Have
                      </p>
                      <div className="flex justify-between items-center">
                        <FaGlobe className="mr-2" />
                        <p className="text-[rgba(255, 153, 0, 0.74)] text-[24px]">
                          100
                        </p>
                      </div>
                    </div>

                    {/* Revenue Chart */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white rounded-lg shadow-md p-4 mt-3">
                      <h1 className="text-[20px] font-bold">Revenue</h1>
                      <div style={{ width: "100%", height: "300px" }}>
                        <ResponsiveLine
                          data={chartData}
                          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                          xScale={{ type: "point" }}
                          yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: true,
                            reverse: false,
                          }}
                          yFormat=" >-.2f"
                          axisTop={null}
                          axisRight={null}
                          axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "transportation",
                            legendOffset: 36,
                            legendPosition: "middle",
                            truncateTickAt: 0,
                          }}
                          axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "count",
                            legendOffset: -40,
                            legendPosition: "middle",
                            truncateTickAt: 0,
                          }}
                          enablePoints={false}
                          pointSize={10}
                          pointColor={{ theme: "background" }}
                          pointBorderWidth={2}
                          pointBorderColor={{ from: "color", modifiers: [] }}
                          pointLabel="data.yFormatted"
                          pointLabelYOffset={-15}
                          enableTouchCrosshair={true}
                          useMesh={true}
                          legends={[]}
                        />
                      </div>
                    </div>

                    {/* Market Share Chart */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white rounded-lg shadow-md p-4">
                      <h1 className="text-[20px] font-bold">Market Share</h1>
                      <div style={{ width: "100%", height: "500px" }}>
                        <ResponsivePie
                          data={chartDataTwo}
                          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                          innerRadius={0.4}
                          padAngle={0.7}
                          cornerRadius={5}
                          activeOuterRadiusOffset={8}
                          borderWidth={1}
                          borderColor={{
                            from: "color",
                            modifiers: [["darker", 0.2]],
                          }}
                          enableArcLinkLabels={false}
                          arcLinkLabelsSkipAngle={10}
                          arcLinkLabelsTextColor="#333333"
                          arcLinkLabelsThickness={2}
                          arcLinkLabelsColor={{ from: "color" }}
                          arcLabelsSkipAngle={10}
                          arcLabelsTextColor={{
                            from: "color",
                            modifiers: [["darker", 2]],
                          }}
                          defs={[
                            {
                              id: "dots",
                              type: "patternDots",
                              background: "inherit",
                              color: "rgba(255, 255, 255, 0.3)",
                              size: 4,
                              padding: 1,
                              stagger: true,
                            },
                            {
                              id: "lines",
                              type: "patternLines",
                              background: "inherit",
                              color: "rgba(255, 255, 255, 0.3)",
                              rotation: -45,
                              lineWidth: 6,
                              spacing: 10,
                            },
                          ]}
                          fill={[
                            { match: { id: "ruby" }, id: "dots" },
                            { match: { id: "javascript" }, id: "dots" },
                            { match: { id: "hack" }, id: "dots" },
                            { match: { id: "python" }, id: "dots" },
                            { match: { id: "php" }, id: "dots" },
                          ]}
                          legends={[
                            {
                              anchor: "bottom",
                              direction: "row",
                              justify: false,
                              translateX: 0,
                              translateY: 56,
                              itemsSpacing: 0,
                              itemWidth: 100,
                              itemHeight: 18,
                              itemTextColor: "#999",
                              itemDirection: "left-to-right",
                              itemOpacity: 1,
                              symbolSize: 18,
                              symbolShape: "circle",
                              effects: [
                                {
                                  on: "hover",
                                  style: {
                                    itemTextColor: "#000",
                                  },
                                },
                              ],
                            },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Display content for other tabs */}
          {activeTab === "products" && <ProductsDashbord />}
          {activeTab === "addProduct" && <AddProdDash />}
          {activeTab === "team" && <TeamsDash />}
        </div>
      </div>
    </div>
  );
}
