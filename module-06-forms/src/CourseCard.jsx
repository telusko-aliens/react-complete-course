import { useState } from "react";

function CourseCard() {
    const [password, setPassword] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("username"));
        console.log(formData.get("email"));
    }

    function handlePassword(event) {
        setPassword(event.target.value);
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
            <input
                type="password"
                className="border border-white p-2"
                placeholder="password"
                onChange={handlePassword}
            />
            {password.length > 0 && password.length < 8
                ? "Password must be atleast 8 characters"
                : ""}
            <button className="border border-white text-black rounded-xl p-1 bg-amber-500 cursor-pointer">
                Enroll
            </button>
        </form>
    );
}

export default CourseCard;
