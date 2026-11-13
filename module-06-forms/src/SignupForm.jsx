import { useActionState } from "react";

const initialState = {
    message: "",
};

async function signUpAction(previousState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");

    if (name === "") {
        return {
            message: "Name is required",
        };
    }

    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    console.log({
        name,
        email,
    });

    return {
        message: "",
    };
}

function SignupForm() {
    const [state, formAction, isPending] = useActionState(
        signUpAction,
        initialState,
    );

    return (
        <form
            action={formAction}
            className="flex flex-col justify-center items-center mt-1 gap-3 min-h-screen"
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-white text-white p-1"
            />
            {state.message && <p>{state.message}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-white text-white p-1"
            />

            <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">
                {isPending ? "Signing up..." : "Sign Up"}
            </button>
        </form>
    );
}

export default SignupForm;
