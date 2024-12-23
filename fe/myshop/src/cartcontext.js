import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex((item) => item.ProductId === product.ProductId);
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += quantity;
        return updatedItems;
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (ProductId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ProductId !== ProductId));
  };

  const decreaseQuantity = (ProductId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductId === ProductId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const increaseQuantity = (ProductId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.ProductId === ProductId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng sản phẩm trong giỏ hàng

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
