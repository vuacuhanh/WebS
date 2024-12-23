import React, { useState } from "react";
import { useCart } from "../../../cartcontext";
import "./ShoppingCart.scss";

export const ShoppingCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

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

        {cartItems.length === 0 ? (
          <div className="text-center mt-5">
            <img src="https://aillavietnam.com/assets/images/no-cart.png" alt="No cart" />
            <h4 className="text-muted">Giỏ hàng của bạn đang trống</h4>
            <button className="btn btn-primary mt-3">Mua sắm ngay</button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="row cart-header fw-bold text-center mt-4">
              <div className="col-1">Chọn</div>
              <div className="col-3">Sản Phẩm</div>
              <div className="col-2">Đơn Giá</div>
              <div className="col-2">Số Lượng</div>
              <div className="col-2">Số Tiền</div>
              <div className="col-2">Thao Tác</div>
            </div>

            {/* Danh sách sản phẩm */}
            {cartItems.map((item) => (
                <div className="row cart-item text-center align-items-center mt-3" key={item.ProductId}>
                  <div className="col-1">
                    <input
                      type="checkbox"
                      onChange={() => handleSelect(item.ProductId)}
                      checked={selectedItems.includes(item.ProductId)}
                    />
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <img
                      src={item.ImageUrl}
                      alt={item.ProductName}
                      className="img-thumbnail me-2"
                    />
                    <p className="m-0">{item.ProductName}</p>
                  </div>
                  <div className="col-2">
                    <div className="text-muted text-decoration-line-through">
                      {item.priceOld ? item.priceOld.toLocaleString() : 'N/A'} đ
                    </div>
                    <div className="text-danger fw-bold">
                      {item.Price ? item.Price.toLocaleString() : 'N/A'} đ
                    </div>
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decreaseQuantity(item.ProductId)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => increaseQuantity(item.ProductId)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-2 fw-bold">
                    {(item.Price && item.quantity) ? (item.Price * item.quantity).toLocaleString() : 'N/A'} đ
                  </div>
                  <div className="col-2">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(item.ProductId)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))
            }




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
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
