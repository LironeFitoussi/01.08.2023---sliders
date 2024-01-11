import { useState } from "react";
import './Counter.css'
export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="counter-box">
            <h1>{counter}</h1>
            <button onClick={() => { 
                setCounter(counter+1);
            }}>+</button>
            <button onClick={() => { 
                setCounter(counter-1);
            }}>-</button>
        </div>
    );
};