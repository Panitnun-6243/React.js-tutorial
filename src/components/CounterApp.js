import { useState } from "react";
import '../style/Counter.css'

const Counter = (props) => {
  return <div>{props.number}</div>;
};

function CounterApp() {
  let [number, setNumber] = useState(0);

  function Decrease() {
    setNumber(number - 1);
  }
  function Reset() {
    setNumber(0);
  }
  function Increase() {
    setNumber(number + 1);
  }
  return (
    <div className="app">
      <div className="counter-container">
        <div className="counter-header">
          <h2>My counter app</h2>
        </div>
        <div className="counter-number">
          <Counter number={number} />
        </div>
        <div className="counter-function">
          <button onClick={Decrease}>-</button>
          <button onClick={Reset}>reset</button>
          <button onClick={Increase}>+</button>
        </div>
      </div>
    </div>
  );
}
export default CounterApp;
