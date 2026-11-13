function CourseCard() {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("username"));
        console.log(formData.get("email"));
    }
    return (
        <form
            className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="border border-white p-2"
                placeholder="username"
                name="username"
            />
            <input
                type="email"
                className="border border-white p-2"
                placeholder="email"
                name="email"
            />
            <button className="border border-white text-black rounded-xl p-1 bg-amber-500 cursor-pointer">
                Enroll
            </button>
        </form>
    );
}

export default CourseCard;
