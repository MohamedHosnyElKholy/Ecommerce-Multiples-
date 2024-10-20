"use client";
import React from "react";
// import img1 from '../assets/s1.jpg'
import { FaStar } from "react-icons/fa6";

import Slider from "react-slick";
import Image from "next/image";
import img1 from "@/images/s1.jpg";
import { Button } from "flowbite-react";

export default function Best() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    infinite: false,
    initialSlide: 0,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className=" container mx-auto px-4 py-8">
        <ul className="flex space-x-6 md:space-x-20 mx-auto justify-center text-[16px] md:text-[20px] text-[#9892a6] font-bold">
          <li>LG</li>
          <li>SONY</li>
          <li>SAMSUNG</li>
          <li>TOSHIBA</li>
        </ul>
        <h1 className="p-2 md:text-[40px] text-[20px]  mx-auto font-semibold  ">
          Best Saller
        </h1>
        <Slider {...settings}>
          {products.map((p, i) => (
            <div className="w-1/4 p-2">
              <div className="card p-2  py-3  ">
                <Image
                  src={img1}
                  width={232}
                  height={232}
                  className="w-1/2 mx-auto"
                  alt="Picture of the author"
                />
                <p className="text-[22px] text-black mt-3">
                Lorem ipsum dolor sit amet
              </p>
              <div className="flex justify-between mt-3">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
                <div className="flex justify-between my-1">
                  <span className="flex text-[#ff9900] space-x-2">
                    <FaStar />
                    <FaStar />
                    <FaStar /> <FaStar />
                  </span>
                  <span>500</span>
                </div>

                <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900] w-[100%] mt-3">
                Add To Cart
              </Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
