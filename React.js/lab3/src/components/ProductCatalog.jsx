import ProductCard from "./ProductCard";

export default function ProductCatalog({ products }) {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-lg font-bold">Catalog Inventory</h2>
        <span className="text-xs opacity-60">
          Showing real-time stock status
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.thumbnail}
            name={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            stock={product.stock}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
}
