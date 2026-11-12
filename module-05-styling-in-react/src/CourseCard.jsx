import { useState } from "react";

function CourseCard() {
    const [darkTheme, setDarkTheme] = useState(false);
    function handleTheme() {
        setDarkTheme(!darkTheme)
        document.documentElement.classList.toggle('dark')
    }
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-900 shadow-lg mt-12.5 mx-auto w-[50%] dark:bg-gray-500">
            <button onClick={handleTheme}>{darkTheme ? 'Light theme' : 'Dark theme'}</button>
            <h2 className="text-2xl font-bold">
                React Complete Course
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
                Learn React from fundamentals to real-world application development.
            </p>
            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;
