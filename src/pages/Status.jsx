import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Status = () => {
  const { state } = useAppContext();

  const totalOrders = state.orders.length;
  const deliveredOrders = state.orders.filter((order) =>
    (order.status || order.orderStatus || '').toLowerCase() === 'delivered'
  ).length;
  const cancelledOrders = state.orders.filter((order) =>
    (order.status || order.orderStatus || '').toLowerCase() === 'cancelled'
  ).length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
    };
  }, [totalOrders, deliveredOrders, cancelledOrders]);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div className="container">
      <h2>Status</h2>

      <div>
        <p>Total Orders: <span data-testid="total-orders">{totalOrders}</span></p>
        <p>Delivered Orders: <span data-testid="delivered-orders">{deliveredOrders}</span></p>
        <p>Cancelled Orders: <span data-testid="cancelled-orders">{cancelledOrders}</span></p>
      </div>
    </div>
  );
};

export default Status;
