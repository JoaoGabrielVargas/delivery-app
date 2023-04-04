import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../style/pages/Products.css';
import DeliveryContext from '../context/deliveryContext';

function Products() {
  const { products, cart } = useContext(DeliveryContext);

  return (
    <div className="products-container">
      <Header />
      <div className="card-container">
        {
          products.map((el) => (<ProductCard
            key={ el.index }
            products={ el }
            route="customer_products"
          />))
        }
      </div>

    </div>
  );
}

export default Products;
