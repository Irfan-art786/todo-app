import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Main } from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <div className="over-lay"></div>

      <div className="container">
        <Header />
        <Form />
        <Main />
      </div>
    </>
  );
}

export default App;
