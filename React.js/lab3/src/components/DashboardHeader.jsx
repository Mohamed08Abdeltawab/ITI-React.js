import { NavLink } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function DashboardHeader({ itemCount }) {
  const { cart } = useCart();

  return (
    <header className="navbar bg-base-300 rounded-2xl shadow-2xs px-4 md:px-6">
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-xl font-medium tracking-tight text-primary"
        >
          Storefront
        </NavLink>
      </div>
      <nav className="flex-none flex items-center gap-2 md:gap-4">
        <NavLink to="/" className="btn btn-ghost btn-sm">
          Products
        </NavLink>
        <NavLink
          to="/products/1"
          className="btn btn-ghost btn-sm hidden sm:inline-flex"
        >
          Product details
        </NavLink>
        <NavLink
          to="/not-found"
          className="btn btn-ghost btn-sm hidden md:inline-flex"
        >
          Not found
        </NavLink>
        <NavLink to="/cart" className="btn btn-primary btn-sm">
          Cart <span className="badge badge-sm">{cart.length}</span>
        </NavLink>
        <span className="hidden lg:inline text-sm font-medium opacity-70">
          {itemCount} products
        </span>
      </nav>
    </header>
  );
}
