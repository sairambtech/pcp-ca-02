import { useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

const Filter = () => {
  const { state } = useAppContext();
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredOrders = useMemo(() => {
    if (selectedStatus === 'all') return state.orders;
    return state.orders.filter(
      (order) => order.status.toLowerCase() === selectedStatus.toLowerCase()
    );
  }, [selectedStatus, state.orders]);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>{state.error}</p>;

  return (
    <div className="container">
      <h2>Filter Orders</h2>

      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Delivered">Delivered</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <div style={{ marginTop: '16px' }}>
        {filteredOrders.map((order) => (
          <OrderCard key={order.orderId} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
