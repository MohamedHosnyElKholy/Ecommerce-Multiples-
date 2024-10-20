"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Card } from "flowbite-react";
import imageOne from "../../../images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";
import imageTwo from "../../../images/start.webp";
import { Button } from "flowbite-react";
export default function Arrival() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024, // عند عرض الشاشة أكبر من 1024 بكسل
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // عند عرض الشاشة أكبر من 768 بكسل
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // عند عرض الشاشة أكبر من 480 بكسل
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
      <div className="container mx-auto px-4 py-8 my-[43px]">
        <h4 className="text-[40px] text-black font-semibold">New Arrival</h4>
        <Slider {...settings} className="mt-[20px] mb-[20px]">
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
          <div>
            <Card href="#" className="max-w-xs card-hover">
              <Image
                src={imageOne}
                alt="Picture of the author"
                width={232}
                height={232}
              />
              <p className="text-[22px] text-black">
                Kindle Paperwhite Premium
              </p>
              <div className="flex justify-between">
                <p className="text=[24px] text-black">Price:</p>
                <p className="text=[24px] text-black">5000$</p>
              </div>
              <div className="flex justify-between">
                <Image
                  src={imageTwo}
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <p className="text-[#c9c0c0]">500</p>
              </div>
              <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">
                Add To Cart
              </Button>
            </Card>
          </div>
        </Slider>
      </div>
    </>
  );
}
