import OnSale from "./OnSale";

function ProductCardInfo({ name, price, inStock }) {
    return (
        <>
            <h1>{name}</h1>

            <h2>{price}</h2>
            {inStock ? <h3>In stock</h3> : <h4>Out of stock</h4>}
            {/*Using And operator
             {onSale && <h4>special offer</h4>}  */}
            <OnSale isOnSale={true} />
        </>
    );
}

export default ProductCardInfo;
