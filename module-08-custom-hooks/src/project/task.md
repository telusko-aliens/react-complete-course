# Project: Personal Expense Tracker

## Project Overview

The application will allow users to record their daily expenses, track their total spending, filter expenses by category, and delete expenses they no longer need.

## Project Requirements

### 1. Add New Expenses

Create a form that allows users to add a new expense.

The form should contain the following fields:

- **Expense Title:** Name or description of the expense.
- **Amount:** Amount spent.
- **Category:** Select a category such as Food, Travel, Shopping, or Other.

When the user submits the form:

- A new expense should be added to the expense list.
- The form fields should reset.
- The total spending should update automatically.
- Empty titles and invalid amounts should not be accepted.

### 2. Display Expenses

Display all expenses in a list.

Each expense should show:

- Expense title
- Amount spent (₹)
- Expense category
- Delete button

If there are no expenses, display an appropriate message such as **"No expenses added yet."**

### 3. Calculate Total Spending

Display a summary showing the total amount spent.

The total should automatically update whenever an expense is added or deleted.

For example:

If the expenses are:

- Groceries: ₹850
- Transportation: ₹180
- Shopping: ₹1,200

**Total Spending: ₹2,230**

### 4. Filter Expenses by Category

Provide a dropdown that allows users to filter expenses.

Available options:

- All Expenses
- Food
- Travel
- Shopping
- Other

When a category is selected, display only expenses belonging to that category.

Selecting "All Expenses" should display every expense.

### 5. Delete Expenses

Each expense should have a delete button.

When clicked:

- Remove the expense from the list.
- Update the total spending.
