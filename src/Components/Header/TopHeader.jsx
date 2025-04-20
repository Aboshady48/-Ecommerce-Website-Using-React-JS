
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { PiShoppingCartSimple } from "react-icons/pi";
import './Header.css'

const TopHeader = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  return (
    <div className="top-header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}><span>Aboshady</span> E-commerce Store</Link>
        </div>
        
        <div className={`search-box-container ${isSearchExpanded ? 'expanded' : ''}`}>
          <form action="" className="search-box">
            <input type="text" name='search' id='search' placeholder='Search for products' />
            <button type='submit'><FiSearch/></button>
          </form>
          <button 
            className="mobile-search-toggle" 
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
          >
            <FiSearch/>
          </button>
        </div>

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