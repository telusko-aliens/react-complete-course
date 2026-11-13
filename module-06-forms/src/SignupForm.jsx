import { useState } from "react";

function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleValue(event) {
        const { name, value } = event.target;

        setFormData((prevObject) => ({
            ...prevObject,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleValue}
                placeholder="Name"
                className="border border-white text-white p-1"
            />

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleValue}
                placeholder="Email"
                className="border border-white text-white p-1"
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleValue}
                placeholder="Password"
                className="border border-white text-white p-1"
            />

            <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">Sign Up</button>
        </form>
    );
}

export default SignupForm