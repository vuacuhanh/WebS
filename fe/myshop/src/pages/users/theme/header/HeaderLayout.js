import React, { useState } from "react";
import "./Header.scss";
import { ROUTERS } from "../../../../utils/routers";
import { Link } from "react-router-dom";

export const HeaderLayout = () => {
  const [activeMenu, setActiveMenu] = useState("Home"); // Quản lý menu đang active

  const menus = [
    { name: "Home", path: ROUTERS.USER.HOME },
    { name: "About", path: ROUTERS.USER.ABOUT },
    { name: "Services", path: ROUTERS.USER.SERVICES },
    { name: "Features", path: ROUTERS.USER.FEATURES },
    { name: "Pricing", path: ROUTERS.USER.PRICING },
    {
      name: "Dropdown",
      path: "#",
      isDropdown: true,
      submenus: [
        { name: "Dropdown 1", path: ROUTERS.USER.DROPDOWN1 },
        {
          name: "Deep Dropdown",
          path: "#",
          isDropdown: true,
          submenus: [
            { name: "Deep Dropdown 1", path: ROUTERS.USER.DEEP_DROPDOWN1 },
            { name: "Deep Dropdown 2", path: ROUTERS.USER.DEEP_DROPDOWN2 },
          ],
        },
        { name: "Dropdown 2", path: ROUTERS.USER.DROPDOWN2 },
      ],
    },
    { name: "Contact", path: ROUTERS.USER.CONTACT },
  ];

  const renderMenu = (menu) => {
    if (menu.isDropdown) {
      return (
        <li key={menu.name} className="dropdown">
          <a href={menu.path} onClick={(e) => e.preventDefault()}>
            <span>{menu.name}</span>
            <i className="bi bi-chevron-down toggle-dropdown"></i>
          </a>
          <ul>
            {menu.submenus?.map((submenu) => renderMenu(submenu))}
          </ul>
        </li>
      );
    }
    return (
      <li
        key={menu.name}
        className={`menu-item ${
          activeMenu === menu.name ? "active" : ""
        } ${menu.name === "Home" ? "home-active" : ""}`}
        onClick={() => setActiveMenu(menu.name)}
      >
        <Link to={menu.path}>{menu.name}</Link>
      </li>
    );
  };

  return (
    <header id="header" className="header d-flex flex-column sticky-top">
      <div className="container-fluid container-xxl d-flex flex-column">
        {/* Top Section */}
        <div className="top-section d-flex justify-content-end">
          <ul className="d-flex list-unstyled">
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="middle-section d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1 className="sitename">
              <span>e</span>Startup
            </h1>
          </Link>
          <div className="search-bar d-flex align-items-center">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Tìm kiếm ..."
              aria-label="Search"
            />
            <i className="bi bi-search search-icon"></i>
          </div>
          <div className="shopping-cart">
            <i className="bi bi-cart-fill cart-icon"></i>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav id="navmenu" className="navmenu d-flex justify-content-center">
          <ul>{menus?.map((menu) => renderMenu(menu))}</ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default HeaderLayout;
