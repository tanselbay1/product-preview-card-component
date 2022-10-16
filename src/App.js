import photo from "./images/image-product-mobile.jpg";
import Content from "./components/Content";
import "./styles/Styles.css";

function App() {
  return (
    <div className="preview-card-container">
      <img src={photo} alt="gabrielle-fragrance" />
      <Content />
    </div>
  );
}

export default App;
