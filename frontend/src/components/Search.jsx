import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'


const Search = () => {
  return (
    <div className='m-2 grid grid-cols-12   bg-[#9D8189] w-full p-1 rounded-md cursor-pointer'>
      <div className='flex items-center justify-center'>
        <BiSearchAlt2 className='text-white text-2xl' />
      </div>
      <div className='col-start-2 col-span-12 bg-[#9D8189]'>
          <input className='w-full cursor-pointer text-lg bg-[#9D8189] text-white outline-0 placeholder-white' type='search' placeholder='Search by book name, author'></input>
      </div>
        
    </div>
  )
}

export default Search