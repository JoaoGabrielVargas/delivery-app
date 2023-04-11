import { Route, Switch } from 'react-router-dom';
import CustomerCheckout from '../pages/CustomerCheckout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import ManageUsers from '../pages/ManageUsers';
import CustomerOrder from '../pages/CustomerOrder';
import SellerOrders from '../pages/SellerOrders';
import OrderDetails from '../pages/OrderDetails';

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/admin/manage" component={ ManageUsers } />
      <Route path="/customer/orders/" component={ CustomerOrder } />
      <Route exact path="/seller/orders/" component={ SellerOrders } />
      <Route path="/seller/orders/:id" component={ OrderDetails } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default Routes;
