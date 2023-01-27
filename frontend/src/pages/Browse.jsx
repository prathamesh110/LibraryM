import React from 'react'
import topbg from "../assets/top-deco.png";


import Shelf from "../components/Shelf";
import Header from "../components/Header";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/Book4.png";
import book5 from "../assets/Book5.png";
import BrowseCp from '../components/BrowseCp';

const data = [
    {
      id: 1,
      title: "Unseen World",
      pages: "501",
      image: book1
    },
    {
      id: 2,
      title: "Book To Space",
      pages: "200",
      image: book2
    }
  ]
  
  const data2 = [
    {
      id: 3,
      title: "Enemy",
      pages: "300",
      image: book3,
    },
    {
      id: 4,
      title: "Sensitive",
      pages: "250",
      image: book4,
    },
    {
      id: 5,
      title: "The Atlas",
      pages: "200",
      image: book5,
    },
  ];
  
  

const Browse = () => {
  return (
    <>
    <div className="w-full h-full">
      <div>
        <div className="absolute z-10 w-full h-full ">
          <div className=" grid grid-rows-2">
            <div className="flex justify-end">
              <img
                className="w-48 h-48 md:w-64 md:h-64"
                src={topbg}
                alt=""
              ></img>
            </div>

            {/* <div className="flex items-end  pt-48 md:pt-32 pl-80 ">
              <img
                className="w-48 h-48 md:w-64 md:h-64"
                src={bottombg}
                alt=""
              ></img>
            </div> */}
          </div>
        </div>
        <div className="absolute z-20 w-full h-full">
          <div className="">
            <div className="h-2/6">
              <Header />
            </div>
            <div className="h-4/6 p-8">
              <div className="grid grid-row-3 m-4">
                <BrowseCp name={"Trending"} desc={"currently popular or widely discussed online, especially on social media."} datas={data} />
                <BrowseCp name={"Best Sellers"} desc={"a book  that sells in very large numbers."} datas={data2} />
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Browse