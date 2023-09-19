import { Link, Outlet } from "react-router-dom";
import "./nav-styles.css";
export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-links-wrapper">
        <Link to="/error" className="nav-link">
          Error
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
