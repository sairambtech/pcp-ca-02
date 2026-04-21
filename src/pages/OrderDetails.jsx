import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useAppContext();

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  const order = state.orders.find(
    (item) => String(item.orderId) === String(id)
  );

  if (!order) return <p>Order not found</p>;

  return (
    <div className="container">
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.orderId}</p>
      <p><strong>Customer Name:</strong> {order.customerName}</p>
      <p><strong>Restaurant:</strong> {order.restaurant}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
      <p><strong>Delivery Time:</strong> {order.deliveryTime} mins</p>
      <p><strong>Rating:</strong> {order.rating}</p>

      <h3>Items</h3>
      {order.items.length === 0 ? (
        <p>No items</p>
      ) : (
        order.items.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ₹{item.price} x {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderDetails;
