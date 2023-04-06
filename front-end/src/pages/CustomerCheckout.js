import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ItemCheckout from '../components/ItemCheckout';
import NavBar from '../components/NavBar';
import CartContext from '../context/cartContext';
import { getDate } from '../services/date';

function CustomerCheckout() {
  const history = useHistory();
  const { cartItems, cartTotalValue } = useContext(CartContext);
  const [sellers, setSellers] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState([]);
  const [deliveryNumber, setDeliveryNumber] = useState([]);
  const [sellerId, setSellerId] = useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));

  const getSellers = async () => {
    try {
      const request = await axios.get('http://localhost:3001/checkout');
      setSellers(request.data);
      setSellerId(request.data[0].id);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e, setState) => {
    const { value } = e.target;
    setState(value);
  };
  const newSale = async () => {
    const today = getDate();
    const status = 'pendente';
    try {
      const sale = await axios.post('http://localhost:3001/checkout', {
        id, sellerId, cartTotalValue, deliveryAddress, deliveryNumber, today, status,
      });
      history.push(`/customer/orders/${sale.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSellers();
  }, []);

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
            onChange={ (e) => setSellerId(e.target.value) }
          >
            { sellers.map((item) => (
              <option key={ item.name } value={ item.id }>{ item.name }</option>
            )) }
          </select>
        </label>
        <input
          data-testid="customer_checkout__input-address"
          onChange={ (e) => handleChange(e, setDeliveryAddress) }
        />
        <input
          data-testid="customer_checkout__input-address-number"
          onChange={ (e) => handleChange(e, setDeliveryNumber) }
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => newSale() }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}
export default CustomerCheckout;
