import { Link } from "react-router";
import { products } from "./products_data";
function Products() {
    return (
        <div>
            <h1>Our Products</h1>
            <p>Explore our latest products.</p> <br />
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <Link to={`/products/${product.id}`}>View Details</Link> <br />
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Products;
