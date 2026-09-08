import { useEffect, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import ProductCatalog from "./ProductCatalog";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load products.");
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((fetchError) => setError(fetchError.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader itemCount={products.length} />

        <main>
          {loading && <p className="text-center py-12">Loading products...</p>}
          {error && <p className="alert alert-error">{error}</p>}
          {!loading && !error && <ProductCatalog products={products} />}
        </main>
      </div>
    </div>
  );
}
