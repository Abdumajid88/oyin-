import { use, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type == "+") {
    return state + 1;
  }
  if (action.type == "*2") {
    return state * 2;
  }
  if (action.type == "/ 2" ) {
    return state / 2;
  }
   else {
    return state - 1;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 1);
  return (
    <>
      
      <button onClick={() => dispatch({ type: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "*2" })}>*2</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
      <button onClick={() => dispatch({ type: "/ 2" })}>/2</button>
    </>
  );
}

export default App;
