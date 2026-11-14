import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function WelcomeSection() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Welcome to my website</h1>
            <h2>{user}</h2>
        </>
    );
}

export default WelcomeSection;
