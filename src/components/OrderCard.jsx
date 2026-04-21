import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderCard = ({ order }) => {
  const { dispatch } = useAppContext();

  const handleDelete = () => {
    dispatch({ type: 'DELETE_ORDER', payload: order.orderId });
  };

  const handleStatusChange = (e) => {
    dispatch({
      type: 'UPDATE_STATUS',
      payload: {
        id: order.orderId,
        status: e.target.value,
      },
    });
  };

  return (
    <div
      data-testid="order-item"
      style={{
        marginBottom: '20px',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <p><strong>Order ID:</strong> {order.orderId}</p>
      <p><strong>Customer Name:</strong> {order.customerName}</p>
      <p><strong>Restaurant:</strong> {order.restaurant}</p>
      <p><strong>Total:</strong> ₹{order.totalAmount}</p>

      <label>
        <strong>Status:</strong>{' '}
        <select value={order.status} onChange={handleStatusChange}>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </label>

      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <Link to={`/orders/${order.orderId}`}>View Details</Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default OrderCard;
