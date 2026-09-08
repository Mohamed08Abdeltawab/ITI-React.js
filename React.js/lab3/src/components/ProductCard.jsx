import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function ProductCard({
  image,
  name,
  price,
  description,
  category,
  stock,
  id,
}) {
  const { addToCart } = useCart();
  const inStock = stock > 0;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <figure className="relative h-48 w-full bg-base-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-3 right-3">
          <span
            className={`badge font-semibold ${inStock ? "badge-success text-white" : "badge-error text-white"}`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 flex flex-col justify-between grow">
        <div>
          <div className="text-xs font-semibold tracking-wide uppercase text-primary mb-1">
            {category}
          </div>
          <Link
            to={`/products/${id}`}
            className="card-title text-base line-clamp-1 mb-2 hover:text-primary"
            title={name}
          >
            {name}
          </Link>
          <p className="text-sm opacity-70 line-clamp-2 mb-4">{description}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-base-200">
          <span className="text-xl font-bold text-base-content">
            ${Number(price).toFixed(2)}
          </span>
          <button
            className="btn btn-primary btn-sm"
            disabled={!inStock}
            onClick={() => addToCart({ id, name, price, image })}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
