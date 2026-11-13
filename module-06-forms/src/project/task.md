## Course Enrollment Form

In this project, you will build a **Course Enrollment Form** using the React form concepts you learned in this module.

The goal of this project is to practice handling multiple form fields, different input types, validation, error messages, form submission, and resetting the form.

### Your Task

Create a form that allows a student to enroll in a course.

Your form should contain the following fields:

- **Full Name** — text input
- **Email Address** — email input
- **Course** — select/dropdown
- **Experience Level** — radio buttons
  - Beginner
  - Intermediate
  - Advanced
- **Terms & Conditions** — checkbox
- **Enroll Now** — submit button

### Validation

When the user submits the form, validate the following:

- Full Name cannot be empty.
- Email cannot be empty and should contain `@`.
- A course must be selected.
- An experience level must be selected.
- The Terms & Conditions checkbox must be checked.

If any field is invalid, display an appropriate error message near that field.

The form should not complete the enrollment until all fields are valid.

### Successful Submission

When all fields are valid:

- Display a message such as **"Enrollment successful!"**
- Log the submitted form data to the console.
- Reset all form fields.
- Clear any previous validation errors.
