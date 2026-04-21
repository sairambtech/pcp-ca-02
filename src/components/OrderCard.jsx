import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  return (
    <div
      data-testid="order-item"
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
      }}
    >
      <h3>{order.restaurant}</h3>
      <p>Order ID: {order.orderId}</p>
      <p>Customer ID: {order.customerId}</p>
      <p>Status: {order.status}</p>
      <p>Total: {order.totalAmount}</p>
      <Link to={`/orders/${order.orderId}`}>View Details</Link>
    </div>
  );
};

export default OrderCard;
