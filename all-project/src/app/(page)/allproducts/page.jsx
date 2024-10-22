"use client";
import { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button, Card, Label, Radio, RangeSlider, Select, Pagination } from "flowbite-react";
import Image from "next/image";
import imageOne from "../../../images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";

export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const renderArrow = (direction) => (
    <div className="flex items-center cursor-pointer">
      {direction === "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: renderArrow("next"),
    prevArrow: renderArrow("prev"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-12 gap-4 my-10 pt-[115px]">
      <div className="col-span-3">
        <div className="container p-4">
          <h4 className="text-black text-xl font-bold">New Releases:</h4>
          <div className="flex items-center gap-2">
            <Radio id="last-30-days" name="filter" value="30days" defaultChecked />
            <Label htmlFor="last-30-days" className="text-black text-lg font-normal">Last 30 Days</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="last-60-days" name="filter" value="60days" />
            <Label htmlFor="last-60-days" className="text-black text-lg font-normal">Last 60 Days</Label>
          </div>
          <h4 className="text-black text-xl font-bold">Categories:</h4>
          <div className="flex items-center gap-2 mb-3">
            <Radio id="allProduct" name="category" value="all" />
            <Label htmlFor="allProduct" className="text-black text-lg font-normal">All Products</Label>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Radio id="clothes" name="category" value="clothes" />
            <Label htmlFor="clothes" className="text-black text-lg font-normal">Clothes</Label>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Radio id="electronics" name="category" value="electronics" />
            <Label htmlFor="electronics" className="text-black text-lg font-normal">Electronics</Label>
          </div>
          <h4 className="text-black text-xl font-bold">Price Range:</h4>
          <div className="flex justify-between mb-3">
            <p className="text-lg text-black font-bold">$12.00</p>
            <p className="text-lg text-black font-bold">$4000.00</p>
          </div>
          <RangeSlider id="price-range" sizing="lg" />
          <h4 className="text-black text-xl font-bold mb-3">Customer Reviews:</h4>
          {/* Add customer reviews here */}
        </div>
      </div>
      <div className="col-span-9 bg-[#eee]">
        <div className="container mx-auto px-4 w-[80%]">
          <Slider {...settings} className="mt-5 mb-5">
            {[...Array(10)].map((_, index) => (
              <div className="px-2" key={index}>
                <Card className="max-w-xs card-hover rounded-[50px] overflow-hidden">
                  <Image
                    src={imageOne}
                    alt="Product Image"
                    width={100}
                    height={100}
                  />
                </Card>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-between items-center pl-5 pr-5">
          <h4 className="text-[28px] text-[#000] font-normal">Products</h4>
          <div className="flex justify-between items-center">
            <p className="text-[20px] text-[#000] font-normal mr-2">Sort By:</p>
            <Select id="sort-options" required className="border-0 bg-white">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
              <option>Best Sellers</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-6 pl-5 pr-5">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <Card href="#" className="max-w-xs card-hover">
                <Image
                  src={imageOne}
                  alt="Product Image"
                  width={232}
                  height={232}
                />
                <p className="text-[22px] text-black">Kindle Paperwhite Premium</p>
                <div className="flex justify-between">
                  <p className="text-[24px] text-black">Price:</p>
                  <p className="text-[24px] text-black">$500.00</p>
                </div>
                <Button className="pt-[10px] pb-[10px] text-[#fff] bg-[#ff9900]">Add To Cart</Button>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex overflow-x-auto sm:justify-center my-[30px]">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={onPageChange}
            showIcons={true}
            nextLabel={renderArrow("next")}
            previousLabel={renderArrow("prev")}
            showPrevious={true}
            showNext={true}
          />
        </div>
      </div>
    </div>
  );
}
