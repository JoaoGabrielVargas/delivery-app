import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../context/cartContext';

function NavBar() {
  const history = useHistory();
  const { name } = JSON.parse(localStorage.getItem('user'));
  const { setCartItems, setCartTotalValue } = useContext(CartContext);

  const logout = () => {
    localStorage.clear();
    setCartItems([]);
    setCartTotalValue([]);
    history.push('/');
  };

  return (
    <nav>
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
        onClick={ () => { history.push('/customer/products'); } }
      >
        PRODUTOS
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
        onClick={ () => { history.push('/customer/orders'); } }
      >
        MEUS PEDIDOS
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        { name }
      </button>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ logout }
      >
        SAIR
      </button>
    </nav>
  );
}

export default NavBar;
