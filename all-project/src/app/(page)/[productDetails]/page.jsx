import Image from 'next/image'
import React from 'react'
import imageOne from "@/images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";
import { CiStar } from "react-icons/ci";
export default function page() {
  return (
    <>
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20  mt-[156px] mb-10 border rounded-[32px] pt-[139px] pe-[111px] pb-[93px] ps-[84px]'>
        <div>
        <Image src={imageOne} alt='product image' className='w-full' ></Image>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <h2 className='text-[36px] leading-[43.57px]'>Iphon 13 pro max</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Mattis aenean euismod ipsum vel vestibulum pellentesque mi bibendum egestas. Eget egestas sapien sapien imperdiet consectetur mi placerat. Amet eleifend nulla sit mauris scelerisque ac sit. Viverra tinci.Lorem ipsum dolor sit amet consectetur. Mattis aenean euismod ipsum vel vestibulum pellentesque mi bibendum egestas. Eget egestas sapien sapien imperdiet consectetur mi placerat. Amet eleifend nulla sit mauris scelerisque ac sit. Viverra tinci.</p>
          <h3 className='text-[24px] leading-[29.05px]'><span className='text-[#FF9900]'>Price : </span> $990.00</h3>
          <h3 className='text-[24px] leading-[29.05px]'><span className='text-[#FF9900]'>Quantity available : </span> 100</h3>
          <div className='flex justify-between items-baseline'>
          <h3 className='text-[#FF9900] text-[40px]'>★★★★★</h3>
          <span className='text-[20px] leading-[24.2px]'>rating 500</span>
          </div>
          <button type="button" class="focus:outline-none text-white bg-[#FF9900] hover:bg-[#ff9900e6] focus:ring-4 focus:ring-yellow-300 font-bold rounded-[4px] text-sm py-[16px] me-2 mb-2 leading-[19.36px]">Add To Cart</button>
        </div>
      </div>
      </div>
    </>
  )
}
