import React from 'react'
import Book from './Book';




const Shelf = (props) => {
  return (
    <>
      <div className="justify-center m-4">
        <div className="text-[#9D8189] text-3xl">
          <h2>{props.name}</h2>
        </div>
        <div className="text-[#9D8189] text-xl">
          <h2>{props.name}</h2>
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

export default Shelf