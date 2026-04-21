import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderDetails = () => {
  const { id } = useParams();
  const { state } = useAppContext();

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  const order = state.orders.find((item) => {
    const orderId = item.orderId || item.id || item.orderID;
    return String(orderId) === String(id);
  });

  if (!order) return <p>Order not found</p>;

  return (
    <div className="container">
      <h2>Order Details</h2>
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </div>
  );
};

export default OrderDetails;
