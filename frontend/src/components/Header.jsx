import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Header = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 m-8">
        <Navbar />
        <Search />
      </div>
    </>
  );
}

export default Header