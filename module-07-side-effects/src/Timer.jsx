import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prev) => prev + 1);
            console.log("timer is running");
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <h2>Timer: {seconds}s</h2>;
}

export default Timer;
