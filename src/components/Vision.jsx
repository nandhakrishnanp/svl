import React from "react";
import cb from "../assets/cibi.png";
import vs from "../assets/vs.png";
import thiru from "../assets/THIMMARAYAN.png";
const Vision = () => {
  return (
    <main className=" ">
      <div className=" bg-cover bg-bg2 h-screen flex flex-col items-center justify-center">
        <h2 className=" text-center font-popins font-bold text-3xl text-secondary  pb-5">
          Our Vision
        </h2>

        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0" className=" md:w-1/2 text-center font-popins text-white md:text-2xl">
          Our vision is to be the most trusted name in automotive manufacturing,
          recognized for our commitment to quality, innovation, and strong
          partnerships that empower our customers and contribute to their
          long-term success.
        </p>
      </div>

      <div className=" max-md:px-4 min-h-screen flex flex-col items-center justify-center">
        <h2 className=" text-center font-popins font-bold text-3xl text-secondary  pb-5">
          Our Mission
        </h2>

        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0" className=" md:w-1/2 text-center font-popins text-accent md:text-2xl">
          At Sri Vijayalakshmi Engineering Works (SLV Pro Meca), our mission is
          to deliver the highest quality automotive components at competitive
          costs, building trust through transparency and exceptional service
          while contributing to our customers' success.
        </p>
      </div>

      <div className=" max-md:px-4 min-h-screen flex flex-col items-center justify-center bg-accent/20">
        <h2 className=" text-center font-popins font-bold text-3xl text-secondary  pb-5">
          Our Team
        </h2>

        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0" className=" md:w-1/2 text-center font-popins text-accent md:text-2xl">
          At SLV Pro Meca, we pride ourselves on being at the forefront of the
          manufacturing industry. Our dedicated team of engineers, designers,
          and industry experts work collaboratively to deliver
          precision-engineered solutions that exceed our clients expectations.
        </p>

        <div className=" flex gap-2 py-2 items-center justify-center">
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0" className=" flex flex-col items-center justify-center">
            <img  className=" object-cover w-50 h-50 " src={thiru} alt="img" />
              <h5 className=" text-accent font-popins  font-semibold">THIMMARAYAN</h5>
                <p className=" font-mons text-center ">MD/INDUSTRY EXPERT</p>
            </div>
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="80"
     data-aos-offset="0" className=" flex flex-col items-center justify-center">
            <img className=" object-cover w-50 h-50" src={vs} alt="img" />
              <h5 className=" text-accent font-popins  font-semibold">VIJAYASARATHI</h5>
                <p className=" text-center font-mons ">GENERAL MANAGER</p>
            </div>
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="80"
     data-aos-offset="0" className=" flex flex-col  items-center justify-center">
            <img  className=" object-cover  w-[240px]" src={cb} alt="img" />
              <h5 className=" text-accent font-popins  font-semibold">CIBIDHARAN</h5>
                <p className=" text-center font-mons ">BUSINESS
                DEVELOPEMENT</p>
            </div>
            
          
          
        </div>
      </div>
    </main>
  );
};

export default Vision;
