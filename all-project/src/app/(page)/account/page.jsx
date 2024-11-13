'use client'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      redirect('/login') // التوجيه هنا
    }
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط

  return (
    <div>
      account
    </div>
  )
}
