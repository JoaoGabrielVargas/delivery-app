import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function OrderCard({ sale, route }) {
  const { id, totalPrice, status, saleDate, deliveryAddress } = sale;

  const isRouteSeller = route === 'seller_orders__';
  const { pathname } = useLocation();
  const page = pathname.split('/')[1];

  return (
    <a href={ `/${page}/orders/${id}` }>

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
        {
          isRouteSeller
        && <p data-testid={ `${route}element-card-price-${id}` }>{deliveryAddress}</p>
        }
      </div>
    </a>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    saleDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  route: PropTypes.string.isRequired,
};
