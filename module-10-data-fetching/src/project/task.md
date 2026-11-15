# Product Inventory Manager

## Project Description

Build a **Product Inventory Manager** that allows users to view, add, edit, and delete products through an API.

## API

Use the [DummyJSON Products API](https://dummyjson.com/docs/products).

Base URL:

`https://dummyjson.com/products`

## Project Requirements

### 1. Display Products

- Fetch products from the API when the component mounts.
- Display each product's image, title, price, and category.
- Use React state to store the fetched products.
- Render the products dynamically using `.map()`.

### 2. Handle API States

Your application must display appropriate feedback for these situations:

- **Loading:** Display a loading message or spinner while products are being fetched.
- **Error:** Display a meaningful error message if the request fails.
- **Empty:** Display "No products found" when no products are available.
- **Success:** Display the products when data is received successfully.

### 3. Add a New Product

Create a form with the following fields:

- Product name
- Price
- Category

When the user submits the form:

1. Validate the input.
2. Send a `POST` request to `/products/add`.
3. Display the new product in the list after a successful response.
4. Reset the form.

### 4. Edit an Existing Product

Each product should have an **Edit** button.

When clicked:

1. Display a form containing the existing product information.
2. Allow the user to change the product name and price.
3. Send a `PATCH` request to `/products/:id`.
4. Update the product in React state after a successful response.

### 5. Delete a Product

Each product should have a **Delete** button.

When clicked:

1. Send a `DELETE` request to `/products/:id`.
2. Remove the product from the UI after the request succeeds.
3. Show an appropriate error if the request fails.
