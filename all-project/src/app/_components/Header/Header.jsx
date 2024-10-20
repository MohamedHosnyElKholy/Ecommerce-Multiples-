import Image from "next/image";
import React from "react";
import heroImg from "@/images/imgForHeroSection.png";
export default function Header() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 px-10 h-[auto] bg-[#9BFFF84D] pt-[156px] ">
      <div className=" my-auto">
        <div className="max-w-[419px] mx-auto block">
          <h1 className="xl:text-[72px] text-[42px] font-[500]  drop-shadow-[0_4px_4px_#00000040]">
            ONE CART
          </h1>
          <p className="my-[48px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            molestiae nulla sed voluptatem dolores, deleniti perferendis, ad
            error non illo, cum soluta id facere impedit? Iste eius magnam
            aliquid facilis.
          </p>
          <button
            type="button"
            className="focus:outline-none text-white  bg-[#FF9900] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-[4px] text-sm px-[24px] py-[16px] me-2 mb-2"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="my-auto">
        <Image
          src={heroImg}
          alt="heroImage"
          width={589}
          height={732}
          className="block mx-auto"
        ></Image>
      </div>
    </div>
  );
}
