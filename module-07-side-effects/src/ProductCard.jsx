function ProductCard() {
    const price = 1000;
    const discount = 20;

    const finalPrice = price - (price * discount) / 100;

    function handleValue() {
        console.log("Printing in console");
    }

    document.title = `Price: ₹${finalPrice}`;

    return (
        <>
            <h2>Final Price: ₹{finalPrice}</h2>
            <button onClick={handleValue}>Click me</button>
        </>
    );
}
export default ProductCard;
