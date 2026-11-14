import { useReducer, useState } from "react";

import { reducer } from "./reducers/CounterReducer";

function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-2">
            <h2>{state}</h2>

            <div className="flex gap-2">
                <button
                    onClick={() => dispatch({ type: "increment" })}
                    className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer"
                >
                    Increment
                </button>

                <button
                    onClick={() => dispatch({ type: "decrement" })}
                    className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer"
                >
                    Decrement
                </button>

                <button
                    onClick={() => dispatch({ type: "reset" })}
                    className="border border-white text-black bg-amber-300 p-2 rounded-2xl cursor-pointer"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;
