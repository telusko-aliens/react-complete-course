import { useState } from "react";

function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    function handleValue(event) {
        const { name, value } = event.target;

        setFormData((prevObject) => ({
            ...prevObject,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setFormData({
            name: "",
            email: "",
            password: "",
        });

        setErrors({});
        console.log("Form is valid");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen"
        >
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleValue}
                placeholder="Name"
                className="border border-white text-white p-1"
            />
            {errors.name && <p>{errors.name}</p>}

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleValue}
                placeholder="Email"
                className="border border-white text-white p-1"
            />
            {errors.email && <p>{errors.email}</p>}

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleValue}
                placeholder="Password"
                className="border border-white text-white p-1"
            />
            {errors.password && <p>{errors.password}</p>}

            <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">
                Sign Up
            </button>
        </form>
    );
}

export default SignupForm;
