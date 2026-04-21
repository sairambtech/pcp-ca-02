import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

const Orders = () => {
  const { state } = useAppContext();

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;
  if (!Array.isArray(state.orders)) return <p>Orders data is not an array</p>;

  return (
    <div className="container">
      <h2>Orders</h2>
      {state.orders.map((order, index) => (
        <OrderCard
          key={order.orderId || order.id || index}
          order={order}
        />
      ))}
    </div>
  );
};

export default Orders;
