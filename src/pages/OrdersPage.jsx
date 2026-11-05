import useCart from "../hooks/useCart";

function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return <p className="muted">You haven't placed any orders yet.</p>;
  }

  const newestFirst = [...orders].reverse();

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="cart-list">
        {newestFirst.map((order) => (
          <li key={order.id} className="card">
            {order.name && <p>Name: {order.name}</p>}
            {order.mahallah && <p>Mahallah: {order.mahallah}</p>}
            <p>Pickup time: {order.pickupTime}</p>
            <ul>
              {order.items.map((line) => (
                <li key={line.item.id}>
                  {line.qty} × {line.item.name}
                </li>
              ))}
            </ul>
            <p>Total: RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OrdersPage;
