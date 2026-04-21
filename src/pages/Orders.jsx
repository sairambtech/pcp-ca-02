import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

const Orders = () => {
  const { state } = useAppContext();

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div>
      <h2>Orders</h2>
      {state.orders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default Orders;
