import { useState } from "react";
import InventoryTask from "./InventoryTask";

//list of tasks
export default function InventoryBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Label 50 MacBooks for shipping" },
    { id: 2, text: "Restock denim jackets on Rack B" },
    { id: 3, text: "Verify serials for returned smartwatches" },
    { id: 4, text: "Inspect damaged sneaker boxes" },
  ]);

  //create task with string to added new task
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    //using setTasks to added that task by implicit return
    setTasks((prev) => [...prev, { id: Date.now(), text: newTaskText.trim() }]);
    //make setNewTask to "" to reused
    setNewTaskText("");
  };

  return (
    <aside className="card bg-base-100 shadow-xl border border-base-300 h-fit">
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold border-b border-base-200 pb-3 flex items-center justify-between">
          <span>Warehouse Tasks</span>
          <span className="badge badge-neutral text-xs">Active</span>
        </h2>

        {/* Input to add a new task */}
        <form onSubmit={handleAddTask} className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Add new task..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="input input-bordered input-sm w-full"
          />
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </form>

        {/* Tasks Container with vertical scroll */}
        <div className="flex flex-col gap-2 mt-4 max-h-[420px] overflow-y-auto pr-1">
          {tasks.map((task) => (
            <InventoryTask key={task.id} taskName={task.text} />
          ))}
        </div>
      </div>
    </aside>
  );
}
