import Background from "../wave";
import "./error-styles.scss";
export default function ErrorContainer() {
  return (
    <div className="background-container">
      <div className="error-wrapper">
        <div className="texts-wrapper">
          <h1>404</h1>
          <h2>OOPS! PAGE NOT FOUND</h2>
          <p>Sorry, the link you're using doesn't exist.</p>
          <div className="anchor-container">
            <a href="https://az-short.netlify.app/">Return Home</a>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}
