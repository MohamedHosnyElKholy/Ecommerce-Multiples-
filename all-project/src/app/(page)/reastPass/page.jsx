"use client";
import { Button, Label, TextInput } from "flowbite-react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      redirect("/"); // التوجيه هنا
    }
  }, []); // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط

  return (
    <div className="register w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px] h-[100vh]">
      <div className="content text-center mb-6">
        <h4 className="text-white text-[40px] font-normal">
          Rest account password
        </h4>
        <p className="text-white text-[24px] font-normal">
          Enter a new password for example@email.com
        </p>
      </div>
      <form className="flex w-full max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Password:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="email"
            type="password"
            placeholder="Password"
            shadow
            className="w-full"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Confim Password"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Confim Password"
            shadow
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          className="bg-[#F90] text-white text-[24px] font-normal"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}
