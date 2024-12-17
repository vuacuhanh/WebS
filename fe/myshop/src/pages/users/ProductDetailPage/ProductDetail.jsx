import React, { useState } from "react";
import "./productDetail.scss";

export const ProductDetail = () => {
  const product = {
    id: 1,
    name: "Áo Polo No Style 78 Vol 24 Đen",
    priceOld: 197000,
    priceNew: 147000,
    sizes: [
      { size: "S", stock: 43 },
      { size: "M", stock: 43 },
      { size: "L", stock: 43 },
      { size: "XL", stock: 42 },
    ],
    description: `Áo Polo thời trang ngắn tay, thiết kế thanh lịch, phù hợp trong nhiều hoàn cảnh. Chất liệu cao cấp co giãn 4 chiều, thoáng mát và mềm mịn.`,
    features: [
      "Thoáng mát, ít nhăn và bền màu.",
      "Co giãn 4 chiều, thoải mái khi vận động.",
      "Chất liệu 61% Polyester, 39% Cotton.",
    ],
    images: [
      "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
      "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
    ],
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Áo Polo Tay Ngắn Pique",
      price: 177000,
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
    },
    {
      id: 3,
      name: "Áo thun",
      price: 177000,
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
    },
    {
      id: 4,
      name: "Áo Polo Nam Màu Be",
      price: 177000,
      image: "https://product.hstatic.net/1000096703/product/1_52417c772bfd430cb64541d09dc9903c_master.jpg",
    },
  ];

  const [quantity, setQuantity] = useState(1); // Trạng thái cho số lượng sản phẩm
  const [selectedSize, setSelectedSize] = useState(""); // Trạng thái cho kích cỡ

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    // Logic thêm vào giỏ hàng
    alert(`Đã thêm ${quantity} sản phẩm ${product.name} vào giỏ hàng`);
  };

  const handleBuyNow = () => {
    // Logic mua ngay
    alert(`Mua ngay ${quantity} sản phẩm ${product.name}`);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="product-detail container-fluid">
      {/* Phần chính - ảnh và thông tin */}
      <div className="product-container row">
        <div className="product-images col-md-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="main-image img-fluid"
          />
          <div className="thumbnail-images d-flex gap-2 mt-2">
            {product.images.map((image, index) => (
              <img key={index} src={image} alt="thumbnail" className="img-thumbnail" />
            ))}
          </div>
        </div>

        <div className="product-info col-md-6">
          <h1>{product.name}</h1>
          <div className="price d-flex align-items-center gap-2">
            <span className="old-price text-decoration-line-through text-muted">
              {product.priceOld.toLocaleString()} đ
            </span>
            <span className="new-price text-danger fs-5 fw-bold">
              {product.priceNew.toLocaleString()} đ
            </span>
          </div>
          <ul className="product-features">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="sizes mt-3">
            <p>Size:</p>
            {product.sizes.map((size) => (
              <span
                key={size.size}
                className={`size-option btn btn-outline-secondary me-2 ${
                  size.stock === 0 ? "out-of-stock" : ""} ${
                  selectedSize === size.size ? "selected" : ""}`}
                onClick={() => handleSizeChange(size.size)}
              >
                {size.size} ({size.stock > 0 ? `${size.stock} Cửa hàng` : "Hết hàng"})
              </span>
            ))}
          </div>
          <p className="description mt-3">{product.description}</p>

          {/* Tăng giảm số lượng */}
          <div className="quality d-flex align-items-center mt-3">
            <button onClick={handleDecreaseQuantity} className="btn-decrease btn btn-secondary">
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button onClick={handleIncreaseQuantity} className="btn-increase btn btn-secondary">
              +
            </button>
          </div>
          <div className="Buy d-flex gap-3 mt-4">
            <button className="btn-addToCart btn btn-success" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </button>
            <button className="btn-buy btn btn-warning" onClick={handleBuyNow}>
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      {/* Sản phẩm gợi ý */}
      <div className="related-products mt-5">
        <h2>CÓ THỂ BẠN QUAN TÂM</h2>
        <div className="product-list d-flex gap-4">
          {relatedProducts.map((item) => (
            <div key={item.id} className="related-product-item text-center">
              <img src={item.image} alt={item.name} className="img-fluid rounded mb-2" />
              <p>{item.name}</p>
              <span className="price text-danger">{item.price.toLocaleString()} đ</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
