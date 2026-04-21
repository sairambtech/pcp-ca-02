import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useAppContext();

  const order = state.orders.find((item) => String(item.orderId) === String(id));

  if (!order) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Order not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Order Details</h2>
      <p>Order ID: {order.orderId}</p>
      <p>Customer ID: {order.customerId}</p>
      <p>Restaurant: {order.restaurant}</p>
      <p>Status: {order.status}</p>
      <p>Delivery Time: {order.deliveryTime}</p>
      <p>Rating: {order.rating}</p>
      <h4>Items</h4>
      {order.items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Prize: {item.prize}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
