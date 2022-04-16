import "./App.scss";
import Count from "./components/Count";
import Result from "./components/Result";
import logo from "./images/logo.svg";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <div className="app">
        <Count />
        <Result />
      </div>
    </>
  );
}

export default App;
