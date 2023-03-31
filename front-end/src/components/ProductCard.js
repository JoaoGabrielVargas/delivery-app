import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, route }) {
  return (
    <div className="products-cards">
      <div>
        <p data-testid={ `${route}__element-card-price-${id}` }>
          preço item
          {id}
        </p>
        <img data-testid={ `${route}__img-card-bg-image-${id}` } alt="img" />
      </div>
      <div>
        <p data-testid={ `${route}__element-card-title-${id}` }>
          {' '}
          nome
          {' '}
          {id}
          {' '}
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
  id: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};
