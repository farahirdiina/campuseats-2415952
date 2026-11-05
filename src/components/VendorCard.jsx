import { Link } from "react-router";

function VendorCard({ vendor, isSelected, onSelect }) {
  return (
    <Link
      to={`/vendor/${vendor.id}`}
      className="vendor-link"
      onClick={() => onSelect(vendor.id)}
    >
      <div className={`card vendor-card ${isSelected ? "selected" : ""}`}>
        {/* Vendor initial and opening status */}
        <div className="thumb" aria-hidden="true">
          {vendor.name.charAt(0).toUpperCase()}
        </div>

        {/* Vendor information */}
        <div className="vendor-details">
          <h3>{vendor.name}</h3>
          {/* Location and opening hours */}
          <div className="vendor-meta">
            <div className="vendor-meta-item">
              <span className="meta-icon"></span>
              <span>{vendor.location}</span>
            </div>

            <div className="vendor-meta-item">
              <span className="meta-icon"></span>
              <span>{vendor.openHours}</span>
            </div>
          </div>

          {/* Open or closed status */}
          <span className={vendor.isOpen ? "status open" : "status closed"}>
            {vendor.isOpen ? "Open now" : "Closed"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VendorCard;
