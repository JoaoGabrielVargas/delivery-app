import React from 'react';

function NavBar() {
  return (
    <nav>
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        PRODUTOS
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        MEUS PEDIDOS
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        NOME CLIENTE
      </button>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        SAIR
      </button>
    </nav>
  );
}

export default NavBar;
