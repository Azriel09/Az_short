import Wave from "./wave";
import UrlInput from "./home/url";
import "./container.scss";
export default function Container() {
  return (
    <div className="background-container">
      <UrlInput />
      <Wave />
    </div>
  );
}
