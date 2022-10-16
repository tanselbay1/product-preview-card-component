import CartButton from "./CartButton";

const Content = () => {
  return (
    <div className="content-wrapper">
      <h3 className="preview-title">PERFUME</h3>
      <h1 className="content-header">Gabrielle Essence Eau De Parfum</h1>
      <p className="description">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="prices">
        <p className="discounted-price">$149.99</p>
        <p className="price">$169.99</p>
      </div>
      <CartButton />
    </div>
  );
};

export default Content;
