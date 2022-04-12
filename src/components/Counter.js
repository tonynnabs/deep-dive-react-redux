import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();
  const counter  = useSelector(state => state.counter);
  const increment = () => {
    dispatch({type: 'increment'});
  }
  const decrement = () => {
    dispatch({type: 'decrement'});
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
