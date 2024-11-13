import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Sell() {
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      redirect('/login') // التوجيه هنا
    }
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  return (
    <div>
      Sell
    </div>
  )
}
