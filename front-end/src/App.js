import React from 'react';
import './App.css';
import Routes from './routes/Router';
import DeliveryProvider from './context/deliveryProvider';
import CartProvider from './context/cartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <DeliveryProvider>
          <Routes />
        </DeliveryProvider>
      </CartProvider>
    </div>
  );
}
export default App;
