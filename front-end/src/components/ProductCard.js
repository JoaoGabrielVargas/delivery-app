import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ products, route }) {
  const { name, price, urlImage, id } = products;
  // console.log(products);
  return (
    <div className="products-cards">
      <div>
        <p data-testid={ `${route}__element-card-price-${id}` }>
          preço
          {price}
        </p>
        <img
          data-testid={ `${route}__img-card-bg-image-${id}` }
          alt="img"
          src={ urlImage }
        />
      </div>
      <div>
        <p data-testid={ `${route}__element-card-title-${id}` }>
          {name}
        </p>
        <div>
          <button
            type="button"
            data-testid={ `${route}__button-card-rm-item-${id}` }
          >
            -
          </button>
          <input data-testid={ `${route}__input-card-quantity-${id}` } />
          <button
            type="button"
            data-testid={ `${route}__button-card-add-item-${id}` }
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
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  route: PropTypes.string.isRequired,
};
