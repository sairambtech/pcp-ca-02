import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: "16px",
  textDecoration: "none",
  fontWeight: isActive ? "700" : "400",
  color: isActive ? "#0d6efd" : "#222",
});

const Navbar = () => {
  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <NavLink to="/orders" style={linkStyle}>Orders</NavLink>
      <NavLink to="/filter" style={linkStyle}>Filter</NavLink>
      <NavLink to="/status" style={linkStyle}>Status</NavLink>
    </nav>
  );
};

export default Navbar;
