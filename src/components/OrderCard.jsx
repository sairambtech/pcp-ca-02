import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
  return (
    <div
      data-testid="order-item"
      style={{
        marginBottom: '20px',
        padding: '12px',
        border: '1px solid #ccc',
      }}
    >
      <p><strong>Order ID:</strong> {order.orderId}</p>
      <p><strong>Customer Name:</strong> {order.customerName}</p>
      <p><strong>Restaurant:</strong> {order.restaurant}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ₹{order.totalAmount}</p>
      <Link to={`/orders/${order.orderId}`}>View Details</Link>
    </div>
  );
};

export default OrderCard;
