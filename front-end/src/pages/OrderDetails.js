import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';

function OrderDetails() {
  const { id } = useParams();
  console.log(id);

  /*  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3001/sales/details/${id}`);
      console.log(data);
    }
    fetchData();
  }, [id]); */

  const { pathname } = useLocation();
  const page = pathname.split('/')[1];
  let route = '';
  if (page === 'seller') {
    route = 'seller_order_details__';
  } else {
    route = 'customer_order_details__';
  }
  return (
    <div>
      <NavBar />
      <div className="order-cards">
        <p data-testid={ `${route}element-order-details-label-order-id` }>
          id
        </p>
        <p
          data-testid={ `${route}element-order-details-label-order-date` }
        >
          data
        </p>
        <p
          data-testid={ `${route}element-order-details-label-delivery-status` }
        >
          status
        </p>
        <button
          type="button"
          data-testid={ `${route}button-preparing-check` }
        >
          PREPARAR PEDIDO
        </button>
        <button
          type="button"
          data-testid={ `${route}button-dispatch-check` }
        >
          SAIU PARA ENTREGA
        </button>
        <p
          data-testid={ `${route}element-order-table-item-number-${id}` }
        >
          id do item
        </p>
        <p data-testid={ `${route}element-order-table-name-${id}` }> nome </p>
        <p data-testid={ `${route}element-order-table-quantity-${id}` }> quantidade </p>
        <p data-testid={ `${route}element-order-table-unit-price-${id}` }> preço </p>
        <p data-testid={ `${route}element-order-table-sub-total-${id}` }> subTotal </p>
        <p data-testid={ `${route}element-order-total-price` }> preço </p>
      </div>
    </div>
  );
}

export default OrderDetails;
