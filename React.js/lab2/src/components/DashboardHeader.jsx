export default function DashboardHeader({ itemCount }) {
  return (
    <header className="navbar bg-base-300 rounded-full shadow-2xs px-6">
      <div className="flex-1">
        <h1 className="text-xl font-medium tracking-tight text-primary">
          Warehouse & Storefront Dashboard
        </h1>
      </div>
      <div className="flex-none">
        <span className="text-sm font-medium opacity-70">
          Total Catalog Items: {itemCount}
        </span>
      </div>
    </header>
  );
}
