import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='hidden md:grid grid-cols-4 gap-2'>
        <Link to="/home"><div className='bg-[#FFE5D9] cursor-pointer text-[#9D8189] rounded-lg font-bold m-2 p-1 flex justify-center items-center'>Home</div></Link>
        <Link to="/aboutus"><div className='bg-[#FFE5D9] cursor-pointer text-[#9D8189] rounded-lg font-bold m-2 p-1 flex justify-center items-center'>About Us</div></Link>
        <Link to="/myshelf"><div className='bg-[#FFE5D9] cursor-pointer text-[#9D8189] rounded-lg font-bold m-2 p-1 flex justify-center items-center'>My Shelf</div></Link>
        <Link to="/browse"><div className='bg-[#FFE5D9] cursor-pointer text-[#9D8189] rounded-lg font-bold m-2 p-1 flex justify-center items-center'>Browse</div></Link>
    </div>
  )
}

export default Navbar