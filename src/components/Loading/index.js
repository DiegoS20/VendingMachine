import "./index.scss";
import loading from "./images/loading.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading gif" />
    </div>
  );
}
