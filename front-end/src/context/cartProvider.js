import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState(0);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const sumCart = (array) => {
    const sum = array.reduce((acc, { subTotal }) => acc + subTotal, 0);
    setCartTotalValue(sum);
    return sum;
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((item) => {
    const { priceNumber, quantity } = item;
    const invalidIndex = -1;
    const itemIndex = cartItems.findIndex((i) => i.name === item.name);
    if (itemIndex !== invalidIndex) {
      const updatedCart = cartItems;
      updatedCart[itemIndex].quantity = quantity;
      updatedCart[itemIndex].subTotal = Number((priceNumber
        * parseInt(quantity, 10)).toFixed(2));
      setCartItems(updatedCart);
      sumCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      const newItem = [...cartItems, {
        ...item, quantity, subTotal: priceNumber * quantity,
      }];
      setCartItems(newItem);
      sumCart(newItem);
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

  const contextValue = useMemo(() => (
    {
      cartItems,
      addToCart,
      removeFromCart,
      setQuant,
      setCartItems,
      cartTotalValue,
      setCartTotalValue,
    }
  ), [
    cartItems,
    addToCart,
    removeFromCart,
    setQuant,
    setCartItems,
    cartTotalValue,
    setCartTotalValue,
  ]);

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
