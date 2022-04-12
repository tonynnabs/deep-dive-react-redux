import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter  = useSelector(state => state.counter);
  const isVisible  = useSelector(state => state.isVisible);
  const increment = () => {
    dispatch({type: 'increment'});
  }
  const increase = () => {
    dispatch({type: 'increase', amount: 5});
  }
  const decrement = () => {
    dispatch({type: 'decrement'});
  }
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increment by 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
