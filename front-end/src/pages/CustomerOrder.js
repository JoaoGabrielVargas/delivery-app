import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function CustomerOrder() {
  const { id } = JSON.parse(localStorage.getItem('user'));
  const userId = id;
  const [sales, setSales] = useState([]);

  const getSales = useCallback(async () => {
    try {
      const request = await axios.post('http://localhost:3001/orders', { userId });
      setSales(request.data);
    } catch (err) {
      console.log(err);
    }
  }, [userId, setSales]);

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <div>
      <NavBar />
      <div>
        {
          sales.map((sale) => (<OrderCard
            key={ sale.id }
            sale={ sale }
            route="customer_orders__"
          />))
        }
      </div>
    </div>
  );
}
export default CustomerOrder;
