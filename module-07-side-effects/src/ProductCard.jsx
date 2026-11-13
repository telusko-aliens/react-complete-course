import { useEffect, useState } from "react";

function ProductCard() {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0);

    // empty dependency array
    useEffect(() => {
        console.log("Printing on console only once when component mount");
        document.title = `count: ${count}`;
    }, []);

    // dependency array with count variable
    useEffect(() => {
        console.log(
            "Printing on console when component mount or my count value gets changed.",
        );
        document.title = `count: ${count}`;
    }, [count]);

    // dependency array with count & price variable
    useEffect(() => {
        console.log(
            "Printing on console when component mount or my count/price value gets changed.",
        );
        document.title = `count: ${count}`;
    }, [count, price]);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br />
            <h2>Price: {price}</h2>
            <button onClick={() => setPrice(price + 1)}>Increase price</button>
        </>
    );
}
export default ProductCard;
