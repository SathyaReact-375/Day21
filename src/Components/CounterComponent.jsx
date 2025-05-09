import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.count); 
  const dispatch = useDispatch();

  console.log("Rendering: Current count ->", count); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default CounterComponent;