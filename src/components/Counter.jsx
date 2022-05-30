// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/actions";

const Counter = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    // console.log('state: ', state)
    // const [value, setValue] = useState('0')
    const handleIncrement = () => {
        // setValue(parseInt(value) + 1)
        // console.log('inc--')
        dispatch(increment());
    }
    const handleDecrement = () => {
        // setValue(parseInt(value) - 1)
        dispatch(decrement());
    }
    const handleReset = () => {
        dispatch(reset())
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{state.counter.value}</h2>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div >
    )
}
export default Counter;