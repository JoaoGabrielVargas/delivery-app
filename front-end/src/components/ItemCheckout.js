import React from 'react';
import PropTypes from 'prop-types';

export default function ItemCheckout({ item, index }) {
  const route = 'customer_checkout__';
  const { name, quantity, priceNumber, subTotal } = item;

  return (
    <tr className="item-checkout">
      <td data-testid={ `${route}element-order-table-item-number-${index}` }>
        { index + 1 }
      </td>
      <td data-testid={ `${route}element-order-table-name-${index}` }>
        { name }
      </td>
      <td data-testid={ `${route}element-order-table-quantity-${index}` }>
        { quantity }
      </td>
      <td data-testid={ `${route}element-order-table-unit-price-${index}` }>
        { Number(priceNumber).toFixed(2).toString().replace('.', ',') }
      </td>
      <td data-testid={ `${route}element-order-table-sub-total-${index}` }>
        { Number(subTotal).toFixed(2).toString().replace('.', ',') }
      </td>
      <td>
        <button
          type="button"
          data-testid={ `${route}element-order-table-remove-${index}` }
        >
          remover
        </button>
      </td>
    </tr>
  );
}

ItemCheckout.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subTotal: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    priceNumber: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
