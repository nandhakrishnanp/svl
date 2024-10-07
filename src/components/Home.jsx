import React, { useEffect } from "react";
import produt from "../assets/products.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {



  useEffect(() => {
    // once animation no repeataion
    AOS.init({ duration: 1000 ,  
      once: true
     } );
  }
  , []);
  return (
    <main>
      <div className="  px-14 flex h-[90vh] object-contain w-full items-center p-10">
        <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="70"
     data-aos-offset="0">
          <h3 className=" max-md:text-2xl font-popins text-accent font-bold text-3xl">
            Crafting Precision, Driving Innovation: Your Partner
            in{" "}
            <span className=" text-secondary">
              World-Class Manufacturing
            </span>{" "}
          </h3>
          <p className=" max-md:w-full w-1/2 py-2 font-mons ">
            At SLV Pro Meca, we specialize in cutting-edge manufacturing from
            sheet metal to advanced tooling. With a dedication to quality,
            on-time delivery, and innovative solutions, we cater to industries
            worldwide
          </p>
          <Link to="/Contactus">
        <button className="hover:scale-105 transition-all duration-150 rounded-xl text-white  font-popins my-2 px-3 py-2 bg-secondary">Contact Us</button>
        </Link>
        </div>
        <div className=" max-md:hidden">
          <img
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="70"
          data-aos-offset="0"
            className=" object-cover "
            src="https://www.mtwmag.com/wp-content/uploads/2024/07/Mill-Turn-Machining-Technology.jpg"
            alt="img"
          />
        </div>
      </div>

      <div className=" bg-hero bg-cover w-full  flex flex-col  items-center   py-10 ">
        <h2 className=" text-center font-popins font-bold text-2xl text-pale  ">
          About Us
        </h2>
        <p data-aos="fade-up"

      data-aos-duration="1000"
     className=" max-md:px-8 text-white font-mons md:text-lg    py-14  max-w-screen-lg">
          At SLV Pro Meca, a division of Sri Vijayalakshmi Engineering Works, we
          specialize in the manufacturing of high-precision sheet metal,
          stamping components, press tools, jigs, and fixtures. As a sole
          proprietorship, we take pride in offering a comprehensive range of
          services to industries such as automotive, catering to both
          two-wheeler and four-wheeler manufacturers. With over a decade of
          expertise, we deliver end-to-end solutions — from tool and die
          manufacturing to in-house machining and sub-assemblies. Our focus on
          innovation, quality control, and on-time delivery ensures that our
          clients receive the best products, tailored to their specific needs.
        </p>
        
      </div>

      <section className=" py-12">
        <h2 className=" text-center font-popins font-bold text-2xl text-primary  pb-5">
          Our Expertise
        </h2>
        <div className=" flex items-center max-md:flex-wrap justify-center gap-4 px-14">
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     className=" flex  flex-col items-center justify-center">
            <img
              className=" shadow-xl w-24 h-24 object-cover rounded-full"
              src="https://www.northernindmfg.com/wp-content/uploads/2021/10/s-compound-tooling-1.png"
              alt="tools and die"
            />
            <p className=" font-popins font-semibold  text-center py-2  text-accent">
              We specialize in tool and die making with skilled professionals.
            </p>
          </div>

          <div  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200" className=" flex flex-col items-center  justify-center">
            <img
              className=" shadow-xl w-24 h-24 object-cover rounded-full"
              src="https://www.nolteprecise.com/media/productphoto-assembly.png"
              alt="tools and die"
            />
            <p className=" font-popins font-semibold  text-center py-2  text-accent">
              We supply sub-assembled parts with precision
            </p>
          </div>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300" className=" flex flex-col items-center  justify-center">
            <img
              className=" shadow-xl w-24 h-24 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomUGNRnupu7KmB8d2CGQavJ_5WNoglwALHg&s"
              alt="tools and die"
            />
            <p className=" font-popins font-semibold  text-center py-2  text-accent">
              {" "}
              We deliver high-quality components for two and four-wheeler
            </p>
          </div>
          <div  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="400" className=" flex flex-col items-center  justify-center">
            <img
              className=" shadow-xl w-24 h-24 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmiA05lgJJKMWhB_pjf_fAJw6U-uoSBuS3lQ&s"
              alt="tools and die"
            />
            <p className=" font-popins font-semibold  text-center py-2  text-accent">
              We provide in-house manufacturing with on-time delivery.
            </p>
          </div>
        </div>
      </section>

      <section className=" max-md:px-6 bg-accent flex flex-col items-center justify-center py-12">
        <h2 className=" text-center font-popins font-bold text-2xl text-pale  pb-6">
          We Are Certified By
        </h2>
        <div className=" flex flex-wrap  justify-center items-center gap-8">
          <img
            className=" max-md:w-20 max-md:h-20 hover:scale-105 transition-all duration-150 w-32 h-32 rounded-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7SS3ZUIqBQ4v191Rsgw5KTsAP-uKoTRzfQ&s"
            alt=""
          />
          <img
            className=" max-md:w-20 max-md:h-20 hover:scale-105 transition-all duration-150 w-32 h-32 rounded-full "
            src="https://i.pinimg.com/736x/35/63/ff/3563ff9c4a653af87b76b9c89a843e84.jpg"
            alt=""
          />
          <img
            className=" max-md:w-20 max-md:h-20 hover:scale-105 transition-all duration-150 w-32 h-32 rounded-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP9Ahu_kNoau5NHtAGGbMIArs-Yo_w1ofRQ&s"
            alt=""
          />
          <img
            className=" max-md:w-20 max-md:h-20 hover:scale-105 transition-all duration-150 w-32 h-32 rounded-full "
            src="https://pbs.twimg.com/profile_images/1749493509659484162/U9QHJKVL_400x400.jpg"
            alt=""
          />
          <img
            className=" max-md:w-20 max-md:h-20 hover:scale-105 transition-all duration-150 w-32 h-32 rounded-full "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36Jp1cToHHg0Yh6cq-decK-LC9IJzps9pbA&s"
            alt=""
          />
        </div>
      </section>

      <section className=" min-h-screen w-full py-5 px-14">
        <h2 className=" text-center font-popins font-bold text-2xl text-primary  pb-5">
          Our Products
        </h2>

        <div className=" flex max-md:flex-col  items-center justify-center">
          <img
          data-aos="zoom-in"
            className=" w-[500px] h-[500px] object-contain"
            src={produt}
            alt="out product"
          />

          <div className="   md:w-1/2  flex flex-col items-center justify-center">
            <p data-aos="zoom-in"  className=" text-sm md:text-xl font-mons">
              we craft products that drive industries forward. Our extensive
              range includes sheet metal components, press tools, jigs,
              fixtures, and more — all designed and manufactured with unmatched
              precision. Leveraging advanced machinery like CNC, VMC, and laser
              cutting, we ensure that every product not only meets but exceeds
              the highest standards of quality and performance. Whether you're
              in the automotive sector or need custom fabrication, our solutions
              are built to empower your success and fuel your innovation.
            </p>
        <Link to="/Products">
        <button className="hover:scale-105 transition-all duration-150 rounded-xl text-white  font-popins m-6 px-3 py-2 bg-secondary">All Products</button>
        </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
