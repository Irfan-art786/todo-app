import { useState } from "react";
import "./Main.css";

export function Main({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

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
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  }

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <main>
        <ul className="todo-list">
          {filteredTodos.map((todo) => {
            return (
              <li key={todo.id} className="todo-item">
                <label className="checkbox">
                  <input
                    onChange={() => hundleToggle(todo.id)}
                    type="checkbox"
                    checked={todo.completed}
                  />
                  <span className="checkmark"></span>
                  <span className="text">{todo.title}</span>
                </label>
                <button
                  onClick={() => hundleDelete(todo.id)}
                  className="delete-btn"
                ></button>
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
