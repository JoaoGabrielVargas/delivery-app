import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { emailValidation, passwordValidation } from '../services/validations';
import '../style/pages/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(false);
  const ROUTE = 'common_login';

  const verifyBtn = useCallback(() => {
    const verifyEmail = emailValidation(email);
    const verifyPassword = passwordValidation(password);
    const emailAndPassword = verifyEmail && verifyPassword;
    setDisable(!(emailAndPassword));
  }, [email, password]);

  const history = useHistory();

  const redirectRouter = (role) => {
    if (role === 'customer') history.push('/customer/products');
  };
  const handleClick = async () => {
    try {
      const request = await axios.post('http://localhost:3001/login', { email, password });
      console.log(request);
      redirectRouter(request.data);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    verifyBtn();
  }, [email, password, setDisable, verifyBtn]);

  return (
    <div className="login">
      <form>
        <div>
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
            data-testid={ `${ROUTE}__button-login` }
            type="button"
            disabled={ disable }
            onClick={ handleClick }
          >
            Login
          </button>
          <button
            data-testid={ `${ROUTE}__button-register` }
            type="button"
            onClick={ () => history.push('/register') }
          >
            Ainda não tenho conta
          </button>
          {
            error
            && <p data-testid={ `${ROUTE}__element-invalid-email` }> Dados inválidos </p>
          }
        </div>
      </form>
    </div>
  );
}

export default Login;
