import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("todos");
    if (localValue) return JSON.parse(localValue);
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function hundleSubmit(e) {
    e.preventDefault();
    if (newTask === "") return; // check task exist

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newTask,
          completed: false,
          filter: "all",
        },
      ];
    });

    setNewTask(""); // make input empty after search
  }

  return (
    <>
      <div className="over-lay"></div>

      <div className="container">
        <Header />
        <Form
          newTask={newTask}
          setNewTask={setNewTask}
          hundleSubmit={hundleSubmit}
        />
        <Main todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
