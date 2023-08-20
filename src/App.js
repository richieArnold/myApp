import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import UpdatedComponent from "./Components/withCounter";
import CountClick from "./Components/CountClick";
import CountHover from "./Components/CountHover";
import HookCounter from "./Components/HookCounter";
function App() {
  return (
    <div className="App">
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <UpdatedComponent /> */}
      {/* <CountClick />
      <CountHover /> */}
      <HookCounter />
    </div>
  );
}

export default App;
