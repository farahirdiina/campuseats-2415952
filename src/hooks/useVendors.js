import { useEffect, useState } from "react";
import useCart from "./useCart";

export default function useVendors() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const { setSelectedVendorId } = useCart();

  useEffect(() => {
    const controller = new AbortController();

    async function loadVendors() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/vendors.json", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        setVendors(data);
        setSelectedVendorId(data[0]?.id ?? null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadVendors();

    return () => controller.abort();
  }, [reloadKey]);

  function reload() {
    setReloadKey((k) => k + 1);
  }

  return { vendors, loading, error, reload };
}
