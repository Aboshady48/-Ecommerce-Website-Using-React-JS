
import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Accessories", path: "/accessories" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];  

const BottomHeader = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.log(`error: ${error}`);
        setLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.category-nav') && categoryMenuOpen) {
        setCategoryMenuOpen(false);
      }
      if (!event.target.closest('.mobile-menu-toggle') && 
          !event.target.closest('.nav-links') && 
          mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [categoryMenuOpen, mobileMenuOpen]);

  return (
    <div className="bottom-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div
              className="category-btn"
              onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
            >
              <IoMenu />
              <p>Browse Categories</p>
              <FaArrowDown className={categoryMenuOpen ? "rotate" : ""} />
            </div>

            <div
              className={`category-nav-list ${categoryMenuOpen ? "show" : ""}`}
              >
              {loading ? (
                <p className="loading">Loading...</p>
              ) : categories.length > 0 ? (
                categories.map((category, index) => (
                  <div className="category" key={index}>
                    <Link
                      to={`/category/${category.slug
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      {category.name}
                    </Link>
                  </div>
                ))
              ) : (
                <p className="no-categories">No categories found</p>
              )}
            </div>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <IoMenu />
            <span>Menu</span>
          </button>

          <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            {navLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="sign-register-icons">
          <Link to="/login" aria-label="Sign In">
            <FaSignInAlt />
          </Link>
          <Link to="/register" aria-label="Register">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader