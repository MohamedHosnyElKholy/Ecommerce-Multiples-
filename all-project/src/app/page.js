'use client'
import Arrival from "./_components/arrival/Arrival";
import Header from "./_components/Header/Header";
import Best from "./_components/BestSaler/page";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Offers from "./_components/Offers/Offers";
import { setToken } from '@/app/lib/loginSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(setToken(token));
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  return (
    <div >
      <Header/>

      <Best/>


      <Offers/>

      <Arrival/>


    </div>
  );
}
