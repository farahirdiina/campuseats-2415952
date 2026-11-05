import { useNavigate } from "react-router";
import CartItem from "../components/CartItem.jsx";
import CheckoutForm from "../components/CheckoutForm.jsx";
import useCart from "../hooks/useCart";

function CartPage() {
  const { cart, total, handleChangeQty, handleRemove, handlePlaceOrder } =
    useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <p className="muted">
        Your cart is empty. Pick something from a menu first.
      </p>
    );
  }

  function handleCheckout(details) {
    handlePlaceOrder(details);
    navigate("/orders");
  }

  return (
    <div className="cart-layout">
      <div className="card">
        <ul className="cart-list">
          {cart.map((line) => (
            <CartItem
              key={line.item.id}
              line={line}
              onChangeQty={handleChangeQty}
              onRemove={handleRemove}
            />
          ))}
        </ul>

        <p className="cart-total">Total: RM {total.toFixed(2)}</p>
      </div>

      <CheckoutForm onPlaceOrder={handleCheckout} />
    </div>
  );
}

export default CartPage;
