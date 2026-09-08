import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader itemCount={0} />
        <div className="hero bg-base-100 rounded-box shadow-xl py-20">
          <div className="hero-content text-center">
            <div>
              <p className="text-7xl font-bold text-primary">404</p>
              <h1 className="text-3xl font-bold">Page not found</h1>
              <p className="py-4 opacity-70">
                The page you requested does not exist.
              </p>
              <Link to="/" className="btn btn-primary">
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
