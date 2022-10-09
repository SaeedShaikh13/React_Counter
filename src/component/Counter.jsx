import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../State/Action/counter_Action";

const Counter = () => {
  const [count, setCount] = useState(0);
  const Dispatch = useDispatch();
  const CountSelector = useSelector((state)=>state.counterReducer);
  console.log("====>",CountSelector);
  useEffect(() => {
    setCount(CountSelector);
  }, [CountSelector]);
  const Increment = () => {
    Dispatch(counterAction(1,0));
  };
  const Decrement = () =>{
    Dispatch(counterAction(0,1))
  }
  const Reset = () =>{
    Dispatch(counterAction())
  }
  return (
    <div className="main">
      <h2>Count:{count}</h2>
      <button  onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
