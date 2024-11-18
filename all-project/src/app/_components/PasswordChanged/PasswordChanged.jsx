'use client'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function PasswordChanged() {
    useEffect(() => {
        if (localStorage.getItem("token")) {
          redirect("/"); 
        }
      }, []);
  return (
    <div className="register text-white text-center w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px] h-[100vh] gap-8">
      <div className='text-[#FF9900] text-[160px]'>
      <IoMdCheckmarkCircle />
      </div>
      <div className='max-w-[460px] flex flex-col gap-6'>
        <h3 className='text-[40px] font-[400] leading-[48.41px]'>password Changed successfully!</h3>
        <p className='text-[24px] font-[400] leading-[29.05px]'>
        Your password has been successfully changed, press Login and write your new password.
        </p>
      </div>
        <Link href='/login' className='text-[24px] font-[400] leading-[29.05px] md:w-[460px]'>
        <button className='bg-[#FF9900] hover:bg-[#ff9900de] text-[24px] font-[400] leading-[29.05px] px-[76px] rounded-[6px] py-[8px] w-full '>Login Now</button>
        </Link>
      </div>
  )
}
