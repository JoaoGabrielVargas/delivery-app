import React from 'react';
import './App.css';
import Routes from './routes/Router';
import DeliveryProvider from './context/deliveryProvider';

function App() {
  return (
    <div className="App">
      <DeliveryProvider>
        <Routes />
      </DeliveryProvider>
    </div>
  );
}
export default App;
