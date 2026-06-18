import "./Form.css";

export function Form() {
  return (
    <form className="form-filed">
      <input type="text" placeholder="Add New Task Here..." />
      <button className="btn">Add</button>
    </form>
  );
}
