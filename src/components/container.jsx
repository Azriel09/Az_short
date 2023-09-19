import { Fragment } from "react";
import Background from "./wave";
import UrlInput from "./url";
import "./container.scss";
export default function Container() {
  return (
    <div className="background-container">
      <UrlInput />
      <Background />
    </div>
  );
}
