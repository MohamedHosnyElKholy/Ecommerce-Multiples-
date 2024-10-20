"use client";
import React from "react";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
export default function Page() {
  return (
    <div className="register w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px]">
      <div className="content text-center mb-6">
        <h4 className="text-white text-[40px] font-normal">Register</h4>
        <p className="text-white text-[24px] font-normal ">
          Already have an account?
          <Link href="/login" className="text-[#F90] font-semibold">
            Login here!
          </Link>
        </p>
      </div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email2"
              value="First Name:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="Enter Your First Name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password2"
              value="Last Name:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="password2"
            type="password"
            placeholder="Enter Your Last Name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="repeat-password"
              value="Email:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            placeholder="Enter Your Email"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="repeat-password"
              value="Password:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            placeholder="Enter Your Password"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="repeat-password"
              value="Confirm Password:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            placeholder="Re-type your password"
            required
            shadow
          />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="agree" className="text-[#F90]" />
          <Label
            htmlFor="agree"
            className="flex text-white text-[24px] font-normal"
          >
            I agree to the
            <p className="text-[#F90] font-semibold">Terms & Conditions!</p>
          </Label>
        </div>
        <Button
          type="submit"
          className="bg-[#F90] text-white text-[24px] font-normal"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
