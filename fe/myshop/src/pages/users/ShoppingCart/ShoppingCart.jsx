import React, { useState } from "react";
import "./ShoppingCart.scss";

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nước Giặt OMO Matic túi 3.6Kg | 4.1Kg Nước Giặt Vải OMO Matic",
      image: "https://via.placeholder.com/80",
      priceOld: 240000,
      priceNew: 224000,
      quantity: 1,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  // Hàm tăng số lượng
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Hàm giảm số lượng
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Hàm xóa sản phẩm
  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Hàm chọn sản phẩm
  const handleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Tính tổng tiền
  const totalAmount = cartItems.reduce(
    (total, item) =>
      selectedItems.includes(item.id) ? total + item.priceNew * item.quantity : total,
    0
  );

  return (
    <div className="shopping container-fluid">
        <div className="container shopping-container">
        <h2>Giỏ Hàng</h2>
        <div className="row cart-header fw-bold text-center mt-4">
            <div className="col-1">Chọn</div>
            <div className="col-3">Sản Phẩm</div>
            <div className="col-2">Đơn Giá</div>
            <div className="col-2">Số Lượng</div>
            <div className="col-2">Số Tiền</div>
            <div className="col-2">Thao Tác</div>
        </div>

        {cartItems.map((item) => (
            <div className="row cart-item text-center align-items-center mt-3" key={item.id}>
            <div className="col-1">
                <input
                type="checkbox"
                onChange={() => handleSelect(item.id)}
                checked={selectedItems.includes(item.id)}
                />
            </div>
            <div className="col-3 d-flex align-items-center">
                <img src={item.image} alt={item.name} className="img-thumbnail me-2" />
                <p className="m-0">{item.name}</p>
            </div>
            <div className="col-2">
                <div className="text-muted text-decoration-line-through">
                {item.priceOld.toLocaleString()} đ
                </div>
                <div className="text-danger fw-bold">{item.priceNew.toLocaleString()} đ</div>
            </div>
            <div className="col-2">
                <button
                className="btn btn-outline-secondary btn-sm me-2"
                onClick={() => handleDecrease(item.id)}
                >
                -
                </button>
                <span>{item.quantity}</span>
                <button
                className="btn btn-outline-secondary btn-sm ms-2"
                onClick={() => handleIncrease(item.id)}
                >
                +
                </button>
            </div>
            <div className="col-2 fw-bold">
                {(item.priceNew * item.quantity).toLocaleString()} đ
            </div>
            <div className="col-2">
                <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleDelete(item.id)}
                >
                Xóa
                </button>
            </div>
            </div>
        ))}

        {/* Voucher và phí vận chuyển */}
        <div className="voucher-section mt-4">
            <p>
            Voucher giảm đến ₫1k{" "}
            <span className="text-primary" style={{ cursor: "pointer" }}>
                Xem thêm voucher
            </span>
            </p>
            <p>Giảm ₫300.000 phí vận chuyển đơn tối thiểu ₫0</p>
        </div>

            {/* Tổng thanh toán */}
            <div className="row checkout border-top py-3 mt-3">
                <div className="col-4">
                <input type="checkbox" /> Chọn Tất Cả ({cartItems.length})
                </div>
                <div className="col-3 text-end fw-bold">
                Tổng thanh toán ({selectedItems.length} sản phẩm):
                </div>
                <div className="col-2 text-danger fw-bold">
                {totalAmount.toLocaleString()} đ
                </div>
                <div className="col-3 text-end">
                <button className="btn btn-danger">Mua Hàng</button>
                </div>
            </div>
        </div>
        
    </div>
    
  );
};

export default ShoppingCart;
