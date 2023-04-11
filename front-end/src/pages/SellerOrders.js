import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const { id } = JSON.parse(localStorage.getItem('user'));
  const sellerId = id;
  const [sales, setSales] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.post('http://localhost:3001/orders/seller', { sellerId });
      console.log(data);
      setSales(data);
    }
    fetchData();
  }, [sellerId]);
  return (
    <div>
      <Header />
      {
        sales.map((sale) => (<OrderCard
          key={ sale.id }
          sale={ sale }
          route="seller_orders__"
        />))
      }
    </div>
  );
}

export default SellerOrders;
