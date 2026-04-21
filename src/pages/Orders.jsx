import { useAppContext } from "../context/AppContext";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  const { state } = useAppContext();

  return (
    <div className="container">
      <h2 className="page-title">Orders</h2>
      {state.loading && <p>Loading...</p>}
      {state.error && <p className="error">{state.error}</p>}
      <div className="card-grid">
        {state.orders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
