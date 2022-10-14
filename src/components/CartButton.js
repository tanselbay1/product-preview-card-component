import cartLogo from "../images/icon-cart.svg";

const CartButton = () => {
  return (
    <button className="cart-button">
      <img src={cartLogo} alt="cart-logo" srcset="" />
      Add to Cart
    </button>
  );
};

export default CartButton;
