import mobileImage from "./images/image-product-mobile.jpg";
import Content from "./components/Content";
import "./styles/Styles.css";

function App() {
  return (
    <div className="preview-card-container">
      <img
        src={mobileImage}
        alt="gabrielle-fragrance"
        className="product-image"
      />
      <Content />
    </div>
  );
}

export default App;
