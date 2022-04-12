import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter  = useSelector(state => state.counter);
  const isVisible  = useSelector(state => state.isVisible);
  const increment = () => {
    dispatch(counterActions.increment());
  }
  const increase = () => {
    dispatch(counterActions.increase(5));
  }
  const decrement = () => {
    dispatch(counterActions.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
