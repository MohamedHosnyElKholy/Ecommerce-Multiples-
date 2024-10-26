import React from 'react'
import imageOne from "@/images/61D5zt-L8iL._AC_UL232_SR232,232_ 1.png";
import Image from 'next/image';
export default function page() {
  return (
    <>
    <div className='container mx-auto mt-[200px]'>
      <div className='mt-8 mb-20'>
        <h2 className='text-[32px] leading-[38.73px]'>Shopping Bag</h2>
        <p className='text-[20] leading-[38.73px]'><span className='font-[600]'>3 Items</span> In Your Bag</p>
      </div>
      <div className='grid grid-cols-12 gap-4'>
          <div className="relative overflow-x-auto sm:rounded-xl py-[60px] px-[30px] shadow-[0px_0px_19px_5px_#00000017] col-span-8">
            <table className="w-full text-center font-normal text-[12px] lg:text-[16px]">
              <thead className="text-black text-[12px] lg:text-[16px]  border-b border-b-gray-300 leading-[19.36px] font-normal">
                <tr>
                  <th scope="col" className="px-6 py-3 lg:w-[45%] text-left font-normal">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 font-normal">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((product)=>{
                  return <tr
                  className="bg-white border-b border-b-gray-300 "
                >
                  <td className="pr-6 py-4 font-normal text-black flex justify-start items-center ">
                  <Image
                      src={imageOne}
                      className="w-16 md:w-32 max-w-full max-h-full mr-3"
                      alt='cart product'
                    ></Image>
                    <div>
                    <p className='leading-[16.94px] mb-2'>
                    Smart Watch
                    </p>
                    <p className='text-[#000000CC] leading-[14.52px]'>
                      Color : black
                    </p>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 font-normal text-black leading-[19.36px]">
                   $560.00
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center text-black">
                      <button
                        // disabled={ele.count==1}
                        // onClick={()=>{updateProduct(ele.product._id,ele.count - 1)}}
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-normal h-6 w-6 text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <span className='leading-[14.52px]'>1</span>
                      </div>
                      <button
                        // onClick={()=>{updateProduct(ele.product._id,ele.count+1)}}
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-normal text-black bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200      "
                        type="button"
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-normal text-black leading-[19.36px]">
                     $560.00
                  </td>
                </tr>
                })}
                    
              </tbody>
            </table>
          </div>
          </div>
          <div className='mt-20 mb-[223px]'>
            <h3 className='text-[24px] font-[700] leading-[29.05px]'>
              Shipping
            </h3>
            <p className='text-[16px] font-[500]'>
              Arrives By WED, May 24 <span className='text-[#FF9900]'>6 October - ElGiza</span>
            </p>
          </div>
          </div>
    </>
  )
}
