import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import axios from 'axios';


const BottomHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
        console.log(response.data);
      };
      fetchCategories();
      
    } catch (error) {
      console.log(`error:  ${error}`);
      
    }
  }, []);

  return (
    <div className="bottom-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div className="catgeory-btn">
              <IoMenu />
              <p>Browse Categories</p>
              <FaArrowDown />
            </div>
            <div className="catgeory-nav-list"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default BottomHeader
