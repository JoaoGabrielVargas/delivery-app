import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ROUTE = 'common_register';

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
          // onClick={ () => history.push('/register') }
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
