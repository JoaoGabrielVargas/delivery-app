import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ sale }) {
  const { id, totalPrice, status, saleDate } = sale;

  const route = 'customer_orders__';

  return (
    <div className="order-cards">
      <p data-testid={ `${route}element-order-id-${id}` }>
        { id }
      </p>
      <p
        data-testid={ `${route}element-delivery-status-${id}` }
      >
        { status }
      </p>
      <p
        data-testid={ `${route}element-order-date-${id}` }
      >
        { saleDate }
      </p>
      <p
        data-testid={ `${route}element-card-price-${id}` }
      >
        { totalPrice }
      </p>

    </div>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
