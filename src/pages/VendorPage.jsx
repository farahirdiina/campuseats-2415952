import { useState } from "react";
import { Link, useParams } from "react-router";
import MenuList from "../components/MenuList.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import useVendors from "../hooks/useVendors";
import useCart from "../hooks/useCart";

function sortMenu(items, sortBy) {
  const copy = [...items];
  if (sortBy === "price-asc") copy.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") copy.sort((a, b) => b.price - a.price);
  if (sortBy === "popularity") copy.sort((a, b) => b.rating - a.rating);
  return copy;
}

function VendorPage() {
  const { id } = useParams();
  const { vendors, loading, error, reload } = useVendors();
  const { handleAddToCart } = useCart();
  const [sortBy, setSortBy] = useState("default");

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  const vendor = vendors.find((v) => String(v.id) === id);

  if (!vendor) {
    return (
      <div>
        <h2>Vendor not found</h2>
        <Link to="/">Back to vendors</Link>
      </div>
    );
  }

  const sortedMenu = sortMenu(vendor.menu, sortBy);

  return (
    <section>
      <h2 className="section-title">Menu: {vendor.name}</h2>

      <label htmlFor="sort">Sort by </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="popularity">Most Ordered</option>
      </select>

      <MenuList items={sortedMenu} onAdd={handleAddToCart} />
    </section>
  );
}

export default VendorPage;
