import { NavLink } from "react-router";
import useCart from "../hooks/useCart";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <h1 className="logo">CampusEats</h1>
      <nav className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Vendors
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          My Orders
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "link cart active" : "link cart"
          }
        >
          Cart <span className="badge">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
