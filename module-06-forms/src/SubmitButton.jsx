import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button className="text-white border border-white bg-blue-600 p-1 rounded-xl mt-2">
            {pending ? "Signing up..." : "Sign Up"}
        </button>
    );
}

export default SubmitButton;
