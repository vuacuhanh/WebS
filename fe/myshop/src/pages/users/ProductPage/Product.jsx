import React, { useState } from "react";
import "./Product.scss";

export const Product = () => {
  const allProducts = [
    {
      id: 1,
      category: "Áo Polo",
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      name: "Áo Polo Dáng Vừa Tay Ngắn No Style 78 Vol 24",
      price: 147,
      oldPrice: 197,
      label: "Giá tốt",
    },
    {
      id: 2,
      category: "Quần Thun",
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      name: "Quần Thun Dài Nam Basic",
      price: 177,
    },
    {
      id: 3,
      category: "Đồ Nam",
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      name: "Áo Polo Dáng Vừa Tay Ngắn Cool Touch 06 Vol 24",
      price: 287,
    },
    {
      id: 4,
      category: "Đồ Nữ",
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      name: "Áo Nữ Form Rộng Tay Ngắn Mới 2024",
      price: 287,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const categories = ["Tất cả", "Áo Polo", "Quần Thun", "Đồ Nam", "Đồ Nữ"];

  // Lọc sản phẩm theo danh mục
  const filteredProducts =
    selectedCategory === "Tất cả"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="container-fluid container-xxl">
      <div className="row">
        <div className="col-12 m-3">Sản phẩm</div>
      </div>
      <div className="row">
        {/* Sidebar menu */}
        <div className="col-md-3">
          <div className="menu">
            <h5 className="menu-title">Danh Mục</h5>
            <ul className="menu-list">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`menu-item ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div className="col-md-3 col-6 mb-4" key={product.id}>
                <div className="product-card">
                  {/* Bookmark */}
                  <div className="bookmark"></div>

                  {/* Hình ảnh */}
                  <img src={product.image} alt={product.name} className="product-image" />

                  {/* Nội dung */}
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <div className="product-price">
                      {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                      <span className="new-price">{product.price}</span>
                      {product.label && <span className="label">{product.label}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
