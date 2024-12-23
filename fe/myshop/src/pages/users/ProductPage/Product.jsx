import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Product.scss";
import { Link } from 'react-router-dom';

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16; // Số lượng sản phẩm trên mỗi trang

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
      });
    axios.get('http://localhost:3001/api/categories')
      .then(response => {
        setCategories(response.data);
      });
  }, []);

  const filteredProducts = selectedCategory === null
    ? products
    : products.filter((product) => product.CategoryId === selectedCategory);

  // Tính toán các sản phẩm hiển thị trong trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Tính toán tổng số trang
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Chuyển sang trang mới
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid container-xxl">
      <div className="row">
        <div className="col-12 m-3">Sản phẩm</div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="menu">
            <h5 className="menu-title">Danh Mục</h5>
            <ul className="menu-list">
              {categories.map((category) => (
                <li
                  key={category.CategoryId}
                  className={`menu-item ${selectedCategory === category.CategoryId ? "active" : ""}`}
                  onClick={() => { setSelectedCategory(category.CategoryId); setCurrentPage(1); }}
                >
                  {category.CategoryName}
                </li>
              ))}
              <li
                className={`menu-item ${selectedCategory === null ? "active" : ""}`}
                onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
              >
                Tất cả
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="row">
            {currentProducts.map((product) => (
              <Link to={`/product/${product.ProductId}`} className="col-md-3 col-6 mb-4" key={product.ProductId}>
                <div className="product-card">
                  <div className="bookmark"></div>
                  <img src={product.ImageUrl} alt={product.ProductName} className="product-image" />
                  <div className="product-info">
                    <p className="product-name">{product.ProductName}</p>
                    <div className="product-price">
                      <span className="new-price">{product.Price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Nút phân trang */}
          <div className="page  ">
            <div className="page">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="page-item"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="page-item"
            >
              &gt;
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
