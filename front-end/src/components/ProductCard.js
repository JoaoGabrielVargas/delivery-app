import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/cartContext';

export default function ProductCard({ products, route }) {
  const { name, price, urlImage, id } = products;
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart, setQuant, cartTotal } = useContext(CartContext);

  const addButton = () => {
    setQuantity(quantity + 1);
    const priceNumber = Number(price);
    addToCart({ name, priceNumber, id, quantity });
  };
  const rmButton = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const manualChange = (e) => {
    if (Number(e.target.value) >= 0) setQuantity(Number(e.target.value));
  };

  return (
    <div className="products-cards">
      <div>
        <p data-testid={ `${route}__element-card-price-${id}` }>
          { price.replace('.', ',') }
        </p>
        <img
          data-testid={ `${route}__img-card-bg-image-${id}` }
          alt="img"
          src={ urlImage }
        />
      </div>
      <div>
        <p data-testid={ `${route}__element-card-title-${id}` }>
          { name }
        </p>
        <div>
          <button
            type="button"
            data-testid={ `${route}__button-card-rm-item-${id}` }
            onClick={ rmButton }
          >
            -
          </button>
          <input
            data-testid={ `${route}__input-card-quantity-${id}` }
            value={ quantity }
            onChange={ manualChange }
          />
          <button
            type="button"
            data-testid={ `${route}__button-card-add-item-${id}` }
            onClick={ addButton }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  route: PropTypes.string.isRequired,
};
