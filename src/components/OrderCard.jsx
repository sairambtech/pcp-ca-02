import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
  const orderId = order.orderId || order.id || order.orderID;
  const customerId = order.customerId || order.customerID || order.customer || order.userId;
  const status = order.status || order.orderStatus || 'N/A';
  const total = order.total || order.amount || order.price || 0;

  return (
    <div data-testid="order-item" style={{ marginBottom: '16px' }}>
      <p>Order ID: {orderId}</p>
      <p>Customer ID: {customerId}</p>
      <p>Status: {status}</p>
      <p>Total: {total}</p>
      <Link to={`/orders/${orderId}`}>View Details</Link>
    </div>
  );
};

export default OrderCard;
