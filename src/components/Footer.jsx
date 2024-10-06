import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our Services", path: "/Services" },
    { label: "Our Products", path: "/Products" },
    { label: "Contact Us", path: "/Contactus" },
    // { label: "About Us", path: "/Abouts" }
  ];
  return (
    <footer className=" flex gap-5 px-12 bg-primary p-2 py-5">
      <div>
        <h1 className=" text-pale text-xl py-2 font-popins  capitalize">
          {" "}
          Sri Vijayalakshmi Engineering works
        </h1>
        <p className=" cursor-pointer py-2 flex gap-2 text-white font-popins">
          {" "}
          <img
            className="  w-6"
            src="https://img.icons8.com/ios_filled/512/FFFFFF/apple-phone.png"
            alt=""
          />{" "}
          Phone : +91 7449254543
        </p>
        <p className=" cursor-pointer py-2 flex gap-2 text-white font-popins">
          <img
            className="  w-6"
            src="https://img.icons8.com/win10/512/FFFFFF/gmail.png"
            alt=""
          />{" "}
          Mail : slvsales2010@gmail.com
        </p>
        <p className="  cursor-pointer py-2 flex gap-2 text-white font-popins">
          {" "}
          <img
            className="  w-5"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
            alt=""
          />{" "}
          Linkedin :{" "}
          <a href=" https://www.linkedin.com/in/slvworks">
            {" "}
            https://www.linkedin.com/in/slvworks
          </a>
        </p>
      </div>
        
          <div className=" flex flex-col gap-2">
          <h2 className=" text-pale font-popins text-xl py-2">Quick Links</h2>
            {navItems.map((item) => (
              <Link to={item.path}>
              <p className=" text-white font-popins hover:scale-105 transition-all duration-150 cursor-pointer">
                {item.label}
              </p>
              </Link>
            ))}
            

        
        </div>
    </footer>
  );
};

export default Footer;
