import React, { useEffect, useState } from 'react'


const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);

  useEffect(()=>{
    if(showMenu){
  document.body.style.overflow ="hidden"
    }else{
      document.body.style.overflow ="auto"
    }
    return()=>{
      document.body.style.overflow="auto"
    }
  
  },[showMenu])
  return (
    <div className="absolute  top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between align-center gap-20 py-5 px-10 md:px-20">
     <img src="src/assets/logo.svg" alt="" />
        <ul className="text-white hidden md:flex items-center gap-7">
          <a href="#Home" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white py-2 px-9 hover:bg-gray-400 rounded-full items-center text-black transition-colors duration-300">
          Sign up
        </button>
        <img onClick={()=> setShowMenu(true)} src="src/assets/menu_icon.svg" alt="" className='md:hidden w-7 cursor-pointer'/>
      </div>
      <div className={`md:hidden ${showMenu ? 'fixed w-full' : "h-0 w-0" } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMenu(false)} src="src/assets/cross_icon.svg" className='w-5' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a  onClick={()=> setShowMenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a  onClick={()=> setShowMenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a  onClick={()=> setShowMenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a  onClick={()=> setShowMenu(false)}  href="#Header" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
