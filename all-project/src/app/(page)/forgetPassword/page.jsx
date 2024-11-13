import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      redirect('/') // التوجيه هنا
    }
  }, []) // المصفوفة الفارغة تعني أنه سيتم التحقق من التوكن عند تحميل الصفحة فقط
  return (
    <div>
      Forget Password
    </div>
  )
}
