import { Route, Switch } from 'react-router-dom';
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
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default Routes;
