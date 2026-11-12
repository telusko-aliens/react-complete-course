import { useState } from "react";

function ProductCardInfo({ name, price }) {
    const [cartItem, setCartItem] = useState(0);
    const [favorite, setFavorite] = useState(false);

    function handleCart() {
        setCartItem(cartItem + 1);
    }
    function handleFavorite() {
        setFavorite(!favorite);
    }
    return (
        <>
            <h1>{name}</h1>

            <h2>{price}</h2>
            <h1>Cart items {cartItem}</h1>
            <button onClick={handleCart}>Add to cart</button>
            <h1>{favorite ? "Added" : "Not added"}</h1>
            <button onClick={handleFavorite}>
                {favorite ? "Remove" : "Add to favorite"}
            </button>
        </>
    );
}

export default ProductCardInfo;
