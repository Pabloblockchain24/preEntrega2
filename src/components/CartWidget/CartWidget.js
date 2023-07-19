import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart">
      <FaShoppingCart  />
      0
    </div>
  );
};
export default CartWidget;
