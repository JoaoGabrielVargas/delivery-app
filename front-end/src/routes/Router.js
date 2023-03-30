import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/Products';

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/login" />
        <Route path="/login" component={ Login } />
        <Route path="/customer/products" component={ Products } />
      </Route>
    </Switch>
  );
}

export default Routes;
