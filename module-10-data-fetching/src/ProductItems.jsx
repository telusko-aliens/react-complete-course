import { useEffect, useState } from "react";

function ProductItems() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await fetch("https://dummyjson.com/products");

            const data = await response.json();
            console.log(data);
            setProducts(data.products);
        }

        getProducts();
    }, []);

    return (
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    );
}
export default ProductItems;
