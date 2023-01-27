import React from 'react'

import topbg from '../assets/top-deco.png'
import bottombg from '../assets/bottom-deco.png'
import Header from '../components/Header'

const Catalogue = () => {
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="absolute z-10 w-full h-full overflow-y-hidden">
            <div className=" grid grid-rows-2">
              <div className="flex justify-end">
                <img
                  className="w-48 h-48 md:w-64 md:h-64"
                  src={topbg}
                  alt=""
                ></img>
              </div>

              <div className="flex items-end  pt-48 md:pt-32 ">
                <img
                  className="w-48 h-48 md:w-64 md:h-64"
                  src={bottombg}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="absolute z-20 w-full h-full">
            <div className="">
              <div className="h-2/">
                <Header />
              </div>
              <div className="h-4/6 flex  p-4">
                Catalogue
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalogue