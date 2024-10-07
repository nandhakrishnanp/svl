import React from 'react'

const Contact = () => {
  return (
    <div className=' min-h-screen  overflow-x-hidden '>
            <h2 className=" py-2 text-center font-popins font-bold text-3xl text-secondary  pb-5">
         Contact us
        </h2>
        
        <div className=' flex max-md:flex-col items-center justify-center'>

           <div className=' items-center flex justify-center bg-accent rounded-lg w-[600px] h-[500px]'>
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
           </div>
             
          <div className= ' bg-accent  rounded-lg h-[20%] w-full   md:w-[600px] md:h-[500px]'>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.2642346950006!2d77.8096042!3d12.7613446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae711bff9ca5e5%3A0xd3f22cdb9692a575!2sSri%20Vijayalakshmi%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1728186383655!5m2!1sen!2sin"
              width="600"
              height="500"
            
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> 
        </div>
          
        </div>
    </div>
  )
}

export default Contact