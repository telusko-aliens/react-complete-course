import { useCounter } from "./useCounter";

function Header() {
    const { count, increase, decrease } = useCounter(0);

    return (
        <>
            <h1>Header count: {count}px</h1>
            <button onClick={increase}>Increase count</button><br />
            <button countbutton onClick={decrease}>Decrease count</button>
        </>
    )
}

export default Header;
