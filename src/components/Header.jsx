import "./Header.css";

export function Header() {
  function toggleTheme() {
    document.getElementById("root").classList.toggle("light");
  }

  return (
    <header>
      <div className="title">Todo</div>
      <button onClick={toggleTheme} className="toggle-btn"></button>
    </header>
  );
}
