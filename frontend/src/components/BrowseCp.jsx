import React from 'react'
import Book from './Book';




const BrowseCp = (props) => {
  return (
    <>
      <div className="justify-center m-4">
        <div className="text-[#9D8189] text-3xl font-semibold">
          <h2>{props.name}</h2>
        </div>
        <div className="text-[#9D8189] text-xl font-semibold">
          <h2>{props.desc}</h2>
        </div>
        <div className="grid md:grid-cols-6 gap-2 ">
          {props.datas.map((data) => (
            <Book book={data} />
            
            
          ))}
          
        </div>
      </div>
    </>
  );
}

export default BrowseCp