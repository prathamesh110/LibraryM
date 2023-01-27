import React from 'react'
import heart from "../assets/heart.png";
import star from "../assets/Star.png";

const Book = (props) => {
  return (
    <>
     <div className="m-6 cursor-pointer">
            <div className="h-[75%] object-cover">
              <img
                className="rounded-tr-lg w-full h-full"
                src={props.book.image}
                alt=""
              ></img>
            </div>
            <div className="h-[25%] bg-[#9D8189] flex p-2 rounded-br-2xl">
              <div className="w-4/6">
                <div className="h-2/6">
                  <h2 className="text-white ">{props.book.title}</h2>
                </div>
                <div className="h-2/6">
                  <h2 className="text-white h-2/6">{props.book.pages} page</h2>
                </div>
                <div className="flex h-2/6">
                  <div className="m-1">
                    <img src={star} alt=""></img>
                  </div>
                  <div className="">
                    <h2 className="text-white">4.1</h2>
                  </div>
                </div>
              </div>
              <div className="w-2/6 justify-center items-end flex">
                <div className="">
                  <img src={heart} alt=""></img>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Book