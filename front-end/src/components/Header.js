import React from 'react';

function Header() {
  const ROUTE = 'customer_products';
  return (
    <nav>
      <a href="/products" data-testid={ `${ROUTE}__element-navbar-link-products` }>
        Produtos
      </a>
      <a href="/orders" data-testid={ `${ROUTE}__element-navbar-link-orders` }>
        Meus Pedidos
      </a>
      <a href="/orders" data-testid={ `${ROUTE}__element-navbar-user-full-name` }>
        Usuário
      </a>
      <a href="/orders" data-testid={ `${ROUTE}__element-navbar-link-logout` }>
        Sair
      </a>
    </nav>
  );
}

export default Header;
