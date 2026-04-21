import { useAppContext } from "../context/AppContext";

const Status = () => {
  const { state } = useAppContext();

  const totalOrders = state.orders.length;
  const deliveredOrders = state.orders.filter((order) => order.status === "delivered").length;
  const cancelledOrders = state.orders.filter((order) => order.status === "cancelled").length;

  window.appState = {
    totalOrders,
    deliveredOrders,
    cancelledOrders,
  };

  return (
    <div className="container">
      <h2 className="page-title">Status</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>Total Orders</h3>
          <strong data-testid="total-orders">{totalOrders}</strong>
        </div>

        <div className="stat-box">
          <h3>Delivered Orders</h3>
          <strong data-testid="delivered-orders">{deliveredOrders}</strong>
        </div>

        <div className="stat-box">
          <h3>Cancelled Orders</h3>
          <strong data-testid="cancelled-orders">{cancelledOrders}</strong>
        </div>
      </div>
    </div>
  );
};

export default Status;
