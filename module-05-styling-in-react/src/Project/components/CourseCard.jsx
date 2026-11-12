import Badge from "./Badge";

function CourseCard({
    icon,
    iconBackground,
    title,
    description,
    level,
    rating,
    students,
    progress,
}) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start justify-between gap-4">
                <div
                    className={`flex h-16 w-24 items-center justify-center rounded-xl text-4xl ${iconBackground}`}
                >
                    {icon}
                </div>

                <Badge level={level} />
            </div>

            <h2 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {title}
            </h2>

            <div className="mt-1 flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>

                <span className="font-medium text-gray-800 dark:text-gray-200">
                    {rating}
                </span>

                <span className="text-gray-500 dark:text-gray-400">
                    ({students} students)
                </span>
            </div>

            <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {description}
            </p>

            <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Progress
                    </span>

                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {progress}%
                    </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                        className="h-full rounded-full bg-blue-500"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700">
                View Course
            </button>
        </article>
    );
}

export default CourseCard;