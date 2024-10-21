"use client";
import React from "react";
import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";
export default function Page() {
  return (
    <div className="register w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px]">
      <div className="content text-center mb-6">
        <h4 className="text-white text-[40px] font-normal">Login</h4>
        <p className="text-white text-[24px] font-normal ">
          Don’t have account?
          <Link href="/register" className="text-[#F90] font-semibold">
          Register here!
          </Link>
        </p>
      </div>
      <form className="flex w-full max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Username:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Enter e-mail address"
            required
            shadow
            className="w-full"
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Enter Your Password"
            required
            shadow
          />
        </div>
        <Link href="/forgetPassword" className="text-white font-semibold text-center">
        Forgot Password?
          </Link>
        
        <Button
          type="submit"
          className="bg-[#F90] text-white text-[24px] font-normal"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
