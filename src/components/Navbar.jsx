import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px' }}>
      <h1>CA2 Orders</h1>
      <div style={{ display: 'flex', gap: '12px' }}>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/filter">Filter</NavLink>
        <NavLink to="/stats">Status</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
