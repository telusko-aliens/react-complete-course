import { useEffect, useState } from "react";

function ProductCard() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    });

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}
export default ProductCard;
