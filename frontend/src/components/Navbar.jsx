import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className='flex w-full h-14  items-center justify-between  pl-4'>
      <NavLink to="/" className="flex items-center gap-2 ">
      <svg className='' width="60" height="50" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_42_145)">
<path d="M33.8439 3.18652V5.31075C33.8439 15.5357 25.1847 20.1803 14.5046 20.1803H11.4393C11.781 16.9812 13.2927 15.045 17.2379 12.7445C19.1783 11.6133 19.0139 10.9601 18.0582 11.335C11.4764 13.916 8.20805 17.4039 8.06301 22.9737L8.05818 23.3666H4.83496C4.83496 21.919 5.02191 20.6052 5.39258 19.4028C5.02191 18.0285 4.83496 16.1634 4.83496 13.8076C4.83496 7.9416 12.0501 3.18652 20.951 3.18652C24.1742 3.18652 27.3975 4.24864 33.8439 3.18652Z" fill="#435151"/>
</g>
<defs>
<clipPath id="clip0_42_145">
<rect width="38.6786" height="25.4907" fill="white"/>
</clipPath>
</defs>
</svg>
<h1 className='text-2xl font-semibold text-[#435151] font-poppins'>Plant Care</h1>
      </NavLink>
      <div className="middle flex items-center gap-20">
        <NavLink  className={({ isActive }) =>
    `text-xl font-semibold font-poppins ${
      isActive ? 'text-black' : 'text-gray-600'
    }`} to="/about">About Us</NavLink>
        <NavLink    className={({ isActive }) =>
    `text-xl font-semibold font-poppins ${
      isActive ? 'text-black' : 'text-gray-600'
    }`} to="/contact">Contact Us</NavLink>
      </div>
      <div className="end flex bg-gray-800 rounded-bl-2xl text-white h-full items-center gap-4 w-40 justify-center">
        <CgSearch className='text-xl cursor-pointer'/>
        <AiOutlineUser className='text-xl cursor-pointer'/>
        <RiMenu3Fill className='text-xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar