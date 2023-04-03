import React, { useEffect, useState, useMemo } from 'react';
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
      // console.log(data);
      setProducts(data);
    }
    fetchData();
  }, []);

  const contextValue = useMemo(() => (
    { products,
      setProducts }
  ), [products]);

  return (
    <DeliveryContext.Provider value={ contextValue }>
      {children}
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
