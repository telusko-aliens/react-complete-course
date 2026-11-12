import { useState } from "react";

function ProductCardInfo({ name, price }) {
    const [quantity, setQuantity] = useState(0);
    const totalPrice = quantity * price;

    console.log("ProductCard rendered: ", quantity);

    function handleAddToCart() {
        console.log("before: ", quantity);
        setQuantity(quantity + 1);
        console.log("after: ", quantity);
    }

    return (
        <>
            <h1>{name}</h1>

            <p>Price: ₹{price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: ₹{totalPrice}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </>
    );
}

export default ProductCardInfo;
