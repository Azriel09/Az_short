import { Link, Outlet } from "react-router-dom";
import "./nav-styles.css";
import { Button } from "@mui/material";
import axios from "axios";
export default function Nav() {
  const handleClick = async () => {
    try {
      await axios.get("https://azshort.netlify.app/").then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="nav-container">
      <div className="nav-links-wrapper">
        <Link to="/error" className="nav-link">
          Error
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Button onClick={handleClick}>Test</Button>
      </div>
      <Outlet />
    </div>
  );
}
