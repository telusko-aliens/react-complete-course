import { useCounter } from "./useCounter";

function Dashboard() {
    const { count, increase, decrease } = useCounter(10);

    return (
        <>
            <h1>Dashboard count: {count}px</h1>
            <button onClick={increase}>Increase count</button><br />
            <button countbutton onClick={decrease}>Decrease count</button>
        </>
    )
}

export default Dashboard;
