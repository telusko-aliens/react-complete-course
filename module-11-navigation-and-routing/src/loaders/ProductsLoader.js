export const ProductLoader = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const data = await response.json();
  return data.products;
};
