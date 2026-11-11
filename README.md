# React Complete Course - Source Code

Welcome to the official source code repository for the **React Complete Course**.

This repository contains the source code, practical examples, and projects demonstrated throughout the course.

The code is organized module-wise, making it easy to find and explore the examples covered in each video lesson.

## 📚 Course Modules

The course is divided into 12 modules, covering React fundamentals through advanced concepts and performance optimization.

| Module | Module Name                | Source Code                                      |
| ------ | -------------------------- | ------------------------------------------------ |
| 01     | Fundamentals               | [View Code](./module-01-fundamentals)            |
| 02     | Components & Props         | [View Code](./module-02-components-and-props)    |
| 03     | Rendering UI & Events      | [View Code](./module-03-rendering-ui-and-events) |
| 04     | Hooks & React State        | [View Code](./module-04-hooks-and-state)         |
| 05     | Styling in React           | [View Code](./module-05-styling-in-react)        |
| 06     | Forms                      | [View Code](./module-06-forms)                   |
| 07     | Side Effects in React      | [View Code](./module-07-side-effects)            |
| 08     | Custom Hooks               | [View Code](./module-08-custom-hooks)            |
| 09     | State Management at Scale  | [View Code](./module-09-state-management)        |
| 10     | Data Fetching in React     | [View Code](./module-10-data-fetching)           |
| 11     | Navigation & Routing       | [View Code](./module-11-navigation-and-routing)  |
| 12     | Performance & Optimization | [View Code](./module-12-performance)             |

## 📂 Repository Structure

Each module has its own directory containing the React application and code examples used throughout that module.

```text
react-complete-course/
│
├── module-01-fundamentals/
├── module-02-components-and-props/
├── module-03-rendering-ui-and-events/
├── module-04-hooks-and-state/
├── module-05-styling-in-react/
├── module-06-forms/
├── module-07-side-effects/
├── module-08-custom-hooks/
├── module-09-state-management/
├── module-10-data-fetching/
├── module-11-navigation-and-routing/
├── module-12-performance/
│
└── README.md
```

## 🔖 Accessing Source Code for a Specific Lesson

The source code is maintained using **Git tags**, allowing you to access the exact version of the code demonstrated in a particular lesson.

Each tag follows this naming convention:

```text
mXX-tYY
```

- `mXX` represents the module number.
- `tYY` represents the topic number within that module.

For example:

| Git Tag   | Lesson                                           |
| --------- | ------------------------------------------------ |
| `m01-t04` | Module 1, Topic 4 – Introduction to JSX          |
| `m02-t05` | Module 2, Topic 5 – What are Props?              |
| `m04-t04` | Module 4, Topic 4 – Managing State with useState |
| `m06-t03` | Module 6, Topic 3 – Controlled Inputs            |

**Note:** Not every lesson has a source code tag. Introduction videos, quizzes, and lessons without coding examples may not require one.

You can find the relevant source code link in the resources section of each course video.

## 💻 Running the Code Locally

### Prerequisites

Before running the projects, make sure you have the following installed:

- [Node.js](https://nodejs.org/) – A compatible LTS version
- npm – Included with Node.js
- [Git](https://git-scm.com/) – For cloning the repository

### Step 1: Clone the Repository

```bash
git clone https://github.com/telusko-aliens/react-complete-course.git
```

### Step 2: Navigate to the Repository

```bash
cd react-complete-course
```

### Step 3: Switch to the Required Lesson

For example, to access Module 4, Topic 4:

```bash
git switch --detach m04-t04
```

This loads the code as it existed at the end of that lesson.

### Step 4: Open the Module Directory

```bash
cd module-04-hooks-and-state
```

### Step 5: Install Dependencies

```bash
npm ci
```

### Step 6: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

**Tip:** If you're new to Git, you can open the lesson's GitHub link and select **Code → Download ZIP** to download that version of the repository without using Git commands.

## 🚀 Working with the Source Code

Here are a few recommendations to get the most out of this repository:

1. **Watch the lesson first:** Understand the concepts before exploring the completed code.
2. **Write the code yourself:** Practice implementing the examples instead of simply copying them.
3. **Compare your implementation:** Use the repository to identify mistakes and understand alternative approaches.
4. **Experiment with the examples:** Modify the code, try different scenarios, and observe how React behaves.
5. **Complete the projects:** Apply the concepts you've learned before referring to the provided solutions, where available.

## 📌 Important Notes

- The source code corresponds to the examples demonstrated in the course videos.
- Use the Git tag associated with your lesson to access its specific source code.
- Some examples may use external APIs or require additional configuration. Refer to the relevant lesson for details.
- Code may be updated over time to fix issues or improve compatibility.

## 🐛 Found an Issue?

If you encounter a problem with the source code, feel free to [open a GitHub issue](../../issues).

When reporting an issue, please include:

- Module and topic number
- Git tag, if applicable
- Description of the problem
- Relevant error messages or screenshots

This will make it easier to identify and resolve the issue.

---

**Happy Learning! 🚀**

Keep practicing, experiment with the code, and most importantly, focus on understanding how React works rather than simply memorizing the syntax.
