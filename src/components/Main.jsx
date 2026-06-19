import { useState } from "react";
import "./Main.css";

export function Main({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;

      case "completed":
        return todo.completed;

      default:
        return todo;
    }
  });

  function hundleToggle(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function hundleDelete(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, deleting: true } : todo,
      ),
    );

    setTimeout(() => {
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    }, 300);
  }

  function clearCompleted() {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  }

  function hundleEdit(id) {
    if (editTask === "") return;

    setTodos((currenttodos) =>
      currenttodos.map((todo) =>
        todo.id === id ? { ...todo, title: editTask } : todo,
      ),
    );

    setEditTask("     ")
    setEditingId(null);
  }

  return (
    <>
      <main>
        <ul className="todo-list">
          {filteredTodos.map((todo) => {
            return (
              <li key={todo.id} className={todo.deleting ? "slide-out" : ""}>
                <label className="checkbox">
                  <input
                    className="checkbox-input"
                    onChange={() => hundleToggle(todo.id)}
                    type="checkbox"
                    checked={todo.completed}
                  />
                  <span className="checkmark"></span>

                  {editingId === todo.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={editTask}
                      autoFocus
                      onChange={(e) => setEditTask(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          hundleEdit(todo.id);
                        } else if (e.key === "Escape") {
                          setEditingId(null);
                        }
                      }}
                    />
                  ) : (
                    <span className="text">{todo.title}</span>
                  )}
                </label>
                <div className="buttons">
                  {editingId === todo.id ? (
                    <button
                      className="save-btn"
                      onClick={() => hundleEdit(todo.id)}
                    >
                      <i className="fa-solid fa-floppy-disk"></i>
                    </button>
                  ) : (
                    <button
                      className="edit-btn"
                      onClick={() => setEditingId(todo.id)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>{" "}
                    </button>
                  )}

                  <button
                    onClick={() => hundleDelete(todo.id)}
                    className="delete-btn"
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="footer-box ">
          <div className="item-left">
            {itemsLeft} {itemsLeft > 1 ? "items" : "item"} left
          </div>

          <div onClick={clearCompleted} className="clear">
            Clear completed
          </div>
        </div>
      </main>

      <div className="filter-box ">
        <span
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </span>
        <span
          onClick={() => setFilter("active")}
          className={filter === "active" ? "active" : ""}
        >
          Active
        </span>
        <span
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "active" : ""}
        >
          Completed
        </span>
      </div>
    </>
  );
}
