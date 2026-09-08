import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { useCart } from "../context/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Product not found.");
        return response.json();
      })
      .then(setProduct)
      .catch((fetchError) => setError(fetchError.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader itemCount={0} />
        <Link to="/" className="btn btn-ghost">
          ← Back to products
        </Link>
        {loading && <p className="text-center py-12">Loading product...</p>}
        {error && <p className="alert alert-error">{error}</p>}
        {product && (
          <article className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
            <figure className="lg:w-1/2 bg-base-200 p-8">
              <img
                src={product.images?.[0] || product.thumbnail}
                alt={product.title}
                className="max-h-96 w-full object-contain"
              />
            </figure>
            <div className="card-body">
              <span className="badge badge-outline w-fit">
                {product.category}
              </span>
              <h1 className="card-title text-3xl">{product.title}</h1>
              <p className="opacity-80">{product.description}</p>
              <p className="text-3xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              <p className={product.stock > 0 ? "text-success" : "text-error"}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <div className="card-actions mt-4">
                <button
                  className="btn btn-primary"
                  disabled={product.stock === 0}
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
