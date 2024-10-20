import Image from 'next/image'
import React from 'react'
import blueSale from '@/images/blueSale.png'
import orangeSale from '@/images/orangeSale.png'
export default function Offers() {
  return (
    <div className='container mx-auto px-4 py-8 my-[43px]'>
        <h2 className='text-[40px] font-medium'>Offers</h2>
        <div className='mt-8 grid grid-cols-3'>
            <Image src={blueSale} alt='offerImage' className='w-[100%] col-span-2 h-[326px] '></Image>
            <Image src={orangeSale} alt='offerImage' className='w-[100%]  h-[326px]'></Image>
        </div>
    </div>
  )
}
