import React, { useContext } from 'react';
import ItemCheckout from '../components/ItemCheckout';
import NavBar from '../components/NavBar';
import CartContext from '../context/cartContext';

function CustomerCheckout() {
  const { cartItems, cartTotalValue } = useContext(CartContext);
  return (
    <div>
      <NavBar />
      <h3>Finalizar Pedido</h3>
      <table>
        <thead>
          <td>Item</td>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Valor Unitário</td>
          <td>Sub-total</td>
          <td>Remover Item</td>
        </thead>
        <tbody>
          { cartItems.map((item, index) => (
            <ItemCheckout key={ item.id } item={ item } index={ index } />
          )) }
        </tbody>
        <button
          type="button"
          data-testid="customer_checkout__element-order-total-price"
        // onClick={ () => history.push('/customer/checkout') }
        // disabled={ disable }
        >
          <p data-testid="customer_products__checkout-bottom-value">
            { Number(cartTotalValue).toFixed(2).toString().replace('.', ',') }
          </p>
        </button>
      </table>
      <h3>Detalhes e endereço para entrega</h3>
      <form action="">
        <label htmlFor="select-seller">
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
          >
            <option value="Seller">Seller</option>
            <option value="Seller">Seller</option>
            <option value="Seller">Seller</option>
          </select>
        </label>
        <input data-testid="customer_checkout__input-address" />
        <input data-testid="customer_checkout__input-address-number" />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
export default CustomerCheckout;
