'use client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setToken } from '@/app/lib/loginSlice';

export default function page() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      redirect('/login') // التوجيه هنا
    }
    dispatch(setToken(token));
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  return (
    <div>
      elctron
    </div>
  )
}
