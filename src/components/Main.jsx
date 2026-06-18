import "./Main.css";

export function Main() {
  return (
    <>
      <main>
        <ul className="todo-list">
          <li className="todo-item">
            <label className="checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              <span className="text">TODO BUTUU</span>
            </label>
            <button className="delete-btn"></button>
          </li>
        </ul>

        <div className="footer-box ">
          <div className="item-left">5 items left</div>

          <div className="clear">Clear completed</div>
        </div>
      </main>

      <div className="filter-box ">
        <span className="filter active">All</span>
        <span className="filter ">Active</span>
        <span className="filter ">Completed</span>
      </div>
    </>
  );
}
