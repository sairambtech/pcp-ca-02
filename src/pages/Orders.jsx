import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

const Orders = () => {
  const { state, dispatch } = useAppContext();
  const [customerName, setCustomerName] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [status, setStatus] = useState('Pending');
  const [totalAmount, setTotalAmount] = useState('');

  const handleAddOrder = (e) => {
    e.preventDefault();

    if (!customerName || !restaurant || !totalAmount) return;

    const newOrder = {
      orderId: Date.now(),
      customerName,
      restaurant,
      items: [],
      totalAmount: Number(totalAmount),
      status,
      deliveryTime: 0,
      rating: 0,
    };

    dispatch({ type: 'ADD_ORDER', payload: newOrder });

    setCustomerName('');
    setRestaurant('');
    setStatus('Pending');
    setTotalAmount('');
  };

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div className="container">
      <h2>Orders</h2>

      <form onSubmit={handleAddOrder} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Restaurant"
          value={restaurant}
          onChange={(e) => setRestaurant(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Amount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">Add Order</button>
      </form>

      {state.orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        state.orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))
      )}
    </div>
  );
};

export default Orders;
