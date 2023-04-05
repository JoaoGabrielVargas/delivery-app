import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/cartContext';

export default function ProductCard({ products, route }) {
  const { name, price, urlImage, id } = products;
  const [quant, setQuant] = useState(0);
  // const [cartTotal, setQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);
  const priceNumber = Number(price);
  let quantity = 0; // observar se nos próximos requisitos isso vai influenciar, já que zera a variável nas renderizações

  const addButton = () => {
    quantity = quant;
    quantity += 1;
    setQuant(quantity);
    addToCart({ name, priceNumber, id, quantity });
  };
  const rmButton = () => {
    if (quant > 0) {
      quantity = quant;
      quantity -= 1;
      setQuant(quantity);
      addToCart({ name, priceNumber, id, quantity });
    }
  };
  const manualChange = (e) => {
    if (Number(e.target.value) >= 0) {
      quantity = Number(e.target.value);
      console.log(Number(e.target.value));
      setQuant(quantity);
      addToCart({ name, priceNumber, id, quantity });
    }
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
            value={ quant }
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
