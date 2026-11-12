function Navbar({ isDark, toggleTheme }) {
    return (
        <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Code<span className="text-blue-600">Learn</span>
                </h1>

                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#home"
                        className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                    >
                        Home
                    </a>

                    <a
                        href="#courses"
                        className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                    >
                        Courses
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
                    >
                        About
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="rounded-full bg-gray-100 px-3 py-2 transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        {isDark ? "☀️" : "🌙"}
                    </button>

                    <button className="text-2xl text-gray-900 md:hidden dark:text-white">
                        ☰
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;