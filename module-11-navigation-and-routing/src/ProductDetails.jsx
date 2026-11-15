import { useParams } from "react-router";
import { products } from "./products_data";

function ProductDetails() {
    const { productId } = useParams();
    const product = products.find((item) => item.id === Number(productId));
    return (
        <>
            <h1>Product Details page</h1>
            <br />
            <br />
            <h2>{product.id}</h2>
            <h2>{product.name}</h2>
        </>
    );
}

export default ProductDetails;
