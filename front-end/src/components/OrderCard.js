import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

export default function OrderCard({ sale }) {
  const { id, totalPrice, status, saleDate } = sale;

  const route = 'customer_orders__';
  const history = useHistory();
  const formatDate = moment(saleDate).format('DD/MM/YYYY');

  return (
    <button
      type="button"
      onClick={ () => history.push(`/customer/orders/${id}`) }
    >
      <div className="order-cards">
        <p data-testid={ `${route}element-order-id-${id}` }>
          {id}
        </p>
        <p
          data-testid={ `${route}element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          data-testid={ `${route}element-order-date-${id}` }
        >
          {formatDate}
        </p>
        <p
          data-testid={ `${route}element-card-price-${id}` }
        >
          {totalPrice}
        </p>
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  totalPrice: PropTypes.string,
  status: PropTypes.string,
  saleDate: PropTypes.instanceOf(Date),
}.isRequired;
