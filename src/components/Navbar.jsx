import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>CA2 Orders</div>
      <div style={{ display: "flex", gap: "8px" }}>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/filter">Filter</NavLink>
        <NavLink to="/status">Status</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
