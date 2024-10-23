import Image from "next/image";
import React from "react";
import image from "../../../images/logos_visaelectron.svg";
export default function page() {
  return (
    <div className="container p-[200px]">
      <div className="flex justify-between items-center">
        <p className="text-[22px] text-black font-bold">Payment</p>
        <p className="text-[22px] text-black font-bold mb-5">Delivery</p>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-6 mt-5">
            <p className="text-[22px] text-black font-bold">Visa **92</p>
            <Image src={image} width={"200px"} hight={"200px"} />
          </div>
          <div className="flex gap-6 mt-5">
            <p className="text-[22px] text-black font-bold">Total : </p>
            <p className="text-[22px] text-black font-bold">$705,00</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[22px] text-[#747474] font-normal mb-5">Address</p>
          <p className="text-[22px] text-black font-bold mb-5">
            101 Canal St, Apt 127
          </p>
          <p className="text-[22px] text-black font-bold mb-5">Cairo, Egypt</p>
          <p className="text-[22px] text-black font-bold mb-5">Postal Code: 52215</p>
        </div>
      </div>
    </div>
  );
}
