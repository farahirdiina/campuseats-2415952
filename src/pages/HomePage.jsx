import VendorCard from "../components/VendorCard.jsx";
import { Loading, ErrorMessage } from "../components/Status.jsx";
import useVendors from "../hooks/useVendors";
import useCart from "../hooks/useCart";

function HomePage() {
  const { vendors, loading, error, reload } = useVendors();

  const { selectedVendorId, setSelectedVendorId } = useCart();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;

  return (
    <section>
      <h2 className="section-title">Choose a vendor</h2>
      <div className="vendor-grid">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
            isSelected={vendor.id === selectedVendorId}
            onSelect={setSelectedVendorId}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
