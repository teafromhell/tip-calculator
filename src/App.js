import { useState } from "react";
import "./App.scss";
import Count from "./components/Count";
import Result from "./components/Result";
import logo from "./images/logo.svg";

function App() {
  const [bill, setValue] = useState("");
  const [people, setPeople] = useState('');
  const [active, setActive] = useState("");
  const [customTip, setCustomTip] = useState("");
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <div className="app">
        <Count
          bill={bill}
          people={people}
          active={active}
          setValue={setValue}
          setPeople={setPeople}
          setActive={setActive}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
        <Result
          bill={bill}
          people={people}
          active={active}
          setValue={setValue}
          setPeople={setPeople}
          setActive={setActive}
          customTip={customTip}
          setCustomTip={setCustomTip}
        />
      </div>
    </>
  );
}

export default App;
