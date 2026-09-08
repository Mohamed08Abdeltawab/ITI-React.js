import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { useCart } from "../context/useCart";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader itemCount={0} />
        <section className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-2xl">Shopping cart</h1>
            {cart.length === 0 ? (
              <p>
                Your cart is empty.{" "}
                <Link className="link link-primary" to="/">
                  Browse products
                </Link>
              </p>
            ) : (
              <>
                <div className="divide-y divide-base-300">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4">
                      <img
                        src={item.image || item.thumbnail}
                        alt=""
                        className="size-16 object-contain"
                      />
                      <div className="flex-1">
                        <h2 className="font-semibold">
                          {item.name || item.title}
                        </h2>
                        <p>
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <button
                        className="btn btn-sm btn-error btn-outline"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-right text-xl font-bold">
                  Total: ${total.toFixed(2)}
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
