import { useEffect, useState } from "react";

function ProductItems() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const response = await fetch("https://dummyjson.com/products");

                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, 2000);
                });

                if (response) {
                    throw new Error("something went wrong");
                }

                const data = await response.json();
                console.log(data);
                setProducts(data.products);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }

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
