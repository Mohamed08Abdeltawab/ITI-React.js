export default function ProductCard({
  image,
  name,
  price,
  description,
  category,
  status,
}) {
  // Determine badge color class based on status
  //it just a function to return status name
  const getBadgeClass = (currentStatus) => {
    switch (currentStatus) {
      case "In Stock":
        return "badge-success text-white";
      case "Low Stock":
        return "badge-warning text-black";
      case "Out of Stock":
        return "badge-error text-white";
      default:
        return "badge-ghost";
    }
  };

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
          <span className={`badge font-semibold ${getBadgeClass(status)}`}>
            {status}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-xs font-semibold tracking-wide uppercase text-primary mb-1">
            {category}
          </div>
          <h2 className="card-title text-base line-clamp-1 mb-2" title={name}>
            {name}
          </h2>
          <p className="text-sm opacity-70 line-clamp-2 mb-4">{description}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-base-200">
          <span className="text-xl font-bold text-base-content">
            {price ? `$${price.toFixed(2)}` : "0"}
          </span>
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
