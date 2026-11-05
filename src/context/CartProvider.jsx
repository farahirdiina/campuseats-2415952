import { useState } from "react";
import { CartContext } from "./cart-context.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [orders, setOrders] = useLocalStorage("orders", []);
  const [lastOrder, setLastOrder] = useState(null);
  const [view, setView] = useState("cart");
  const [selectedVendorId, setSelectedVendorId] = useState(null);

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);

  const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0);

  function handleAddToCart(item) {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id);

      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }

      return [...prev, { item, qty: 1 }];
    });
  }

  function handleChangeQty(itemId, delta) {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  function handleRemove(itemId) {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId));
  }

  function handlePlaceOrder(details) {
    const newOrder = {
      ...details,
      items: [...cart],
      total,
    };

    setOrders((prev) => [...prev, newOrder]);
    setLastOrder(newOrder);
    setCart([]);
    setView("done");
  }

  const value = {
    cart,
    orders,
    setOrders,
    lastOrder,
    cartCount,
    total,
    selectedVendorId,
    setSelectedVendorId,
    view,
    setView,
    handleAddToCart,
    handleChangeQty,
    handleRemove,
    handlePlaceOrder,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
