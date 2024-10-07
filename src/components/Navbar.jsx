import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import ham from "../assets/react.svg"
const Navbar = () => {
  const [isopen, setOpen] = useState(false);
  
    const navItems = [
        { label: "Home", path: "/" },
        {label :"Our Vision", path:"/ourvision"},
        { label: "Services", path: "/Services" },
        { label: "Products", path: "/Products" },
        { label: "Contact Us", path: "/Contactus" },
        // { label: "About Us", path: "/Abouts" }
      ];


  return (
    <nav className='  sticky top-0 left-0 z-30 w-full bg-pale flex items-center px-4'>
          <div className='flex-1 flex items-center  '>
              <img src={logo} alt="logo" className=' max-md:p-1 w-20 rounded-full' />
               <h1 className=' text-accent md:text-xl font-popins  capitalize'>Sri Vijayalakshmi Engineering works</h1>
             
          </div>
          
            {
              !isopen &&(
                <div className='  md:hidden'>
                <img src={ham} onClick={()=> setOpen(true)} className=' cursor-pointer w-10'  alt="ham" />
                </div>
              )
            }

            {
              isopen&&(
                <div className=' md:hidden  fixed flex flex-col items-center justify-center gap-5 right-0 top-16 h-screen w-full bg-accent transition-all  '>

                   <img onClick={()=>setOpen(false)} className=' w-8 cursor-pointer fixed top-20 left-3 top' src="https://img.icons8.com/fluent-systems-regular/512/FFFFFF/delete-sign.png" alt="closenavbar" />
                     {
                navItems.map((item)=>(
                    <Link onClick={()=>setOpen(false)} to={item.path}>
                    <p className=' text-white max-md:text-xl hover:scale-105 transition-all duration-150 text-lg  font-popins hover:text-secondary hover:cursor-pointer'>
                        {item.label}
              </p>
                    </Link>
                ))
            }
                </div>
              )
            }
           
          <div className=' max-md:hidden flex items-center gap-5 px-4'>
            
            {
                navItems.map((item)=>(
                    <Link to={item.path}>
                    <p className='hover:scale-105 transition-all duration-150 text-lg text-accent font-popins hover:text-secondary hover:cursor-pointer'>
                        {item.label}
              </p>
                    </Link>
                ))
            }


          </div>
    </nav>
  )
}

export default Navbar