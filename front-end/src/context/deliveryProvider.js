import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DeliveryContext from './deliveryContext';

function DeliveryProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        'http://localhost:3001/products',
      );
      setProducts(data);
    }
    fetchData();
  }, []);

  const addLocalStorage = useCallback(() => {
    // const cart = cartItens;
    // console.log(cart);
    // const foundItem = cartItens.find((element) => element.id === id);
    // foundItem.quantity += quantity;
    // const productItem = {
    //   id,
    //   name,
    //   price,
    //   quantity,
    //   subTotal: price * quantity,
    // };
    // localStorage.setItem('cart', JSON.stringify([...cartItens, productItem]));
    console.log('olaaaaaa');
  }, []);

  const contextValue = useMemo(() => (
    {
      products,
      setProducts,
      addLocalStorage,
    }
  ), [products, addLocalStorage]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
