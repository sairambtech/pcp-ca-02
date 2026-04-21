import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Status = () => {
  const { state } = useAppContext();

  const orders = state.orders || [];

  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(
    (order) => order.status?.toLowerCase() === 'delivered'
  ).length;
  const cancelledOrders = orders.filter(
    (order) => order.status?.toLowerCase() === 'cancelled'
  ).length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
    };
  }, [totalOrders, deliveredOrders, cancelledOrders]);

  return (
    <div className="container">
      <h2 className="page-title">Status</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>Total Orders</h3>
          <strong data-testid="total-orders">{totalOrders}</strong>
        </div>

        <div className="stat-box">
          <h3>Delivered Orders</h3>
          <strong data-testid="delivered-orders">{deliveredOrders}</strong>
        </div>

        <div className="stat-box">
          <h3>Cancelled Orders</h3>
          <strong data-testid="cancelled-orders">{cancelledOrders}</strong>
        </div>
      </div>
    </div>
  );
};

export default Status;
