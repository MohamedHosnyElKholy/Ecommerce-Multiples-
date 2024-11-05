import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div className="notFoundImg flex flex-col items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-[80px] font-[600] leading-[82.5px] md:text-[320px] md:font-[800] md:leading-[330px] text-center text-[#2C2B2B]">
          404
        </h2>
        <p className="text-[16px] font-[600] leading-[18px] md:text-[60px] md:font-[800] md:leading-[70px] text-center text-[#2C2B2B]">
          Oops, This Page Could Not Be Found.
        </p>
        <p className="md:text-[14px] md:font-[600] md:leading-[16px] text-center text-[#908D8D] mt-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button className="flex justify-center items-center py-3 px-6 md:py-4 md:px-10 mt-20 bg-[#FF9900] hover:bg-[#ff9900e6] text-[16px] leading-[20pxpx] md:text-[24px] font-[500] md:leading-[28px] text-white rounded-md">
          <div className="self-center mr-2">
            <FaArrowLeft />
          </div>
          <div>Back to home</div>
        </button>
      </div>
    </div>
  );
}
