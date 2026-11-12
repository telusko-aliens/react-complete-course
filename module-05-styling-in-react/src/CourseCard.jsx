function CourseCard() {
    return (
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[320px] h-37.5 p-5 border-2 border-gray-200 rounded-[20px] mt-12.5 mx-auto">
            <h2 className="text-yellow-500 sm:text-red-500 hidden sm:block">
                React Complete Course
            </h2>
            <p className="text-gray-400">
                Learn React from fundamentals to real-world application development.
            </p>
            <button className="border border-gray-100 text-green-400 rounded-[20px] hover:bg-cyan-600 hover:text-black">
                Enroll Now
            </button>
        </div>
    );
}

export default CourseCard;
