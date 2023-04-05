import React, { useState, useCallback, useEffect } from 'react';
import Header from '../components/Header';

import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../services/validations';

export default function ManageUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disable, setDisable] = useState(false);
  const [password, setPassword] = useState('');
  const ROUTE = 'admin_manage';
  console.log(disable);

  const verifyBtn = useCallback(() => {
    const verifyEmail = emailValidation(email);
    const verifyPassword = passwordValidation(password);
    const verifyName = nameValidation(name);
    const dataValidation = verifyEmail && verifyPassword && verifyName;
    setDisable(!(dataValidation));
  }, [email, password, name]);

  useEffect(() => {
    verifyBtn();
  }, [email, password, name, setDisable, verifyBtn]);
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
        disabled={ disable }
        /* onClick={ handleClick } */
      >
        CADASTRAR
      </button>
    </div>
  );
}
