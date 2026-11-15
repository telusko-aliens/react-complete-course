import { redirect } from "react-router";
export const ProductLoader = async () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/");
  }
  const response = await fetch("https://dummyjson.com/products?limit=5");
  if (!response.ok) throw new Error("something went wrong");

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
