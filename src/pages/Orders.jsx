import { useAppContext } from "../context/AppContext";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const { state } = useAppContext();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {state.orders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default Orders;
