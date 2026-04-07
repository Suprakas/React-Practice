import { useState, useReducer } from "react";
import { counterReducer, initialState } from "../reducers/counterReducer";

export default function Counter() {
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div>
            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
            <button 
             disabled={state.count === 0}
             onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({type: "INC_BY_5"})}>Increament by 5</button>
            <input
                type="number"
                value={input}
                placeholder="Enter number"
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() =>{
                dispatch({
                    type: "INC_BY_VALUE",
                    payload: Number(input),
                })
            }}>
            Add Value
            </button>
        </div>
    );
}