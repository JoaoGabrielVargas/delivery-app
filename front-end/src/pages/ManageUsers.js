import React, { useState } from 'react';
import Header from '../components/Header';

export default function ManageUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ROUTE = 'admin_manage';
  return (
    <div className="manage-users-container">
      <Header />
      <input
        data-testid={ `${ROUTE}__input-name` }
        name="name"
        value={ name }
        placeholder="Seu Nome"
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        data-testid={ `${ROUTE}__input-email` }
        name="email"
        value={ email }
        placeholder="user@email.com"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid={ `${ROUTE}__input-password` }
        name="password"
        value={ password }
        placeholder="******"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <select
        name="admin-manage-select-role"
        data-testid={ `${ROUTE}__select-role` }
      >
        <option value="seller" defaultValue>Vendedor</option>
        <option value="customer"> Cliente </option>
      </select>
      <button
        data-testid={ `${ROUTE}__button-register` }
        type="button"
      >
        CADASTRAR
      </button>
    </div>
  );
}
