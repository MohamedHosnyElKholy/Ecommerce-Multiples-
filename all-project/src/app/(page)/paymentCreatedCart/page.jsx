"use client";
import React, { useEffect } from "react";
import { Card, Checkbox, Label, TextInput } from "flowbite-react"; // إصلاح الاستيراد
import Image from "next/image";
import imageOne from "../../../images/e1f08393-359b-440d-8eba-75ac5c83168b-cover 1.png";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from '@/app/lib/loginSlice';

export default function Page() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      redirect('/login') // التوجيه هنا
    }
    dispatch(setToken(token));
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  return (
    <div className="flex items-center justify-center pt-[100px] min-h-screen">
      <div className="container mx-auto px-4">
        <h4 className="text-[24px] font-semibold text-black mb-4">Add your credit card</h4>
        
        <Card href="#" className="w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2 flex items-center justify-center">
              <Image src={imageOne} width={100} height={100} alt="Card Image" />
            </div>
            <div className="col-span-10">
              <form className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="cardNumber" className="text-[18px] text-black font-semibold" value="Card Number*" />
                  <TextInput
                    id="cardNumber"
                    type="text"
                    placeholder="6011-0009-9013-9424"
                    required
                    shadow
                    className="mt-2 w-full"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expirationMonth" className="text-[18px] text-black font-semibold" value="Expiration Month*" />
                    <TextInput
                      id="expirationMonth"
                      type="number"
                      placeholder="Select Month"
                      required
                      shadow
                      className="mt-2 w-full"
                    />
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="expirationYear" className="text-[18px] text-black font-semibold" value="Expiration Year*" />
                    <TextInput
                      id="expirationYear"
                      type="number"
                      placeholder="Select Year"
                      required
                      shadow
                      className="mt-2 w-full"
                    />
                  </div>

                  <div className="flex-1">
                    <Label htmlFor="securityCode" className="text-[18px] text-black font-semibold" value="Security Code*" />
                    <TextInput
                      id="securityCode"
                      type="number"
                      placeholder="000"
                      required
                      shadow
                      className="mt-2 w-full"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cardHolder" className="text-[18px] text-black font-semibold" value="Name on Card*" />
                  <TextInput
                    id="cardHolder"
                    type="text"
                    placeholder="Mido"
                    required
                    shadow
                    className="mt-2 w-full"
                  />
                </div>

                <div className="flex items-center gap-2 mt-4 justify-center">
                  <Checkbox id="agree" />
                  <Label htmlFor="agree" className="text-[18px] text-black font-semibold">
                    I’m using a debit card one time use card
                  </Label>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
