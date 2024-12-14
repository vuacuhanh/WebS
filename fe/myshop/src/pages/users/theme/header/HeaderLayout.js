import React from 'react';
import "./Header.scss"

export const HeaderLayout = () => {
  return (
    <header id="header" className="header d-flex flex-column sticky-top">
      <div className="container-fluid container-xxl d-flex flex-column">
        {/* Top Section */}
        <div className="top-section d-flex justify-content-end">
          <ul className="d-flex list-unstyled">
            <li><a href="/login" className="nav-link">Login</a></li>
            <li><a href="/register" className="nav-link">Register</a></li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="middle-section d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <h1 className="sitename"><span>e</span>Startup</h1>
          </a>
          <div className="search-bar d-flex align-items-center">
            <input 
              type="text" 
              className="form-control search-input" 
              placeholder="Tìm kiếm ..." 
              aria-label="Search" 
            />
            <i className="bi bi-search search-icon"></i>
          </div>
          {/* Shopping Cart Icon */}
          <div className="shopping-cart">
            <i className="bi bi-cart-fill cart-icon"></i>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu d-flex justify-content-center">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLayout;
