# Recipe Explorer

The application will allow users to explore recipes, view detailed cooking instructions, and save their favorite recipes to a personal collection.

Users should be able to browse recipes without logging in. However, accessing their saved recipes should require authentication.

---

## 1. Pages & Routes

Your application should contain the following pages:

| Route                | Page           | Access    |
| -------------------- | -------------- | --------- |
| `/`                  | Home           | Public    |
| `/recipes`           | Recipes        | Public    |
| `/recipes/:recipeId` | Recipe Details | Public    |
| `/about`             | About          | Public    |
| `/login`             | Login          | Public    |
| `/saved-recipes`     | Saved Recipes  | Protected |
| `*`                  | Page Not Found | Public    |

### Home Page

- Display a welcome message and brief introduction to Recipe Explorer.
- Include an **Explore Recipes** button that navigates to `/recipes`.

### Recipes Page

- Fetch recipes from an API using a React Router loader.
- Display recipes in a card-based layout.
- Each recipe card should display:
  - Recipe image
  - Recipe name
  - Difficulty level
  - Cooking time
  - View Recipe link
- Clicking View Recipe should navigate to the corresponding recipe details page.

### Recipe Details Page

- Use a dynamic route to display individual recipes.
- Fetch the selected recipe using its ID.
- Display:
  - Recipe name
  - Recipe image
  - Ingredients
  - Cooking instructions
  - Preparation and cooking time
  - Difficulty level
- Include a **Save Recipe** button.
- If the user is not logged in, clicking Save Recipe should navigate to the Login page.

### About Page

- Display a short introduction to Recipe Explorer.
- Explain the purpose of the application.

### Login Page

- Create a simple simulated login system.
- Display a Login button.
- Store the login status in `localStorage`.
- After a successful simulated login, navigate to `/saved-recipes`.
- No real authentication backend is required.

### Saved Recipes Page

- This page must be accessible only to logged-in users.
- Display recipes saved by the user.
- Allow users to remove recipes from their saved collection.
- Store saved recipe IDs in `localStorage` so they remain available after refreshing the page.
- Include a Logout button.
- After logout, redirect the user to `/login`.

### Page Not Found

- Display a custom 404 page for invalid URLs.
- Show a friendly error message.
- Provide a link to navigate back to the homepage.

---

## 2. API Integration

Use the **DummyJSON Recipes API** to retrieve recipe data.

**API Documentation:** https://dummyjson.com/docs/recipes

| Purpose                 | API Endpoint                             |
| ----------------------- | ---------------------------------------- |
| Fetch recipes           | `https://dummyjson.com/recipes?limit=12` |
| Fetch individual recipe | `https://dummyjson.com/recipes/:id`      |
