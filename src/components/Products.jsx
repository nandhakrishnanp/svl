import React from 'react'
import d1 from "../assets/d1 (1).png";
import d2 from "../assets/d1 (2).png";
import d3 from "../assets/d1 (3).png";
import d4 from "../assets/d1 (4).png";
import d5 from "../assets/d1 (5).png";
import d6 from "../assets/d1 (6).png";
import d7 from "../assets/d2.png";
const Products = () => {
  return (
   <main>
     <h2 className=" text-center font-popins font-bold text-3xl text-secondary  pb-5">
          Our Products
        </h2>
        <div className=' flex flex-wrap items-center justify-evenly gap-4 '>
           
           <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0" className=' rounded-md w-80 h-80 p-3'  src={d1} alt="Die" />
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"  className=' rounded-md w-80 h-80 p-3' src={d2} alt="Die" />
          
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"  className=' rounded-md w-80 h-80 p-3' src={d4} alt="Die" />
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"   className=' rounded-md w-80 h-80 p-3' src={d5} alt="Die" />
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"   className=' rounded-md w-80 h-80 p-3' src={d6} alt="Die" />
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"  className=' rounded-md w-80 h-80 p-3' src={d7} alt="Die" />
            <img data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0"  className=' rounded-md  h-60 p-3' src={d3} alt="Die" />

           
        </div>
   </main>
  )
}

export default Products