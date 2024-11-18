'use client'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaEnvelope } from "react-icons/fa";

export default function CheckEmail() {
    useEffect(() => {
        if (localStorage.getItem("token")) {
          redirect("/"); // التوجيه هنا
        }
      }, []);
  return (
    <div className="register text-white text-center w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px] h-[100vh] gap-10">
      <div className='text-[#FF9900] text-[160px]'>
      <FaEnvelope />
      </div>
      <div className='max-w-[346px] flex flex-col gap-6'>
        <h3 className='text-[40px] font-[400] leading-[48.41px]'>Check your email</h3>
        <p className='text-[24px] font-[400] leading-[29.05px]'>
        Please Check your email inbox for instructions on how to reset your password
        </p>
      </div>
        <button className='bg-[#FF9900] text-[24px] text-left font-[400] leading-[29.05px] px-[18px] rounded-[6px] py-[8px] max-w-[346px]'>Didin’t get email? Try again</button>
        <Link href='/login' className='text-[24px] font-[400] leading-[29.05px] text-[#FF9900]'>Back To Login</Link>
      </div>
  )
}
