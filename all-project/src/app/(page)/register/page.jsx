"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { redirect, useRouter } from 'next/navigation'
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(1, "First name must be at least 1 character"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(1, "Last name must be at least 1 character"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  agree: Yup.bool().oneOf([true], "You must agree to the terms and conditions"),
});

export default function Page() {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      redirect('/') // التوجيه هنا
    }
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  const router = useRouter()
  const [loading, setloading] = useState(false);
  async function handelReg(values) {
    setloading(true);
    try {
      const response = await axios.post(
        `http://matjr.runasp.net/api/Account/register`,
        values
      );
      toast.success(response.data.message);
      router.push("/login");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setloading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      agree: false,
    },
    validationSchema: validationSchema,
    onSubmit: handelReg,
  });

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
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={formik.handleSubmit}
      >
        {/* First Name */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="firstName"
              value="First Name:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="firstName"
            type="text"
            placeholder="Enter Your First Name"
            shadow
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500">{formik.errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="lastName"
              value="Last Name:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="lastName"
            type="text"
            placeholder="Enter Your Last Name"
            shadow
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500">{formik.errors.lastName}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Enter Your Email"
            shadow
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
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
            shadow
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="confirmPassword"
              value="Confirm Password:"
              className="text-white text-[24px] font-normal"
            />
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            placeholder="Re-type your password"
            shadow
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            id="agree"
            checked={formik.values.agree}
            onChange={formik.handleChange}
            className="text-[#F90]"
          />
          <Label
            htmlFor="agree"
            className="flex text-white text-[24px] font-normal"
          >
            I agree to the
            <p className="text-[#F90] font-semibold">Terms & Conditions!</p>
          </Label>
        </div>
        {formik.touched.agree && formik.errors.agree && (
          <div className="text-red-500">{formik.errors.agree}</div>
        )}

        <Button
          type="submit"
          className="bg-[#F90] text-white text-[24px] font-normal"
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : "Register"}
        </Button>
      </form>
    </div>
  );
}
