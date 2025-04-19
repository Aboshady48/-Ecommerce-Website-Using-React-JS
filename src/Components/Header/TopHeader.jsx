import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";
import './Header.css'


const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <Link to={"/"}><span>Aboshady</span> E-commerce Store</Link>
        <form action="" className="search-box">
          <input type="text" name='search' id='search' placeholder='search for products' />
          <button type='submit'><FiSearch/></button>
        </form>

        <div className="header-icons">
          <div className="icon">
          <GoHeart />
          <span className='count'>0</span>
          </div>

          <div className="icon">
          <PiShoppingCartSimple />
          <span className='count'>0</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopHeader
