import { Route, Switch } from 'react-router-dom';
import CustomerCheckout from '../pages/CustomerCheckout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default Routes;
