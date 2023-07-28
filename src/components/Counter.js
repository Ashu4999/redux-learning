import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByValue } from '../features/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementValue, setIncrementValue] = useState(0);

    const addValue = Number(incrementValue) || 0;

    const resetAll = () => {
        setIncrementValue(0);
        dispatch(reset());
    };

    return (
        <section className='container'>
            <p>{count}</p>
            <div className='btnGrpup'>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input type="text" value={incrementValue} onChange={(e) => { setIncrementValue(e.target.value); }} />
            <div className='btnGrpup'>
                <button onClick={() => dispatch(incrementByValue(addValue))}>Add value</button>
                <button onClick={resetAll}>reset</button>
            </div>
        </section>
    )
};

export default Counter;