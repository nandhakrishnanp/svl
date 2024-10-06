import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

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
              <img src={logo} alt="logo" className=' w-20 rounded-full' />
               <h1 className=' text-accent text-xl font-popins  capitalize'>Sri Vijayalakshmi Engineering works</h1>
             
          </div>

          <div className='flex items-center gap-5 px-4'>
            
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