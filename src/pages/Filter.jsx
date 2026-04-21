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
    <div style={{ padding: "20px" }}>
      <h2>Filter Orders</h2>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="ordered">Ordered</option>
        <option value="preparing">Preparing</option>
        <option value="delivered">Delivered</option>
      </select>

      {filteredOrders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </div>
  );
};

export default Filter;
