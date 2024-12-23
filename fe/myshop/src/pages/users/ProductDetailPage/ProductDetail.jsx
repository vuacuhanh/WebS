import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from '../../../cartcontext';
import "./productDetail.scss";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Lấy hàm thêm giỏ hàng từ Context

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Có lỗi khi lấy chi tiết sản phẩm:', error);
      });

    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setRelatedProducts(response.data);
      })
      .catch(error => {
        console.error('Có lỗi khi lấy sản phẩm liên quan:', error);
      });
  }, [id]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(`Đã thêm ${quantity} sản phẩm ${product.ProductName} vào giỏ hàng.`);
    }
  };

  const handleBuyNow = () => {
    alert(`Mua ngay ${quantity} sản phẩm ${product.ProductName}`);
  };

  if (!product) {
    return <div>Đang tải chi tiết sản phẩm...</div>;
  }

  const relatedProductsRow1 = relatedProducts.slice(0, 5);
  const relatedProductsRow2 = relatedProducts.slice(5, 10);

  return (
    <div className="product-detail container-fluid">
      <div className="product-container row">
        <div className="product-images col-md-5 ms-5">
          <img
            src={product.ImageUrl}
            alt={product.ProductName}
            className="main-image img-fluid"
          />
        </div>

        <div className="product-info col-md-6">
          <h1>{product.ProductName}</h1>
          <div className="price d-flex align-items-center gap-2">
            <span className="new-price text-danger fs-5 fw-bold">
              {parseFloat(product.Price).toLocaleString()} đ
            </span>
          </div>
          <div className="size-color mt-3">
            <p><strong>Size:</strong> {product.Size}</p>
            <p><strong>Color:</strong> {product.Color}</p>
          </div>
          <p className="description mt-3">{product.Description}</p>

          <div className="quality d-flex align-items-center mt-3">
            <div className="quality-text">Số lượng:</div>
            <button onClick={handleDecreaseQuantity} className="btn-decrease btn btn-secondary"> - </button>
            <span className="mx-3">{quantity}</span>
            <button onClick={handleIncreaseQuantity} className="btn-increase btn btn-secondary"> + </button>
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

      {/* Hiển thị sản phẩm liên quan */}
      <div className="related-products mt-5">
        <h2>CÓ THỂ BẠN QUAN TÂM</h2>
        <div className="row">
          <div className="col-md-12 ">
            <div className="row product-list">
              {relatedProductsRow1.map((item) => (
                <Link to={`/product/${item.ProductId}`} className="col-md-2 col-6 mb-4" key={item.ProductId}>
                  <div className="product-card">
                    <div className="bookmark"></div>
                    <img src={item.ImageUrl} alt={item.ProductName} className="product-image" />
                    <div className="product-info">
                      <p className="product-name">{item.ProductName}</p>
                      <div className="product-price">
                        <span className="new-price">{item.Price.toLocaleString()} đ</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row product-list">
              {relatedProductsRow2.map((item) => (
                <Link to={`/product/${item.ProductId}`} className="col-md-2 col-6 mb-4" key={item.ProductId}>
                  <div className="product-card">
                    <div className="bookmark"></div>
                    <img src={item.ImageUrl} alt={item.ProductName} className="product-image" />
                    <div className="product-info">
                      <p className="product-name">{item.ProductName}</p>
                      <div className="product-price">
                        <span className="new-price">{item.Price.toLocaleString()} đ</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
