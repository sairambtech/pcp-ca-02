import { useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

const Filter = () => {
  const { state } = useAppContext();
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredOrders = useMemo(() => {
    if (selectedStatus === 'all') return state.orders;

    return state.orders.filter((order) => {
      const status = (order.status || order.orderStatus || '').toLowerCase();
      return status === selectedStatus.toLowerCase();
    });
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
        <option value="delivered">Delivered</option>
        <option value="pending">Pending</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <div style={{ marginTop: '16px' }}>
        {filteredOrders.map((order, index) => (
          <OrderCard
            key={order.orderId || order.id || index}
            order={order}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
