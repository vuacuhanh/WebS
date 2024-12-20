import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Product.scss";
import { Link } from 'react-router-dom';
export const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Sử dụng CategoryId thay vì CategoryName

  useEffect(() => {
    // Lấy danh sách sản phẩm
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data); 
      })
    axios.get('http://localhost:3001/api/categories')
      .then(response => {
        setCategories(response.data); 
      })
  }, []);

  // Lọc sản phẩm theo CategoryId
  const filteredProducts = selectedCategory === null
    ? products
    : products.filter((product) => product.CategoryId === selectedCategory);

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
              {/* Danh sách danh mục */}
              {categories.map((category) => (
                <li
                  key={category.CategoryId}
                  className={`menu-item ${selectedCategory === category.CategoryId ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category.CategoryId)} // Sử dụng CategoryId khi chọn
                >
                  {category.CategoryName}
                </li>
              ))}
              {/* Thêm mục "Tất cả" */}
              <li
                className={`menu-item ${selectedCategory === null ? "active" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                Tất cả
              </li>
            </ul>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.ProductId}`} className="col-md-3 col-6 mb-4" key={product.ProductId}>
                <div className="product-card">
                  {/* Bookmark */}
                  <div className="bookmark"></div>

                  {/* Hình ảnh */}
                  <img src={product.ImageUrl} alt={product.ProductName} className="product-image" />

                  {/* Nội dung */}
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
        </div>
      </div>
    </div>
  );
};
