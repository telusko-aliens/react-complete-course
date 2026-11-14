# Personal Expense Tracker

## Project Overview

Build a **Personal Expense Tracker** that allows users to record their daily expenses, organize them by category, and monitor their total spending.

## Functional Requirements

### 1. Add Expenses

Create a form where users can enter:

- Expense title (e.g., Groceries, Internet Bill)
- Amount
- Category (Food, Shopping, Transport, Bills, Others)

When the form is submitted, the expense should be added to the list.

**Validation:**

- The title cannot be empty.
- The amount must be greater than zero.
- A category must be selected.

### 2. Display Expenses

Display all expenses in a list.

Each expense should show:

- Title
- Amount
- Category
- Delete button

Show an appropriate message when no expenses exist.

### 3. Delete Expenses

Users should be able to delete individual expenses.

When an expense is deleted, the expense list and total spending should update automatically.

### 4. Expense Summary

Display the following information:

- Total amount spent
- Total number of expenses

Both values must update automatically whenever an expense is added or deleted.

### 5. Filter Expenses by Category

Provide a dropdown to filter expenses by category.

For example, selecting "Food" should display only expenses belonging to that category.

An "All Categories" option should display every expense.

The overall spending summary should continue to show totals across all expenses, regardless of the selected filter.

### 6. Clear All Expenses

Provide a button to remove all expenses.

The expense list and summary should update accordingly.
