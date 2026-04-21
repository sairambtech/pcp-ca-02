import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  return (
    <div className="card" data-testid="order-item">
      <h3>{order.restaurant}</h3>
      <p>Order ID: {order.orderId}</p>
      <p>Customer ID: {order.customerId}</p>
      <p>
        Status: <span className="badge">{order.status}</span>
      </p>
      <p>Total: {order.totalAmount}</p>
      <Link to={`/orders/${order.orderId}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default OrderCard;
