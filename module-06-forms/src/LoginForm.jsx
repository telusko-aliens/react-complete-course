import { useRef } from "react";

function LoginForm() {
    const nameRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(nameRef.current.value);
        nameRef.current.style.backgroundColor = "orange";
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen"
        >
            <input
                type="name"
                ref={nameRef}
                className="border border-white text-white p-1"
                placeholder="Name"
            />

            <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">
                Login
            </button>
        </form>
    );
}

export default LoginForm;
