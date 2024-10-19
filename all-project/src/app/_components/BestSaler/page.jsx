'use client'
import React from 'react' 
// import img1 from '../assets/s1.jpg' 
import { FaStar } from "react-icons/fa6"; 
 
import Slider from "react-slick"; 
import Image from 'next/image'
 import img1 from '@/images/s1.jpg'
export default function Best() { 
    var settings = { 
        dots: true, 
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 2, 
        arrows:false, 
        autoplaySpeed:500, 
        autoplay:true, 
        infinite: false, 
        initialSlide: 0, 
        focusOnSelect: true, 
         
        responsive: [ 
        
            { 
              breakpoint: 600, 
              settings: { 
                slidesToShow: 2, 
                slidesToScroll: 2, 
                initialSlide: 2 
              } 
            }, 
            { 
              breakpoint: 480, 
              settings: { 
                slidesToShow: 1, 
                slidesToScroll: 1 
              } 
            } 
          ], 
      
 
      }; 
      const products=[0,1,2,3,4,5,6,7,8] 
  return ( 
    <> 
      <div className='best container mx-auto  p-10 '> 
      <ul className='flex space-x-6 md:space-x-20 mx-auto justify-center text-[16px] md:text-[20px] text-[#9892a6] font-bold'>
          <li>LG</li>
          <li>SONY</li>
          <li>SAMSUNG</li>
          <li>TOSHIBA</li>
        </ul>
      <h1 className='p-2 md:text-[30px] text-[20px]  mx-auto  '>Best Saller</h1>
      <Slider {...settings}> 
      {products.map((p,i)=> 
           <div className='w-1/4 p-2'>     
             <div  className="card p-2  py-3  "> 
             {/* <img src={img1} className='w-1/2 mx-auto'/>  */}
             <Image src={img1} width={500} height={500} className='w-1/2 mx-auto' alt="Picture of the author"/>
             <h1>Lorem ipsum dolor sit amet Lorem, ipsum </h1> 
             <div className='flex justify-between my-1'> 
            <span>price:</span> 
            <span>5000$</span> 
             </div> 
            <div className='flex justify-between my-1'> 
            <span className='flex text-[#ff9900] space-x-2'> <FaStar /><FaStar /><FaStar /> <FaStar /></span> 
            <span>500</span> 
            </div> 
        
           <button className='bg-[#ff9900] text-white w-full rounded-sm mt-2' > Add to cart</button> 
 
 
           </div> 
        </div> 
       
        )} 
      </Slider> 
        
     
 
      </div> 
       
    </> 
  ) 
}