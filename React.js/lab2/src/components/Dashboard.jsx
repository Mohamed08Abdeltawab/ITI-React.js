import { products } from "../data/products";
import DashboardHeader from "./DashboardHeader";
import InventoryBoard from "./InventoryBoard";
import ProductCatalog from "./ProductCatalog";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader itemCount={products.length} />

        <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <ProductCatalog products={products} />

          <section className="lg:col-span-1">
            <InventoryBoard />
          </section>
        </main>
      </div>
    </div>
  );
}
