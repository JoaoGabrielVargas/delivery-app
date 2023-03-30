import React, { useState, useCallback, useEffect } from 'react';
import {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../services/validations';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(false);
  const ROUTE = 'common_register';

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
  const history = useHistory();

  const redirectRouter = (role) => {
    if (role === 'customer') history.push('/customer/products');
  };

  const handleClick = async () => {
    try {
      const request = await axios.post('http://localhost:3001/register', { name, email, password, role: 'customer' });
      console.log(request);
      redirectRouter(request.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form>
        <div>
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
          <button
            data-testid={ `${ROUTE}__button-register` }
            type="button"
            onClick={ handleClick }
          >
            CADASTRAR
          </button>
          <p data-testid={ `${ROUTE}__element-invalid-register` }> Invalid data </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
