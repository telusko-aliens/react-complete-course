# Product Explorer

## Project Overview

Build a **Product Explorer Dashboard** where users can browse, search, filter, sort, and add products to their shopping cart.

The main goal of this project is to **improve application performance using React's optimization features**.

You will first build a working application and then optimize it using `React.memo`, `useMemo`, `useCallback`, `lazy`, `Suspense`.

## 1. Project Requirements

### A. Product Listing

Fetch product data from the **DummyJSON API**.

**API:** https://dummyjson.com/products

Each product should display:

- Product image
- Product name
- Price
- Category
- Rating
- Add to Cart button

### B. Search, Filter & Sort

Implement the following features:

- Search products by name.
- Filter products by category.
- Sort products by price (low to high and high to low).
- Display the total number of matching products.
- Provide a button to reset all filters.

The search input should remain responsive even when rendering a large number of products.

### C. Shopping Cart

Implement a simple shopping cart where users can:

- Add products to the cart.
- Remove products from the cart.
- View the total number of cart items.
- View the total cart price.

### D. Analytics Dashboard

Create a separate Analytics component displaying:

- Total number of products
- Total product categories
- Average product price
- Most expensive product

The Analytics component should be loaded only when the user opens it.
