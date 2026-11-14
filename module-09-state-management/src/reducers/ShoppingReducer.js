export const intialState = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 },
];

export function ShoppingReducer(state, action) {
  const { id } = action;
  switch (action.type) {
    case "increaseQuantity":
      return state.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
    case "decreaseQuantity":
      return state
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0);
    case "removeProduct":
      return state.filter((product) => product.id !== id);

    case "clearCart":
      return [];

    default:
      return state;
  }
}
