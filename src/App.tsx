import "./App.css";
import { CounterContainer } from "./components/Counter/Container";

function App() {
  return (
    <div className="App">
      <CounterContainer initialCount={0} />
    </div>
  );
}

export default App;
