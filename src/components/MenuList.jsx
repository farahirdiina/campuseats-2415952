import MenuItemCard from "./MenuItemCard.jsx";
import useCart from "../hooks/useCart";

function MenuList({ items, onAdd }) {
  const { addToCart } = useCart();

  if (items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>;
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default MenuList;
