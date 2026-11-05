import { useContext } from "react";
import { CartContext } from "../context/cart-context.js";

export default function useCart() {
  const ctx = useContext(CartContext);

  if (ctx === null) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }

  return ctx;
}
