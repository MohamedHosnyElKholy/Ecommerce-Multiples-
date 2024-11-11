"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login, setToken } from "../../lib/loginSlice"; // تأكد أن لديك هذا السلايس
import { toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
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
});

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  async function handelReg(values) {
    setLoading(true);
    try {
      // إرسال البيانات إلى الـ API لتسجيل الدخول
      const response = await dispatch(login(values)); // تأكد من أنك تستخدم الـ action الصحيح
      if (response && response.payload) {
        // إذا كانت الاستجابة ناجحة، خزن التوكن
        toast.success("Login successful! 🎉");
        localStorage.setItem("token", response.payload.data.token); // حفظ التوكن في الـ localStorage
        dispatch(setToken(response.payload.data.token));
        router.push("/"); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول
      } else {
        // في حالة عدم وجود استجابة صحيحة أو وجود خطأ
        toast.error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      // التعامل مع الأخطاء بشكل عام (مثل عدم الوصول إلى الـ API)
      toast.error(
        "Login failed! Please check your credentials or try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handelReg,
  });

  return (
    <div className="register w-full flex flex-col justify-center items-center bg-gray-800 pt-[80px] pb-[80px] h-[100vh]">
      <div className="content text-center mb-6">
        <h4 className="text-white text-[40px] font-normal">Login</h4>
        <p className="text-white text-[24px] font-normal ">
          Don’t have an account?
          <Link href="/register" className="text-[#F90] font-semibold">
            Register here!
          </Link>
        </p>
      </div>
      <form
        className="flex w-full max-w-md flex-col gap-4"
        onSubmit={formik.handleSubmit}
      >
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
            value={formik.values.email}
            onChange={formik.handleChange}
            shadow
            className="w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            shadow
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <Link
          href="/forgetPassword"
          className="text-white font-semibold text-center"
        >
          Forgot Password?
        </Link>

        <Button
          type="submit"
          className="bg-[#F90] text-white text-[24px] font-normal"
        >
          {loading ? <FaSpinner className="animate-spin mr-2" /> : "Login"}
        </Button>
      </form>
    </div>
  );
}
