import { Link, Outlet } from "react-router-dom";
import "./nav-styles.css";
import { Button } from "@mui/material";
import axios from "axios";
const api = import.meta.env.VITE_API;
export default function Nav() {
  const handleClick = async () => {
    console.log(`${api}submit`);
    try {
      await axios.get(api).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="nav-container">
      <Outlet />
    </div>
  );
}
