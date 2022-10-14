import photo from "./images/image-product-mobile.jpg";
import Content from "./components/Content";
import CartButton from "./components/CartButton";

function App() {
  return (
    <div className="container">
      <img src={photo} alt="gabrielle-fragrance" srcset="" />
      <Content />
      <CartButton />
    </div>
  );
}

export default App;
