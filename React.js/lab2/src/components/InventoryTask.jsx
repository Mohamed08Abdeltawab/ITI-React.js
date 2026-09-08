import { useState } from "react";

export default function InventoryTask({ taskName }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Visibility Logic: Return null if deleted
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-3 bg-base-200 rounded-lg border border-base-300 transition-all">
      <label className="flex items-center gap-3 cursor-pointer select-none flex-1">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
          className="checkbox checkbox-primary checkbox-sm"
        />
        <span
          className={`text-sm font-medium transition-all ${
            isCompleted ? "line-through opacity-40" : "text-base-content"
          }`}
        >
          {taskName}
        </span>
      </label>

      {/* Delete Button */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="btn btn-ghost btn-xs text-error hover:bg-error/10 ml-2"
        title="Delete task"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
