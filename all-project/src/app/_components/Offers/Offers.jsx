import Image from 'next/image'
import React from 'react'
import blueSale from '@/images/blueSale.png'
import orangeSale from '@/images/orangeSale.png'
export default function Offers() {
  return (
    <div className='w-[90%] mx-auto my-[43px]'>
        <h2 className='text-[40px] font-medium'>Offers</h2>
        <div className='mt-8 grid grid-cols-3'>
            <Image src={blueSale} className='w-[100%] col-span-2 h-[326px] '></Image>
            <Image src={orangeSale} className='w-[100%]  h-[326px]'></Image>
        </div>
    </div>
  )
}
