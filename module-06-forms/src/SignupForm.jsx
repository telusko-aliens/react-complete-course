function SignupForm() {
    function handleSubmit(formData) {
        const name = formData.get("name");
        const email = formData.get("email");
        console.log({
            name,
            email,
        });
    }

    return (
        <form
            action={handleSubmit}
            className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen"
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-white text-white p-1"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-white text-white p-1"
            />

            <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">
                Sign Up
            </button>
        </form>
    );
}

export default SignupForm;
