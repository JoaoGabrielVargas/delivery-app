import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../style/pages/Products.css';

function Products() {
  const idMock = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  return (
    <div className="products-container">
      <Header />
      <div className="card-container">
        {
          idMock.map((el) => (<ProductCard
            key={ el }
            id={ el }
            route="customer_products"
          />))
        }
      </div>

    </div>
  );
}

export default Products;
