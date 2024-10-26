import React from "react";
import imageOne from "@/images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";
import Image from "next/image";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { IoLogoGoogle } from "react-icons/io5";
import { FaCcPaypal } from "react-icons/fa";

export default function Page() {
  return (
    <>
      <div className="container mx-auto pt-[200px]">
        <div className="mt-8 mb-20">
          <h2 className="text-2xl md:text-4xl">Shopping Bag</h2>
          <p className="text-lg md:text-2xl">
            <span className="font-semibold">3 Items</span> In Your Bag
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="relative overflow-x-auto sm:rounded-xl py-6 px-4 shadow-lg col-span-12 md:col-span-8">
            <table className="w-full text-center text-sm md:text-lg">
              <thead className="text-black border-b border-gray-300">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-normal">
                    Product
                  </th>
                  <th scope="col" className="px-4 py-3 font-normal">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3 font-normal">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3 font-normal">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="bg-white border-b border-gray-300">
                    <td className="flex justify-start items-center py-4">
                      <Image
                        src={imageOne}
                        className="w-16 md:w-32 mr-3"
                        alt="cart product"
                      />
                      <div>
                        <p className="mb-1">Smart Watch</p>
                        <p className="text-gray-600">Color: black</p>
                      </div>
                    </td>
                    <td className="py-4 font-normal text-black">$560.00</td>
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <button className="p-1 me-3 border rounded-full" type="button">
                          <span className="sr-only">Decrease Quantity</span>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <span>1</span>
                        <button className="p-1 ms-3 border rounded-full" type="button">
                          <span className="sr-only">Increase Quantity</span>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="py-4 font-normal text-black">$560.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="relative overflow-x-auto sm:rounded-xl py-6 px-4 shadow-lg col-span-12 md:col-span-4">
            <div className="shadow-lg p-6 bg-white rounded-lg border border-gray-300">
              <h4 className="font-semibold text-black mb-3">Coupon Code</h4>
              <p className="text-sm mb-3">
                Lorem ipsum dolor sit amet consectetur...
              </p>
              <TextInput
                type="text"
                className="mb-3"
                placeholder="Enter Your Coupon Code"
              />
              <Button color="warning" className="w-full">Apply Now</Button>
            </div>
            <div className="bg-[#FFECB3] p-6 rounded-md mt-5">
              <h4 className="font-semibold text-black mb-3">Your order summary</h4>
              <div className="flex justify-between items-center mb-5">
                <p className="text-sm font-medium">Total Order:</p>
                <p className="text-sm font-medium">$705.00</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-sm font-medium">Delivery service:</p>
                <p className="text-sm font-medium">$50</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-sm font-medium">Added value:</p>
                <p className="text-sm font-medium">$0</p>
              </div>
              <div className="flex justify-between items-center mb-5 text-black">
                <p className="text-sm font-medium">Discount:</p>
                <p className="text-sm font-medium text-[#9E0000]">$50</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-sm font-medium">Total:</p>
                <p className="text-sm font-medium">$705</p>
              </div>
              <Button className="w-full bg-[#232F3E] text-white mb-3">Checkout</Button>
              <Button color="warning" className="w-full mb-3 flex items-center justify-center">
                <IoLogoGoogle className="mr-2 text-2xl" /> Google Pay
              </Button>
              <Button color="warning" className="w-full mb-3 flex items-center justify-center">
                <FaCcPaypal className="mr-2 text-2xl" /> PayPal
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-56">
          <h3 className="text-2xl font-bold">Shipping</h3>
          <p className="text-lg font-medium">
            Arrives By WED, May 24 <span className="text-[#FF9900]">6 October - ElGiza</span>
          </p>
        </div>
      </div>
    </>
  );
}
