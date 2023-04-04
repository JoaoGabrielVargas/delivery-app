import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const addToCart = useCallback((item) => {
    // console.log(cartItems);
    const { priceNumber, quantity } = item;
    console.log(priceNumber * quantity);
    // const subTotal = (priceNumber * quantity.toFixed(2));
    const invalidIndex = -1;
    const existingItemIndex = cartItems.findIndex((i) => i.name === item.name);
    if (existingItemIndex !== invalidIndex) {
      const updatedCart = cartItems;
      console.log(updatedCart);
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].subTotal = Number((priceNumber
        * parseInt(quantity, 10)).toFixed(2));
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      setCartItems([...cartItems, {
        ...item, quantity: 1, subTotal: priceNumber,
      }]);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const removeFromCart = useCallback((name) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
  }, [cartItems]);

  const setQuant = useCallback((name, quantity) => {
    const updatedCart = cartItems
      .map((item) => (item.name === name ? { ...item, quantity } : item));
    setCartItems(updatedCart);
  }, [cartItems]);

  const cartTotal = cartItems
    .reduce((total, item) => total + item.quantity * item.price, 0);

  const contextValue = useMemo(() => (
    {
      cartItems,
      addToCart,
      removeFromCart,
      setQuant,
      cartTotal,
      setCartItems,
    }
  ), [cartItems, addToCart, removeFromCart, setQuant, cartTotal, setCartItems]);

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
