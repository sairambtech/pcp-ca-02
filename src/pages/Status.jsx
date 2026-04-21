import { useAppContext } from "../context/AppContext";

const Status = () => {
  const { state } = useAppContext();

  const totalOrders = state.orders.length;
  const orderedCount = state.orders.filter((order) => order.status === "ordered").length;
  const preparingCount = state.orders.filter((order) => order.status === "preparing").length;
  const deliveredCount = state.orders.filter((order) => order.status === "delivered").length;

  const restaurantCounts = state.orders.reduce((acc, order) => {
    acc[order.restaurant] = (acc[order.restaurant] || 0) + 1;
    return acc;
  }, {});

  window.appState = {
    totalOrders,
    orderedCount,
    preparingCount,
    deliveredCount,
    restaurantCounts,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Status</h2>
      <p>Total Orders: {totalOrders}</p>
      <p>Ordered: {orderedCount}</p>
      <p>Preparing: {preparingCount}</p>
      <p>Delivered: {deliveredCount}</p>

      <h3>Restaurant Counts</h3>
      {Object.entries(restaurantCounts).map(([restaurant, count]) => (
        <p key={restaurant}>
          {restaurant}: {count}
        </p>
      ))}
    </div>
  );
};

export default Status;
