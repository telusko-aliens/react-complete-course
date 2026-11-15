export const ProductLoader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  const data = await response.json();
  return data.products;
};

export const ProductDetailsLoader = async ({ params }) => {
  const response = await fetch(
    `https://dummyjson.com/products/${params.productId}`,
  );

  const data = await response.json();
  return data;
};
