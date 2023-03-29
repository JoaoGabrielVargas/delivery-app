import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/login" />
        <Route path="/login" component={ Login } />
      </Route>
    </Switch>
  );
}

export default Routes;
