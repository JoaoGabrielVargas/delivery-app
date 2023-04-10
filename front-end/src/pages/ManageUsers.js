import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../services/validations';

export default function ManageUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('seller');
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');
  const ROUTE = 'admin_manage';
  const history = useHistory();

  const handleClick = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('user')) || undefined;
      await axios.post(
        'http://localhost:3001/admin/manage',
        { email, password, name, role },
        {
          headers: {
            Authorization: `${token.token}`,
          },
        },
      );
      if (!token) {
        localStorage.clear();
        history.push('/');
      }
      /*       localStorage.setItem('user', JSON.stringify(data));
 */ } catch (err) {
      console.log(err);
      setError(true);
    }
  };

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
        onChange={ (e) => setRole(e.target.value) }
        value={ role }
      >
        <option value="seller" defaultValue>Vendedor</option>
        <option value="customer"> Cliente </option>
      </select>
      <button
        data-testid={ `${ROUTE}__button-register` }
        type="button"
        disabled={ disable }
        onClick={ handleClick }
      >
        CADASTRAR
      </button>
      {
        error
        && <p data-testid={ `${ROUTE}__element-invalid-register` }> Dados inválidos </p>
      }
    </div>
  );
}
