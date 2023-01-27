import React from 'react'
import topbg from '../assets/top-deco.png'
import bottombg from '../assets/bottom-deco.png'
import centerbg from '../assets/center-deco.png'
import fbook from '../assets/fbook.png'

import { Link } from "react-router-dom";
import Header from '../components/Header'

const Home = () => {
  return (
    <>
     <div className='w-full h-full'>
        <div>
          <div className='absolute z-10 w-full h-full overflow-y-hidden'>
            <div className=" grid grid-rows-2">
              
              <div className="flex justify-end">
                <img className='w-48 h-48 md:w-64 md:h-64' src={topbg} alt=""></img>
              </div>
              
              <div className="flex items-end  pt-48 md:pt-32 ">
                <img className='w-48 h-48 md:w-64 md:h-64' src={bottombg} alt=""></img>
              </div>
            </div>
          </div>
          <div className="absolute z-20 w-full h-full">
              <div className=''>
                <div className='h-2/6'>
                  <Header />
                </div>
                <div className='h-4/6   grid md:grid-cols-2 m-4 md:m-0'>
                   <div className='h-full flex justify-center items-center '>
                      <div className='grid grid-rows-3 text-[#9D8189]  md:w-4/6'>
                        <div className='flex items-end'>
                          <h1 className='text-6xl mx-2'>ARCHIVE</h1>
                          <span><h1 className='text-3xl'>THE LIBRARY</h1></span>
                        </div>
                        <div className='flex justify-center mx-3'>
                          <h2 className='text-xl'>“Library - from the Latin liber, meaning "book." In Greek and the Romance languages, the corresponding term is bibliotheca. A collection or group of collections of books and/or other print or nonprint materials organized and maintained for use</h2>
                        </div>
                        <div className='flex items-start mx-3 my-2'>
                          <Link to='/Catalogue'>
                            <div className='bg-[#9D8189] rounded-lg'>
                              <h2 className='text-white text-2xl mx-4 '>Explore Catalogue</h2>
                            </div>
                          </Link>
                        </div>
                      </div>
                   </div>
                   <div className='hidden md:flex justify-center items-center '>
                    <div className='absolute z-10'>
                      <img className='md:w-5/6 md:h-5/6' src={centerbg} alt=""></img>
                    </div>
                    <div className=' z-20'>
                      <img className='md:w-5/6 md:h-5/6' src={fbook} alt=""></img>
                    </div>
                   </div>
                </div>
              </div>
          </div>
        </div>
     </div>
    </>
    
  )
}

export default Home