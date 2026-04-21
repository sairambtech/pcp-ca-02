import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import OrderCard from "../components/OrderCard";

const Filter = () => {
  const { state } = useAppContext();
  const [status, setStatus] = useState("all");

  const filteredOrders =
    status === "all"
      ? state.orders
      : state.orders.filter((order) => order.status === status);

  return (
    <div className="container">
      <h2 className="page-title">Filter Orders</h2>

      <select
        data-testid="filter-input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="ordered">Ordered</option>
        <option value="preparing">Preparing</option>
        <option value="delivered">Delivered</option>
      </select>

      <div className="card-grid" style={{ marginTop: "18px" }}>
        {filteredOrders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
