import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { emailValidation, passwordValidation } from '../services/validations';

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

  const handleClick = async () => {
    try {
      await axios.post('http://localhost:3001/login', { email, password });
      // redirectRouter(result.data.role);
    } catch (err) {
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
          // onClick={ () => { history.push('/register'); } }
          >
            Ainda não tenho conta
          </button>
          {
            error
            && <p data-testid={ `${ROUTE}__element-invalid-email` }> Dados inválidos </p>
          }
        </div>
        {/* <p>adm@deliveryapp.com</p>
        <p>--adm2@21!!--</p>
        <p>fulana@deliveryapp.com</p>
        <p>fulana@123</p>
        <p>zebirita@email.com</p>
        <p>$#zebirita#$</p> */}
        {/* {
          !isLoginValid
          && <span data-testid="common_login__element-invalid-email">Invalid Email</span>
        } */}
      </form>
    </div>
  );
}

export default Login;
