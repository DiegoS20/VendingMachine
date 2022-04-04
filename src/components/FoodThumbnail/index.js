import defaultImg from "./images/default.jpg";

export default function FoodThumbnail({ src, alt, ...props }) {
  function handleError(e) {
    e.target.src = defaultImg;
    e.target.title += " - image could not load";
  }
  return <img src={src} alt={alt} {...props} onError={handleError} />;
}
