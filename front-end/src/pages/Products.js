import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import '../style/pages/Products.css';
import DeliveryContext from '../context/deliveryContext';
import CartContext from '../context/cartContext';

function Products() {
  const { products } = useContext(DeliveryContext);
  const { cartTotalValue } = useContext(CartContext);

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
        <button
          type="button"
          data-testid="customer_products__button-cart"
        >
          <p data-testid="customer_products__checkout-bottom-value">
            { Number(cartTotalValue).toFixed(2).toString().replace('.', ',') }
          </p>
        </button>
      </div>

    </div>
  );
}

export default Products;
