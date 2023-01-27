import React from 'react'
import book1 from "../assets/book1.png";
import heart from "../assets/heart.png";
import star from "../assets/Star.png";

const Shelf = (props) => {
  return (
    <>
      <div className="justify-center m-4">
        <div className="text-[#9D8189] text-3xl">
          <h2>{props.name}</h2>
        </div>
        <div className="grid md:grid-cols-6 gap-2 ">
          <div className="m-6 cursor-pointer">
            <div className="h-[75%] object-cover">
              <img
                className="rounded-tr-lg w-full h-full"
                src={book1}
                alt=""
              ></img>
            </div>
            <div className="h-[25%] bg-[#9D8189] flex p-2 rounded-br-2xl">
              <div className="w-4/6">
                <div className="h-2/6">
                  <h2 className="text-white ">Unseen World</h2>
                </div>
                <div className="h-2/6">
                  <h2 className="text-white h-2/6">560 page</h2>
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
        </div>
      </div>
    </>
  );
}

export default Shelf