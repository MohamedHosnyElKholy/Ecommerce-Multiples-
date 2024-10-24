'use client'
import Image from "next/image";
import React from "react";
import image from "../../../images/logos_visaelectron.svg";
import imageOne from "@/images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";
import { Accordion, Button } from "flowbite-react";
import { FaFileInvoice } from "react-icons/fa";
import  Link  from 'next/link';
export default function page() {
  return (
    <>
    <div className="container p-[200px] mx-auto">
     <Accordion>
              <Accordion.Panel >       {/* map  */}
                <Accordion.Title className="border border-[#00000020] text-[black] font-normal shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-between gap-10">
                    <div className='flex flex-col gap-5'>
                      <p className="xl:text-[40px] md:text-[24px] xl:leading-[48.41px]">
                        Order Code : <span className="text-[#FF9900]">#000102</span>
                      </p>
                      <p className="xl:text-[32px] md:text-[18px] xl:leading-[38.73px]">
                        Order Date :<span className="text-[#FF9900]"> Oct 25,2024</span>
                      </p>
                    </div>
                    <div className="lg:text-right flex flex-col gap-5">
                      <Link href='#' className='mx-auto lg:mx-0 lg:ml-auto w-[fit-content] block border border-[#FF9900] text-[#FF9900] px-2.5 py-0.5'>
                      <div className='flex items-center gap-2 border '>
                        <FaFileInvoice /> 
                        <span>
                          Invoice
                        </span>
                      </div>
                        </Link>
                      <p className="xl:text-[32px] md:text-[18px] xl:leading-[38.73px] ">
                        Estimated delivery : <span className="text-[#FF9900]">Nov 1, 2024</span>
                      </p>
                    </div>
                  </div>
                </Accordion.Title>
                <Accordion.Content>
                  <div className="grid grid-cols-12 gap-10">
                    <div className="lg:col-span-2 md:col-span-4 col-span-12">
                      <Image src={imageOne} alt='Order image' className='w-full max-w-[120px]'></Image>
                    </div>
                    <div className=" md:col-span-8 col-span-12 flex flex-col justify-evenly xl:text-[32px] md:text-[18px] xl:leading-[38.73px]">
                      <h4 >
                        Smart Watch
                      </h4>
                      <p className='text-[#747474]'>
                        Black | 500mAh | Apple
                      </p>
                    </div>
                    <div className="lg:col-span-2 col-span-12 flex flex-col justify-evenly xl:text-[32px] md:text-[18px] xl:leading-[38.73px] lg:text-right md:text-center">
                      <h4>
                        $560.00
                      </h4>
                      <p className='text-[#747474]'>
                        Qty : 1
                      </p>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            
          
        </Accordion>
    </div>
    <div className="container p-[200px] mx-auto">
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
    </>
  );
}
