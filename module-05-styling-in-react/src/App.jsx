import { useState } from "react";
import Navbar from "./Project/components/Navbar";
import CourseCard from "./Project/components/CourseCard";
import { courses } from "./Project/courses";


function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {

    setIsDark(!isDark);

    document.documentElement.classList.toggle(
      "dark"
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-950">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl lg:text-6xl dark:text-white">Learn Modern <br /> Web Development</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg dark:text-gray-400">
              Practical, project based course for developers who want to build real-world skills.
            </p>
            <a
              href="#courses"
              className="mt-7 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Browse Courses →
            </a>
          </div>


        </section>
        <section
          id="courses"
          className="mx-auto max-w-6xl px-5 pb-20"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Popular Courses
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Continue learning with our most popular courses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
