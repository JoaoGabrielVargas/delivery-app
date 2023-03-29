import React from 'react';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const ROUTE = 'common_login';

  return (
    <div className="login">
      <form>
        <div>
          <input
            data-testid={ `${ROUTE}__input-email` }
            // value={ email }
            placeholder="user@email.com"
          // onChange={ (e) => setEmail(e.target.value) }
          />
          <input
            data-testid={ `${ROUTE}__input-password` }
            // value={ password }
            placeholder="******"
          // onChange={ (e) => setPassword(e.target.value) }
          />
          <button
            data-testid={ `${ROUTE}__button-login` }
            type="button"
            // disabled={ !isDisabled() }
          // onClick={ handleClick }
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
