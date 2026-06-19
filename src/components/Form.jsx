import "./Form.css";

export function Form({ newTask, setNewTask, hundleSubmit }) {
  return (
    <form className="form-filed" onSubmit={hundleSubmit}>
      <input
        value={newTask}
        type="text"
        placeholder="Add New Task Here..."
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
