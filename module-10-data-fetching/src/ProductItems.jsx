import { useEffect, useState } from "react";

function ProductItems() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getProducts() {
            setLoading(true);
            try {
                const response = await fetch("https://dummyjson.com/products?limit=5");




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

    async function addProduct() {
        const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Gaming Laptop',
                price: 1500
            })

        })

        const data = await response.json();
        setProducts((prev) => [...prev, data])
    }

    async function updateProduct() {
        const response = await fetch('https://dummyjson.com/products/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Laptop',
                price: 1800
            })

        })

        const data = await response.json();
        setProducts((prev) => prev.map((product) => product.id === 1 ? { ...product, ...data } : product))
    }

    async function DeleteProduct() {
        const response = await fetch('https://dummyjson.com/products/1', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        setProducts((prev) => prev.filter((product) => product.id != 1))
    }

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
            <div className="flex justify-center items-center gap-2 mt-3" >
                <button onClick={addProduct} className="border border-black text-black w-fit bg-yellow-400 p-2 rounded-2xl">Add Product</button>
                <button onClick={updateProduct} className="border border-black text-black w-fit bg-yellow-400 p-2 rounded-2xl">Update Product</button>
                <button onClick={DeleteProduct} className="border border-black text-black w-fit bg-yellow-400 p-2 rounded-2xl">Delete Product</button>
            </div>
        </>
    )
}
export default ProductItems;
